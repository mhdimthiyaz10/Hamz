const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/filetrc.txt.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function() {
        for (let y = 810; y < 870; y++) {
            for (let x = 1080; x < 1150; x++) {
                if (x < this.width && y < this.height) {
                    let idx = (this.width * y + x) << 2;
                    this.data[idx] = 0;     // r
                    this.data[idx+1] = 0;   // g
                    this.data[idx+2] = 0;   // b
                    this.data[idx+3] = 255; // a
                }
            }
        }

        this.pack().pipe(fs.createWriteStream('public/filetrc.txt.png'))
            .on('finish', () => console.log('Watermark removed!'));
    });
