//express 불러오기
const express =require("express");
//express 사용
const app =express();
//포트 번호 설정
const port =5000;
//path import
const path =require("path");

//http 서버 실행
app.listen(port,()=>{
    console.log("서버가 정상적으로 실행되었습니다.");
});
//http:/localhost:5000/ 경로로 접근하면
app.get("/",(request,response)=>{
    response.send("수정하세요요입니다");
    return response.render("server",{title:"제목",max: 5}); //response 객체로 응답을 보낸 수 있다.
});
const mainRouter =require("./routes/router"); //라우터 파일을 임포트
app.use("/",mainRouter);//경로에 router.js파일의 라우트들을 할당

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));    // 쿼리 스트링 형식 바디 파싱
app.use(bodyparser.json()); // json 형식 바디 파싱

app.set('data', []);    // Express 객체인 app에 set 메소드로 전역 변수를 선언할 수 있다.

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.engine('html', require('ejs').renderFile);
