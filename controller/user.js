const User=require('../models/user.js');

exports.getAllUser=(req,res,next)=>{
    User.findAll()
    .then((user)=>{
        res.json(user);
    }).catch((err)=>{
        console.log(err);
        console.log('count not get all data');
    })
}

exports.postUser=(req,res,next)=>{
    const name=req.body.name;
    const age=req.body.age;
    const address=req.body.address;

    User.create({
        name:name,
        age:age,
        address:address
    }).then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        console.log(err);
        console.log('could not post your data');
    })
}

exports.deleteUser=(req,res,next)=>{
    const id=req.params.id;
    User.findByPk(id).
    then((id)=>{
        id.destroy();
    }).then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        console.log(err);
        console.log('could not delete');
    })
}

exports.getIdUser=(req,res,next)=>{
    const Id=req.params.id;
    User.findAll({
        where:{
            id:Id
        }
    }).
    then((id)=>{
        return res.json(id)
    }).catch((err)=>{
        console.log(err);
        console.log('could not find user');
    })
}

exports.editUser=(req,res,next)=>{
    const Id=req.params.id;
    const name=req.body.name;
    const age=req.body.age;
    const address=req.body.address;
    User.findByPk(Id).
    then((id)=>{
        id.update({
            name:name,
            age:age,
            address:address
        })
        return id.save();
    }).then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        console.log('could not updata');
        console.log(err);
    })
}