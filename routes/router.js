const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { // GET 메소드 라우터
    //응답으로 데이터를 json 형식으로 전달한다.
    return res.json(req.app.get('data'))    // app.get 메소드로 전역변수를 불러올 수 있다.
});

router.post('/', (req, res) => {    // POST 메소드 라우터
    var data = req.app.get('data'); // 데이터 변수 접근
    data.push(req.body);        // 데이터 배열에 요청으로 들어온 데이터 추가
    req.app.set('data', data);      // 전역 변수에 저장
    return res.json({result: 1})    // 저장 성공헀다는 응답 반환
});

router.put('/:index', (req, res) => { // PUT 메소드 라우터
    var data = req.app.get('data'); // 데이터 변수 접근
    data.splice(req.params.index, 1, req.body);   // 데이터 배열에서 요청받은 위치의 데이터를 새 데이터로 교체
    req.app.set('data', data);      // 전역 변수에 저장
    return res.json({result: 1});   // 저장 성공헀다는 응답 반환
});

router.delete('/:index', (req, res) => {  // DELETE 메소드 라우터
    var data = req.app.get('data'); //데이터 변수 접근
    data.splice(req.params.index, 1);   //데이터 배열에서 요청받은 위치의 데이터를 제거
    req.app.set('data', data);      // 전역 변수에 저장
    return res.json({result: 1});   // 삭제 성공했다는 응답 반환
});

module.exports = router;    //라우터를 메인 소스코드에서 활용할 수 있게 export