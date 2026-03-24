const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/filetr.txt.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function() {
        const width = this.width;
        const height = this.height;
        
        let out = '';
        const scaleX = Math.floor(width / 80);
        const scaleY = Math.floor(height / Math.floor(80 * (height / width) * 0.5));
        const outW = 80;
        const outH = Math.floor(80 * (height / width) * 0.5);
        
        for (let y = 0; y < outH; y++) {
            for (let x = 0; x < outW; x++) {
                let r=0,g=0,b=0,a=0,count=0;
                for(let dy=0; dy<scaleY; dy++){
                    for(let dx=0; dx<scaleX; dx++){
                        let py = y*scaleY + dy;
                        let px = x*scaleX + dx;
                        if(px>=width || py>=height) continue;
                        let idx = (width * py + px) << 2;
                        r += this.data[idx];
                        g += this.data[idx+1];
                        b += this.data[idx+2];
                        a += this.data[idx+3];
                        count++;
                    }
                }
                if(count===0) {out+=' '; continue;}
                r/=count; g/=count; b/=count; a/=count;
                
                const bright = (r + g + b) / 3;
                if (a < 50) out += ' ';
                else if (bright > 150) out += '#';
                else if (bright > 50) out += '.';
                else out += ' ';
            }
            out += '\n';
        }
        console.log(out);
    });
