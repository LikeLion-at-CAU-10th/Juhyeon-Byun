**1. 가상환경(Virtual Environment)**

> Python과 Django는 다양한 모듈을 제공하고 있으먀, 기본 모듈을 제외한 추가적인 모듈은 pip install 명령어를 통해 설치해서 사용해야 한다.   
    가상환경을 켜놓고 모듈을 설치하면, 모듈은 가상환경 내에서만 사용할 수 있다.

**2. 가상환경 설치 및 실행**   

    1) 본인이 작업할 workspace로 이동.
    -> pwd 명령어를 통해 올바른 위치 확인 가능

    2) virtualenv myvenv 명령어 실행.
    -> myvenv라는 이름의 가상환경을 생성하는 명령어
    -> ls 명령어로 myvenv 폴더(가상환경)가 생성된 것 확인 가능

    3) source myvenv/bin/activate 명령어 실행하여 가상환경 켜기
    -> 가상환경이 켜져 있을 때, myvenv라는 표시 나타남

    4) django-admin startproject session06 명령어 실행
    -> session06이라는 이름의 django 프로젝트 생성하는 명령어

    5) cd session06 명령어 실행 후, ls 폴더 내부 조회하면 manage.py, 프로젝트명과 동일한 이름을 가진 session06 폴더가 있는 것 확인 가능

    6) 가상환경 내 django 다시 설치
    -> pip install django

    7) ls 명령어로 manage.py 존재하는 위치에서, python manage.py runserver 명령어 실행하여 서버 켜기

    8) http://127.0.0.1:8000/에 서버 열렸다는 메세지 출력
    -> 장고 서버 생성 성공!
