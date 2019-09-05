var router=require('express').Router();
const passport=require('passport');
router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send(req.user);
    res.send('you are logged  in');
})

module.exports=router;
// mongodb+srv://admin:admin@oauth-test-rfs2q.mongodb.net/test?retryWrites=true&w=majority