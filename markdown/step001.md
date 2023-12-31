

# node.js 설치
[여기](https://nodejs.org/en)에서 LTS로 설치한다. LTS는 장기 지원 버전, 곧 LTS(Long Term Support)는 일반적인 경우보다 장기간에 걸쳐 지원하도록 특별히 고안된 소프트웨어의 버전 또는 에디션이다. 이것은 특히 리눅스를 비롯한 오픈소스 프로젝트에서 적용되고 있다.


## prettier 설치(프리어 : 더 예쁜)
```
npm install --save-dev prettier
```
이렇게 치면 자동을도 틀은 만들어지네


## 전역 설치 vs. 로컬 설치
Prettier가 전역적으로 설치된 경우 '.js' 파일이 있는 특정 프로젝트 디렉터리에서 실행

(나는) 로컬에 설치된 경우 npx를 사용하여 실행
```
npx prettier --write "**/*.js
```
코드 형식 지정 작업이다.
예를 들어 프로젝트의 모든 JavaScript 파일 형식을 지정하려면 위처럼 사용할 수 있다.


### 타입을 찾을 수 없다는 오류
[error] No files matching the pattern were found: "**/*.js". 라는 오류가 발생.
.js 파일이 있는 디렉토리로 이동해 준 후 다시 해보았다.
된다. 휴,,,,, 근데 이게 뭐하는 작업인 걸까?

### prettier 작업의 이유
1. 코드 편집기와 통합: 
    - 보다 원활한 환경을 위해 Prettier를 코드 편집기에 통합할 수 있습니다. Visual Studio Code, Sublime Text, Atom과 같은 가장 널리 사용되는 편집기에는 Prettier용 확장 프로그램이나 플러그인이 있습니다. 설치한 후에는 저장 시 파일 형식을 지정하거나 바로가기를 사용하여 특정 파일 형식을 지정하도록 편집기를 구성할 수 있습니다.
2. 파일 무시: 
    - Prettier에서 포맷하지 않으려는 파일이 있는 경우 .gitignore를 사용하는 방법과 유사하게 .prettierignore 파일을 만들고 그 안에 해당 파일이나 패턴을 나열할 수 있습니다.
    - .prettierignore 라는게 있다.

3. Linter와 함께 Prettier 사용: 
    - ESLint 또는 TSLint와 같은 Linter를 사용하는 경우 Prettier를 이들과 통합할 수 있습니다. 
    - eslint-plugin-prettier와 같은 플러그인은 Prettier를 ESLint 규칙으로 실행합니다. 
    - 이렇게 하면 코드가 스타일 규칙을 준수할 뿐만 아니라 Linter가 적용하는 모범 사례도 준수할 수 있습니다.

4. 형식 자동화: 
    - 개발 작업 흐름에서 형식 지정 프로세스를 자동화할 수 있습니다. 
    - 예를 들어 Husky와 같은 도구를 사용하여 커밋 전 후크를 설정할 수 있습니다. 이 후크는 커밋할 때마다 자동으로 코드 형식을 지정합니다.
5. 일관성 유지: 
    - 프로젝트에 참여하는 모든 사람이 동일한 Prettier 구성을 사용하는지 확인하는 것이 중요합니다. 
    - 이러한 일관성은 팀 전체에서 균일한 코드 스타일을 유지하는 데 도움이 되므로 협업이 더욱 원활해집니다.
6. 지속적 통합: 
    - Prettier를 CI/CD 파이프라인에 통합할 수 있습니다. 
    - 이렇게 하면 모든 코드가 기본 코드베이스에 병합되기 전에 형식이 지정되어 코드 품질과 일관성이 유지됩니다.
    - [CI/CD 참고.](https://www.servicenow.com/kr/products/devops/what-is-cicd-pipeline.html)

등이 있다고 한다.

## 웹서버 실행해볼까
[참고1](https://webclub.tistory.com/40)
```
 node server.js
```

[참고2](https://study-with-ej.tistory.com/24)