const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/filetrc.txt.png')
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function() {
        // Let's find unconnected blobs or scan for the "grey" color.
        
        let shapes = []; // store blobs
        let visited = new Uint8Array(this.width * this.height);
        
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let idx = (this.width * y + x) << 2;
                let r = this.data[idx];
                let g = this.data[idx+1];
                let b = this.data[idx+2];
                let a = this.data[idx+3];
                
                if (visited[this.width * y + x]) continue;
                
                // If it's a visible non-black pixel
                if (a > 50 && (r > 10 || g > 10 || b > 10)) {
                    // Flood fill
                    let q = [[x, y]];
                    visited[this.width * y + x] = 1;
                    let minX = x, maxX = x, minY = y, maxY = y;
                    let numPixels = 0;
                    
                    let head = 0;
                    while(head < q.length) {
                        let [cx, cy] = q[head++];
                        numPixels++;
                        if (cx < minX) minX = cx;
                        if (cx > maxX) maxX = cx;
                        if (cy < minY) minY = cy;
                        if (cy > maxY) maxY = cy;
                        
                        // neighbors
                        const dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
                        for (let d of dirs) {
                            let nx = cx + d[0];
                            let ny = cy + d[1];
                            if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                                if (!visited[this.width * ny + nx]) {
                                    let nidx = (this.width * ny + nx) << 2;
                                    let nr = this.data[nidx];
                                    let ng = this.data[nidx+1];
                                    let nb = this.data[nidx+2];
                                    let na = this.data[nidx+3];
                                    if (na > 50 && (nr > 10 || ng > 10 || nb > 10)) {
                                        visited[this.width * ny + nx] = 1;
                                        q.push([nx, ny]);
                                    }
                                }
                            }
                        }
                    }
                    shapes.push({minX, maxX, minY, maxY, numPixels});
                }
            }
        }
        
        console.log(`Image dimensions: ${this.width}x${this.height}`);
        console.log("Found shapes:");
        shapes.sort((a,b)=>b.numPixels - a.numPixels);
        for (let i = 0; i < Math.min(10, shapes.length); i++) {
            console.log(shapes[i]);
        }
    });
