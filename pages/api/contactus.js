import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    
  
  try{
    await sendgrid.send(
      {
        to: 'help@groshure.com.au',
        from: 'help@groshure.com.au', 
        subject: 'Groshure Contact Form',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<!DOCTYPE html">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
          <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div style="padding-left:5px; padding-right:5px; color:white;">
                  <h3>New form submission on Groshure contact us form</h3><b>
                  <p>someone just submitted a form on Groshure. Here's what they had to say</p><br/><br/>
                  <div>
                    <p>Name</p>
                    <p style="font-weight:bolder;">${req.body.name}</p>
                  </div>
                  <br/>
                  <br/>
                  <div>
                    <p>Email</p>
                    <p style="font-weight:bolder;">${req.body.email}</p>
                  </div>
                  <br/>
                  <br/>
                  <div>
                    <p>Messages</p>
                    <p style="font-weight:bolder;">${req.body.messages}</p>
                  </div>
                  <br/>
                  <br/>
                </div>
        </body>
        </html>`,
      }
    )

  }catch(err){
    console.log(err)
    return res.status(err.statusCode || 500).json({error: "opps!! something went wrong"})
  }

  return res.status(200).json({error : ""})

}

export default sendEmail

