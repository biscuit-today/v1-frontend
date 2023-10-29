![메인이미지](https://user-images.githubusercontent.com/50512938/232665780-68fe277a-7f59-460c-880d-fb48f5db3d39.png)

<br/>

### 📋 프로젝트 개요

> **프로젝트명** : 비스킷 <br/> **개발 기간** : 2023년 02월 20일 ~ 2023년 04월 07일 (7주) <br/> **분류** : 팀 프로젝트 <br/> **팀 구성** : 프론트엔드 3명, 백엔드 3명 <br/> 
<br/>
<br/>
<br/>

### 🧑‍🤝‍🧑 팀 정보

| 이름   | 역할                            |
| ------ | ------------------------------- |
| 유한별 | 팀장, FE 개발                   |
| 이은지 | FE 개발, UI/UX 디자인, UCC 제작 |
| 박유진 | FE 개발                         |
| 김영빈 | 데이터 분석, BE 개발            |
| 김준호 | 부팀장, BE 개발                 |
| 이지영 | BE 개발, CI/CD                  |

<br/>
<br/>
<br/>

### 🔍 기획 배경

> 우리에게 필요하고 당장 쓸 수 있는 서비스를 만들자!

우리에게 필요한 서비스를 개발하고자, 팀원들이 가지고 있는 기술 컨텐츠에 대한 니즈를 반영하여 기획했습니다.

##### 우리의 Needs

- 출퇴근 시간과 같은 자투리 시간을 활용해 기술 공부를 하고 싶다.
- 다양한 기술 컨텐츠(영상, 글)이 여러 플랫폼에 분산되어 있어 선택하기 어렵다.

##### 솔루션

" 개인 맞춤 큐레이션 "

- 사용자의 시간, 관심 기술, 기술 수준에 맞춰 기술 컨텐츠를 추천

" 정확한 추천 알고리즘 "

- 사용자가 컨텐츠를 보고 나면 해당 컨텐츠에 대한 피드백(난이도)를 받아 추천 정확도 향상

" 게이미피케이션 "

- ChatGPT를 활용한 퀴즈를 통해 학습 효과를 강화
- 잔디 및 포인트를 통해 지속적으로 비스킷을 사용할 동기를 부여

<br/>
<br/>
<br/>

### ⚙️ 핵심 기능

> 기술 컨텐츠 추천

- 비로그인 시에는 최신 컨텐츠와 인기 컨텐츠 및 랜덤 카테고리 컨텐츠가 홈화면에서 추천됩니다.
- 로그인 시에는 사용자의 히스토리와 비슷한 사용자가 본 컨텐츠, 관심 카테고리 컨텐츠가 추천됩니다.

> 퀴즈 및 포인트

- 컨텐츠를 보고 나면 ChatGPT를 통해 생성한 퀴즈가 제공됩니다.
- 로그인한 사용자만 퀴즈의 정답을 확인할 수 있습니다.
- 로그인한 사용자는 맞춘 퀴즈의 갯수만큼 포인트를 획득합니다.

> 대시보드

- 퀴즈를 맞출 때마다 해당 날짜의 잔디가 채워집니다.
- 사용자가 본 컨텐츠들의 카테고리를 분석한 내용을 시각화하여 제공합니다.

<br/>
<br/>
<br/>

### 💡 주요 기능

1.  홈

    - 로그인, 비로그인 각 상태에 따른 컨텐츠 추천

2.  로그인

    - 구글 소셜 로그인
    - 회원가입시 닉네임, 직무, 연차, 관심사 설문조사

3.  퀴즈

    - 제공된 퀴즈 데이터를 조건에 맞게 가공
    - 사용자의 선택과 데이터를 비교하여 퀴즈 결과 표시

4.  검색

    - 검색어에 따른 결과 무한스크롤 구현

5.  카테고리

    - 카테고리에 따른 결과 무한스크롤 구현

6.  북마크 및 히스토리

    - 북마크 및 히스토리 무한스크롤 구현

7.  마이페이지

    - 회원정보 수정
    - 대시보드(잔디 및 포인트, 카테고리 리포트) 구현

<br/>
<br/>
<br/>

### 🎨 기능 상세 및 구현 화면

#### 1) 홈
<img src="https://user-images.githubusercontent.com/50512938/232665837-8ebd302c-f842-425e-a4e4-0bcb359ca682.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232665843-554748cc-8960-44e3-9e77-063a5664707f.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232665844-8b743f9a-6fcb-49da-9808-ea260a9dc515.png" width="30%"/>

#### 2) 피드백

<img src="https://user-images.githubusercontent.com/50512938/232667194-45646aa0-6406-45f2-bd76-f52ea5d83851.png" width="30%"/>

#### 3) 퀴즈

##### 비로그인시

<img src="https://user-images.githubusercontent.com/50512938/232667190-88188782-62f3-47cd-aa01-eea12b3e8016.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232667194-45646aa0-6406-45f2-bd76-f52ea5d83851.png" width="30%"/>

##### 로그인시

<img src="https://user-images.githubusercontent.com/50512938/232666364-1a71b62b-5021-4402-9657-df55536d73ed.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232666425-a38639a1-3662-4b6d-a96e-679aa288d9db.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232666430-7e94f09c-9208-4ee7-8462-c4b94f418eec.png" width="30%"/>

#### 4) 로그인 및 회원가입

<img src="https://user-images.githubusercontent.com/50512938/232666609-eeb218db-7d5d-4a5f-ad70-5f0af4a6a326.png" width="24%"/> <img src="https://user-images.githubusercontent.com/50512938/232666611-e3f98b98-d0b0-433e-bac8-173f24359e23.png" width="24%"/> <img src="https://user-images.githubusercontent.com/50512938/232666612-fde870dc-ddfe-44d1-8cd8-6034a4995fbd.png" width="24%"/> <img src="https://user-images.githubusercontent.com/50512938/232666613-7b24b26e-bae1-4437-93d3-89b03357f533.png" width="24%"/>

#### 5) 마이페이지

<img src="https://user-images.githubusercontent.com/50512938/232666737-dd03dfaa-512c-4876-8630-9fd8e3638ed4.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232666740-651e30c1-eda1-42ea-a07c-a7fe1fb02107.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232666742-e9b6dbd1-01a5-48b1-bcb1-b4a01a5830f3.png" width="30%"/>

#### 6) 북마크 및 히스토리

<img src="https://user-images.githubusercontent.com/50512938/232666853-d96395aa-e4cb-40c6-9ae1-9572e82e1a11.png" width="30%"/> <img src="https://user-images.githubusercontent.com/50512938/232666855-ee00e3b0-d81a-49d6-b943-2482184078f0.png" width="30%"/>

<br/>
<br/>
<br/>

