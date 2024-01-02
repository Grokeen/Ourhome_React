


# 얼른 해야한다. 발표 자료까지 만들어야 한다.
## 프로덕션용 빌드:

개발이 완료되면 프로덕션용 애플리케이션을 빌드를 해야한단다.
그래야 서버에 올라오겠네 그럼 서버를 일일히 껐다가 킬 필요가 없이 개발에 반영되겠다.
```
npm run build
```
프로젝트 규모가 커질 수 록 이 기능이 유용하겠다.

# 깃허브 버전
어제 올려두고 잤는데, 잘못한 것을 알아버렸다.
## 일단 브랜치에 있는 녀석을 삭제해야한다.
```
git branch
git checkout main
```
브랜치 명을 확인하고 체크아웃 시켜준다. 'main'이 브랜치 명이다.

```
git fetch origin
git merge origin/main
```
그리고 로컬 서버로 가져와서 깃허브 서버와 합병을 진행한다. 그 후에는 커밋을 통해 변경사항을 올려야 한다.
vim 명령어가 나오는데, :wq 를 치고 엔터 누르면, 저장 종료 된다.

```
git commit -m "merge"
git push origin main
```


'merge'는 단순히 표기한 메세지 이다. 그리고 평소와 같게 다시 올려주면 된다.


# 폰트 설정 방법
아 잘바구니 기능이랑 게시물 기능 담으면 싯팔 생각보다 규모가 더 크네.
장례식장인데,,,,
[참고(영문)](https://stackoverflow.com/questions/41676054/how-to-add-fonts-to-create-react-app-based-projects)
그니까 index.css에 추가하는 방식이다.


## 반응형 앱 Dom과 js 형식울 위한 prettier
```
npm install react-router-dom axios
npm install --save-dev prettier
npx prettier --write "**/*.js"
```

이건 일단 패스,,,,가 아니라 알았다.
myapp이 있으면 그 안에 만드는 구조였다.
[참고](https://velog.io/@sisofiy626/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0) 내용에 보면 나온다.

my-app
├── node_modules
├── public
├── src
├── .gitignore
├── package.json
└── README.md

위 같은 구조가 되어야 한다. 정적파일은 public에 넣으면 된다. 그래서 제공된 폰트를 넣는다.
그리고 src 디렉토리 내부 구조를 알아야 할 것 같다. 각 기능에 대해서는 [참고](https://velog.io/@sisofiy626/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)를 확인하자.

└─ src
 ├─ components
 ├─ assets 
 ├─ hooks (= hoc)
 ├─ pages
 ├─ constants
 ├─ config
 ├─ styles
 ├─ services (= api)
 ├─ utils
 ├─ contexts
 ├─ App.js
 └─ index.js


 # 리액트 구조,,,
 [유튜브 참고](https://www.youtube.com/watch?v=nahwuaXmgt8)에 보면 그나마 구조에 대해 알기 쉬웠다.

 