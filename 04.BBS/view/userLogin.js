module.exports.loginForm = function() {
    
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <title>My BBS</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"> 
        <link rel="stylesheet" href="/fontawesome-free-5.15.1-web/css/all.min.css">
        <script src="/jquery/jquery.min.js"></script>
        <script src="/popper/popper.min.js"></script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <style>
            /* Make the image fully responsive */
            .carousel-inner img {
              width: 100%;
              height: 100%;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/la.jpg" alt="Los Angeles" width="1100" height="500">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/chicago.jpg" alt="Chicago" width="1100" height="500">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/ny.jpg" alt="New York" width="1100" height="500">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <div>
                <h3 style="text-align: center; margin-top: 30px;">BBS 홈페이지</h3>
            </div>
            <div class="row">
                <div class="col-12"><hr></div>
                <div class="col-3"></div>
                <div class="col-6">
                    <form action="/login" method="post">
                        <table class="table table-borderless">
                            <tr>
                                <td><label for="uid" class="col-form-label">아이디</label></td>
                                <td><input type="text" name="uid" id="uid" class="form-control" placeholder="아이디"></td>
                            </tr>
                            <tr>
                                <td><label for="pwd" class="col-form-label">패스워드</label></td>
                                <td><input type="password" name="pwd" id="pwd" class="form-control" placeholder="패스워드"></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: center;">
                                    <input class="btn btn-primary" type="submit" value="로그인">
                                    <input class="btn btn-secondary" type="reset" value="취소">
                                </td>
                            </tr>
                        </table>
                    </form>
                    <p style="text-align: center;">
    
                    </p>
                </div>
                <div class="col-3"></div>
                <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-success" onclick="location.href='/user/register'">
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}