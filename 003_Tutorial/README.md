# Package.json
## dependencies

```
"dependencies": {
    "date-fns": "^4.1.0",
    "uuid": "^11.1.0"
  }
```

> ^4(메이저 버전).1(마이너 버전).0(패치)  
> ^(캐럿) -> 마이너, 패치는 바뀌어도 됨  
> ~(틸드) -> 패치만 건들여도 됨  
> ex. "date-fns": * => 항상 최신 버전 유지(비권장)


### module
1. nodemon : node 변경사항 추적
2. date-fns: 날짜 라이브러리
3. uuid: 유니크 id 생성 라이브러리