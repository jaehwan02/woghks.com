function initializeAnimations() {
  const moon = document.getElementById('mMoon');
  const light = document.getElementById('light');
  const headerMoon = document.querySelector('#left-nav > div:nth-child(1) > img');

  if (!moon || !light || !headerMoon) {
    console.error('에러');
    return;
  }

  function initialize() {
    adjustLight();
    window.addEventListener('resize', adjustLight);
    window.addEventListener('scroll', adjustLight);
  }

  requestAnimationFrame(initialize);

  gsap.to('#mMoon', {
    scrollTrigger: {
      trigger: '#mMoon',
      start: '150% 30%',
      end: '200% 0%',
      scrub: 1.5,
    },
    onUpdate: () => {
      console.log('정상');
      adjustLight();
    },
    ease: 'none',
    top: headerMoon.getBoundingClientRect().top + 5,
    left: headerMoon.getBoundingClientRect().left,
    width: headerMoon.getBoundingClientRect().width - 11,
    rotate: '26deg',
    opacity: 0,
  });

  gsap.to('#light2', {
    scrollTrigger: {
      trigger: '#mMoon',
      start: '400% 0%',
      end: '200% 100%',
      scrub: 1,
    },
    opacity: 1,
  });

  gsap.fromTo(
    '#posts',
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#posts',
        start: '20% 80%',
        end: '100% 100%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    '#page3',
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#page3',
        start: '20% 80%',
        end: '100% 100%',
        scrub: 1,
      },
    },
  );

  gsap.to('#sMoon', {
    filter: 'drop-shadow(0px 0px 5px #FFF)',
    scrollTrigger: {
      trigger: '#mMoon',
      start: '410% 0%',
      end: '200% 100%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#page4', {
    xPercent: -300,
    ease: 'none',
    scrollTrigger: {
      trigger: '#page4',
      pin: true,
      scrub: 1,
      end: () => '+=' + document.querySelector('#page4').offsetWidth,
    },
  });

  gsap.to('#circle', {
    x: -window.innerWidth + 50,
    scale: 300,
    ease: 'none',
    opacity: 3,
    scrollTrigger: {
      trigger: '#page4',
      start: 'top top',
      end: () => '+=' + document.querySelector('#page4').offsetWidth,
      scrub: 1,
    },
  });

  gsap.to('.circle2', {
    scrollTrigger: {
      trigger: '#last',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
    scale: 100,
    opacity: 3,
    ease: 'none',
  });
}
