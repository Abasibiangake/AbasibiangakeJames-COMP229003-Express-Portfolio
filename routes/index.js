// var express = require('express');
// var router = express.Router();
// let controlerIndex = require('../controllers/index');

// /* GET home page. */
// router.get('/', controlerIndex.home);

// module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/project', projectsPage); 
router.get('/service', servicePage);
router.get('/contactMe', contactPage);

//controller
function homePage (req, res, next) {
    res.render('index', {title: "AJ Portfolio HomePage"});
  }
  
  function aboutPage (req, res, next) {
      res.render('about', {title: "AJ Portfolio AboutPage"});
  }
  
  function projectsPage (req, res, next) {
      res.render('project', {title: "AJ Portfolio Project Page"});
  }
  function servicePage (req, res, next) {
      res.render('project', {title: "AJ Portfolio Services Page"});
  }
  function contactPage (req, res, next) {
      res.render('contact', {title:"AJ Portfolio Contact Me Page"});
  }

module.exports = router;
