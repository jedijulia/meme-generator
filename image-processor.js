var fs = require('fs')
var gm = require('gm').subClass({imageMagick: true});

function createMeme(filename, top, bottom, fontsize, color) {
    gm(filename)
        .resize(500)
        .fontSize(fontsize)
        .stroke(color)
        .drawText(0, 0, top, ['North'])
        .drawText(0, 0, bottom, ['South'])
        .write(generateFilename(), function(err) {
            if (!err) {
                console.log('finished');
            }
            console.log(err);
        }
    );
}

function generateFilename() {
    var filename = (Math.floor(Math.random() * 100000000) + 1).toString(16);
    return 'public/images/' + filename + '.png';
}

exports.createMeme = createMeme;
