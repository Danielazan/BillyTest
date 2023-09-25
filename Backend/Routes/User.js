const {CreateManger,ChangeManager,GetAllManager} = require("../Controllers/Managers")
const express = require("express")

const router = express.Router()

router.post("/login",CreateManger)



router.get("/manger",GetAllManager)



module.exports = router
