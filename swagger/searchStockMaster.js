/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var database = require('./dao');
var dao = new database.Dao();
        
/**
 * @swagger
 * /searchStockMaster:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchStockMaster
 *     summary: StockMasterSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: id
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: code
 *         description: String
 *         in: query
 *         type: String
 *       - name: units
 *         description: String
 *         in: query
 *         type: String
 *       - name: mbflag
 *         description: String
 *         in: query
 *         type: String
 *       - name: lastcurcostdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: actualcost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: lastcost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: materialcost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: labourcost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: overheadcost
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: lowestlevel
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: discontinued
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: controlled
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: eoq
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: volume
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: kgs
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: barcode
 *         description: String
 *         in: query
 *         type: String
 *       - name: discountcategory
 *         description: String
 *         in: query
 *         type: String
 *       - name: taxcatid
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: serialised
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: appendfile
 *         description: String
 *         in: query
 *         type: String
 *       - name: perishable
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: decimalplaces
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: nextserialno
 *         description: Long
 *         in: query
 *         type: Long
 *       - name: pansize
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: shrinkfactor
 *         description: Double
 *         in: query
 *         type: Double
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found 
 *       '500':
 *         description: Internal Server Problem
 */    

router.get('/', function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchStockMaster(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.stockMaster = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
