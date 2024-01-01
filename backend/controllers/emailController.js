const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const axios = require('axios') ; 
exports.sendEmail = catchAsyncErrors(async(req , res , next)=>{ 
        const data  = req.body ; 
    
        console.log(req) ;        
        const reqBody  = await {
            From: `${data.senderEmail}`,
            To:  `${data.RecevierEmail}`,
            Cc: `${data.Cc}`,
            Bcc: `${data.Bcc}`,
            Subject: `${data.subject}`,
            HtmlBody:`${data.htmlBody}`,
            TextBody: `${data.textBody}`,
            TrackOpens: true,
            TrackLinks: "None"
          };  
        const serializedFormData = await JSON.stringify(reqBody);  
        console.log(serializedFormData) ; 
        let link  = `https://api.postmarkapp.com/email`;   
        const config = {
            headers: { 
                 "Accept": "application/json" , 
                 "Content-Type": "application/json" , 
                 "X-Postmark-Server-Token": `${process.env.POSTMARK_SERVER_API}` 
            }
        }
        await axios.post(link , serializedFormData , config ).then(async(response)=>{ 
                res.status(200).send({success: true , 
                data: response.data}) ; 
        })
        .catch((error)=>{ 
              res.status(401).send({
                 error: error
              })
        })
    
  
}); 

exports.sendEmailT = catchAsyncErrors(async(req , res , next)=>{ 
    const data  = req.body ; 

    console.log(req) ;        
    const reqBody  = await {
        From: `${data.senderEmail}`,
        To:  `${data.RecevierEmail}`,
        Cc: `${data.Cc}`,
        Bcc: `${data.Bcc}`,
        InlineCss: true,
        TemplateAlias: `${data.templateAlais}`, 
        TemplateModel : {
             'name':`${data.recieverName}`,
             'company_name':`${data.companyName}`, 
             'product_name':`${data.productName}`
        } ,
        TrackOpens: true,
        TrackLinks: "None"
      };  
    const serializedFormData = await JSON.stringify(reqBody);  
    console.log(serializedFormData) ; 
    let link  = `https://api.postmarkapp.com/email/withTemplate`;   
    const config = {
        headers: { 
             "Accept": "application/json" , 
             "Content-Type": "application/json" , 
             "X-Postmark-Server-Token": `${process.env.POSTMARK_SERVER_API}` 
        }
    }
    await axios.post(link , serializedFormData , config ).then(async(response)=>{ 
            res.status(200).send({success: true , 
            data: response.data}) ; 
    })
    .catch((error)=>{ 
          res.status(401).send({
             error: error
          })
    })
   

}); 

exports.getSendEmail = catchAsyncErrors(async(req , res , next)=>{   
    let link  = `https://api.postmarkapp.com/messages/outbound?count=100&offset=0`;   
    const config = {
        headers: { 
             "Accept": "application/json" , 
             "X-Postmark-Server-Token": `${process.env.POSTMARK_SERVER_API}` 
        }
    }
    await axios.get(link ,   config ).then(async(response)=>{ 
            res.status(200).send({success: true , 
            data: response.data}) ; 
    })
    .catch((error)=>{ 
          res.status(401).send({
             error: error
          })
    }) 
}) ; 

exports.getInBoundEmail = catchAsyncErrors(async(req , res , next)=>{   
    let link  = `https://api.postmarkapp.com/messages/inbound?count=100&offset=0`;   
    const config = {
        headers: { 
             "Accept": "application/json" , 
             "X-Postmark-Server-Token": `${process.env.POSTMARK_SERVER_API}` 
        }
    }
    await axios.get(link ,   config ).then(async(response)=>{ 
            res.status(200).send({success: true , 
            data: response.data}) ; 
    })
    .catch((error)=>{ 
          res.status(401).send({
             error: error
          })
    })
}) ; 
 
exports.getStatistics = catchAsyncErrors(async(req , res , next)=>{ 
    let link  = `https://api.postmarkapp.com/stats/outbound?fromdate=2023-01-01&todate=2024-12-1`;   
    const config = {
        headers: { 
             "Accept": "application/json" , 
             "X-Postmark-Server-Token": `${process.env.POSTMARK_SERVER_API}` 
        }
    }
    await axios.get(link ,   config ).then(async(response)=>{ 
            res.status(200).send({success: true , 
            data: response.data}) ; 
    })
    .catch((error)=>{ 
          res.status(401).send({
             error: error
          })
    })  ; 

}) ; 