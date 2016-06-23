var fs = require('fs')
var gm = require('gm').subClass({imageMagick: true});

function createMeme(filename, top, bottom, fontsize, color) {
    gm(filename)
        .resize(500)
        .fontSize(fontsize)
        .stroke(color)
        .drawText(0, 0, top, ['North'])
        .drawText(0, 0, bottom, ['South'])
        .write('result.png', function(err) {
            if (!err) {
                console.log('finished');
            }
            console.log(err);
        }
    );
}
