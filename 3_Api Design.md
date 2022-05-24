> ### 1. API

    개발자와 사용자에게 데이터 및 애플리케이션 기능을 제공하는 애플리케이션 프로그래밍 인터페이스(Application Programming Interface, API)의 개발 프로세스

> ### 2. API Design   

- #### Http Request Method   
    - POST : 서버에 특정 데이터를 추가(새로 생성)할 것 요청
        > Request Body가 존재하지 않는다.

        > JSON 형태의 Request Body를 서버에 전달한다.
    - GET : 서버에 특정 데이터를 요청하여 원하는 데이터 얻기
        > Request Body가 존재하지 않는다.

        > Path parameter, Query string을 통해 데이터를 전달한다.
    - PATCH : 특정 데이터의 특정 값을 변경할 것을 요청
    - PUT: 특정 데이터를 전체적으로 변경할 것을 요청

- #### Server Request
    - 200 (OK, 성공)
    - 400 (Bad Request, 잘못된 요청)
    - 401 (Unauthorized, 권한 없음)
    - 403 (Forbidden, 금지됨)
    - 404 (Not Found, 찾을 수 없음)
    - 500 (Internal Server Error)


- #### Footprint 조회 응답
<pre>
{
    "status":200,
    "message": "Footprint 조회 성공",
    "data": {
        "messages": [
            "Javascript 4차 세미나 홧팅!",
            "안녕하세요~"
        ]
    }
}
</pre>


- #### Footrprint 전송 요청 및 응답
    - Request Body
<pre>
{
    "content": "안녕, 주현아~",
    "receiverName": "변주현",
}
</pre>


> ### 3. Shell

    Command-Line Interpreter