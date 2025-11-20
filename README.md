# Outlook Signature Generator - Backend

Backend API built with Node.js and Express.js to generate dynamic HTML email signatures based on user input. This service renders EJS templates for signatures (with and without photo) and returns the HTML for the frontend to display and download.

---

## Features

- Express.js server with EJS template rendering
- Two endpoints for generating signatures:  
  `/generate-signature/with-photo`  
  `/generate-signature/without-photo`  
- CORS enabled to allow frontend communication
- No file saving on server: returns generated HTML in JSON response
- Configurable via environment variables (e.g., PORT)
- Ready for cloud deployment (Render, Railway, etc.)

---

## Tech Stack

- Node.js (v18+)
- Express.js framework
- EJS templating engine
- CORS middleware

---

## Project Structure

/outlook-signature-generator
/signatures # (optional) folder for local signature HTML files (not used if disabled)
/views # EJS templates for signatures
signature-with-photo.ejs
signature-without-photo.ejs
server.js # main Express server
package.json


---

## Installation & Running Locally

1. Clone the repo:

git clone <your-backend-repo-url>
cd outlook-signature-generator
