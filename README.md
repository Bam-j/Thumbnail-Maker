# Thumbnail Maker 🎨
![Thumbnail_Maker](https://github.com/Bam-j/Thumbnail-Maker/assets/64255763/3a4b82f8-c39d-4783-815b-5ba902a07bd9) <br>
`Thumbnail Maker (썸네일 메이커)` <br>
`ver 1.1.0` <br>
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FBam-j%2FThumbnail-Maker&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
<hr>

## 프로젝트 정보 💬
- `Thumbnail Maker`는 블로그 등에서 사용할 수 있는 썸네일을 생성할 수 있는 웹페이지입니다. ✅
- 간결한 UI를 통해 누구나 쉽게 썸네일을 생성할 수 있습니다. ✅
- **주 타겟층**: 심플한 섬네일을 필요로하지만, 디자인 툴을 사용하기 어려워하는 사람들. ✅

<br>

'썸네일'은 콘텐츠를 축약해서 보여주는 대표 이미지입니다. 그렇기에 썸네일을 달아두면 지나가던 사람들의 주목을 끌 수 있는 좋은 수단이 됩니다. 

그러나 포토샵 등을 배우지 않은 이상 깔끔한 썸네일을 만들기란 쉽지 않습니다. 그렇기에 누구라도 쉽게 썸네일을 만들어서 사용할 수 있도록 프로젝트를 기획하고 제작하게 되었습니다.

<hr>

## 사용법 ✅
- 웹 페이지에서 바로 사용하는 경우는 **[링크](https://bam-j.github.io/Thumbnail-Maker/)** 에서 확인하실 수 있습니다.
<br><br>
- 또는 `git clone 사용`
  1. `git clone 'https://github.com/Bam-j/Thumbnail-Maker.git'`
  2. `yarn install` 또는 `npm install`로 패키지 다운로드
  3. `yarn start` 또는 `npm start`

<hr>

## 사용 기술 🔨🔧
### 주력 기술
`HTML5`, `CSS3`, `JavaScript`, `React.js`
### 기타 라이브러리

- `SCSS`: CSS의 재사용성이나 개발 효율을 위해서 사용했습니다.
- `html2canvas`: 완성된 썸네일의 다운로드를 위해 사용했습니다.
- `React Colorful`: 폰트 및 배경색의 선택을 위해 사용했습니다.
- `React Icons`: 폰트 및 배경색 선택 버튼의 아이콘에 사용했습니다.
- `styled-components`: CSS 파일의 관리를 편하게 하기 위한 `CSS-in-JS` 방식을 위해 선택했습니다.

<hr>

## 기타 ✍
- 프로젝트에 대한 더 자세한 설명은 [블로그 글](https://velog.io/@bami/Thumbnail-Maker)을 참조해주세요.
- [GitHub Wiki](https://github.com/Bam-j/Thumbnail-Maker/wiki)

<hr>

## 예정 개선 사항

- <del>UI를 좀 더 심플하고 깔끔한 디자인으로 변경 (`mui`나 `ant design`의 라이브러리 사용도 고려)</del> (적용 완료!)
- 점진적인 UI 개선
- 배경에 *이미지*를 첨부할 수 있게 조정
- 다크 모드와 라이트 모드 구현
- JSX -> TSX 변환
- 배경색, 글자색 선택 상태가 Picker 값에 설정되지 않음.
- 배경색, 글자색 버튼 UI 개선. (버튼 크기, 디자인 일관성)