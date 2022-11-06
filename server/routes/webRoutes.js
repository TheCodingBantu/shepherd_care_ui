const express=require('express')
const router= express.Router()
const {login_post,user_add_post,logout} = require('../controllers/UserController')
const{requireAuth}=require ('../middleware/authMiddleware')


router.post('/login',login_post)

router.post('/addUser',requireAuth,user_add_post)
router.get('/logout',logout)

router.get('/login',(req,res)=>{
    res.render('login');
})


module.exports = router;