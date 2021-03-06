module.exports.mainForm = function(rows) {
    let tableRow = ''; // [];으로 하나 '';로 하나 결과는 같다.
    for (let row of rows) {
        tableRow += `<tr>
                        <td style="padding: 10px;">${row.uid}</td>
                        <td style="padding: 10px;">${row.uname}</td>
                        <td style="padding: 10px;">${row.regDate}</td>
                        <td>
                            <a href="#">수정</a>
                            <a href="#">삭제</a>
                        </td>
                    </tr>`;
    }
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>사용자 관리</title>
</head>
<body>
    <h3>사용자 조회</h3>
    <hr>
    <table>
        <tr>
            <th>uid</th>
            <th>이름</th>
            <th>등록일</th>
            <th>액션</th>
        </tr>
        ${tableRow}
        <td colspan="4" style="text-align: center">
            <button onclick="location.href='/login'">로그인</button>
        </td>
    </table>
</body>
</html>
    `;
}