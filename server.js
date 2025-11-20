const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'https://signature-generator-meloria.netlify.app/',
}));
app.set('view engine', 'ejs');
app.set('views', './views');

// Endpoint generazione firma senza foto
app.post('/generate-signature/without-photo', (req, res) => {
  const {
    personName,
    personRole,
    personMobile,
    personMobileFormatted,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyCap,
    companyVat,
    companyPhone,
    companyPhoneFormatted,
    companyWebsite
  } = req.body;

  res.render('signature-without-photo', {
    personName,
    personRole,
    personMobile,
    personMobileFormatted,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyCap,
    companyVat,
    companyPhone,
    companyPhoneFormatted,
    companyWebsite
  }, (err, html) => {
    if (err) return res.status(500).json({ error: 'Errore generazione firma senza foto' });
    res.json({ html }); // restituisce solo HTML, niente salvataggio
  });
});

// Endpoint generazione firma con foto
app.post('/generate-signature/with-photo', (req, res) => {
  const {
    personName,
    personRole,
    personMobile,
    personMobileFormatted,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyCap,
    companyVat,
    companyPhone,
    companyPhoneFormatted,
    companyWebsite,
    photoBackgroundUrl,
    photoForegroundUrl
  } = req.body;

  res.render('signature-with-photo', {
    personName,
    personRole,
    personMobile,
    personMobileFormatted,
    personEmail,
    companyLogoUrl,
    companyColor,
    companyName,
    companyAddress,
    companyCap,
    companyVat,
    companyPhone,
    companyPhoneFormatted,
    companyWebsite,
    photoBackgroundUrl,
    photoForegroundUrl
  }, (err, html) => {
    if (err) return res.status(500).json({ error: 'Errore generazione firma con foto' });
    res.json({ html }); // restituisce solo HTML
  });
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
