const fs = require('fs');
const path = require('path');

let fileCount = 0;
let dirCount = 0;

function statPromise(pathString) {
    return new Promise(function(resolve, reject) {
        fs.stat(pathString, function(err, stats) {
            if (err) {
                reject(err);
            }
            else {
                resolve(stats);
            }
        })
    })
    .then(function(result) {
        if (result.isDirectory()){
            dirCount++;
            console.log(pathString + ' \t\tis a directory');
            readdirPromise(pathString); 
        }
        if (result.isFile()) {
            fileCount++;
            console.log(pathString + '\t\tis a file');
        }
    })
    .catch(function(err) {
        console.error(err);
    })
    .finally(function() {
        console.log(`fileCount: ${fileCount}`);
        console.log(`dirCount: ${dirCount}`);
        console.log('\n');
    })
}

function readdirPromise(pathString) {
    return new Promise(function(resolve, reject) {
        fs.readdir(pathString, function(err, files) {
            if (err) {
                reject(err);
            }
            else {
                let array = [];
                for (let i = 0; i < files.length; i++) {
                    array.push(path.join(pathString, files[i]));
                }
                console.log(array);
                resolve(array);
            }
        })
    })
    .then(function(result) {
        for (let i = 0; i < result.length; i++) {
            statPromise(result[i]);
        }
    })
    .catch(function(err) {
        console.error(err);
    })
}

readdirPromise(__dirname);





        // console.log('\n');
        // console.log(result.constructor);
        // console.log(result.__proto__);
        // console.log('_checkModeProperty : ' + result._checkModeProperty());
        // console.log('isDirectory : ' + result.isDirectory());
        // console.log('isFile : ' + result.isFile());
        // console.log('isBlockDevice : ' + result.isBlockDevice());
        // console.log('isCharacterDevice : ' + result.isCharacterDevice());
        // console.log('isSymbolicLink : ' + result.isSymbolicLink());
        // console.log('isFIFO : ' + result.isFIFO());
        // console.log('isSocket : ' + result.isSocket());
        // console.log('\n');
        // for (let key in result) {
        //     console.log(key + ' : ' + result[key]);
        // }
        // console.log('\n');