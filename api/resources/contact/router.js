// DON'T FORGET TO ADD REQUIRE STATEMENTS IN THE INDEX.js FILE
 var nodemailer = require('nodemailer');

exports.init = function(app){

    var working = false;

    app.post('/api/contact', function(req, res){
	if(working === false){
		data = req.body;
		working = true;	
		res.sendStatus(200);
		setTimeout( function(){

			var subject = data.subject;
			var msg = data.text;

			sendEmail('julia.hentz@gmail.com', subject, msg, data.email, function(success, err){
					if(success){
						console.log('Email sent. :)')
					}else{
						console.log(err);
					}
			});
			working = false;	

		}, 30000 );	
	}else{
		res.send('Hold your horses!');
	}
	
    });

	function sendEmail(mail, subject, message, senderEmail, cb){
		// create reusable transporter object using the default SMTP transport
		var transporter = nodemailer.createTransport('smtps://noreply.archifile%40gmail.com:d7FtuUwySsfQDnR8@smtp.gmail.com');

		// setup e-mail data with unicode symbols
		var mailOptions = {
			from: '"Client" <'+senderEmail+'>', // sender address
			to: mail, // list of receivers
			subject: subject, // Subject line
			html: message // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
			if(cb){
				if(error){
					cb(false, error);
				}else {
					cb(true);
				}
			};

		});
	};

};
