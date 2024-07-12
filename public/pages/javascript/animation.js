const moon = document.getElementById('mMoon');
const light = document.getElementById('light');
const headerMoon = document.querySelector('#left-nav > div:nth-child(1) > img');

var startX;
var startY;

function adjustLight() {
  console.log('adjust');

  const headerMoonRect = headerMoon.getBoundingClientRect();
  const lightRect = light.getBoundingClientRect();
  const moonRect = moon.getBoundingClientRect();

  const lightWidth = light.offsetWidth;

  if (!light.style.top) {
    startX = headerMoonRect.left;
    startY = headerMoonRect.top - lightRect.height / 2 + headerMoonRect.height * 3;

    light.style.top = `${startY}px`;
    light.style.left = `${startX}px`;
  }

  console.log(startX, startY);

  light.style.transform = '';

  const angle =
    (Math.atan2(moonRect.top - startY, moonRect.left + moonRect.width * 0.3 - startX) * 180) / Math.PI + 1.3;
  light.style.transform = `rotate(${angle}deg)`;

  const scale =
    Math.sqrt(Math.pow(moonRect.top - startY, 2) + Math.pow(moonRect.left - startX + moonRect.width * 0.3, 2)) / 1023;
  light.style.transform += ` scale(${scale})`;
  console.log(scale);
}

window.addEventListener('resize', adjustLight);
window.addEventListener('load', adjustLight);

document.addEventListener('scroll', adjustLight);

gsap.to('#mMoon', {
  //움직일 대상의 selector
  scrollTrigger: {
    trigger: '#mMoon', // 스크롤을 감지할 대상의 selector
    start: '150% 30%', // trigger의 0% 지점과 viewport의 0% 지점이 만나면 애니메이션 시작
    end: '200%  0%', // trigger의 100% 지점과 viewport의 100% 지점이 만나면 애니메이션 종료
    scrub: 1.5, // 반대로 스크롤할때도 애니메이션을 반대로 적용할지 여부
    ///markers: true, // trigger의 시작, 끝 지점을 보여줌 (디버깅용)
  },
  onUpdate: () => {
    console.log('애니메이션이 업데이트 중입니다.');
    adjustLight();
  },
  ease: 'none', // 애니메이션의 속도 곡선
  top: headerMoon.getBoundingClientRect().top + 5, // 애니메이션의 속성
  left: headerMoon.getBoundingClientRect().left, // 애니메이션의 속성
  width: headerMoon.getBoundingClientRect().width - 11,
  // height: headerMoon.getBoundingClientRect().height,
  // position: "fixed",
  rotate: '26deg',
});

gsap.to('#light2', {
  scrollTrigger: {
    trigger: '#mMoon', // 스크롤을 감지할 대상의 selector
    start: '400% 0%', // trigger의 0% 지점과 viewport의 0% 지점이 만나면 애니메이션 시작
    end: '200% 100%', // trigger의 100% 지점과 viewport의 100% 지점이 만나면 애니메이션 종료
    scrub: 1, // 반대로 스크롤할때도 애니메이션을 반대로 적용할지 여부
    //markers: true, // trigger의 시작, 끝 지점을 보여줌 (디버깅용)
  },
  opacity: 1,
});

gsap.fromTo(
  '#posts', // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: '#posts',
      start: '20% 80%',
      end: '100% 100%',
      scrub: 1,
      //markers: true,
    },
  },
);

gsap.fromTo(
  '#page3', // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
    opacity: 1, //적용할 상태
    y: 0, //적용할 상태
    scrollTrigger: {
      trigger: '#page3',
      start: '20% 80%',
      end: '100% 100%',
      scrub: 1,
      //markers: true,
    },
  },
);

gsap.to('#sMoon', {
  filter: 'drop-shadow(0px 0px 5px #FFF)',
  scrollTrigger: {
    trigger: '#mMoon',
    start: '410% 0%', // trigger의 0% 지점과 viewport의 0% 지점이 만나면 애니메이션 시작
    end: '200% 100%', // #sMoon 요소의 하단이 뷰포트의 20% 위치에 도달할 때 애니메이션 끝
    //markers: true, // 스크롤 트리거 위치 표시
    toggleActions: 'play none none reverse', // 스크롤 방향에 따라 애니메이션 제어
  },
});

gsap.registerPlugin(ScrollTrigger);

// 가로 스크롤 애니메이션
gsap.to('#page4', {
  xPercent: -300, // 전체 너비에서 200%를 뺀 값으로 이동 (3개의 섹션이므로 200%)
  ease: 'none',
  scrollTrigger: {
    trigger: '#page4',
    pin: true,
    scrub: 1,
    end: () => '+=' + document.querySelector('#page4').offsetWidth, // 컨테이너의 전체 너비만큼 스크롤
    //markers: true, // 스크롤 트리거 위치 표시
  },
});

// 원 크기 및 위치 애니메이션
gsap.to('#circle', {
  x: -window.innerWidth + 50, // 원이 오른쪽에서 왼쪽으로 이동
  scale: 1500, // 원의 크기를 5배로 키움
  ease: 'none',
  scrollTrigger: {
    trigger: '#page4',
    start: 'top top',
    end: () => '+=' + document.querySelector('#page4').offsetWidth, // 컨테이너의 전체 너비만큼 스크롤
    scrub: 1,
    //markers: true // 스크롤 트리거 위치 표시
  },
});
