var mkdirp = require('mkdirp')

var dir = './res/' + new Date().getTime()

mkdirp(dir, function (err) {
    if (err) console.error(err)
    else console.log(dir)
});
