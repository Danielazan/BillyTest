require("dotenv").config()

const {Sequelize} = require('sequelize')

// creating an Sequelize instance

const sequelize = new Sequelize(process.env.Database,process.env.UserName,process.env.PASSWORD,{
    dialect:process.env.dialect,
    host:process.env.HOST
})

module.exports = sequelize