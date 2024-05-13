/* common */
function getRandomArrays(len, num) {
  let arrays = [];
  for (let j = 0; j < num; j++) {
    let arr = [];
    while (arr.length < len) {
      let randomNum = Math.floor(Math.random() * (len * num));
      if (
        !arrays.some((a) => a.includes(randomNum)) &&
        !arr.includes(randomNum)
      ) {
        arr.push(randomNum);
      }
    }
    arrays.push(arr);
  }
  return arrays;
}

const domSections = [
  {
    section: null,
    DOMRect: { height: 0 },
    state: false,
  },
];

const init = function () {
  sectionBounding();
  setRandomFade();
  sectionScrollCheck();
  floatMenu();

  window.addEventListener('resize', sectionBounding);
  window.addEventListener('scroll', () => {
    sectionBounding();
    sectionScrollCheck();
    floatMenu();
  });

  document.querySelector('.btn_top').addEventListener('click', function () {
    window.scrollTo(1000, 0);
  });

  window.addEventListener('mousemove', logoParallax);
};

const sectionBounding = () => {
  const DOM = [
    {
      class: '.sec01',
    },
    {
      class: '.sec02',
    },
    {
      class: '.sec10',
    },
  ];
  return DOM.forEach((section, i) => {
    const DOMRect = document
      .querySelector(section.class)
      .getBoundingClientRect();
    domSections[i] = { ...domSections[i], DOMRect };
  });
};

const sectionScrollCheck = () => {
  const innerHieght = parseInt(window.innerHeight);
  const innerHieght2 = parseInt(window.innerHeight / 2);
  const innerHieght3 = parseInt(window.innerHeight / 3);
  const innerHieght4 = parseInt(window.innerHeight / 4);
  return domSections.forEach((section, i) => {
    const dom = domSections[i];
    const inner = dom.DOMRect.y - innerHieght2 <= 0; // 섹션 뷰포트내로 들어오는지 체크
    const outte = dom.DOMRect.bottom <= 0; // 섹션 뷰포트내로 나가는지 체크

    if (inner == outte && dom.state == true) {
      dom.state = false;
      // 끝나는액션
      sectionScrollAct(dom.state, i);
    }

    // false , true, !false ,false
    if (inner == !outte && !dom.state == true) {
      dom.state = true;
      // 시작하는액션
      sectionScrollAct(dom.state, i);
    }
  });
};

const sectionScrollAct = (state, i) => {
  // console.log(state, i);
  switch (i) {
    case 0:
      randomFade(state);

      break;
    case 1:
      randomFadeSen(state);

      break;

    case 2:
      randomFade10(state);
      imageSlideShow(state);
      break;

    default:
      break;
  }
};

const setRandomFade = () => {
  const selectors = document.querySelectorAll('.js-random-fade > span');

  selectors.forEach((selector) => {
    const text =
      '<div style="opacity:0;">' +
      [...selector.textContent].join('</div><div style="opacity:0;">') +
      '</div>';
    selector.innerHTML = text;
  });
};

const randomFade = (state) => {
  const randomArrays = getRandomArrays(20, 4);
  const parents = document.querySelector('.sec01');
  const parent = parents.querySelectorAll('.js-random-fade span');
  const selectors = document.querySelectorAll('.js-random-fade span > div');

  const opacityOn = (i) => {
    selectors[i].style.opacity = 1;
  };
  if (state) {
    parent.forEach((node, i) => {
      node.style.opacity = 1;
    });
    randomArrays.forEach((arr, i) => {
      setTimeout(() => {
        arr.forEach(opacityOn);
      }, 100 * i + 500);
    });
  }

  // setTimeout(() => {
  //   if (!state) {
  //     parent.forEach((node, i) => {
  //       node.style.opacity = 0;
  //     });
  //     selectors.forEach((selector) => {
  //       selector.style.opacity = 0;
  //     });
  //   }
  // }, 1000);

  return;
};

const randomFadeSen = (state) => {
  const randomArrays = [1, 4, 2, 7, 6, 9, 10, 11, 0, 3, 5, 8];
  const parents = document.querySelector('.sec02');
  const parent = parents.querySelectorAll('.js-random-fade span');
  const selectors = document.querySelectorAll(
    '.js-random-fade-sen > span,.js-random-fade-sen > strong'
  );

  const opacityOn = (i, u) => (selectors[i].style.opacity = 1);

  if (state) {
    parent.forEach((node, i) => {
      node.style.opacity = 1;
    });
    randomArrays.forEach((arr, i) => {
      setTimeout(() => opacityOn(arr), 50 * i);
    });
  }

  // setTimeout(() => {
  //   if (!state) {
  //     parent.forEach((node, i) => {
  //       node.style.opacity = 0;
  //     });
  //     selectors.forEach((selector) => {
  //       selector.style.opacity = 0;
  //     });
  //   }
  // }, 1000);

  return;
};

const randomFade10 = (state) => {
  const randomArrays = getRandomArrays(4, 4);
  const parents = document.querySelector('.sec10');
  const parent = parents.querySelectorAll('.js-random-fade span');
  const selectors = document.querySelectorAll(
    '.area_h.js-random-fade span > div'
  );
  const opacityOn = (i) => {
    console.log(selectors);
    selectors[i].style.opacity = 1;
  };
  if (state) {
    parent.forEach((node, i) => {
      node.style.opacity = 1;
    });
    randomArrays.forEach((arr, i) => {
      setTimeout(() => {
        arr.forEach(opacityOn);
      }, 150 * i);
    });
    return;
  }

  // setTimeout(() => {
  //   if (!state) {
  //     parent.forEach((node, i) => {
  //       node.style.opacity = 0;
  //     });
  //     selectors.forEach((selector) => {
  //       selector.style.opacity = 0;
  //     });
  //   }
  // }, 1000);

  return;
};

const imageSlideShow = (state) => {
  const selector = document.querySelector('.js-image-slideshow');
  if (state) {
  }
};

const floatMenu = () => {
  floatSuggestButton();
  floatTopButton();
};

const floatSuggestButton = (e) => {
  const floatButton = $('.btn_suggset.js-float');
  const inFoot =
    window.scrollY > document.body.scrollHeight - window.innerHeight * 2;
  if (inFoot) {
    floatButton.stop().fadeOut('fast');
    return;
  }
  floatButton.stop().fadeIn('fast');
};
const floatTopButton = (e) => {
  const floatButton = $('.area_float');
  if (window.scrollY > window.innerHeight) {
    floatButton.stop().fadeIn('fast');
    return;
  }
  floatButton.stop().fadeOut('fast');
};

const logoParallax = (e) => {
  const x = (window.innerWidth - e.pageX) / 100;
  const y = (window.innerHeight - e.pageY) / 300;
  const xx = x / 1.1;
  const yy = y / 1.1;

  document.querySelector(
    '.img_overEffect'
  ).style.transform = `translateX(${x}px) translateY(${y}px)`;
  document.querySelector(
    '.js-parallax'
  ).style.transform = `translateX(${xx}px) translateY(${yy}px)`;
};

window.addEventListener('load', init);
