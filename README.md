# GreenScape Landscaping - Maintenance Visit Booking Page

A professional, responsive website for GreenScape Landscaping that allows customers to book maintenance visits online.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Service Booking Form**: Easy-to-use form for scheduling maintenance visits
- **Service Types**: Six different landscaping services to choose from
- **Time Slot Selection**: Multiple available time slots for customer convenience
- **Pricing Information**: Clear pricing for each service
- **Before & After Gallery**: Showcase completed projects
- **Customer Testimonials**: Build trust with customer reviews
- **Service History**: Track all maintenance visits
- **Local Storage**: Save bookings locally in the browser
- **Smooth Navigation**: Easy navigation between sections

## Services Offered

1. **Lawn Mowing** - Professional grass cutting and lawn care ($45-$75)
2. **Landscaping Design** - Custom landscape design ($200-$500)
3. **Irrigation Services** - Efficient watering systems ($100-$300)
4. **Tree Care** - Trimming and pruning services ($150-$400)
5. **Cleanup & Removal** - Debris removal and cleanup ($75-$200)
6. **Garden Planting** - Professional planting services ($100-$350)

## Available Time Slots

- 8:00 AM - 10:00 AM
- 10:00 AM - 12:00 PM
- 12:00 PM - 2:00 PM
- 2:00 PM - 4:00 PM
- 4:00 PM - 6:00 PM

## File Structure

```
Index.-Landcap/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── render.yaml         # Render.com deployment config
└── README.md           # This file
```

## Installation & Setup

### Local Development

1. Clone the repository
```bash
git clone https://github.com/AFRRGFR/Index.-Landcap.git
cd Index.-Landcap
```

2. Open in your browser
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment on Render

1. Connect your GitHub repository to Render
2. Create a new Static Site service
3. Set the publish directory to `.` (root)
4. Deploy!

Your site will be live at: `https://your-service-name.onrender.com`

## Features in Detail

### Booking Form
- Collects customer information (name, email, phone, address)
- Multiple service selection
- Date and time slot selection
- Additional description field
- Form validation with error messages
- Saves bookings to browser's local storage

### Service History
- Displays all booked services
- Shows service date, type, duration, and status
- Updates in real-time when new bookings are made

### Responsive Design
- Mobile-first approach
- Optimized for phones, tablets, and desktops
- Touch-friendly buttons and inputs
- Readable on all screen sizes

### User Experience
- Smooth scrolling navigation
- Loading animations
- Success/error notifications
- Accessible form inputs
- Clean, professional styling with green theme

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d5016;      /* Dark green */
    --secondary-color: #4a7c2c;    /* Medium green */
    --accent-color: #7cb342;       /* Light green */
    --light-bg: #f5f5f5;           /* Light gray */
}
```

### Content
- Edit service descriptions in the Services section
- Update pricing in `styles.css` and `script.js`
- Add your actual contact information in the footer
- Replace placeholder gallery images with real project photos

### Contact Information
Update the footer with your actual details:
- Phone number
- Email address
- Business hours

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fully static site (no server required)
- Fast load times
- Optimized CSS and JavaScript
- No external dependencies required

## Local Storage

The site uses the browser's local storage to save booking information:
- Bookings are stored with key: `greenscapeBookings`
- Data persists across browser sessions
- Users can manage their bookings through browser developer tools

## Future Enhancements

- Email notifications for bookings
- Admin dashboard for managing appointments
- Payment processing integration
- Customer login/account system
- Photo upload for projects
- Real-time calendar integration
- SMS notifications

## Support

For issues or questions, please contact:
- 📞 (555) 123-4567
- 📧 info@greenscapelandscaping.com

## License

This project is proprietary to GreenScape Landscaping.

## Author

Created for GreenScape Landscaping

---

**Last Updated**: May 25, 2026
