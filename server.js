var pkginfo = require('pkginfo')(module);
var express = require("express");
var app = express();
global.appname = module.exports.name;
global.appversion = module.exports.version;

console.log("App  %s version %s Started..", appname, appversion);
require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const port = 8080;
app.listen(port, () =>
{
    console.log(`server listen port: ${port}`);
});