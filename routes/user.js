const expres=require('express');
const router=expres.Router();

const controllerroute=require('../controller/user.js');

router.get('/',controllerroute.getAllUser);
router.post('/user',controllerroute.postUser);
router.delete('/user/:id',controllerroute.deleteUser);
router.get('/user/:id',controllerroute.getIdUser);
router.put('/user/:id',controllerroute.editUser);

module.exports=router;