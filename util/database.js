const Sequelize=require('sequelize');

const sequelize=new Sequelize('backendpractise','root','Shiv@3923',{
      host:'localhost',
      dialect:'mysql'
})
module.exports=sequelize;