const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/filetr.txt.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function() {
        // Star bounding box is around x: 864-911, y: 1049-1096
        for (let y = 1040; y < 1110; y++) {
            for (let x = 860; x < 920; x++) {
                if (x < this.width && y < this.height) {
                    let idx = (this.width * y + x) << 2;
                    // Find background color to blend (or black)
                    // Let's just set it to black (which is the background of this image)
                    this.data[idx] = 0;     // r
                    this.data[idx+1] = 0;   // g
                    this.data[idx+2] = 0;   // b
                    this.data[idx+3] = 255; // a
                }
            }
        }

        this.pack().pipe(fs.createWriteStream('public/filetr.txt.png'))
            .on('finish', () => console.log('Watermark removed!'));
    });
