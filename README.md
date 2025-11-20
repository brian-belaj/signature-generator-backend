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

git clone https://github.com/brian-belaj/signature-generator-backend.git
cd outlook-signature-generator

2. Install dependencies:

npm install


3. Set the port in your `server.js` or via environment variable (Render sets `PORT` automatically):

const port = process.env.PORT || 3000;


4. Start the server:

node server

5. The backend will run on `http://localhost:3000` by default.

---

## CORS Configuration

Make sure to configure CORS properly in `server.js` to allow your frontend domain, e.g.:

const cors = require('cors');
app.use(cors({
origin: 'https://your-frontend.netlify.app',
methods: ['GET', 'POST'],
}));


---

## Deployment

- Recommended platforms: Render, Railway, Heroku
- Configure root directory if needed (if backend is inside a subfolder)
- Ensure the server listens to `process.env.PORT`
- Commit + push to GitHub and connect your repo to the deployment service

---

## API Endpoints

- `POST /generate-signature/without-photo`:  
  Accepts JSON body with user/company data, returns `{ html: "<generated html>" }`
- `POST /generate-signature/with-photo`:  
  Similar, but supports photo URLs  

---

## Contribution

Contributions are welcome. Please follow code style and test before submitting pull requests.

---

## License

MIT License

---

## Contact

Open an issue for questions or support, or contact the project maintainer directly.

---

Thank you for using the Outlook Signature Generator backend!

