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
    Title:'AccountSectionSearch',
    Heading:'AccountSection',
    Id:{label :'Id'},
    Name:{label :'Name'},
    Description:{label :'Description'},
    AccountSection:{Heading:'AccountSection',
        Id:{header:'Id'},
        Name:{header:'Name'},
        Description:{header:'Description'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchAccountSection?'+req._parsedUrl.query;
    dao.searchAccountSection(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('AccountSectionSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;