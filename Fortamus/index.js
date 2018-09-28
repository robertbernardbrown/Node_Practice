var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('indiv18/itcont.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

fortamusFunctions();

function fortamusFunctions (){
    let i = 0;
    let monthObj = {};
    let nameObj = {};

    rl.on('line', function(line) {
        let readThisLine = line.split("|");
        findPeople(readThisLine);
        monthlyDonations(readThisLine);
        names(readThisLine);
        i++;
    });

    rl.on('close', function(){
        finalCounts();
        console.log(Object.keys(nameObj).reduce((a, b) => nameObj[a] > nameObj[b] ? a : b));
    })

    function findPeople (line) {
        if ( i === 432 || i === 43243){
            console.log(line[7]);
        }
    }

    function monthlyDonations (line){
        let unformattedTime = line[4]
        let month = unformattedTime.charAt(4).toString() + unformattedTime.charAt(5).toString();
        typeof monthObj[month] === 'undefined' ? monthObj[month] = 1 : monthObj[month]++;
    }

    function names (line){
        let fullName = line[7];
        let splitName = fullName.split(", ");
        let firstName = splitName[1];
        typeof nameObj[firstName] === 'undefined' ? nameObj[firstName] = 1 : nameObj[firstName]++;
    }
    
    function finalCounts (){
        console.log(i);
        console.log(monthObj);
        console.log(nameObj);
    }

}

/*
1: 12,865,059
2: MILESKI, JOHN A; CESTELLO, LOUIS R
3: { '10': 588918,
  '11': 346096,
  '12': 491775,
  '01': 1259792,
  '02': 833050,
  '03': 356142,
  '05': 746408,
  '04': 3315502,
  '07': 2068093,
  '09': 974147,
  '08': 1189629,
  '06': 695507 }
4: John
*/