const {Manager} = require("../Models/Manager")
const jwt = require('jsonwebtoken');
require("dotenv").config()


const CreateManger=async(req, res) => {
    const {UserName,PassWord} = req.body

  try {
   
      const manager = await Manager.findOne({
        where: {Name:UserName}
      }).then(result =>{
        const token = jwt.sign({ UserName: result.UserName }, process.env.Secret);

        if (!result){
            
            
            res.status(400).json(token)
        }
        else{
            res.status(200).json(token)
        }
        console.log(token)
        // res.status(200).json(result)
      })
      // res.send(file)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
  ;
}

const GetAllManager = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1];
    try {
      // Verify JWT token
      const decoded = jwt.verify(token,process.env.Secret);
      res.json({ message: `Welcome, ${decoded.username}!` });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
}



const GetSingleMemeber = async(req,res)=>{
  const Teamid = req.params.id
  
  try {

    const Getone = await Teams.findOne({where: {id:Teamid}}).then(result =>{
      res.status(200).json({result,Modles})
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const ChangeManager = async (req, res) => {
  try {
    const {id}=req.params
    const {UserName,PassWord}= req.body

    const manager = await Manager.update(
      { Name,PassWord },
      { where: { id: id } }
    ).then(result =>{
      res.status(200).json({message:"Record updated Successfully"})
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports={
    CreateManger,
  GetAllManager,
  GetSingleMemeber ,
  ChangeManager,
}
