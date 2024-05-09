// var I = function () {
//   function e() {
//     !(function (e, t) {
//       if (!(e instanceof t))
//         throw new TypeError('Cannot call a class as a function');
//     })(this, e),
//       (this.DOM = {
//         ghostText: '.js-ghost-text',
//       }),
//       (this.ghostText = document.querySelectorAll(this.DOM.ghostText)),
//       this.init();
//   }
//   var t, n, i;
//   return (
//     (t = e),
//     (n = [
//       {
//         key: 'init',
//         value: function () {
//           var e,
//             r = this;
//           (null === (e = this.ghostText) || void 0 === e ? void 0 : e.length) >
//             0 &&
//             this.ghostText.forEach(function (e) {
//               r.ghostSingleText(e);
//             });
//         },
//       },
//       {
//         key: 'ghostSingleText',
//         value: function (e) {
//           var t,
//             n = new c.C(e, {
//               type: 'words,chars',
//             });
//           (t = n.chars),
//             u.ZP.set(t, {
//               autoAlpha: 0,
//             });
//           var i = new u.ZP.timeline({
//             paused: !0,
//           }).fromTo(
//             t,
//             {
//               autoAlpha: 0,
//             },
//             {
//               autoAlpha: 1,
//               duration: 0.2,
//               ease: 'power2.in',
//               stagger: {
//                 each: 0.01,
//                 from: 'random',
//               },
//             }
//           );
//           w.i.create({
//             trigger: e,
//             start: 'top 90%',
//             onEnter: function () {
//               i.play(0);
//             },
//             onEnterBack: function () {
//               i.play(0);
//             },
//             onLeave: function () {
//               u.ZP.to(t, {
//                 autoAlpha: 0,
//               });
//             },
//             onLeaveBack: function () {
//               u.ZP.to(t, {
//                 autoAlpha: 0,
//               });
//             },
//           });
//         },
//       },
//     ])
//   );
// };

const domSections = [
  {
    section: null,
    DOMRect: { height: 0 },
    action: false,
  },
];
const sectionBounding = (e) => {
  const sections = document.querySelectorAll('.sections');
  // 돔 배열 초기화
  return sections.forEach((section, i) => {
    const DOMRect = section.getBoundingClientRect();
    domSections[i] = { ...domSections[i], DOMRect };
  });
};

const sectionScrollCheck = (scroll) => {
  const innerHieght3 = parseInt(window.innerHeight / 3);
  const innerHieght4 = parseInt(window.innerHeight / 4);

  // console.log(domSections[1].DOMRect.y - innerHieght4 <= window.scrollY); // 들어가는거
  // console.log(domSections[1].DOMRect.bottom - innerHieght4 <= window.scrollY); // 나가는거

  const scrolled =
    window.pageYOffSet - innerHieght3 || window.scrollY - innerHieght3; // 섹션의 시작점에서 스크롤된 거리를 계산
  return domSections.forEach((section, i) => {
    const inner = domSections[i].DOMRect.y - innerHieght4 <= window.scrollY; // 섹션 뷰포트내로 진입하는지 체크
    const outte =
      domSections[i].DOMRect.bottom - innerHieght4 <= window.scrollY; // 섹션 뷰포트내로 나가는지 체크

    if (!domSections[i].action && inner && !outte) {
      // 섹션 뷰포트 들어오는 액션
      domSections[i].action = true;
      return;
    }

    if (domSections[i].action && inner && outte) {
      // 섹션 뷰포트 나가는 액션
      domSections[i].action = false;
      return;
    }

    // domSections[i].action = !inner && outte ? false : true;

    sectionScrollActCheck(section.DOMRect.top >= scrolled, section.section);
  });
};

const sectionScrollActCheck = (state, section) => {
  // array.findIndex(obj => obj.name == "희동이")
  // const idx = domSections.findIndex((obj) => obj.section == section);
  // console.log(state, section);
  const a = document.querySelector('.sec01'),
    b = document.querySelector('.sec02');
  switch (section) {
    case b:
      randomFade(state, section);
      break;

    default:
      break;
  }
};

