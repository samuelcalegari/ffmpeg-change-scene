var ffmpeg = require('fluent-ffmpeg');
var p = require('child_process');

var argv = require('minimist')(process.argv.slice(2));
var fv = argv.fv || 0.1;
var file = argv.file || 'test.mp4';


var cmd = 'ffmpeg -i ' + file + '  -filter:v "select=\'gt(scene,' + fv + ')\',showinfo"  -f null  - 2> data.txt';
var cmd2 = 'grep showinfo data.txt | grep pts_time:[0-9.]* -o | grep [0-9.]* -o > timestamps.txt';

console.log('calcul des timestamp de la video '+ file + ' (sensibilité ' + fv + ')' );

var task1 = p.execSync(cmd, function(error, stdout, stderr) {})

var task2 = p.execSync(cmd2, function(error, stdout, stderr) {});

console.log('fin du calcul');




