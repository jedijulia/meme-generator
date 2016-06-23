var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var imageProcessor = require('../image-processor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meme Generator' });
});

router.post('/memify', upload.single('datafile'), function(req, res, next) {
    console.log(req.file);
    imageProcessor.createMeme('uploads/' + req.file.filename, 'top caption', 'bottom caption', 50, '#ffffff');
});

module.exports = router;
