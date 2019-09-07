const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()
const Contact = require('../models/contacts')
const User = require('../models/users')

const db = 'mongodb+srv://admin:admin@oauth-test-rfs2q.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{ useFindAndModify: false }, err => {
    if (err) {
        console.log('error db')
    } else {
        console.log('db connected')

    }

    router.get('/', (req, res) => {
        res.send('from api route')
    })
})
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
        if (err) {
            console.log('error')
        } else {
            let payload = {
                subject: registeredUser._id
            }
            let token = jwt.sign(payload, 'secretKey')
            console.log(token);

            console.log('user created')
            res.send({
                token
            })

        }
    })
})
router.post('/addcontact', (req, res) => {
    console.log(req );
    
    User.findOneAndUpdate({'email':req.body.addContact.uemail}, { $push: { contact: req.body.addContact }},(err,data)=>{
        if (err) {
            console.log(err)
        } else {
            console.log("added");
            
            res.send(data)
        }
    })
    
})
router.get('/getcontact/:user', (req, res) => {
    console.log(req.params.user,"tdgd");
    
    User.findOne({'email':req.params.user}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})

/* Update */

router.post('/updatecontact', (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate({
            email: req.body.editcontact.uemail,
            contact:{$elemMatch:{_id:req.body.editcontact._id}} 
    }, {
        $set : {"contact.$":req.body.editcontact}
    }, {
        new: true
    }, (err, data) => {
        if (data) {
            res.status(200).send(data)
        } else {
            console.log(err);
        }
    })
 })



/*  */

// router.put('/updatecontact', function (req, res, next) {
//     console.log(req);
    
//     updatecontact(req, res);
// });
// async function updatecontact(req, res) {
//     let body = req.body.editcontact
//     console.log(body._id,body.name)
//     var myquery = {
//         id:body._id
//     };
//     console.log(body._id);
//     var newvalues = {
//         $set: {
//             name: body.name,
//             phone: body.phone,
//             email: body.email,
//             address: body.address,
//         }
//     };
//     console.log(JSON.stringify(newvalues));
//     try {
//         Contact.findByIdAndUpdate(myquery, newvalues, (err, doc) => {

//             if (err) throw err;
//             console.log("1 document updated");
//             console.log(doc);
//             return res.status(200).json(doc);
//         });
//     } catch (err) {
//         return res.status(501).json(err);
//     }
// }

router.post('/login', (req, res) => {
    let userData = req.body
    console.log(userData)
    User.findOne({
        email: userData.email
    }, (error, user) => {
        if (error) {
            console.log('error');

        } else {
            console.log(user);

            if (!user) {
                res.status(401).send("invalid email")
            } else if (user.password !== userData.password) {
                res.status(401).send('invalid password')
            } else {
                let payload = {
                    subject: user._id
                }
                let token = jwt.sign(payload, 'secretKey')
                console.log(token);

                res.send({
                    token
                })
            }
        }
    })
})
router.post('/delete', function (req, res,next) {
   deletecontact(req, res,next);
});
async function deletecontact(req, res,next) {
    console.log(req.body,"delete");
    
    User.findOneAndUpdate({'email': req.body.id.uemail},{$pull: { contact:  req.body.id } } ,function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//    var myquery = { _id: req.params.id };
//    try {
//        Contact.deleteOne(myquery,(err, doc)=>{
//            if (err) throw err;
//            console.log("1 document deleted !");
//            return res.status(200).json(doc);
//        });
//    } catch (err) {
//        return res.status(501).json(err);
//    }
// }
router.get('/contacts', (req, res) => {

})
module.exports = router