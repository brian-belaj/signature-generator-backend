const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: 'https://signature-generator-meloria.netlify.app',
    methods: ['GET', 'POST'],
    credentials: false,
  })
);

app.set('view engine', 'ejs');
app.set('views', './views');

// Endpoint generazione firma senza foto
app.post('/generate-signature/without-photo', (req, res) => {
  const {
    personName,
    personRole,
    personMobile,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyPhone,
    companyWebsite
  } = req.body;

  res.render(
    'signature-without-photo',
    {
      personName,
      personRole,
      personMobile,
      personEmail,
      companyLogoUrl,
      companyColor,
      companyName,
      companyAddress,
      companyPhone,
      companyWebsite
    },
    (err, html) => {
      if (err) return res.status(500).json({ error: 'Error generating signature without photo', details: err.message });
      res.json({ html });
    }
  );
});

// Endpoint generazione firma con foto
app.post('/generate-signature/with-photo', (req, res) => {
  const {
    personName,
    personRole,
    personMobile,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyPhone,
    companyWebsite,
    photoForegroundUrl
  } = req.body;

  res.render(
    'signature-with-photo',
    {
      personName,
      personRole,
      personMobile,
      personEmail,
      companyLogoUrl,
      companyColor,
      companyName,
      companyAddress,
      companyPhone,
      companyWebsite,
      photoForegroundUrl
    },
    (err, html) => {
      if (err) return res.status(500).json({ error: 'Error generating signature with photo', details: err.message });
      res.json({ html });
    }
  );
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
