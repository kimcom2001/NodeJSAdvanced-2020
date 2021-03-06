const template = require('./template');

module.exports.createForm = function (uname, uid) {
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
    </style>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <a class="navbar-brand" href="#">
                <img src="/img/hoseo.png" alt="호서직업능력개발원"
                    style="height: 40px; margin-left: 50px; margin-right: 100px;">
            </a>
            <ul class="nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/bbs/list/:page"><i class="fas fa-home"></i>&nbsp;홈</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/bbs/create/:uid"><i class="far fa-file"></i>&nbsp;새글&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user/dispatch"><i class="far fa-user"></i>&nbsp;유저정보</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">로그아웃</a>
                </li>
            </ul>
            <div class="navbar-text fixed-right" id="weather">
                ${uname} 반갑습니다.&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fas fa-cloud-sun"></i> 20&deg;C
            </div>
        </nav>
        
    <div class="container">
        <div>
            <h3 style="text-align: center; margin-top: 80px;">게시글 작성</h3>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <form action="/bbs/create/${uid}" method="post">
                    <input type="hidden" name="uid">
                    <div class="form-group"> 
                        <label for="title">제목</label>
                        <input type="text" class="form-control" id="title" placeholder="제목을 입력하세요" name="title">
                    </div>
                    <div class="form-group">
                        <label for="content">내용</label>
                        <textarea class="form-control" rows="15" id="content" placeholder="내용을 입력하세요" name="content"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="position: fixed; right: 270px; bottom: 180px;">작성</button>
                </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>

    ${template.footer()}
    `;
}
  