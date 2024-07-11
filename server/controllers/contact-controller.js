const ContactInfo = require ("../model/contact-model")

const contactForm = async(req, res)=>{
  try {
    const response = req.body;
    await ContactInfo.create(response)
    return res.status(200).json({message:"Message Send Successfully"})
  } catch (error) {
    return res.status(400).json({message:"Message sending Failed"})
  }
}

module.exports= contactForm