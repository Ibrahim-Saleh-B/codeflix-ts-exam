// 1/
// import fs from 'fs';

// function mycp(){
//     fs.writeFile(process.argv[3], fs.readFileSync(process.argv[2], 'utf-8'),  function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("Copié!");
//         });  
// }

// mycp()

// 2/
// const fse = require('fs-extra');

// function mycpR() 
// {
//     if(process.argv[2] == '-r')
//     {
//         fse.copySync(process.argv[3], process.argv[4]);   
//     }
// }

// mycpR()