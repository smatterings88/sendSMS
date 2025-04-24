# Twilio SMS Service

A Node.js RESTful API service for sending SMS messages via Twilio.

## Features

- REST API endpoint for sending SMS messages
- International phone number validation
- Twilio API integration
- Rate limiting and security measures
- Comprehensive error handling
- Configurable SMS message content

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file using the `.env.example` template and add your Twilio credentials:
   ```
   cp .env.example .env
   ```
4. Edit the `.env` file with your Twilio credentials

## Usage

Start the server:

```
npm start
```

For development with auto-reload:

```
npm run dev
```

## API Endpoints

### Send SMS

```
GET /api/sms/send?phoneNumber=[phone_number]&message=[optional_message]
```

Parameters:
- `phoneNumber` (required): Target phone number in international format (e.g., +1234567890)
- `message` (optional): Custom SMS message text

### Example Requests

Using curl:

```bash
curl "http://localhost:3000/api/sms/send?phoneNumber=+1234567890&message=Hello%20from%20the%20API"
```

Using Postman:
1. Create a GET request to `http://localhost:3000/api/sms/send`
2. Add query parameters:
   - `phoneNumber`: +1234567890
   - `message`: Hello from the API

## Health Check

```
GET /health
```

Returns the service status.

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number
- `DEFAULT_SMS_MESSAGE`: Default SMS message if none provided

## Security

This service includes:
- Rate limiting (100 requests per 15 minutes per IP)
- Security headers via Helmet
- Input validation
- Error handling with appropriate status codes