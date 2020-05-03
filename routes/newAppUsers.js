/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');    
var database = require('./dao');
var dao = new database.Dao();    
var sessionChecker = require('./security');
var appresource = {
    Title:'AppUsersNew',
    Heading:'AppUsers',
    Username:{label :'Username'},
    Password:{label :'Password'},
    Name:{label :'Name'},
    Email:{label :'Email'},
    Phone:{label :'Phone'},
    Mobile:{label :'Mobile'},
    Enabled:{label :'Enabled'},
    Token:{label :'Token'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{username:'',
        password:'',
        name:'',
        email:'',
        phone:'',
        mobile:'',
        enabled:'',
        token:'',
        }
    }
    res.render('AppUsersNewPage',parameter);
    console.log(parameter);
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }    
    dao.newAppUsers(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('AppUsersNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;