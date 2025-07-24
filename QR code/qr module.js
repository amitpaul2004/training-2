// qrModule.js
const QRCode = require('qrcode');

// Function to generate QR from personal info
function generatePersonalQR(info, filename) {
    QRCode.toFile(filename, info, {
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    }, function (err) {
        if (err) {
            console.error("QR generation failed:", err);
        } else {
            console.log`( QR Code saved as ${filename})`;
        }
    });
}

module.exports = { generatePersonalQR };