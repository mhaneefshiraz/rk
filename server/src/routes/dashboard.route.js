var express = require('express');
var router = express.Router();
var dashboard = require('../controller/dashboard.controller')
var checkToken = require('../helper/verifyToken')
 
/* GET users listing. */
router.post('/contentSearch',checkToken.verifyToken, dashboard.contantSearch);

/* contant meta search */
router.post('/contantMetaSearch',checkToken.verifyToken, dashboard.contantMetaSearch);

/* get Frame Id */
router.post('/getFrameId',checkToken.verifyToken, dashboard.getFrameId);

/* get count object */
router.post('/getobjectcount',checkToken.verifyToken, dashboard.getobjectcount);

/* get region name*/
router.get('/getreginname',checkToken.verifyToken,dashboard.getreginname);

/* get mission plan*/
router.get('/getmissionplan',checkToken.verifyToken,dashboard.getmissionplan);

/* update salute report */
router.post('/updatesalutereport',checkToken.verifyToken, dashboard.updatesalutereport);

/* get salute report */
router.get('/getsalutereport',checkToken.verifyToken, dashboard.getsalutereport);

/* get  report */
router.post('/getreport',checkToken.verifyToken, dashboard.getreport);

// update report
router.post('/updatereport',checkToken.verifyToken, dashboard.updatereport);

/* get  kml */
router.post('/getkml',checkToken.verifyToken, dashboard.getkmlData);

/* get  kml */
router.post('/addreport',checkToken.verifyToken, dashboard.addreport);

/* get  reporthistory */
router.post('/reporthistory',checkToken.verifyToken, dashboard.reporthistory);

/* get count reporthistory */
router.post('/countreporthistory',checkToken.verifyToken, dashboard.countreporthistory);

/* get  users */
router.get('/getusers',checkToken.verifyToken, dashboard.users);

/*   insert live video */
router.post('/postlivevideo',checkToken.verifyToken, dashboard.livevideo);

/* get  insertlive video */
router.post('/getlivevideo',checkToken.verifyToken, dashboard.getlivevideo);

/* get  unassign video */
router.post('/getunassignvideo',checkToken.verifyToken, dashboard.unassignvideo);

/* get  delassign video */
router.post('/delassign',checkToken.verifyToken, dashboard.delassign);

/* get  kml data */
router.get('/getkmldata',checkToken.verifyToken, dashboard.getkmldata);

/* reject report */
router.post('/rejectreport',checkToken.verifyToken, dashboard.rejectreport);

/*sqlinjection*/

router.post('/sqlinjection', dashboard.sqlinjection);

/* connect python */
// router.post('/connectpy',checkToken.verifyToken, dashboard.connectpy);

/* getsummary */
 router.post('/getsummary',checkToken.verifyToken, dashboard.getsummary);

 /* post Analyst’s Comments */
 router.post('/getcomments',checkToken.verifyToken, dashboard.getcomments);

 router.get('/approveRequest',checkToken.verifyToken,dashboard.approveRequest);

 router.post('/adminapproval',checkToken.verifyToken,dashboard.adminapproval);

 router.get('/logout',checkToken.verifyToken,dashboard.logout)

module.exports = router;
