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
    var fields = req.body;
    imageProcessor.createMeme(
        'uploads/' + req.file.filename,
        fields.top_text,
        fields.top_color,
        fields.top_size,
        fields.bottom_text,
        fields.bottom_color,
        fields.bottom_size
    );
});

module.exports = router;
