// Form handling
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const services = getSelectedServices();
    const visitDate = document.getElementById('visitDate').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const description = document.getElementById('description').value;
    const terms = document.getElementById('terms').checked;
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !address) {
        showMessage('Please fill in all required customer information fields.', 'error');
        return;
    }
    
    if (services.length === 0) {
        showMessage('Please select at least one service.', 'error');
        return;
    }
    
    if (!visitDate || !timeSlot) {
        showMessage('Please select a visit date and time slot.', 'error');
        return;
    }
    
    if (!terms) {
        showMessage('Please agree to the terms and conditions.', 'error');
        return;
    }
    
    // Create booking object
    const booking = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        services: services,
        visitDate: visitDate,
        timeSlot: timeSlot,
        description: description,
        bookingDate: new Date().toISOString()
    };
    
    // Save to localStorage
    let bookings = JSON.parse(localStorage.getItem('greenscapeBookings')) || [];
    bookings.push(booking);
    localStorage.setItem('greenscapeBookings', JSON.stringify(bookings));
    
    // Add to service history
    addToServiceHistory(booking);
    
    // Show success message
    showMessage(`Thank you, ${firstName}! Your maintenance visit has been booked for ${visitDate} at ${timeSlot}. We'll contact you at ${phone} to confirm.`, 'success');
    
    // Reset form
    document.getElementById('bookingForm').reset();
    
    // Scroll to history
    setTimeout(() => {
        document.getElementById('history').scrollIntoView({behavior: 'smooth'});
    }, 1500);
});

// Get selected services
function getSelectedServices() {
    const checkboxes = document.querySelectorAll('input[name="services"]:checked');
    const services = [];
    checkboxes.forEach(checkbox => {
        services.push(checkbox.value);
    });
    return services;
}

// Show form message
function showMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.className = 'form-message';
        }, 5000);
    }
}

// Add to service history table
function addToServiceHistory(booking) {
    const historyBody = document.getElementById('historyBody');
    const serviceList = booking.services.join(', ');
    const estimatedDuration = calculateDuration(booking.services);
    
    // Create new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${booking.visitDate}</td>
        <td>${serviceList}</td>
        <td>${estimatedDuration}</td>
        <td><span class="status pending">Pending</span></td>
        <td>${booking.description || 'Standard maintenance visit'}</td>
    `;
    
    // Insert at the top of the table
    historyBody.insertBefore(newRow, historyBody.firstChild);
}

// Calculate estimated duration based on services
function calculateDuration(services) {
    let hours = 1;
    
    if (services.length > 1) {
        hours = Math.min(services.length, 5);
    }
    
    return hours + ' hour' + (hours > 1 ? 's' : '');
}

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
    const visitDateInput = document.getElementById('visitDate');
    const today = new Date().toISOString().split('T')[0];
    visitDateInput.setAttribute('min', today);
    
    // Load existing bookings on page load
    loadBookingHistory();
});

// Load booking history from localStorage
function loadBookingHistory() {
    const bookings = JSON.parse(localStorage.getItem('greenscapeBookings')) || [];
    const historyBody = document.getElementById('historyBody');
    
    // Clear existing entries (except the sample ones)
    const existingRows = historyBody.querySelectorAll('tr');
    if (existingRows.length > 3) {
        for (let i = 3; i < existingRows.length; i++) {
            existingRows[i].remove();
        }
    }
    
    // Add saved bookings
    bookings.reverse().forEach(booking => {
        const serviceList = booking.services.join(', ');
        const estimatedDuration = calculateDuration(booking.services);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.visitDate}</td>
            <td>${serviceList}</td>
            <td>${estimatedDuration}</td>
            <td><span class="status pending">Pending</span></td>
            <td>${booking.description || 'Custom maintenance visit'}</td>
        `;
        
        historyBody.appendChild(row);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation on input
document.getElementById('phone').addEventListener('change', function() {
    const phoneRegex = /^[0-9\-\+\(\) ]{10,}$/;
    if (!phoneRegex.test(this.value)) {
        this.style.borderColor = '#d32f2f';
    } else {
        this.style.borderColor = '#ddd';
    }
});

// Add dynamic pricing display
document.querySelectorAll('input[name="services"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updatePricingEstimate();
    });
});

function updatePricingEstimate() {
    const services = getSelectedServices();
    const prices = {
        'Lawn Mowing': 60,
        'Landscaping Design': 350,
        'Irrigation Services': 200,
        'Tree Care': 275,
        'Cleanup & Removal': 137.50,
        'Garden Planting': 225
    };
    
    let total = 0;
    services.forEach(service => {
        if (prices[service]) {
            total += prices[service];
        }
    });
    
    if (total > 0) {
        console.log('Estimated total: $' + total.toFixed(2));
    }
}

// Add responsive menu toggle for mobile
function setupMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if mobile
    if (window.innerWidth <= 768) {
        // Add mobile menu functionality if needed
    }
}

window.addEventListener('resize', setupMobileMenu);
setupMobileMenu();

// Accessibility: Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const message = document.getElementById('formMessage');
        if (message.classList.contains('form-message')) {
            message.className = 'form-message';
        }
    }
});

// Analytics: Track form submissions
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // This can be connected to Google Analytics or other tracking services
}

// Auto-remove form message after display
document.addEventListener('DOMContentLoaded', function() {
    const formMessage = document.getElementById('formMessage');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class' && formMessage.classList.contains('form-message')) {
                if (!formMessage.classList.contains('error')) {
                    setTimeout(() => {
                        formMessage.className = 'form-message';
                    }, 4000);
                }
            }
        });
    });
    
    observer.observe(formMessage, { attributes: true });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);