const passport = require('passport');
const google = require('passport-google-oauth20');
const User = require('../models/user-model')


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });

});


passport.use(
    new google({
        callbackURL: '/auth/google/redirect',
        clientID: '85005973860-l4jrcmjnelbi5o41mirv4mk05i91jp5q.apps.googleusercontent.com',
        clientSecret: 'uDibPSNXXb_kGNoO0b6uGVW0'
    }, (acessToken, refreshToken, profile, done) => {
        User.findOne({
            googleid: profile.id
        }).then((currentuser) => {
            if (currentuser) {
                console.log('user is ' + currentuser);
                done(null, currentuser);
            } else {
                new User({
                    username: profile.displayName,
                    googleid: profile.id
                }).save().then((newuser) => {
                    console.log('new user is' + newuser);
                    done(null, newuser);
                });
            }
        })

    }))