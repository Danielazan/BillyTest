const {Model, DataTypes } = require("sequelize")

const sequelize = require("../database")

class  Manager extends Model{}


 Manager.init({
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      sequelize, // Pass the sequelize instance
      modelName: 'Manager' // Set the model name
    });

    if (!Manager){
        Manager.create({
            Name: 'Solutions',
            Password: 'eU0tR59UuCd'
          });
    
    }
    
module.exports = {Manager};