const randomFade = (state, section) => {
  // console.log(state, section);
};
const script = (function () {
  window.addEventListener('load', sectionBounding);
  window.addEventListener('resize', sectionBounding);
  window.addEventListener('scroll', sectionBounding, sectionScrollCheck);

  // window.addEventListener('scroll', function () {
  //   // 스크롤 이벤트 리스너 등록

  //   sections.forEach(function (section) {
  //     let bounds = section.getBoundingClientRect(); // 섹션의 위치와 크기 정보를 가져옴
  //     if (section === document.querySelector('.sec02')) {
  //     }

  //     // bounds.bottom >= 0
  //     // if (
  //     //   bounds.top >= window.innerHeight &&
  //     //   window.innerHeight < window.innerHeight
  //     // ) {
  //     //   // 섹션이 뷰포트 내에 있을 때
  //     //   var scrolled =
  //     //     (window.pageYOffSet ||
  //     //       window.scrollY ||
  //     //       document.documentElement.scrollTop) - section.offsetTop; // 섹션의 시작점에서 스크롤된 거리를 계산

  //     //   randomShowText(section);
  //     //   // background.style.transform = `translateY(${scrolled * 0.8}px)`; // 제목을 스크롤 속도의 80%(빠르게)로 이동
  //     //   // title.style.transform = `translateY(${scrolled * 0.3}px)`; // 배경을 스크롤 속도의 30%(느리게)로 이동
  //     //   // circle.style.transform = `translate(${scrolled * 0.5}px, ${scrolled * 0.5}px)`; // circle 왼쪽에서 오른쪽으로 이동
  //     //   // square.style.transform = `translate(${scrolled * -0.5}px, ${scrolled * 0.5}px)`; // square 오른쪽에서 왼쪽으로 이동
  //     // }

  //     let enter = bounds.top <= window.innerHeight / 2;

  //     if (!enter) {
  //       randomTextHide();
  //       return;
  //     }
  //     randomTextShow();
  //   });
  // });
  // function randomTextShow() {
  //   console.log('show');
  //   TweenMax.to(
  //     $('.js-ghost-text div'),
  //     { opacity: 1, duration: 0.2 },
  //     { ease: 'power2.in' }
  //   );
  // }
  // function randomTextHide(e) {
  //   console.log('hide');
  //   TweenMax.to(
  //     $('.js-ghost-text div'),
  //     { opacity: 0, duration: 0.2 },
  //     { ease: 'power2.in' }
  //   );
  // }
})();

// const script = () => {
//   function e() {
//     !(function (e, t) {
//       if (!(e instanceof t))
//         throw new TypeError('Cannot call a class as a function');
//     })(this, e),
//       (this.DOM = {
//         ghostText: '.js-ghost-text',
//       }),
//       (this.ghostText = document.querySelectorAll(this.DOM.ghostText)),
//       this.init();
//   }

//   // window.addEventListener('scroll', () => {
//   //   let scrollTop =
//   //     window.pageYOffSet ||
//   //     window.scrollY ||
//   //     document.documentElement.scrollTop;

//   //   const ghostText = document.querySelector('.js-ghost-text');
//   //   if (scrollTop >= ghostText.scrollTop) {
//   //     return;
//   //   }
//   // });

//   return {
//     DOM: {
//       ghostText: '.js-ghost-text > div',
//     },
//     ghostText: document.querySelectorAll('.js-ghost-text div'),
//     init: function () {
//       var e,
//         r = this;
//       (null === (e = this.ghostText) || void 0 === e ? void 0 : e.length) > 0 &&
//         this.ghostText.forEach(function (e) {
//           r.ghostSingleText(e);
//         });
//     },
//     ghostSingleText: function (e) {
//       if (!this.On) {
//         console.log('1');
//         TweenMax.to(e, { opacity: 1, duration: 0.2 }, { ease: 'power2.in' });
//         return;
//       }
//       TweenMax.to(e, { opacity: 0, duration: 0.2 }, { ease: 'power2.in' });
//       console.log('2');
//     },
//   };
// };
