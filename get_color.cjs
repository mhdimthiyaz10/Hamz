const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/filegm.txt.png')
    .pipe(new PNG())
    .on('parsed', function() {
        console.log(`RGB: ${this.data[0]}, ${this.data[1]}, ${this.data[2]}`);
    })
    .on('error', function(err) {
        console.error(err);
    });
