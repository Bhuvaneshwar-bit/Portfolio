# Portfolio Setup Guide

## Contact Form Setup (Formspree)

To receive contact form messages directly in your Gmail:

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Choose "HTML" as the form type
3. Enter your Gmail address as the notification email
4. Copy the form endpoint URL (it will look like: `https://formspree.io/f/xyzabc123`)

### Step 3: Update Your Portfolio
1. Open `portf.html` in a text editor
2. Find line 2819: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

### Step 4: Test the Form
1. Open `portf.html` in your browser
2. Fill out the contact form and submit
3. Check your Gmail for the message
4. Confirm the form in Formspree dashboard if prompted

## Alternative Options

### Option 1: EmailJS (Free)
- Go to [EmailJS.com](https://www.emailjs.com/)
- Create account and set up email service
- Replace Formspree code with EmailJS integration

### Option 2: Netlify Forms (If hosting on Netlify)
- Add `netlify` attribute to form tag
- Deploy to Netlify for automatic form handling

### Option 3: Google Forms
- Create a Google Form
- Use form action URL to submit to Google Sheets

## Calendly Setup

1. Create account at [Calendly.com](https://calendly.com)
2. Set up your meeting types (Google Meet, Phone Call)
3. Copy your Calendly URLs
4. Replace the URLs in `portf.html`:
   - Line 2928: Replace `https://calendly.com/bhuvaneshwar20866/30min`
   - Line 2931: Replace `https://calendly.com/bhuvaneshwar20866/new-meeting`

## Social Media Links

Update your social media links in the hero section:
1. LinkedIn: Find and update the LinkedIn href
2. Instagram: Find and update the Instagram href
3. GitHub: Find and update the GitHub href

## Email Address

Update the email address in the email card:
1. Find line 2808: `<p class="email-address">bhuvaneshwar20866@gmail.com</p>`
2. Replace with your email address
3. Also update line 2878 in the JavaScript section

## Testing

After setup:
1. Test the contact form
2. Test social media links
3. Test Calendly integration
4. Test email copy functionality
5. Check mobile responsiveness

## Troubleshooting

### Contact Form Not Working
- Check Formspree form ID is correct
- Verify email address in Formspree dashboard
- Check browser console for errors

### Calendly Not Loading
- Verify Calendly URLs are correct
- Check if Calendly account is active
- Ensure meeting types are published

### Styling Issues
- Clear browser cache
- Check CSS file is loading
- Verify all image files exist

## Support

If you need help:
1. Check browser console for errors
2. Verify all URLs and IDs are correct
3. Test in different browsers
4. Check network connectivity
