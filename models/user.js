const Sequelize=require('sequelize');
const sequelize=require('../util/database.js');

const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=User;