// index.js
const { generatePersonalQR } = require('./qr module');

const myInfo = `
Name: Aditya Hatua
Phone: +91-9876543210
Email: aditya@example.com
Address: Bhubaneswar, Odisha
LinkedIn: https://linkedin.com/in/aditya
`;

// Call the function and generate the QR
generatePersonalQR(myInfo, 'myInfoQR.png');