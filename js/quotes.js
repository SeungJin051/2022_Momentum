const quotes = [
  {
    quote: "배우는 사람은 모름지기 심신을 수련해야 한다.",
    author: "퇴계 이황",
  },
  {
    quote: "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다.",
    author: "안중근 의사",
  },
  {
    quote: "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다.",
    author: "김유신 장군",
  },
  {
    quote: "똥이나 처먹어 이 새끼들아.",
    author: "김두한",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const allTImeQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = allTImeQuote.quote;
author.innerHTML = allTImeQuote.author;
