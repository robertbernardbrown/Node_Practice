var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('baseball/core/AllstarFull.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

baseballFunctions();

function baseballFunctions (){

    rl.on('line', function(line) {
        console.log(line.split(","))
    });

    rl.on('close', function(){
        console.log("closed")
    })

}