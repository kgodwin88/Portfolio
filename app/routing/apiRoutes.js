require('dotenv').config()
module.exports = function (app) {
    app.post('/send', function (req, res) {
        const output = `
    <p>You have a new contact</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message<h3>
    <p>${req.body.message}</p>`;
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.email2,
                pass: process.env.password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.name + req.body.email, // sender address
            to: process.env.email1, // list of receivers
            subject: 'Response from Portfolio', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        smtpTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send('done')
        });

    });
}