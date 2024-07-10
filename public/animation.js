const moon = document.getElementById('mMoon');
const light = document.getElementById('light');
const headerMoon = document.querySelector("#left-nav > div:nth-child(1) > img");

var startX;
var startY;

function adjustLight() {
  console.log("adjust");

  const headerMoonRect = headerMoon.getBoundingClientRect();
  const lightRect = light.getBoundingClientRect();
  const moonRect = moon.getBoundingClientRect();

  const lightWidth = light.offsetWidth;

  if (!light.style.top) {
    startX = headerMoonRect.left;
    startY = headerMoonRect.top - lightRect.height / 2 + headerMoonRect.height*3;

    light.style.top = `${startY}px`;
    light.style.left = `${startX}px`;
  }

  console.log(startX, startY);

  light.style.transform = "";

  const angle = Math.atan2((moonRect.top) - startY, (moonRect.left + moonRect.width*0.3) - startX) * 180 / Math.PI + 1.3;
  light.style.transform = `rotate(${angle}deg)`;

  const scale = Math.sqrt(Math.pow(moonRect.top - startY,2) + Math.pow(moonRect.left - startX + moonRect.width*0.3,2))/1023;
  light.style.transform += ` scale(${scale})`;
  console.log(scale);
}

window.addEventListener('resize', adjustLight);
window.addEventListener('load', adjustLight);

document.addEventListener("scroll", adjustLight)

gsap.to("#mMoon", { //움직일 대상의 selector
  scrollTrigger: {
      trigger: "#mMoon", // 스크롤을 감지할 대상의 selector
      start: "150% 0%", // trigger의 0% 지점과 viewport의 0% 지점이 만나면 애니메이션 시작
      end: "200% 100%", // trigger의 100% 지점과 viewport의 100% 지점이 만나면 애니메이션 종료
      scrub: 2.3, // 반대로 스크롤할때도 애니메이션을 반대로 적용할지 여부
      //markers: true, // trigger의 시작, 끝 지점을 보여줌 (디버깅용)
  },
  onUpdate: () => {
    console.log("애니메이션이 업데이트 중입니다.");
    adjustLight();
  },
  ease: "none", // 애니메이션의 속도 곡선
  top: headerMoon.getBoundingClientRect().top+10, // 애니메이션의 속성
  left: headerMoon.getBoundingClientRect().left, // 애니메이션의 속성
  width : headerMoon.getBoundingClientRect().width-9,
  // height: headerMoon.getBoundingClientRect().height,
  // position: "fixed",
  rotate: "26deg",
});

gsap.to("#light2", {
  scrollTrigger:{
      trigger: "#mMoon", // 스크롤을 감지할 대상의 selector
      start: "300% 0%", // trigger의 0% 지점과 viewport의 0% 지점이 만나면 애니메이션 시작
      end: "200% 100%", // trigger의 100% 지점과 viewport의 100% 지점이 만나면 애니메이션 종료
      scrub: 1, // 반대로 스크롤할때도 애니메이션을 반대로 적용할지 여부
      //markers: true, // trigger의 시작, 끝 지점을 보여줌 (디버깅용)    
    },
    opacity: 1,
})

document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX-10; // document의 x좌표값
  let mouseY = e.pageY-10; // document의 y좌표값

  let cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
})

gsap.fromTo(
  "#posts", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
      opacity: 1, //적용할 상태
      y: 0, //적용할 상태
      scrollTrigger: {
          trigger: "#posts",
          start: "20% 80%",
          end: "100% 100%",
          scrub: 1,
          //markers: true,
      },
  }
);

gsap.fromTo(
  "#page3", // 스크롤 애니메이션을 적용할 대상
  { opacity: 0, y: 100 }, // 초기상태
  {
      opacity: 1, //적용할 상태
      y: 0, //적용할 상태
      scrollTrigger: {
          trigger: "#page3",
          start: "20% 80%",
          end: "100% 100%",
          scrub: 1,
          //markers: true,
      },
  }
);