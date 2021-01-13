// 1/ 
// import fs from 'fs';

// function myls() 
// {  
//      let dir1 = fs.readdirSync('.');
//     dir1.forEach(element => { 
//             console.log(element)
//      });
// }

// myls()

// 2/ 
// import fs from 'fs';

// function myls() 
// {  
//      let dir1 = fs.readdirSync(process.argv[2]);
//     dir1.forEach(element => console.log(element));
// }

// myls()

//3 ls-l Je n'ai pas réussi à accéder au dossier et à le faire sur tout ce qu'il contient, aussi à converitr les uid et gid en string malgré le require('userid')...
var fs = require('fs');
var Mode = require('stat-mode');
// var userid = require("userid");
// const exec = require('child_process').exec;

function lsL() {


        fs.stat(process.argv[2], function (err:string, stat:string) {
            if (err) throw err;
                
            var mode = new Mode(stat);
            var nlink = fs.statSync(process.argv[2]).nlink;
            var uid = fs.statSync(process.argv[2]).uid; 
            var gid = fs.statSync(process.argv[2]).gid;
            var size = fs.statSync(process.argv[2]).size;
            var file = process.argv[2];
            var date = fs.statSync(process.argv[2]).birthtime;

                console.log(mode.toString(), nlink, uid, gid, size,date, file);

            });
}

lsL();
