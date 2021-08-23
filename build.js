var inlineCss = require('inline-css');
var fs = require('fs');
var html = fs.readFileSync('./src-email.html', {encoding: 'utf8'});
 
inlineCss(html, {

    // My fork of `JoeBiellik/pleasenospam https://github.com/mreis1/pleasenospam
    url: 'file://', //Foudn usage example for url property here: https://github.com/JoeBiellik/pleasenospam/blob/0a65dc31d6f4286abe36245e9e402e6018d36be5/lib/email-sanitize.js#L33
    preserveMediaQueries: true
})
    .then(function(html) { fs.writeFileSync('./dist-email.html', html, {encoding: 'utf8'}); });
