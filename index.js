const express=require('express');
const bodyparser=require('body-parser');
const sequelize=require('./util/database.js')
const cors=require('cors');
const app=express();
const port=8080;

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
const router=require('./routes/user.js')

// app.get('/',(req,res)=>{
//     res.send('this is home route');
// })

app.use(router)

sequelize.sync()
.then((result)=>{
    console.log(result);
    app.listen(port,()=>{
        console.log(`server is listening on http://localhost:${port}`);
    })
}).catch((err)=>{
    console.log(`could not connect to database`);
})