const Jimp = require('jimp');

Jimp.read('public/filetr.txt.png').then(image => {
    const width = 80;
    const height = Math.floor((image.bitmap.height / image.bitmap.width) * width * 0.5);
    
    // Scale image down
    image.resize(width, height);
    
    let out = '';
    for(let y=0; y<height; y++) {
        for(let x=0; x<width; x++) {
            const hex = image.getPixelColor(x, y);
            const r = (hex >> 24) & 255;
            const g = (hex >> 16) & 255;
            const b = (hex >> 8) & 255;
            const a = hex & 255;
            const bright = (r + g + b) / 3;
            if (a < 50) out += ' ';
            else if (bright > 150) out += '#';
            else if (bright > 50) out += '.';
            else out += ' ';
        }
        out += '\n';
    }
    console.log(out);
}).catch(console.error);
