
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    
  
  try{
    await sendgrid.send(
      {
        to: 'help@groshure.com.au',
        from: 'help@groshure.com.au', 
        subject: "Groshure's waitlist",
        text: `${req.body.waitlist}`,
        html: `<!DOCTYPE html">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
          <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>New form submission on Groshure</h3><b>
                  <p>${req.body.waitlist} joined groshure's waitlist</p>
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