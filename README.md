# <div style="font-size:3rem" align = "center"> Sanity Blog </div>

[Sanity](https://www.sanity.io/)에서 제공하는 DB와 인터페이스를 기반으로 작성된 게시글을 조회하는 Next.js 기반 `SSR(Server-Side-Rendering)`사이트입니다. Sanity DB는 보안상의 이유로 Repository 내에는 제공되지 않으며 Front-End 단의 코드만 공개처리되어 있습니다.

## 🍳 TodoList

---

- 현재 작성된 게시글을 조회하는 기능만 구현되어 있습니다.

- 게시글 수정 및 작성기능 구현예정, 단 Sanity 무료 기능의 한계로 별도의 권한계정 생성기능은 구현불가 상태

&nbsp;

# <div style="text-align:center">📚 Stacks</div>

<div style="text-align:center">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/sanity-EAF262?style=for-the-badge&logo=sanity&logoColor=black">
<img src="https://img.shields.io/badge/material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/Recoil_State-CA4245?style=for-the-badge&logo=atom&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

</div>

&nbsp;

# <div style="text-align:center">⚽ Installation</div>

Note: `package.json` 에 관련 dependency가 등록되어 있습니다.

[Netlify](https://www.netlify.com/) 로 온라인 배포되어 있습니다.<br><br>
별도의 코드 review 없이 결과물을 조회하고 싶다면 이쪽을 권장합니다. <br>

🔑 배포 링크 : https://incredible-kangaroo-b4b5e0.netlify.app/

&nbsp;

## ⚡Development 모드로 실행

---

&nbsp;
현 Repository 를 `git clone` 합니다.

```
git clone https://github.com/FriedBob/sanity-nextjs-blog.git
```

&nbsp;

터미널 상에서 다음 명령어를 입력하여 연관 패키지를 설치합니다.

```
npm install
```

&nbsp;

이후 프로젝트를 실행하기 위해서 다음 코드를 터미널 상에서 입력합니다.

```
npm run dev
```

프로젝트는 https://localhost:3000 상에서 실행됩니다. <br><br>

&nbsp;
`git clone`한 프로젝트의 `next.config.js` 파일에 연동하기위한 Sanity의 백엔드 `project id`가 기술되어있습니다.

&nbsp;

## ⚡Production 모드로 실행

---

온라인 배포된 프로젝트는 기본적으로 `Production` 모드로 동작합니다.<br>
이 항목은 Local 상에서 `Production` 모드로 프로젝트를 실행하는 법을 안내합니다.<br><br>

터미널 상에서 다음 코드를 입력하여 프로젝트를 빌드합니다.

```
npm run build
npm run export
```

&nbsp;

이후 다음 코드를 입력하여 프로젝트를 `Production` 모드로 실행할 수 있습니다.

```
npm start
```

&nbsp;

포트는 `Development` 모드와 동일한 https://localhost:3000 입니다.

&nbsp;

Next.js의 `getStaticProps`와 `getStaticPath`를 활용한 `SSG(Static-Site-Generation)` 방식을 사용하여 정적 페이지를 빌드 타임에 미리 생성, 요청 시 반환하여 페이지 라우팅 / 로딩이 `Development` 모드에 비해 빠릅니다.

&nbsp;&nbsp;

# <div style="text-align:center">🏫 Features</div>

&nbsp;

## 랜딩 페이지

---

- 로그인 ID/Password는 미리 등록되어있는 `localDB.json` 에서 확인 가능

```
npm start
npx json-server ./localDB.json --port 5500
```

- 프로젝트를 실행하고 , localDB의 서버를 5500 port로 실행시킨 이후 정상적으로 로그인 진행 가능
<div style="text-align:center">
  <img src="public/login.gif" width="600px"/>
</div>

&nbsp;

## 게시글

---

<div style="text-align:center">
  <img src="public/comment_look.gif" width="600px"/>
</div>

## 게시글 리스트

---

<div style="text-align:center">
  <img src="public/book_add.gif" width="600px"/>
</div>

## About 페이지

---

<div style="text-align:center">
  <img src="public/book_delete.gif" width="600px"/>
</div>

&nbsp;

# <div style="text-align:center">🖊️ Script</div>

- 터미널 상에서 아래의 스크립트로 동작합니다.

&nbsp;&nbsp;

## `npm start`

---

```
npm start
```

브라우저를 열어 프로젝트를 실행시킵니다. <br/><br/>
또는 명령어 입력 후 브라우저를 직접 열어 http://localhost:3000 주소에서 결과를 볼 수 있습니다.

&nbsp;&nbsp;

## `npm build`

---

```
npm build
```

프로젝트를 빌드합니다. <br/><br/>
빌드 후 생성된 `build` 폴더는 배포 시 해당 폴더가 배포됩니다.
