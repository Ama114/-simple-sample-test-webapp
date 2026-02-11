# EmailJS Setup Guide

To enable direct messaging from your website, you need to set up EmailJS (free service):

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Create Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Copy the **Service ID**

## Step 3: Create Email Template

1. Click "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Valentine Message from {{from_name}}

**Body:**
```
You received a new message from your Valentine website!

From: {{from_name}}
Phone: {{to_phone}}

Message:
{{message}}

---
Sent via Valentine Web App
```

4. Save and copy the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update ContactSection.jsx

Open `src/components/ContactSection.jsx` and replace (around line 28-32):

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',        // Paste your Service ID here
  'YOUR_TEMPLATE_ID',       // Paste your Template ID here
  {
    from_name: senderName,
    message: customMessage,
    to_phone: '0768577484',
  },
  'YOUR_PUBLIC_KEY'          // Paste your Public Key here
)
```

## Step 6: Test!

1. Go to your website
2. Fill in name and message
3. Click "Send Message"
4. Check your email inbox!

## Example Configuration

```javascript
await emailjs.send(
  'service_abc123',          // Your Service ID
  'template_xyz789',         // Your Template ID
  {
    from_name: senderName,
    message: customMessage,
    to_phone: '0768577484',
  },
  'user_DEF456GHI'          // Your Public Key
)
```

You'll receive all messages via email, and you can set up email notifications on your phone to get instant alerts!
