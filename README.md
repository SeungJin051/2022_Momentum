# 2022_Momentum

("use strict"); // Whole-scripte strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5

// document = your web site
// document.querySelector(""); = CSS형식으로 접근한다.
// document.getElementById(""); = id로 바로 접근가능
// .addEventListener("click", 함수); = element에 해당 event를 했을때 어떤 함수를 실행 할지를 정해줘야함, 실행버튼 () = X

# 왜 json.stringify 함수를 쓰나

(STRINGIFY = 변수 등을 문자열로 바꿈,PARSE = 문자열을 JSON으로 바꿈)
ocalstorage 에서는 문자열밖에 저장할 수 있기 때문에
stringify로 Array 자체를 문자열로 만들고 (["뭐시기","저시기"] ==> "["뭐시기","저시기"]")
나중에 localstorage에서 가지고 온 다음 parse로 문자열을 Array 로 만들어서
불러들이는 걸로 하는거 같아요
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
localStorage안에는 배열은 저장되지 않고 텍스트만 저장되기 때문에 JSON.stringify를 이용해서 배열 형태로 저장시켜주는 것

로컬스토리지에는 문자열밖에 안들어간다 그래서 json.stringify로 문자열으로 만들어 넣어주고
JSON.parse로 다시 우리가 아는 배열로 만들어준다.
