var fs = require('fs')
var gm = require('gm').subClass({imageMagick: true});

function createMeme(filename, top, topColor, topSize, bottom, bottomColor, bottomSize) {
    var fname = generateFilename();
    gm(filename)
        .fontSize(topSize)
        .fill(topColor)
        .drawText(0, 0, top, ['North'])
        .fontSize(bottomSize)
        .fill(bottomColor)
        .drawText(0, 0, bottom, ['South'])
        .write(fname, function(err) {
            if (!err) {
                console.log('finished');
            }
            console.log(err);
        }
    );
    return fname;
}

function generateFilename() {
    var filename = (Math.floor(Math.random() * 100000000) + 1).toString(16);
    return 'public/images/' + filename + '.png';
}

exports.createMeme = createMeme;
