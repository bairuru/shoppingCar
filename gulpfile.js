/**
 * Created by 白茹茹 on 2017/10/18.
 */
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");


gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                console.log(requestUrl);
                if (requestUrl == "/api") {
                    var data = [{
                        id: 1,
                        tit: "人人都是产品经理",
                        image: "./Content/images/photo_01.jpeg",
                        content: "2017/10/18中工十九大召开，习近平主席发言表示，我国将在未来五年消灭贫穷人口。",
                        num: 1,
                        price: 200
                    },
                        {
                            id: 1,
                            tit: "web前端开发实战",
                            image: "./Content/images/photo_02.jpeg",
                            content: "用于搭建前端网页框架",
                            num: 1,
                            price: 180
                        }
                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 8080
        }))
});