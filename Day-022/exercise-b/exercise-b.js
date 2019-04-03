const fs = require('fs');

function copy(filename, directory) {
    fs.mkdir(`${__dirname}/${directory}`, function(err) {
        if (err) {
            throw err;
        }
        else {
            let readStream = fs.createReadStream(`${__dirname}\\${filename}`, {encoding: 'utf-8', highWaterMark: 1024});
            let writeStream = fs.createWriteStream(`${__dirname}\\${directory}\\textcopy.txt`);
            readStream.pipe(writeStream);
        }
    })
}

copy('text.txt', 'documentCopy')
