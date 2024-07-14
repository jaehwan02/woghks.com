const articles = [
  {
    title: 'GSAP를 이용한 애니메이션',
    content: 'GSAP는 강력한 애니메이션 라이브러리로 다양한 효과를 줄 수 있습니다.',
    link: '../articles/article-gsap.html',
  },
  {
    title: '자바스크립트 기초',
    content: '자바스크립트는 웹 개발에 필수적인 프로그래밍 언어입니다.',
    link: '../articles/article-js.html',
  },
  {
    title: 'HTML5의 새로운 기능들',
    content: 'HTML5는 웹 개발에 많은 새로운 기능들을 추가했습니다.',
    link: '../articles/article-html5.html',
  },
  {
    title: 'CSS 기초',
    content: 'CSS는 Cascading Style Sheets의 약자로, 웹 페이지의 스타일을 지정하는 데 사용됩니다.',
    link: '../articles/article-css.html',
  },
  {
    title: 'React를 이용한 웹 개발',
    content: 'React는 Facebook에서 개발한 자바스크립트 라이브러리로, 사용자 인터페이스를 구축하는 데 사용됩니다.',
    link: '../articles/article-react.html',
  },
  {
    title: 'Node.js로 서버 개발하기',
    content: 'Node.js는 서버 사이드에서 자바스크립트를 실행할 수 있게 하는 런타임 환경입니다.',
    link: '../articles/article-node.html',
  },
  {
    title: 'Python 기초',
    content: 'Python은 다양한 용도로 사용되는 고수준 프로그래밍 언어입니다.',
    link: '../articles/article-python.html',
  },
  {
    title: 'Django로 웹 개발하기',
    content: 'Django는 Python 기반의 웹 프레임워크로, 신속한 웹 개발을 지원합니다.',
    link: '../articles/article-django.html',
  },
  {
    title: 'Vue.js로 프론트엔드 개발하기',
    content: 'Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브 자바스크립트 프레임워크입니다.',
    link: '../articles/article-vue.html',
  },
];

function performSearch(query) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  let resultsFound = false;

  articles.forEach((article) => {
    const title = article.title.toLowerCase();
    const content = article.content.toLowerCase();

    if (!query || title.includes(query) || content.includes(query)) {
      resultsContainer.innerHTML += `
                <a href="${article.link}">
                  <div class="result">
                      <h3>${article.title}</h3>
                      <p>${article.content}</p>
                  </div>
                </a>
              `;
      resultsFound = true;
    }
  });

  if (!resultsFound) {
    resultsContainer.innerHTML = '<p id="none-search">검색 결과가 없습니다.</p>';
  }
}

document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const query = document.getElementById('search-input').value.toLowerCase();
  performSearch(query);
});

document.addEventListener('DOMContentLoaded', function () {
  const query = localStorage.getItem('searchQuery')?.toLowerCase() || '';
  document.getElementById('search-input').value = query;
  performSearch(query);

  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView();
    }
  }
});

window.addEventListener('hashchange', function () {
  const element = document.querySelector(window.location.hash);
  if (element) {
    element.scrollIntoView();
  }
});
