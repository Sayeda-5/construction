// Add event listener to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        alert("Button clicked!");
      });
    });
  });
  
  const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1a2b3c4d5e6f7g",
    pass: "1a2b3c4d5e6f7g"
  }
});

function sendEmailToServer(name, email, message) {
  const mailOptions = {
    from: email,
    to: 'sidrasyed199930@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  sendEmailToServer(name, email, message);
});
