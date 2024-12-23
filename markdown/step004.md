

# 정리
아 뭘 했다고 마지막 날일까.,,,,



## 오늘 해야할 일.
1. 세션에 값이 들어가게 , 계속 쇼핑하기랑 장바구니 확인하기 선택할 수 있게
2. 그 값이 반복문이든 뿌려질 수 있도록 
3. 수량에 따른 바인딩 작업 
4. 장바구니 css ⭕️
5. 발표자료 만들기.

# 아 경로
[참고1](https://kyuntechblog.tistory.com/22)
[참고2](https://sapjil.net/react-basename-error/)
[참고3](https://tech.kakao.com/2022/07/13/active-routing-for-e-certificate/)
[참고4](https://www.youtube.com/watch?v=vI-XtN_Zdfg)
[참고5](https://www.youtube.com/watch?v=xVeFY1Eq28g)
[참고6](https://www.youtube.com/watch?v=xVeFY1Eq28g)
마지막 걸로 해결했다,,,, 어휴,,,, import {} 맨 앞자리를 대문자로 바꾸니까 되더라.
이걸로 한 네시간 소비한 거 같은데,,,,

## 갑자기 나온 경고문
ne of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away. 

갑자기 설치하란다.

npm install @babel/plugin-proposal-private-property-in-object --save-dev

index.js에 뭘 설정헤야 상대경로가 가능한지 잘 모르겠다. 잘 안된다.

[rest,restAPI,restful 특징 차이](https://hahahoho5915.tistory.com/54)

