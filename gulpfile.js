var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var compass = require('compass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var fs = require('fs');

gulp.task('test', function ()
{
    var arguments = process.argv;
    var projectName;
    var className;
    
    if (arguments.indexOf("--project") > -1) 
    {
        var projectNameIndex = arguments.indexOf("--project") +1;
        projectName = arguments[projectNameIndex];
    } 
    
    if (arguments.indexOf("--class") > -1) 
    {
        var classNameIndex = arguments.indexOf("--class") + 1;
        className = arguments[classNameIndex];
    } 
    
    var content;
    fs.readFile('core.js', function read(err, data) 
    {
        if (err) 
        {
            console.log("ERRROR");
        }
        
        content = data.toString('utf8');
        
        content = content.split("#namespace").join(projectName);
        content = content.split("#Name").join(className);

        fs.writeFileSync(className + '.js', content);
    });
});