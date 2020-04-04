var PREFIX = 'src'

var fs = require('fs');

const createDir = path => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

const createFile = (path, content) => {
    if (!fs.existsSync(path)) {
        fs.writeFile(path, content , err => {
            console.log(err);
        });
    } else {
        console.log(path + ' already exist.');
    }

}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

var dir = [PREFIX + '/controllers', PREFIX + '/models', PREFIX + '/routes', PREFIX+'/middlewares'];

dir.forEach(filePath => {
    createDir(PREFIX + '/')
    console.log(filePath);
    createDir(filePath);
});


const FirstArgument = [ 'controller', 'model', 'route', 'middleware'];

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});


switch(process.argv[2]){
    case 'MVC':
        let count = 0;
        dir.forEach(prefix => {
            let _Path = prefix + '/' + process.argv[3] + '_' + FirstArgument[count] +'.js';
            console.log('sample/sample_' + FirstArgument[count] +'.js');
            
            fs.readFile( 'sample/sample_' + FirstArgument[count] +'.js', 'utf8', function (err,data) {
                if (err) {
                  return console.log(err);
                }

                data = data.replace(/__ModelSmallName/g, process.argv[3]);
                var result = data.replace(/__ModelName/g, capitalize(process.argv[3]));
                
                // console.log(result);

                fs.writeFile(_Path, result, 'utf8', function (err) {
                   if (err) return console.log(err);
                });
              });
            count++;
        });
        break;
}

