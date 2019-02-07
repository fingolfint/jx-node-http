module.exports = function(app)
{
   var os = require("os");
   var hostname = os.hostname();
   
   console.log("Main  %s version %s Started..", appname, appversion);

     app.get('/',function(req,res){
        res.render('index.html', {hostname : hostname, appname : appname, appversion: appversion});
     });
     /* app.get('/about',function(req,res){
        res.render('about.html');
    }); */
}