(() => {
  'use strict';
  var e,
    t = {
      237: (e, t, n) => {
        var i = n(315),
          r = n.n(i);
        function o(e) {
          return (
            (o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            o(e)
          );
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, l(i.key), i);
          }
        }
        function l(e) {
          var t = (function (e, t) {
            if ('object' != o(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != o(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == o(t) ? t : String(t);
        }
        var s = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  grid: 'grid',
                }),
                (this.gridOptions = {
                  initialDisplay: 'none',
                  columnCount: 24,
                  gridWidth: 1440,
                  gridFixed: !0,
                  gutterWidth: 0,
                  gutterFixed: !1,
                  gridColor: 'rgb(255, 0, 255, 0.15)',
                  columnBgColor: 'rgb(255, 0, 255, 0.025)',
                });
              var t = [
                'background-color: #a6a6a6',
                'color: black',
                'display: block',
                'line-height: 24px',
                'text-align: center',
                'border: 1px solid #ffffff',
                'font-weight: bold',
              ].join(';');
              console.info('toggle grid: %c Alt/Option + G ', t),
                (this.grid = null),
                (this.columnWidth =
                  (this.gridOptions.gridWidth -
                    (this.gridOptions.columnCount - 1) *
                      this.gridOptions.gutterWidth) /
                  this.gridOptions.columnCount),
                (this.columnWidthPercentage = ''.concat(
                  (this.columnWidth / this.gridOptions.gridWidth) * 100,
                  '%'
                )),
                (this.gutterWidthPercentage = ''.concat(
                  (this.gridOptions.gutterWidth / this.gridOptions.gridWidth) *
                    100,
                  '%'
                ));
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    this.initGrid(), this.keyboardShortcut();
                  },
                },
                {
                  key: 'initGrid',
                  value: function () {
                    (this.grid = document.createElement('div')),
                      (this.grid.id = this.DOM.grid),
                      (this.grid.style.cssText =
                        '\n            pointer-events: none;\n            display: '.concat(
                          this.gridOptions.initialDisplay,
                          ';\n            flex-direction: row;\n            width: 100%;\n            height: 100%;\n            position: fixed;\n            top: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            z-index: 999;\n        '
                        )),
                      !0 === this.gridOptions.gridFixed &&
                        (this.grid.style.maxWidth = ''.concat(
                          this.gridOptions.gridWidth,
                          'px'
                        )),
                      !this.gridOptions.gutterWidth > 0 &&
                        (this.grid.style.borderLeft = 'none'),
                      document.body.appendChild(this.grid);
                    for (var e = 0; e < this.gridOptions.columnCount; e++) {
                      var t = document.createElement('i');
                      this.grid.appendChild(t),
                        (t.style.cssText =
                          '\n                height: auto;\n                flex-grow: 1;\n                background-color: '
                            .concat(
                              this.gridOptions.columnBgColor,
                              ';\n                border-left: 1px solid '
                            )
                            .concat(
                              this.gridOptions.gridColor,
                              ';\n            '
                            )),
                        this.gridOptions.gutterWidth > 0
                          ? (t.style.borderRight = '1px solid '.concat(
                              this.gridOptions.gridColor
                            ))
                          : (this.grid.style.borderRight = '1px solid '.concat(
                              this.gridOptions.gridColor
                            )),
                        !0 === this.gridOptions.gutterFixed
                          ? (t.style.marginRight = ''.concat(
                              this.gridOptions.gutterWidth,
                              'px'
                            ))
                          : ((t.style.marginRight = this.gutterWidthPercentage),
                            (t.style.width = this.columnWidthPercentage));
                    }
                    this.grid.lastChild.style.marginRight = 0;
                  },
                },
                {
                  key: 'keyboardShortcut',
                  value: function () {
                    var e = this;
                    document.addEventListener('keyup', function (t) {
                      71 === t.keyCode &&
                        t.altKey &&
                        ('none' === e.grid.style.display
                          ? (e.grid.style.display = 'flex')
                          : (e.grid.style.display = 'none'));
                    });
                  },
                },
              ]) && a(t.prototype, n),
              i && a(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          u = n(358),
          c = n(26);
        function f(e) {
          return (
            (f =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            f(e)
          );
        }
        function h(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, m(i.key), i);
          }
        }
        function m(e) {
          var t = (function (e, t) {
            if ('object' != f(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != f(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == f(t) ? t : String(t);
        }
        var d = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                title: '.js-header-title',
                text: '.js-header-text',
                fadeItems: '.js-header-fade-item',
                orb: '.js-orb.only-header',
                content: '.js-body-content',
                navigation: '.js-navigation',
              }),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e,
                    t = document.querySelector(this.DOM.title),
                    n = document.querySelector(this.DOM.text),
                    i = document.querySelector(this.DOM.navigation),
                    r = document.querySelectorAll(this.DOM.fadeItems),
                    o = document.querySelector(this.DOM.orb),
                    a = document.querySelector(this.DOM.content),
                    l = u.ZP.timeline({
                      paused: !0,
                    });
                  t &&
                    ((e = new c.C(t, {
                      type: 'words,chars',
                    }).chars),
                    u.ZP.set(e, {
                      autoAlpha: 0,
                    }),
                    l.set(t, {
                      autoAlpha: 1,
                    }),
                    l.to(e, {
                      autoAlpha: 1,
                      duration: 0.2,
                      ease: 'power2.in',
                      stagger: {
                        each: 0.01,
                        from: 'random',
                      },
                    })),
                    n &&
                      l.to(
                        n,
                        {
                          autoAlpha: 1,
                          duration: 0.5,
                          ease: 'none',
                        },
                        t ? '-=0.2' : ''
                      ),
                    i &&
                      l.to(
                        i,
                        {
                          autoAlpha: 1,
                          duration: 0.5,
                          ease: 'none',
                        },
                        n ? '-=0.7' : '-0.2'
                      ),
                    r &&
                      l.to(
                        r,
                        {
                          autoAlpha: 1,
                          duration: 0.3,
                          stagger: 0.1,
                        },
                        n || t ? '-=0.2' : ''
                      ),
                    a &&
                      l.to(
                        a,
                        {
                          autoAlpha: 1,
                        },
                        n || t || r ? '-=0.2' : ''
                      ),
                    o &&
                      (o.querySelector('canvas') ||
                        (u.ZP.set(o, {
                          scale: 1.2,
                          autoAlpha: 0,
                        }),
                        l.to(o, {
                          scale: 1,
                          autoAlpha: 1,
                          duration: 0.8,
                          ease: 'quad.out',
                        }))),
                    l.play();
                },
              },
            ]) && h(t.prototype, n),
            i && h(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function p(e) {
          return (
            (p =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            p(e)
          );
        }
        function y(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, v(i.key), i);
          }
        }
        function v(e) {
          var t = (function (e, t) {
            if ('object' != p(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != p(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == p(t) ? t : String(t);
        }
        var g = (function () {
            function e(t) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.loader = document.querySelector('.js-loader')),
                (this.nav = document.querySelector(
                  '.js-main-navigation-wrapper'
                )),
                (this.smoothScroll = t),
                this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    var e = this;
                    document.querySelectorAll('a').forEach(function (t) {
                      t.href.includes('#') ||
                        '' === t.href ||
                        t.addEventListener('click', function () {
                          e.smoothScroll.scrollLock(),
                            e.smoothScroll.kill(),
                            window.scrollTo(0, 0);
                        });
                    }),
                      'onbeforeunload' in window &&
                        (window.onbeforeunload = function () {
                          e.loader.classList.remove('hide'),
                            e.loader.classList.add('show');
                        }),
                      'onpageshow' in window
                        ? (window.onpageshow = function () {
                            setTimeout(function () {
                              e.hideLoader();
                            }, 75);
                          })
                        : setTimeout(function () {
                            e.hideLoader();
                          }, 75),
                      this.loader.classList.contains('show') &&
                        this.hideLoader();
                  },
                },
                {
                  key: 'hideLoader',
                  value: function () {
                    this.loader.classList.remove('show'),
                      this.loader.classList.add('hide');
                  },
                },
              ]) && y(t.prototype, n),
              i && y(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          b = n(732),
          S = n.n(b),
          w = n(92);
        function P(e) {
          return (
            (P =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            P(e)
          );
        }
        function O(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, x(i.key), i);
          }
        }
        function x(e) {
          var t = (function (e, t) {
            if ('object' != P(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != P(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == P(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var C = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                element: '.js-lazy-load',
                states: {
                  loaded: 'is-loaded',
                },
              }),
              (this.elements = t.querySelectorAll(this.DOM.element)),
              this.elements.length < 1 || this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  new (S())({
                    elements_selector: this.DOM.element,
                    class_loaded: this.DOM.states.loaded,
                    callback_enter: function () {
                      w.i.refresh();
                    },
                  });
                },
              },
            ]) && O(t.prototype, n),
            i && O(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function k(e) {
          return (
            (k =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            k(e)
          );
        }
        function M(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, T(i.key), i);
          }
        }
        function T(e) {
          var t = (function (e, t) {
            if ('object' != k(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != k(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == k(t) ? t : String(t);
        }
        var A = (function () {
            function e(t) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  navigation: '.js-navigation',
                  mobileNavTrigger: '.js-mobile-navigation-trigger',
                  mobileNav: '.js-mobile-navigation',
                  states: {
                    opened: 'is-opened',
                    navigationScrolled: 'has-scrolled',
                    navigationFixed: 'is-fixed',
                    navigationSlideUp: 'slide-up',
                  },
                }),
                (this.smoothScroll = t),
                (this.mobileOpened = !1),
                (this.scrolling = !1),
                (this.scrollNavigationOffset = 200),
                (this.previousTop = 0),
                (this.scrollDelta = 0),
                (this.scrollOffset = 0),
                (this.navigation = document.querySelector(this.DOM.navigation)),
                (this.mobileNav = document.querySelector(this.DOM.mobileNav)),
                (this.mobileNavTrigger = document.querySelector(
                  this.DOM.mobileNavTrigger
                )),
                this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    null !== this.navigation
                      ? this.navigationController()
                      : console.error(
                          ''.concat(
                            this.DOM.navigation,
                            ' does not exist in the DOM!'
                          )
                        ),
                      this.mobileNav &&
                        this.mobileNavTrigger &&
                        this.mobileNavController();
                  },
                },
                {
                  key: 'navigationController',
                  value: function () {
                    var e = this;
                    document.addEventListener('scroll', function () {
                      e.scrolling ||
                        ((e.scrolling = !0),
                        window.requestAnimationFrame
                          ? requestAnimationFrame(function () {
                              return e.checkScroll();
                            })
                          : setTimeout(e.checkScroll(), 250));
                    });
                  },
                },
                {
                  key: 'mobileNavController',
                  value: function () {
                    var e = this;
                    this.mobileNavTrigger.addEventListener(
                      'click',
                      function () {
                        if (e.mobileOpened)
                          return (
                            (e.mobileOpened = !1),
                            e.mobileNav.classList.remove(e.DOM.states.opened),
                            e.mobileNavTrigger.classList.remove(
                              e.DOM.states.opened
                            ),
                            void e.smoothScroll.unlockScroll()
                          );
                        (e.mobileOpened = !0),
                          e.mobileNav.classList.add(e.DOM.states.opened),
                          e.mobileNavTrigger.classList.add(e.DOM.states.opened),
                          e.smoothScroll.scrollLock();
                      }
                    );
                  },
                },
                {
                  key: 'checkScroll',
                  value: function () {
                    var e = window.pageYOffset | document.body.scrollTop;
                    this.changeNavigationState(e),
                      (this.previousTop = e),
                      (this.scrolling = !1);
                  },
                },
                {
                  key: 'changeNavigationState',
                  value: function (e) {
                    e > this.scrollNavigationOffset
                      ? this.navigation.classList.add(
                          this.DOM.states.navigationScrolled
                        )
                      : this.navigation.classList.remove(
                          this.DOM.states.navigationScrolled
                        ),
                      this.previousTop >= e
                        ? this.scrollingUp(e)
                        : this.scrollingDown(e);
                  },
                },
                {
                  key: 'scrollingUp',
                  value: function (e) {
                    (e < this.scrollNavigationOffset ||
                      this.previousTop - e > this.scrollDelta) &&
                      this.navigation.classList.remove(
                        this.DOM.states.navigationSlideUp
                      );
                  },
                },
                {
                  key: 'scrollingDown',
                  value: function (e) {
                    e > this.scrollNavigationOffset + this.scrollOffset
                      ? this.navigation.classList.add(
                          this.DOM.states.navigationSlideUp
                        )
                      : e > this.scrollNavigationOffset &&
                        this.navigation.classList.remove(
                          this.DOM.states.navigationSlideUp
                        );
                  },
                },
              ]) && M(t.prototype, n),
              i && M(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          j = n(172);
        function E(e) {
          return (
            (E =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            E(e)
          );
        }
        function D(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, z(i.key), i);
          }
        }
        function z(e) {
          var t = (function (e, t) {
            if ('object' != E(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != E(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == E(t) ? t : String(t);
        }
        var Z = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                scrollToItems: '.js-scroll-to',
              }),
              (this.lenis = null),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  (this.lenis = new j.Z()),
                    this.lenis.on('scroll', w.i.update),
                    u.ZP.ticker.lagSmoothing(0),
                    requestAnimationFrame(function t(n) {
                      e.lenis.raf(n), requestAnimationFrame(t);
                    }),
                    (this.scrollToItems = document.querySelectorAll(
                      this.DOM.scrollToItems
                    )),
                    this.scrollToItems.forEach(function (t) {
                      var n = t.getAttribute('href');
                      null !== n &&
                        t.addEventListener('click', function () {
                          e.lenis.scrollTo(n);
                        });
                    });
                },
              },
              {
                key: 'scrollLock',
                value: function () {
                  null !== this.lenis && this.lenis.stop();
                },
              },
              {
                key: 'unlockScroll',
                value: function () {
                  null !== this.lenis && this.lenis.start();
                },
              },
              {
                key: 'kill',
                value: function () {
                  null !== this.lenis && this.lenis.destroy();
                },
              },
            ]) && D(t.prototype, n),
            i && D(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function F(e) {
          return (
            (F =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            F(e)
          );
        }
        function q(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, L(i.key), i);
          }
        }
        function L(e) {
          var t = (function (e, t) {
            if ('object' != F(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != F(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == F(t) ? t : String(t);
        }
        u.ZP.registerPlugin(c.C, w.i);
        var I = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  ghostText: '.js-ghost-text',
                  ghostLines: '.js-ghost-lines',
                  fadeElement: '.js-fade-element',
                  parallaxElement: '.js-parallax-element',
                }),
                (this.ghostText = document.querySelectorAll(
                  this.DOM.ghostText
                )),
                (this.ghostLines = document.querySelectorAll(
                  this.DOM.ghostLines
                )),
                (this.fadeElement = document.querySelectorAll(
                  this.DOM.fadeElement
                )),
                (this.parallaxElement = document.querySelectorAll(
                  this.DOM.parallaxElement
                )),
                this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    var e,
                      t,
                      n,
                      i,
                      r = this;
                    (null === (e = this.ghostText) || void 0 === e
                      ? void 0
                      : e.length) > 0 &&
                      this.ghostText.forEach(function (e) {
                        r.ghostSingleText(e);
                      }),
                      (null === (t = this.ghostLines) || void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        this.ghostLines.forEach(function (e) {
                          r.ghostSingleLines(e);
                        }),
                      (null === (n = this.fadeElement) || void 0 === n
                        ? void 0
                        : n.length) > 0 &&
                        this.fadeElement.forEach(function (e) {
                          r.fadeSingleElement(e);
                        }),
                      (null === (i = this.parallaxElement) || void 0 === i
                        ? void 0
                        : i.length) > 0 &&
                        this.parallaxElement.forEach(function (e) {
                          r.parallaxSingleElement(e);
                        });
                  },
                },
                {
                  key: 'parallaxSingleElement',
                  value: function (e) {
                    var t = e.dataset.offset || 0.1;
                    (e.classList.contains('only-desktop') &&
                      window.width < 800) ||
                      (window.width < 800 &&
                        (t = e.dataset.offset / 1.2 || 0.083),
                      u.ZP.timeline({
                        scrollTrigger: {
                          trigger: e,
                          start: 'top bottom',
                          end: 'bottom top',
                          scrub: !0,
                        },
                      }).fromTo(
                        e,
                        {
                          y: window.height * t,
                        },
                        {
                          y: 0,
                          ease: 'power4.out',
                        }
                      ));
                  },
                },
                {
                  key: 'fadeSingleElement',
                  value: function (e) {
                    (e.classList.contains('only-desktop') &&
                      window.width < 800) ||
                      (u.ZP.set(e, {
                        autoAlpha: 0,
                      }),
                      w.i.create({
                        trigger: e,
                        start: 'top 90%',
                        end: 'bottom-=80 10%',
                        scrub: !0,
                        onEnter: function () {
                          u.ZP.to(e, {
                            autoAlpha: 1,
                          });
                        },
                        onEnterBack: function () {
                          u.ZP.to(e, {
                            autoAlpha: 1,
                          });
                        },
                        onLeave: function () {
                          u.ZP.to(e, {
                            autoAlpha: 0,
                          });
                        },
                        onLeaveBack: function () {
                          u.ZP.to(e, {
                            autoAlpha: 0,
                          });
                        },
                      }));
                  },
                },
                {
                  key: 'ghostSingleText',
                  value: function (e) {
                    var t,
                      n = new c.C(e, {
                        type: 'words,chars',
                      });
                    (t = n.chars),
                      u.ZP.set(t, {
                        autoAlpha: 0,
                      });
                    var i = new u.ZP.timeline({
                      paused: !0,
                    }).fromTo(
                      t,
                      {
                        autoAlpha: 0,
                      },
                      {
                        autoAlpha: 1,
                        duration: 0.2,
                        ease: 'power2.in',
                        stagger: {
                          each: 0.01,
                          from: 'random',
                        },
                      }
                    );
                    w.i.create({
                      trigger: e,
                      start: 'top 90%',
                      onEnter: function () {
                        i.play(0);
                      },
                      onEnterBack: function () {
                        i.play(0);
                      },
                      onLeave: function () {
                        u.ZP.to(t, {
                          autoAlpha: 0,
                        });
                      },
                      onLeaveBack: function () {
                        u.ZP.to(t, {
                          autoAlpha: 0,
                        });
                      },
                    });
                  },
                },
                {
                  key: 'ghostSingleLines',
                  value: function (e) {
                    new c.C(e, {
                      type: 'lines',
                    }).lines.forEach(function (e) {
                      w.i.create({
                        trigger: e,
                        start: 'top 90%',
                        end: 'bottom-=80 10%',
                        scrub: !0,
                        onEnter: function () {
                          u.ZP.to(e, {
                            autoAlpha: 1,
                          });
                        },
                        onEnterBack: function () {
                          u.ZP.to(e, {
                            autoAlpha: 1,
                          });
                        },
                        onLeave: function () {
                          u.ZP.to(e, {
                            autoAlpha: 0,
                            overwrite: !0,
                          });
                        },
                        onLeaveBack: function () {
                          u.ZP.to(e, {
                            autoAlpha: 0,
                            overwrite: !0,
                          });
                        },
                      });
                    });
                  },
                },
              ]) && q(t.prototype, n),
              i && q(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          R = n(477),
          N = n(666),
          H = n(659);
        function W(e) {
          return (
            (W =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            W(e)
          );
        }
        function Y(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, _(i.key), i);
          }
        }
        function _(e) {
          var t = (function (e, t) {
            if ('object' != W(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != W(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == W(t) ? t : String(t);
        }
        var B = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e);
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'initGui',
                value: function (
                  e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  l,
                  s,
                  u,
                  c,
                  f,
                  h,
                  m,
                  d,
                  p,
                  y,
                  v
                ) {
                  var g = this,
                    b = new H.XS(),
                    S = b.addFolder('General'),
                    w = b.addFolder('Renderer'),
                    P = b.addFolder('Material'),
                    O = b.addFolder('Scene'),
                    x = b.addFolder('Sprite'),
                    C = b.addFolder('Lights'),
                    k = b.addFolder('Shaders'),
                    M = b.addFolder('Segments'),
                    T = b.addFolder('Plane'),
                    A = {
                      toneMapping: n.toneMapping,
                      outputColorSpace: n.outputColorSpace,
                      dotSphereRotation: R.M8C.radToDeg(i.rotation.z),
                      baseColor: r.material.color.getHex(),
                      emissiveColor: r.material.emissive.getHex(),
                      emissiveIntensity: r.material.emissiveIntensity,
                      roughness: r.material.roughness,
                      metalness: r.material.metalness,
                      clearcoat: r.material.clearcoat,
                      clearcoatRoughness: r.material.clearcoatRoughness,
                      envMapIntensity: r.material.envMapIntensity,
                      opacity: r.material.opacity,
                      ballScale: r.scale.x,
                      scenePositionX: s.position.x,
                      scenePositionY: s.position.y,
                      sceneRotationX: s.rotation.x,
                      sceneRotationY: s.rotation.y,
                      sceneRotationZ: s.rotation.z,
                      cameraFrustum: u,
                      spriteScale: o.scale.x,
                      positionZ: o.position.z,
                      depthTest: o.material.depthTest,
                      depthWrite: o.material.depthWrite,
                      ambientIntensity: h.intensity,
                      ambientColor: h.color.getHex(),
                      directional1Intensity: m.intensity,
                      directional1Color: m.color.getHex(),
                      directional2Intensity: d.intensity,
                      directional2Color: d.color.getHex(),
                      directional3Intensity: p.intensity,
                      directional3Color: p.color.getHex(),
                      uAlpha: y.children[0].material.uniforms.uAlpha.value,
                      uModifier:
                        y.children[0].material.uniforms.uModifier.value,
                      uSineModify:
                        y.children[0].material.uniforms.uSineModify.value,
                      uZStrech: y.children[0].material.uniforms.uZStrech.value,
                      uXStrech: y.children[0].material.uniforms.uXStrech.value,
                      uYStrech: y.children[0].material.uniforms.uYStrech.value,
                      uNear: y.children[0].material.uniforms.uNear.value,
                      uFar: y.children[0].material.uniforms.uFar.value,
                      uCamZ: y.children[0].material.uniforms.uCamZ.value,
                      areRandomizedSegments: f,
                      segment1: y.children[10].material.uniforms.uZStrech.value,
                      segment2: y.children[9].material.uniforms.uZStrech.value,
                      segment3: y.children[8].material.uniforms.uZStrech.value,
                      segment4: y.children[7].material.uniforms.uZStrech.value,
                      segment5: y.children[6].material.uniforms.uZStrech.value,
                      segment6: y.children[5].material.uniforms.uZStrech.value,
                      segment7: y.children[0].material.uniforms.uZStrech.value,
                      segment8: y.children[1].material.uniforms.uZStrech.value,
                      segment9: y.children[2].material.uniforms.uZStrech.value,
                      segment10: y.children[3].material.uniforms.uZStrech.value,
                      segment11: y.children[4].material.uniforms.uZStrech.value,
                      uAlphaPlane: l.material.uniforms.uAlpha.value,
                      uFrequency: l.material.uniforms.uFrequency.value,
                      uSpeed: l.material.uniforms.uSpeed.value,
                      uHeight: l.material.uniforms.uHeight.value,
                      uAnchorX: l.material.uniforms.uAnchor.value.x,
                      uAnchorY: l.material.uniforms.uAnchor.value.y,
                      uTime: l.material.uniforms.uTime.value,
                      AutoTime: c,
                    };
                  w.add(n, 'toneMapping', {
                    No: R.uL9,
                    Linear: R.EoG,
                    Reinhard: R.CdI,
                    Cineon: R.YGz,
                    ACESFilmic: R.LY2,
                  }),
                    w.add(n, 'outputColorSpace', {
                      LinearSRGB: R.GUF,
                      sRGB: R.KI_,
                    }),
                    S.add(A, 'dotSphereRotation', 0, 90)
                      .step(0.01)
                      .onChange(function (e) {
                        i.rotation.z = R.M8C.degToRad(e);
                      }),
                    P.addColor(A, 'baseColor').onChange(function (e) {
                      r.material.color.setHex(e);
                    }),
                    P.addColor(A, 'emissiveColor').onChange(function (e) {
                      r.material.emissive.setHex(e);
                    }),
                    P.add(A, 'metalness', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.metalness = e;
                      }),
                    P.add(A, 'roughness', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.roughness = e;
                      }),
                    P.add(A, 'clearcoat', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.clearcoat = e;
                      }),
                    P.add(A, 'clearcoatRoughness', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.clearcoatRoughness = e;
                      }),
                    P.add(A, 'envMapIntensity', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.envMapIntensity = e;
                      }),
                    P.add(A, 'opacity', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        r.material.opacity = e;
                      }),
                    P.add(A, 'ballScale', 0, 5)
                      .step(0.01)
                      .onChange(function (e) {
                        r.scale.setScalar(e);
                      }),
                    O.add(A, 'scenePositionX', -10, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        s.position.x = e;
                      }),
                    O.add(A, 'scenePositionY', -10, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        s.position.y = e;
                      }),
                    O.add(A, 'sceneRotationX', -180, 180)
                      .step(1)
                      .onChange(function (e) {
                        s.rotation.x = R.M8C.degToRad(e);
                      }),
                    O.add(A, 'sceneRotationY', -180, 180)
                      .step(1)
                      .onChange(function (e) {
                        s.rotation.y = R.M8C.degToRad(e);
                      }),
                    O.add(A, 'sceneRotationZ', -180, 180)
                      .step(1)
                      .onChange(function (e) {
                        s.rotation.z = R.M8C.degToRad(e);
                      }),
                    O.add(A, 'cameraFrustum', -10, 10)
                      .step(0.01)
                      .onChange(function (i) {
                        (u = i),
                          y.children.forEach(function (e) {
                            e.material.uniforms.uFrustum.value = i;
                          }),
                          (l.material.uniforms.uFrustum.value = i),
                          g.handleResize(e, t, u, n);
                      }),
                    x
                      .add(A, 'spriteScale', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        o.scale.setScalar(e);
                      }),
                    x
                      .add(A, 'positionZ', -2, 2)
                      .step(0.01)
                      .onChange(function (e) {
                        o.position.z = e;
                      }),
                    x.add(A, 'depthTest', !1, !0).onChange(function (e) {
                      o.material.depthTest = e;
                    }),
                    x.add(A, 'depthWrite', !1, !0).onChange(function (e) {
                      o.material.depthWrite = e;
                    }),
                    C.add(A, 'ambientIntensity', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        h.intensity = e;
                      }),
                    C.addColor(A, 'ambientColor').onChange(function (e) {
                      h.color.setHex(e);
                    }),
                    C.add(A, 'directional1Intensity', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        m.intensity = e;
                      }),
                    C.addColor(A, 'directional1Color').onChange(function (e) {
                      m.color.setHex(e);
                    }),
                    C.add(A, 'directional2Intensity', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        d.intensity = e;
                      }),
                    C.addColor(A, 'directional2Color').onChange(function (e) {
                      d.color.setHex(e);
                    }),
                    C.add(A, 'directional3Intensity', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        p.intensity = e;
                      }),
                    C.addColor(A, 'directional3Color').onChange(function (e) {
                      p.color.setHex(e);
                    }),
                    k
                      .add(A, 'uAlpha', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uAlpha.value = e;
                        });
                      }),
                    k
                      .add(A, 'uModifier', 0, 5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uModifier.value = e;
                        });
                      }),
                    k
                      .add(A, 'uSineModify', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uSineModify.value = e;
                        });
                      }),
                    k
                      .add(A, 'uZStrech', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uZStrech.value = e;
                        });
                      }),
                    k
                      .add(A, 'uXStrech', -1, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uXStrech.value = e;
                        });
                      }),
                    k
                      .add(A, 'uYStrech', -1, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uYStrech.value = e;
                        });
                      }),
                    k
                      .add(A, 'uNear', -5, 5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uNear.value = e;
                        });
                      }),
                    k
                      .add(A, 'uFar', -5, 5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children.forEach(function (t) {
                          t.material.uniforms.uFar.value = e;
                        });
                      }),
                    M.add(A, 'segment1', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[10].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment2', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[9].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment3', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[8].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment4', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[7].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment5', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[6].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment6', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[5].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment7', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[0].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment8', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[1].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment9', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[2].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment10', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[3].material.uniforms.uZStrech.value = e;
                      }),
                    M.add(A, 'segment11', 0, 1.5)
                      .step(0.01)
                      .onChange(function (e) {
                        y.children[4].material.uniforms.uZStrech.value = e;
                      }),
                    T.add(A, 'uAlphaPlane', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        l.material.uniforms.uAlpha.value = e;
                      }),
                    T.add(A, 'uFrequency', 0, 50)
                      .step(0.01)
                      .onChange(function (e) {
                        l.material.uniforms.uFrequency.value = e;
                      }),
                    T.add(A, 'uSpeed', 0, 2)
                      .step(0.01)
                      .onChange(function (e) {
                        l.material.uniforms.uSpeed.value = e;
                      }),
                    T.add(A, 'uHeight', 0, 0.1)
                      .step(0.001)
                      .onChange(function (e) {
                        l.material.uniforms.uHeight.value = e;
                      }),
                    T.add(A, 'uAnchorX', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        l.material.uniforms.uAnchor.value.x = e;
                      }),
                    T.add(A, 'uAnchorY', 0, 1)
                      .step(0.01)
                      .onChange(function (e) {
                        l.material.uniforms.uAnchor.value.y = e;
                      }),
                    T.add(A, 'uTime', 0, 10)
                      .step(0.01)
                      .onChange(function (e) {
                        c || (l.material.uniforms.uTime.value = e);
                      }),
                    S.close(),
                    w.close(),
                    P.close(),
                    O.close(),
                    x.close(),
                    C.close(),
                    k.close(),
                    M.close(),
                    b.close();
                },
              },
              {
                key: 'handleResize',
                value: function (e, t, n, i) {
                  var r = e.clientWidth,
                    o = e.clientHeight,
                    a = r / o;
                  (t.left = (-n * a) / 2),
                    (t.right = (n * a) / 2),
                    (t.top = n / 2),
                    (t.bottom = -n / 2),
                    t.updateProjectionMatrix(),
                    i.setPixelRatio(window.devicePixelRatio),
                    i.setSize(r, o);
                },
              },
            ]) && Y(t.prototype, n),
            i && Y(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function X(e) {
          return (
            (X =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            X(e)
          );
        }
        function G(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, U(i.key), i);
          }
        }
        function U(e) {
          var t = (function (e, t) {
            if ('object' != X(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != X(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == X(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var V = (function () {
          function e(t) {
            var n = this;
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (this.elements = {
              wrapper: '.js-orb',
              modelSection: '.js-scroll-model-section',
              homeHeader: '.js-home-header',
            }),
            (this.smoothScroll = t),
            (this.el = document.querySelector(this.elements.wrapper)),
            (this.modelSections = document.querySelectorAll(
              this.elements.modelSection
            )),
            (this.homeHeader = document.querySelector(
              this.elements.homeHeader
            )),
            this.el) &&
              (this.el.querySelector('canvas') ||
                ((this.winSizeOffset = 0.5),
                u.ZP.matchMedia().add('(max-width: 600px)', function () {
                  n.winSizeOffset = 0.25;
                }),
                (this.ease = 'sine.inOut'),
                (this.scene = null),
                (this.renderer = null),
                (this.guiSetup = new B()),
                (this.appW = this.el.clientWidth),
                (this.appH = this.el.clientHeight),
                (this.rotationSpeed = {
                  speed: 0.5,
                }),
                (this.envMap = null),
                (this.sceneContainer = null),
                (this.mainModel = null),
                (this.ball = null),
                (this.sprite = null),
                (this.plane = null),
                (this.transformContainer = null),
                (this.ambient = null),
                (this.directional = null),
                (this.directional2 = null),
                (this.directional3 = null),
                (this.frustumSize = {
                  value: 4.8,
                  sphere: 1,
                }),
                (this.areRandomizedSegments = !1),
                (this.autoTime = !0),
                (this.planeAlpha = 0),
                (this.isFirefox = r().firefox()),
                u.ZP.defaults({
                  ease: 'power1.inOut',
                }),
                this.setup()));
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'handleResize',
                value: function () {
                  (this.appW = this.el.clientWidth),
                    (this.appH = this.el.clientHeight),
                    (this.aspect = this.appW / this.appH),
                    (this.camera.left =
                      (-this.frustumSize.value * this.aspect) / 2),
                    (this.camera.right =
                      (this.frustumSize.value * this.aspect) / 2),
                    (this.camera.top = this.frustumSize.value / 2),
                    (this.camera.bottom = -this.frustumSize.value / 2),
                    this.camera.updateProjectionMatrix(),
                    this.renderer.setPixelRatio(1.5),
                    this.renderer.setSize(this.appW, this.appH);
                },
              },
              {
                key: 'setup',
                value: function () {
                  var e = this,
                    t = this.appW / this.appH;
                  (this.scene = new R.xsS()),
                    (this.camera = new R.iKG(
                      (this.frustumSize.value * t) / -2,
                      (this.frustumSize.value * t) / 2,
                      this.frustumSize.value / 2,
                      this.frustumSize.value / -2,
                      0.1,
                      1e3
                    )),
                    (this.renderer = new R.CP7({
                      antialias: !0,
                      alpha: !0,
                    })),
                    (this.clock = new R.SUY()),
                    this.renderer.setSize(this.appW, this.appH),
                    this.renderer.setPixelRatio(1.5),
                    (this.renderer.outputColorSpace = R.KI_),
                    (this.renderer.toneMapping = R.EoG),
                    this.el.appendChild(this.renderer.domElement),
                    this.renderer.setClearColor(0, 0),
                    this.camera.position.set(0, 0, -5),
                    this.camera.lookAt(0, 0, 0),
                    (this.sceneContainer = new R.Tme()),
                    (this.sceneContainer.position.x = 0),
                    (this.sceneContainer.rotation.y = R.M8C.degToRad(10)),
                    this.scene.add(this.sceneContainer),
                    this.addLights(),
                    (this.sprite = this.addSprite()),
                    this.sprite.scale.setScalar(2),
                    (this.sprite.position.z = 0),
                    this.sceneContainer.add(this.sprite),
                    (this.mainModel = this.initMainModel()),
                    this.mainModel.position.set(0, 0, 0),
                    this.mainModel.scale.setScalar(1.15),
                    (this.transformContainer = new R.Tme()),
                    (this.transformContainer.rotation.z = R.M8C.degToRad(25)),
                    this.sceneContainer.add(this.transformContainer),
                    this.transformContainer.add(this.mainModel),
                    (this.plane = this.addPlane(1.7, 1.7)),
                    this.plane.position.set(0, -1.5, 0),
                    this.plane.scale.setScalar(10),
                    (this.plane.rotation.x = R.M8C.degToRad(70)),
                    (this.plane.rotation.y = R.M8C.degToRad(10)),
                    this.sceneContainer.add(this.plane),
                    new N.x().load(
                      ''.concat(
                        window.static,
                        '/orb_assets/cayley_interior_1k.hdr'
                      ),
                      function (t) {
                        (t.mapping = R.dSO),
                          (e.scene.environment = t),
                          (e.envMap = t),
                          (e.ball = e.initBall()),
                          e.sceneContainer.add(e.ball),
                          e.guiSetup.initGui(
                            e.el,
                            e.camera,
                            e.renderer,
                            e.transformContainer,
                            e.ball,
                            e.sprite,
                            e.scene,
                            e.plane,
                            e.sceneContainer,
                            e.frustumSize.value,
                            e.autoTime,
                            e.areRandomizedSegments,
                            e.ambient,
                            e.directional,
                            e.directional2,
                            e.directional3,
                            e.mainModel,
                            e.planeAlpha
                          ),
                          e.modelSections.length > 0 &&
                            (e.homeHeader
                              ? new Promise(function (t, n) {
                                  e.homeHeaderIntroAnimation(t);
                                }).then(function () {
                                  return e.scrollInteraction();
                                })
                              : e.scrollInteraction());
                      }
                    ),
                    window.addEventListener('resize', function () {
                      return e.handleResize();
                    }),
                    this.run();
                },
              },
              {
                key: 'update',
                value: function () {
                  var e = this,
                    t = this.clock.getDelta(),
                    n = this.clock.getElapsedTime();
                  this.mainModel.children.forEach(function (n, i) {
                    var r = e.areRandomizedSegments ? (i % 2 == 0 ? 1 : -1) : 1;
                    n.rotation.z += r * (e.rotationSpeed.speed * t);
                  }),
                    this.mainModel.children.forEach(function (e) {
                      e.material.uniforms.uTime.value = n;
                    }),
                    this.autoTime &&
                      (this.plane.material.uniforms.uTime.value = n);
                },
              },
              {
                key: 'run',
                value: function () {
                  var e = this;
                  this.update(),
                    this.draw(),
                    requestAnimationFrame(function () {
                      return e.run();
                    });
                },
              },
              {
                key: 'draw',
                value: function () {
                  this.renderer.render(this.scene, this.camera);
                },
              },
              {
                key: 'addPlane',
                value: function (e, t) {
                  for (
                    var n = new R._12(e, t, 128, 128),
                      i = new R.jyz({
                        vertexShader:
                          '#define GLSLIFY 1\nattribute float index;\n\nuniform float uFrustum;\nuniform float uTime;\nuniform float uSpeed;\nuniform float uFrequency;\nuniform float uHeight;\nuniform vec2 uAnchor;\n\nvarying float vFragIntensity;\n\nvoid main () {\n    vec3 pos = position;\n    vec2 center = uAnchor;\n\n    float time = uTime * uSpeed;\n    float freq = uFrequency;\n    float height = uHeight;\n\n    float pX = pos.x - (0.5 - center.x);\n    float pY = pos.y - (0.5 - center.y);\n\n    float r = -((pX * pX) + (pY * pY));\n\n    float ripple = (sin((freq * (r + time))) * height) - height;\n\n    pos.z += ripple;\n\n    float normalizedH = height * 10.0;\n    vFragIntensity = sin((freq * (r + time))) * clamp(normalizedH, 0.2, 1.0);\n\n    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    \n\n    gl_PointSize = 8.0 / (abs(uFrustum) / 1.8);\n}',
                        fragmentShader:
                          '#define GLSLIFY 1\nvarying float vFragIntensity;\n\nuniform float uAlpha;\n\nvec3 colorB = vec3(0.0,0.2745,0.6352);\nvec3 colorA = vec3(0.0,0.6470,0.7372);\n/* vec3 colorB = vec3(1.0,0.0,0.0); */\n\nvoid main () {\n    float alpha = uAlpha;\n\n    vec3 final = mix(colorA, colorB, vFragIntensity);\n\n    /* make round points */\n    if (length(gl_PointCoord - 0.5) > 0.5) discard;\n    gl_FragColor = vec4(final, alpha);\n}',
                        transparent: !0,
                        uniforms: {
                          uAlpha: {
                            value: this.planeAlpha,
                          },
                          uTime: {
                            value: 0,
                          },
                          uSpeed: {
                            value: 0.05,
                          },
                          uFrequency: {
                            value: 50,
                          },
                          uHeight: {
                            value: 0.035,
                          },
                          uAnchor: {
                            value: new R.FM8(0.5, 0.5),
                          },
                          uFrustum: {
                            value: this.frustumSize.value,
                          },
                        },
                      }),
                      r = new Float32Array(n.attributes.position.count),
                      o = 0;
                    o < n.attributes.position.count;
                    o++
                  )
                    r[o] = o;
                  return (
                    n.setAttribute('index', new R.TlE(r, 1)), new R.woe(n, i)
                  );
                },
              },
              {
                key: 'addSprite',
                value: function () {
                  var e = new R.dpR().load(
                    ''.concat(window.static, '/orb_assets/sprite.svg')
                  );
                  (e.colorSpace = R.KI_),
                    (e.minFilter = R.aH4),
                    (e.magFilter = R.TyD);
                  var t = new R.xeV({
                    map: e,
                    transparent: !0,
                    opacity: 1,
                    blending: R.bdR,
                    depthTest: !0,
                    depthWrite: !1,
                  });
                  return this.isFirefox && (t.blending = R.jFi), new R.jyi(t);
                },
              },
              {
                key: 'addLights',
                value: function () {
                  (this.ambient = new R.Mig(new R.Ilk('#ffffff'), 1)),
                    this.scene.add(this.ambient);
                  var e = new u.ZP.timeline({
                    repeat: -1,
                    yoyo: !0,
                  }).add('start');
                  (this.directional = new R.Ox3(new R.Ilk('#ffffff'), 3)),
                    this.directional.position.set(0, 200, 0),
                    this.scene.add(this.directional),
                    e.fromTo(
                      this.directional.position,
                      {
                        x: '+=300',
                        y: '+=200',
                      },
                      {
                        x: '-=300',
                        y: '-=200',
                        duration: 5,
                      },
                      'start'
                    ),
                    (this.directional2 = new R.Ox3(new R.Ilk('#ffffff'), 3)),
                    this.directional2.position.set(100, 200, 100),
                    this.scene.add(this.directional2),
                    e.fromTo(
                      this.directional2.position,
                      {
                        y: '+=300',
                        z: '+=150',
                      },
                      {
                        y: '-=300',
                        z: '-=150',
                        duration: 3,
                      },
                      'start'
                    ),
                    (this.directional3 = new R.Ox3(new R.Ilk('#ffffff'), 3)),
                    this.directional3.position.set(-100, -200, -100),
                    this.scene.add(this.directional3),
                    e.fromTo(
                      this.directional3.position,
                      {
                        z: '+=200',
                        x: '+=300',
                      },
                      {
                        z: '-=200',
                        x: '-=300',
                        duration: 7,
                      },
                      'start'
                    );
                },
              },
              {
                key: 'initBall',
                value: function () {
                  var e = new R.xo$(1, 64, 64),
                    t = new R.EJi({
                      color: new R.Ilk('#84f2ff'),
                      emissive: new R.Ilk('#7affc4'),
                      emissiveIntensity: 1,
                      roughness: 0.5,
                      metalness: 0.9,
                      clearcoat: 0,
                      clearcoatRoughness: 0.1,
                      envMap: this.envMap,
                      envMapIntensity: 1,
                      transparent: !0,
                      opacity: 1,
                    });
                  return new R.Kj0(e, t);
                },
              },
              {
                key: 'initMainModel',
                value: function () {
                  for (
                    var e = new R.Tme(),
                      t = [0.95, 0.9, 0.775, 0.6, 0.3],
                      n = 0;
                    n < 5;
                    n++
                  ) {
                    var i = this.createRing(180 - 25 * (n + 1));
                    i.scale.setScalar(t[n]),
                      (i.position.y = 0.175 * (n + 1)),
                      e.add(i);
                  }
                  var r = this.createRing(180);
                  r.scale.setScalar(1), (r.position.y = 0), e.add(r);
                  for (var o = 0; o < 5; o++) {
                    var a = this.createRing(180 - 25 * (o + 1));
                    a.scale.setScalar(t[o]),
                      (a.position.y = 0 - 0.175 * (o + 1)),
                      e.add(a);
                  }
                  return e;
                },
              },
              {
                key: 'createRing',
                value: function (e) {
                  for (
                    var t = new R.zf8(1, e),
                      n = new R.jyz({
                        vertexShader:
                          '#define GLSLIFY 1\nattribute float index;\n\nuniform float uModifier;\nuniform float uSineModify;\nuniform float uZStrech;\nuniform float uXStrech;\nuniform float uYStrech;\nuniform float uTime;\nuniform float uFrustum;\nuniform float uRandom;\n\nvarying float vIndex;\nvarying float vTime;\nvarying vec3 vPos;\n\nvoid main () {\n    vIndex = index;\n    vTime = uTime;\n    float time = uTime * 2.0;\n\n    vec3 pos = position;\n\n    float xzModifier = uSineModify;\n\n    pos.z += sin(time + (sin(pos.y * uModifier) * xzModifier) + (sin(pos.x * uModifier) * xzModifier)) * 0.05;\n    pos.z *= 1.0 + tan(uZStrech);\n    pos.x += sin(time + (sin(pos.y * uModifier) * xzModifier) + (sin(pos.x * uModifier) * xzModifier)) * 0.05;\n    pos.x *= 1.0 + tan(uXStrech);\n    pos.y += sin(time + (sin(pos.y * uModifier) * xzModifier) + (sin(pos.x * uModifier) * xzModifier)) * 0.05;\n    pos.y *= 1.0 + tan(uYStrech);\n\n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n\n    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);\n    vPos = worldPosition.xyz;\n\n    /* big white dots size */\n    // if (index == 110.0 || index == 220.0 || index == 300.0) {\n    if (vIndex == uRandom || vIndex == uRandom / 2.0 || vIndex == uRandom / 3.0) {\n        gl_PointSize = (12.0 + abs(sin(uTime)) * 5.0) / (abs(uFrustum) / 2.0);\n    }\n    /* default dots size */\n    else {\n        gl_PointSize = 8.0 / (abs(uFrustum) / 2.0);\n    }\n}',
                        fragmentShader:
                          '#define GLSLIFY 1\nvarying float vTime;\nvarying float vIndex;\nvarying vec3 vPos;\n\nuniform float uAlpha;\nuniform float uCamZ;\nuniform float uNear;\nuniform float uFar;\nuniform float uRandom;\n\nvec3 colorB = vec3(0.0,0.2745,0.6352);\nvec3 colorA = vec3(0.0,0.6470,0.7372);\n\nvoid main () {\n    float cameraZ = uCamZ;\n    float zDistance = abs(vPos.z - cameraZ);\n\n    float nearPlane = uNear;\n    float farPlane = uFar;\n\n    float alpha = (1.0 - clamp((zDistance - nearPlane) / (farPlane - nearPlane), 0.0, 1.0)) * uAlpha;\n\n    float pct = abs(sin(vTime));\n    vec3 final = mix(colorA, colorB, pct);\n\n    /* setup white dots */\n    // if (vIndex == 110.0 || vIndex == 220.0 || vIndex == 300.0) {\n    if (vIndex == uRandom || vIndex == uRandom / 2.0 || vIndex == uRandom / 3.0) {\n        final = vec3(1.0, 1.0, 1.0);\n    }\n    else if (vIndex == 0.0) {\n        alpha = 0.0;\n    }\n\n    /* make round points */\n    if (length(gl_PointCoord - 0.5) > 0.5) discard;\n    gl_FragColor = vec4(final, alpha);\n}',
                        transparent: !0,
                        uniforms: {
                          uRandom: {
                            value: Math.floor(180 * Math.random()),
                          },
                          uAlpha: {
                            value: 1,
                          },
                          uTime: {
                            value: 0,
                          },
                          uModifier: {
                            value: 1,
                          },
                          uSineModify: {
                            value: 3,
                          },
                          uZStrech: {
                            value: 0,
                          },
                          uXStrech: {
                            value: 0,
                          },
                          uYStrech: {
                            value: 0,
                          },
                          uNear: {
                            value: 2.05,
                          },
                          uFar: {
                            value: 4.02,
                          },
                          uCamZ: {
                            value: -3.11,
                          },
                          uFrustum: {
                            value:
                              this.frustumSize.value * this.frustumSize.sphere,
                          },
                        },
                      }),
                      i = new Float32Array(t.attributes.position.count),
                      r = 0;
                    r < t.attributes.position.count;
                    r++
                  )
                    i[r] = r;
                  t.setAttribute('index', new R.TlE(i, 1));
                  var o = new R.woe(t, n);
                  return o.rotateX(R.M8C.degToRad(90)), o;
                },
              },
              {
                key: 'scrollInteraction',
                value: function () {
                  var e = this;
                  this.modelSections.forEach(function (t, n) {
                    t && e.singleSectionAnimation(t, n);
                  });
                },
              },
              {
                key: 'singleSectionAnimation',
                value: function (e, t) {
                  var n,
                    i,
                    r,
                    o,
                    a,
                    l =
                      null !== (n = e.dataset) && void 0 !== n && n.ball
                        ? JSON.parse(e.dataset.ball)
                        : null,
                    s =
                      null !== (i = e.dataset) && void 0 !== i && i.sprite
                        ? JSON.parse(e.dataset.sprite)
                        : null,
                    c =
                      null !== (r = e.dataset) && void 0 !== r && r.sphere
                        ? JSON.parse(e.dataset.sphere)
                        : null,
                    f =
                      null !== (o = e.dataset) && void 0 !== o && o.scene
                        ? JSON.parse(e.dataset.scene)
                        : null,
                    h =
                      null !== (a = e.dataset) && void 0 !== a && a.plane
                        ? JSON.parse(e.dataset.plane)
                        : null,
                    m = 'top center';
                  this.modelSections[t - 1] &&
                    (m = 'top-='.concat(
                      this.modelSections[t - 1].offsetHeight / 2,
                      ' center'
                    ));
                  var d = u.ZP.timeline({
                    ease: this.ease,
                    scrollTrigger: {
                      trigger: e,
                      start: m,
                      end: 'center center',
                      scrub: !0,
                    },
                  }).add('start');
                  l && this.animateBall(d, l),
                    s && this.animateSprite(d, s),
                    c && this.animateSphere(d, c),
                    f && this.animateScene(d, f, c),
                    h && this.animatePlane(d, h);
                },
              },
              {
                key: 'animateSprite',
                value: function (e, t) {
                  null != t.scale &&
                    e.to(
                      this.sprite.scale,
                      {
                        ease: this.ease,
                        x: t.scale,
                        y: t.scale,
                        z: t.scale,
                      },
                      'start'
                    ),
                    null != t.position &&
                      e.to(
                        this.sprite.position,
                        {
                          ease: this.ease,
                          z: t.position.z || 0,
                        },
                        'start'
                      ),
                    null == t.alpha ||
                      this.isFirefox ||
                      e.to(
                        this.sprite.material,
                        {
                          ease: this.ease,
                          opacity: t.alpha,
                        },
                        'start'
                      );
                },
              },
              {
                key: 'animateScene',
                value: function (e, t, n) {
                  var i = this;
                  null != t.position &&
                    e.to(
                      this.sceneContainer.position,
                      {
                        ease: this.ease,
                        x: t.position.x * this.winSizeOffset || 0,
                        y: t.position.y || 0,
                      },
                      'start'
                    ),
                    null != t.rotation &&
                      e.to(
                        this.sceneContainer.rotation,
                        {
                          ease: this.ease,
                          x: t.rotation.x ? R.M8C.degToRad(t.rotation.x) : null,
                          y: t.rotation.y ? R.M8C.degToRad(t.rotation.y) : null,
                          z: t.rotation.z ? R.M8C.degToRad(t.rotation.z) : null,
                        },
                        'start'
                      ),
                    null != t.rotationSpeed &&
                      e.to(
                        this.rotationSpeed,
                        {
                          ease: this.ease,
                          speed: t.rotationSpeed || null,
                        },
                        'start'
                      ),
                    null != t.uFrustum &&
                      e.to(
                        this.frustumSize,
                        {
                          ease: this.ease,
                          value: t.uFrustum,
                          onUpdate: function () {
                            (i.plane.material.uniforms.uFrustum.value =
                              i.frustumSize.value),
                              i.handleResize();
                          },
                        },
                        'start'
                      );
                },
              },
              {
                key: 'animateSphere',
                value: function (e, t) {
                  var n = this;
                  this.mainModel.children.forEach(function (i, r) {
                    var o, a, l;
                    null != t.uModifier &&
                      e.to(
                        i.material.uniforms.uModifier,
                        {
                          ease: n.ease,
                          value: t.uModifier,
                        },
                        'start'
                      ),
                      null != t.uAlpha &&
                        e.to(
                          i.material.uniforms.uAlpha,
                          {
                            ease: n.ease,
                            value: t.uAlpha,
                          },
                          'start'
                        ),
                      null != t.uFrustum &&
                        ((n.frustumSize.sphere = t.uFrustum),
                        e.to(
                          i.material.uniforms.uFrustum,
                          {
                            ease: n.ease,
                            value: n.frustumSize.value * n.frustumSize.sphere,
                          },
                          'start'
                        )),
                      null !== (o = t.segments) &&
                        void 0 !== o &&
                        o.z &&
                        e.to(
                          i.material.uniforms.uZStrech,
                          {
                            ease: n.ease,
                            value: t.segments.z[r],
                          },
                          'start'
                        ),
                      null !== (a = t.segments) &&
                        void 0 !== a &&
                        a.x &&
                        e.to(
                          i.material.uniforms.uXStrech,
                          {
                            ease: n.ease,
                            value: t.segments.x[r],
                          },
                          'start'
                        ),
                      null !== (l = t.segments) &&
                        void 0 !== l &&
                        l.y &&
                        e.to(
                          i.material.uniforms.uYStrech,
                          {
                            ease: n.ease,
                            value: t.segments.y[r],
                          },
                          'start'
                        ),
                      t.uZStrech &&
                        e.to(
                          i.material.uniforms.uZStrech,
                          {
                            ease: n.ease,
                            value: t.uZStrech,
                          },
                          'start'
                        ),
                      t.uXStrech &&
                        e.to(
                          i.material.uniforms.uXStrech,
                          {
                            ease: n.ease,
                            value: t.uXStrech,
                          },
                          'start'
                        ),
                      t.uYStrech &&
                        e.to(
                          i.material.uniforms.uYStrech,
                          {
                            ease: n.ease,
                            value: t.uYStrech,
                          },
                          'start'
                        );
                  }),
                    null != t.scale &&
                      e.to(
                        this.transformContainer.scale,
                        {
                          ease: this.ease,
                          x: t.scale,
                          y: t.scale,
                          z: t.scale,
                        },
                        'start'
                      ),
                    null != t.rotation &&
                      e.to(
                        this.transformContainer.rotation,
                        {
                          ease: this.ease,
                          z: t.rotation,
                        },
                        'start'
                      );
                },
              },
              {
                key: 'animatePlane',
                value: function (e, t) {
                  null != t.uAlpha &&
                    e.to(
                      this.plane.material.uniforms.uAlpha,
                      {
                        ease: this.ease,
                        value: t.uAlpha,
                      },
                      'start'
                    ),
                    null != t.uAnchorX &&
                      e.to(
                        this.plane.material.uniforms.uAnchor.value,
                        {
                          ease: this.ease,
                          x: t.uAnchorX,
                        },
                        'start'
                      ),
                    null != t.uAnchorY &&
                      e.to(
                        this.plane.material.uniforms.uAnchor.value,
                        {
                          ease: this.ease,
                          y: t.uAnchorY,
                        },
                        'start'
                      ),
                    null != t.uFrustum &&
                      e.to(
                        this.plane.material.uniforms.uFrustum,
                        {
                          ease: this.ease,
                          value: t.uFrustum,
                        },
                        'start'
                      );
                },
              },
              {
                key: 'animateBall',
                value: function (e, t) {
                  null != t.alpha &&
                    e.to(
                      this.ball.material,
                      {
                        ease: this.ease,
                        opacity: t.alpha,
                      },
                      'start'
                    ),
                    null != t.scale &&
                      e.to(
                        this.ball.scale,
                        {
                          ease: this.ease,
                          x: t.scale,
                          y: t.scale,
                          z: t.scale,
                        },
                        'start'
                      );
                },
              },
              {
                key: 'homeHeaderIntroAnimation',
                value: function (e) {
                  var t = this;
                  this.smoothScroll.scrollLock(),
                    u.ZP.set(this.ball.material, {
                      opacity: 0,
                    }),
                    u.ZP.set(this.el, {
                      autoAlpha: 0,
                    }),
                    u.ZP.set(this.ball.scale, {
                      x: 0,
                      y: 0,
                      z: 0,
                    });
                  var n = !1,
                    i = u.ZP.timeline({
                      onComplete: function () {
                        return e();
                      },
                      onUpdate: function (e) {
                        i.progress() > 0.75 &&
                          !n &&
                          ((n = !0), t.smoothScroll.unlockScroll());
                      },
                    }),
                    r = {
                      sphere: {
                        uModifier: 5,
                        uFrustum: 0.7,
                        segments: {
                          z: [
                            1.7, 1.5, 1.6, 1.7, 1.6, 1.5, 1.6, 1.7, 1.6, 1.5,
                            1.6,
                          ],
                          x: [
                            0.4, 0.8, 0.6, 0.5, 0.4, 0.5, 0.7, 0.4, 0.4, 0.8,
                            0.7,
                          ],
                          y: [
                            1.6, 1.2, 1.6, 1, 1.6, 1.3, 1.5, 1.1, 1.6, 1.1, 1.6,
                          ],
                        },
                      },
                      scene: {
                        position: {
                          x: -1,
                          y: 0.2,
                        },
                      },
                      sprite: {
                        scale: 6,
                        position: {
                          z: -1.6,
                        },
                      },
                    };
                  i
                    .to(this.el, {
                      autoAlpha: 1,
                      delay: 0.2,
                      duration: 0.5,
                      ease: 'none',
                    })
                    .add('start'),
                    this.mainModel.children.forEach(function (e, n) {
                      i.fromTo(
                        e.material.uniforms.uModifier,
                        {
                          value: r.sphere.uModifier,
                        },
                        {
                          value: 1,
                          duration: 2,
                          ease: 'quad.inOut',
                        },
                        'start'
                      ),
                        (t.frustumSize.sphere = r.sphere.uFrustum),
                        i.fromTo(
                          e.material.uniforms.uFrustum,
                          {
                            value: t.frustumSize.value * t.frustumSize.sphere,
                          },
                          {
                            value: 1.1 * t.frustumSize.value,
                            duration: 2,
                            ease: 'quad.inOut',
                          },
                          'start'
                        ),
                        i.fromTo(
                          e.material.uniforms.uZStrech,
                          {
                            value: r.sphere.segments.z[n],
                          },
                          {
                            value: 0,
                            duration: 2,
                            ease: 'quad.inOut',
                          },
                          'start'
                        ),
                        i.fromTo(
                          e.material.uniforms.uXStrech,
                          {
                            value: r.sphere.segments.x[n],
                          },
                          {
                            value: 0,
                            duration: 2,
                            ease: 'quad.inOut',
                          },
                          'start'
                        ),
                        i.fromTo(
                          e.material.uniforms.uYStrech,
                          {
                            value: r.sphere.segments.y[n],
                          },
                          {
                            value: 0,
                            duration: 2,
                            ease: 'quad.inOut',
                          },
                          'start'
                        );
                    }),
                    i.fromTo(
                      this.sprite.scale,
                      {
                        x: r.sprite.scale,
                        y: r.sprite.scale,
                        z: r.sprite.scale,
                      },
                      {
                        x: 3,
                        y: 3,
                        z: 3,
                        duration: 2,
                        ease: 'quad.inOut',
                      },
                      'start'
                    ),
                    i.fromTo(
                      this.sprite.position,
                      {
                        z: r.sprite.position.z,
                      },
                      {
                        z: 0,
                        duration: 2,
                        ease: 'quad.inOut',
                      },
                      'start'
                    ),
                    i.to(
                      this.sprite.material,
                      {
                        opacity: 1,
                        duration: 2,
                        ease: 'quad.inOut',
                      },
                      'start'
                    ),
                    i.fromTo(
                      this.sceneContainer.position,
                      {
                        x: r.scene.position.x * this.winSizeOffset,
                        y: r.scene.position.y,
                      },
                      {
                        x: -4 * this.winSizeOffset,
                        y: 0.2,
                        duration: 2,
                        ease: 'quad.inOut',
                      },
                      'start'
                    ),
                    i.fromTo(
                      this.rotationSpeed,
                      {
                        speed: 0.6,
                      },
                      {
                        speed: 0.2,
                        duration: 2,
                        ease: 'quad.inOut',
                      },
                      'start'
                    ),
                    i.fromTo(
                      this.frustumSize,
                      {
                        value: 4,
                      },
                      {
                        value: 4.5,
                        duration: 2,
                        ease: 'quad.inOut',
                        onUpdate: function () {
                          (t.plane.material.uniforms.uFrustum.value =
                            t.frustumSize.value),
                            t.handleResize();
                        },
                      },
                      'start'
                    );
                },
              },
            ]) && G(t.prototype, n),
            i && G(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function J(e) {
          return (
            (J =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            J(e)
          );
        }
        function K(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, $(i.key), i);
          }
        }
        function $(e) {
          var t = (function (e, t) {
            if ('object' != J(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != J(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == J(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var Q = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  wrapper: '.js-timeline',
                  item: '.js-timeline-item',
                  line: '.js-timeline-item-line',
                  content: '.js-timeline-content',
                  icon: '.js-timeline-item-icon',
                }),
                (this.wrappers = document.querySelectorAll(this.DOM.wrapper)),
                null == this.wrappers ||
                  this.wrappers.length < 1 ||
                  this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    var e = this;
                    this.wrappers.forEach(function (t, n) {
                      e.singleTimeline(t);
                    });
                  },
                },
                {
                  key: 'singleTimeline',
                  value: function (e) {
                    var t = e.querySelectorAll(this.DOM.item);
                    null == t || t.length < 1 || this.lineAnimation(t);
                  },
                },
                {
                  key: 'lineAnimation',
                  value: function (e) {
                    var t = this;
                    e.forEach(function (n, i) {
                      var r = n.querySelector(t.DOM.line),
                        o = n.querySelector(t.DOM.icon),
                        a = 'top center',
                        l = 'bottom center';
                      0 === i && (a = 'center center'),
                        i === e.length - 1 && (l = 'center center'),
                        u.ZP.fromTo(
                          r,
                          {
                            scaleY: 0,
                          },
                          {
                            scaleY: 1,
                            ease: 'none',
                            scrollTrigger: {
                              trigger: n,
                              start: a,
                              end: l,
                              scrub: !0,
                            },
                          }
                        ),
                        null != o &&
                          w.i.create({
                            trigger: o,
                            start: 'center center',
                            onEnter: function () {
                              o.classList.add('is-active');
                            },
                            onLeaveBack: function () {
                              o.classList.remove('is-active');
                            },
                          });
                    });
                  },
                },
                {
                  key: 'contentAnimation',
                  value: function (e) {
                    e.forEach(function (e) {
                      u.ZP.timeline({
                        scrollTrigger: {
                          trigger: e,
                          start: 'top 90%',
                          end: 'bottom 10%',
                          scrub: !0,
                        },
                      })
                        .fromTo(
                          e,
                          {
                            autoAlpha: 0,
                            y: '10%',
                          },
                          {
                            autoAlpha: 1,
                            y: '0%',
                            ease: 'none',
                            duration: 0.35,
                          }
                        )
                        .fromTo(
                          e,
                          {
                            autoAlpha: 1,
                            y: '0%',
                          },
                          {
                            autoAlpha: 0,
                            y: '-10%',
                            ease: 'none',
                            delay: 0.5,
                            duration: 0.35,
                          }
                        );
                    }),
                      u.ZP.set(e, {
                        autoAlpha: 0,
                        y: '10%',
                      });
                  },
                },
              ]) && K(t.prototype, n),
              i && K(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          ee = n(652),
          te = n(678);
        function ne(e) {
          return (
            (ne =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            ne(e)
          );
        }
        function ie(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, re(i.key), i);
          }
        }
        function re(e) {
          var t = (function (e, t) {
            if ('object' != ne(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != ne(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == ne(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var oe = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                wrapper: '.js-slider-wrapper',
                swiper: '.js-slider-swiper',
                scrollbar: '.js-slider-scrollbar',
              }),
              (this.wrappers = t.querySelectorAll(this.DOM.wrapper)),
              this.wrappers.length < 1 || this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  this.wrappers.forEach(function (t) {
                    e.singleSlider(t);
                  });
                },
              },
              {
                key: 'singleSlider',
                value: function (e) {
                  var t = e.querySelector(this.DOM.swiper),
                    n = e.querySelector(this.DOM.scrollbar);
                  new ee.Z(t, {
                    modules: [te.LW, te.Rv],
                    freeMode: {
                      enabled: !0,
                      sticky: !0,
                    },
                    scrollbar: {
                      el: n,
                      draggable: !0,
                    },
                    breakpoints: {
                      290: {
                        slidesPerView: 1.1,
                        spaceBetween: 30,
                      },
                      480: {
                        slidesPerView: 1.7,
                        spaceBetween: 30,
                      },
                      800: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1080: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                      },
                    },
                    on: {
                      afterInit: function () {
                        w.i.refresh();
                      },
                    },
                  });
                },
              },
            ]) && ie(t.prototype, n),
            i && ie(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function ae(e) {
          return (
            (ae =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            ae(e)
          );
        }
        function le(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, se(i.key), i);
          }
        }
        function se(e) {
          var t = (function (e, t) {
            if ('object' != ae(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != ae(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == ae(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var ue = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                wrapper: '.js-clock-timeline-wrapper',
                numbers: '.js-clock-timeline-numbers',
                item: '.js-clock-timeline-item',
                items: '.js-clock-timeline-items',
                clockFirstDigit: '.js-clock-timeline-hour-first-digit',
                clockSecondDigit: '.js-clock-timeline-hour-second-digit',
                amDayTime: '.js-clock-timeline-day-time-am',
                pmDayTime: '.js-clock-timeline-day-time-pm',
              }),
              (this.wrappers = document.querySelectorAll(this.DOM.wrapper)),
              null == this.wrappers || this.wrappers.length < 1 || this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  this.wrappers.forEach(function (t, n) {
                    e.singleTimeline(t);
                  });
                },
              },
              {
                key: 'singleTimeline',
                value: function (e) {
                  var t = {
                      hoursArray: [],
                      hoursElements: [],
                      clockFirstDigit: e.querySelector(
                        this.DOM.clockFirstDigit
                      ),
                      clockSecondDigit: e.querySelector(
                        this.DOM.clockSecondDigit
                      ),
                      amDayTime: e.querySelector(this.DOM.amDayTime),
                      pmDayTime: e.querySelector(this.DOM.pmDayTime),
                      numOfItems: 0,
                    },
                    n = e.querySelector(this.DOM.numbers),
                    i = e.querySelectorAll(this.DOM.item),
                    r = e.querySelector(this.DOM.items);
                  i.length < 1 ||
                    ((this.numOfItems = i.length),
                    (n.style.height = ''.concat(i[0].clientHeight, 'px')),
                    this.numbersStickyAnimation(n, r),
                    this.createArrays(i, t),
                    this.addCharsToHoursDile(t),
                    this.itemsAnimation(i, t));
                },
              },
              {
                key: 'addCharsToHoursDile',
                value: function (e) {
                  e.hoursArray.length < 1 ||
                    e.hoursArray.forEach(function (t, n) {
                      var i = document.createElement('span'),
                        r = document.createElement('span');
                      (i.innerHTML = t[0] || '0'),
                        (r.innerHTML = t[1] || '0'),
                        e.clockFirstDigit.appendChild(i),
                        e.clockSecondDigit.appendChild(r),
                        e.hoursElements.push([i, r]);
                    });
                },
              },
              {
                key: 'createArrays',
                value: function (e, t) {
                  var n = this;
                  e.forEach(function (e) {
                    var i = e.getAttribute('data-hour');
                    n.singleArray(i, t);
                  });
                },
              },
              {
                key: 'singleArray',
                value: function (e, t) {
                  var n = Array.from(e);
                  t.hoursArray.push(n);
                },
              },
              {
                key: 'numbersStickyAnimation',
                value: function (e, t) {
                  w.i.create({
                    trigger: e,
                    start: 'center center',
                    end: '+='.concat(t.clientHeight - e.clientHeight, 'px'),
                    pin: !0,
                  });
                },
              },
              {
                key: 'itemsAnimation',
                value: function (e, t) {
                  var n = this;
                  e.forEach(function (e, i) {
                    var r = e.getAttribute('data-daytime');
                    w.i.create({
                      trigger: e,
                      start: 'top center',
                      end: 'bottom center',
                      onEnter: function () {
                        n.switchToNextHour(i, t), n.switchToDayTime(r, t);
                      },
                      onEnterBack: function () {
                        n.switchToNextHour(i, t), n.switchToDayTime(r, t);
                      },
                    });
                  });
                },
              },
              {
                key: 'switchToNextHour',
                value: function (e, t) {
                  u.ZP.to(t.clockFirstDigit, {
                    y: '-'.concat((100 / this.numOfItems) * e, '%'),
                  }),
                    u.ZP.to(t.clockSecondDigit, {
                      y: '-'.concat((100 / this.numOfItems) * e, '%'),
                      delay: 0.15,
                    });
                },
              },
              {
                key: 'switchToDayTime',
                value: function (e, t) {
                  u.ZP.to(t.amDayTime, {
                    autoAlpha: 'am' === e ? 1 : 0,
                  }),
                    u.ZP.to(t.pmDayTime, {
                      autoAlpha: 'pm' === e ? 1 : 0,
                    });
                },
              },
            ]) && le(t.prototype, n),
            i && le(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function ce(e) {
          return (
            (ce =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            ce(e)
          );
        }
        function fe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, he(i.key), i);
          }
        }
        function he(e) {
          var t = (function (e, t) {
            if ('object' != ce(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != ce(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == ce(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var me = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  line: '.js-scroll-marquee',
                }),
                this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    var e = this,
                      t = document.querySelectorAll(this.DOM.line);
                    null == t ||
                      t.length < 1 ||
                      t.forEach(function (t, n) {
                        e.singleLineAnimation(t, n);
                      });
                  },
                },
                {
                  key: 'singleLineAnimation',
                  value: function (e, t) {
                    var n = e.offsetWidth - window.width;
                    if (!(n <= 0)) {
                      var i = 0,
                        r = -n;
                      t % 2 == 0 && ((i = -n), (r = 0)),
                        u.ZP.fromTo(
                          e,
                          {
                            x: i,
                          },
                          {
                            x: r,
                            scrollTrigger: {
                              trigger: e,
                              start: 'top bottom',
                              end: 'bottom top',
                              scrub: 0.6,
                            },
                          }
                        );
                    }
                  },
                },
              ]) && fe(t.prototype, n),
              i && fe(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          de = n(222);
        function pe(e) {
          return (
            (pe =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            pe(e)
          );
        }
        function ye(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, ve(i.key), i);
          }
        }
        function ve(e) {
          var t = (function (e, t) {
            if ('object' != pe(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != pe(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == pe(t) ? t : String(t);
        }
        u.ZP.registerPlugin(c.C, de.A);
        var ge = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : document;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  element: '.js-button-text-shuffle',
                  wrapper: '.js-button-text-shuffle-wrapper',
                }),
                (this.wrappers = t.querySelectorAll(this.DOM.wrapper)),
                this.wrappers.length < 1 || this.init();
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    var e = this;
                    this.wrappers.forEach(function (t, n) {
                      e.singleItem(t);
                    });
                  },
                },
                {
                  key: 'singleItem',
                  value: function (e) {
                    var t = e.querySelector(this.DOM.element),
                      n = new c.C(t, {
                        type: 'chars',
                      }),
                      i = '0123456789'.split(''),
                      r = this.shuffleArray(i),
                      o = this.shuffleArray(n.chars),
                      a = new u.ZP.timeline({
                        paused: !0,
                        repeat: 1,
                        yoyo: !0,
                        onComplete: function () {
                          (e.style.width = ''), (e.style.whiteSpace = 'normal');
                        },
                      });
                    o.forEach(function (e, t) {
                      a.to(
                        o[t],
                        {
                          duration: 0.02,
                          scrambleText: r[Math.floor(Math.random() * i.length)],
                        },
                        0.02 * t
                      );
                    }),
                      e.addEventListener('mouseenter', function () {
                        (e.style.width = e.offsetWidth + 'px'),
                          (e.style.whiteSpace = 'nowrap'),
                          a.play(0);
                      });
                  },
                },
                {
                  key: 'shuffleArray',
                  value: function (e) {
                    for (var t = e.length - 1; t > 0; t--) {
                      var n = Math.floor(Math.random() * (t + 1)),
                        i = e[t];
                      (e[t] = e[n]), (e[n] = i);
                    }
                    return e;
                  },
                },
              ]) && ye(t.prototype, n),
              i && ye(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })(),
          be = n(248),
          Se = n.n(be);
        function we(e) {
          return (
            (we =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            we(e)
          );
        }
        function Pe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Oe(i.key), i);
          }
        }
        function Oe(e) {
          var t = (function (e, t) {
            if ('object' != we(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != we(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == we(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var xe = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                element: '.js-lottie-animation',
              }),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this,
                    t = document.querySelectorAll(this.DOM.element);
                  null == t ||
                    t.length < 1 ||
                    t.forEach(function (t) {
                      e.singleAnimation(t);
                    });
                },
              },
              {
                key: 'singleAnimation',
                value: function (e) {
                  var t = e.dataset.lottieJson;
                  t &&
                    Se()
                      .loadAnimation({
                        container: e,
                        renderer: 'svg',
                        loop: !0,
                        autoplay: !0,
                        path: t,
                      })
                      .addEventListener('DOMLoaded', function () {
                        w.i.refresh();
                      });
                },
              },
            ]) && Pe(t.prototype, n),
            i && Pe(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function Ce(e) {
          return (
            (Ce =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            Ce(e)
          );
        }
        function ke(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Me(i.key), i);
          }
        }
        function Me(e) {
          var t = (function (e, t) {
            if ('object' != Ce(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != Ce(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == Ce(t) ? t : String(t);
        }
        u.ZP.registerPlugin(c.C, w.i, de.A);
        var Te = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                element: '.js-counter',
              }),
              (this.elements = t.querySelectorAll(this.DOM.element)),
              this.elements.length < 1 || this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  this.elements.forEach(function (t, n) {
                    e.singleItem(t);
                  });
                },
              },
              {
                key: 'singleItem',
                value: function (e) {
                  var t = new c.C(e, {
                      type: 'lines, chars',
                    }),
                    n = '0123456789'.split(''),
                    i = this.shuffleArray(n),
                    r = this.shuffleArray(t.chars),
                    o = new u.ZP.timeline({
                      paused: !0,
                      repeat: 1,
                    });
                  r.forEach(function (e, t) {
                    o.to(
                      r[t],
                      {
                        duration: 0.02,
                        scrambleText: i[Math.floor(Math.random() * n.length)],
                      },
                      0.02 * t
                    );
                  }),
                    o.totalProgress(1),
                    w.i.create({
                      trigger: e,
                      start: 'top 80%',
                      onEnter: function () {
                        o.timeScale(1).reverse(1);
                      },
                    });
                },
              },
              {
                key: 'shuffleArray',
                value: function (e) {
                  for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)),
                      i = e[t];
                    (e[t] = e[n]), (e[n] = i);
                  }
                  return e;
                },
              },
            ]) && ke(t.prototype, n),
            i && ke(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function Ae(e) {
          return (
            (Ae =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            Ae(e)
          );
        }
        function je(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Ee(i.key), i);
          }
        }
        function Ee(e) {
          var t = (function (e, t) {
            if ('object' != Ae(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != Ae(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == Ae(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var De = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                parallaxElement: '.js-parallax-image',
              }),
              (this.parallaxElement = document.querySelectorAll(
                this.DOM.parallaxElement
              )),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e,
                    t = this;
                  (null === (e = this.parallaxElement) || void 0 === e
                    ? void 0
                    : e.length) > 0 &&
                    this.parallaxElement.forEach(function (e) {
                      t.parallaxSingleElement(e);
                    });
                },
              },
              {
                key: 'parallaxSingleElement',
                value: function (e) {
                  u.ZP.fromTo(
                    e,
                    {
                      y: '16%',
                    },
                    {
                      y: '-16%',
                      ease: 'none',
                      scrollTrigger: {
                        trigger: e,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: !0,
                      },
                    }
                  );
                },
              },
            ]) && je(t.prototype, n),
            i && je(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function ze(e) {
          return (
            (ze =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            ze(e)
          );
        }
        function Ze(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Fe(i.key), i);
          }
        }
        function Fe(e) {
          var t = (function (e, t) {
            if ('object' != ze(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != ze(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == ze(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var qe = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                wrapper: '.js-people-slider-wrapper',
                swiper: '.js-people-slider-swiper',
                scrollbar: '.js-people-slider-scrollbar',
              }),
              (this.wrappers = t.querySelectorAll(this.DOM.wrapper)),
              (this.swipers = []),
              this.wrappers.length < 1 || this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  this.wrappers.forEach(function (t, n) {
                    e.singleSlider(t, n);
                  });
                },
              },
              {
                key: 'singleSlider',
                value: function (e, t) {
                  var n = this,
                    i = e.querySelector(this.DOM.swiper),
                    r = e.querySelector(this.DOM.scrollbar);
                  u.ZP.matchMedia()
                    .add('(max-width: 800px)', function () {
                      n.enableSwiper(i, r, t);
                    })
                    .add('(min-width: 800px)', function () {
                      n.swipers[t] &&
                        (u.ZP.set(n.swipers[t].slides, {
                          clear: 'both',
                        }),
                        n.swipers[t].destroy());
                    });
                },
              },
              {
                key: 'enableSwiper',
                value: function (e, t, n) {
                  this.swipers[n] = new ee.Z(e, {
                    modules: [te.LW, te.Rv],
                    freeMode: {
                      enabled: !0,
                      sticky: !0,
                    },
                    scrollbar: {
                      el: t,
                      draggable: !0,
                    },
                    breakpoints: {
                      290: {
                        slidesPerView: 1.1,
                        spaceBetween: 30,
                      },
                      480: {
                        slidesPerView: 1.7,
                        spaceBetween: 30,
                      },
                    },
                    on: {
                      afterInit: function () {
                        w.i.refresh();
                      },
                    },
                  });
                },
              },
            ]) && Ze(t.prototype, n),
            i && Ze(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function Le(e) {
          return (
            (Le =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            Le(e)
          );
        }
        function Ie(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Re(i.key), i);
          }
        }
        function Re(e) {
          var t = (function (e, t) {
            if ('object' != Le(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != Le(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == Le(t) ? t : String(t);
        }
        u.ZP.registerPlugin(w.i);
        var Ne = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.DOM = {
                form: '.js-form',
              }),
              (this.forms = document.querySelectorAll(this.DOM.form)),
              this.init();
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: 'init',
                value: function () {
                  var e = this;
                  null == this.forms ||
                    this.forms.length < 1 ||
                    (this.forms.forEach(function (t) {
                      e.singleForm(t);
                    }),
                    document.addEventListener(
                      'wpcf7submit',
                      function (e) {
                        w.i.refresh();
                      },
                      !1
                    ));
                },
              },
              {
                key: 'singleForm',
                value: function (e) {
                  var t = e.querySelectorAll('select');
                  t.length > 0 &&
                    t.forEach(function (e) {
                      e.querySelectorAll('option')[0].setAttribute(
                        'disabled',
                        'disabled'
                      );
                    });
                },
              },
            ]) && Ie(t.prototype, n),
            i && Ie(t, i),
            Object.defineProperty(t, 'prototype', {
              writable: !1,
            }),
            e
          );
        })();
        function He(e) {
          return (
            (He =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            He(e)
          );
        }
        function We(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, Ye(i.key), i);
          }
        }
        function Ye(e) {
          var t = (function (e, t) {
            if ('object' != He(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || 'default');
              if ('object' != He(i)) return i;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == He(t) ? t : String(t);
        }
        var _e,
          Be = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.DOM = {
                  grid: '.js-cpt-grid',
                  filter: '.js-cpt-filter',
                }),
                (this.filters = document.querySelectorAll(this.DOM.filter)),
                (this.grid = document.querySelector(this.DOM.grid)),
                (this.restUrl =
                  frontend_rest_object.rest_url +
                  frontend_rest_object.cpt_route);
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: 'init',
                  value: function () {
                    this.filters.length &&
                      this.filters.forEach(function (e) {
                        e.addEventListener('click', function (t) {
                          window.open(e.dataset.url, '_self');
                        });
                      });
                  },
                },
                {
                  key: 'clearFilters',
                  value: function () {
                    this.filters.length &&
                      this.filters.forEach(function (e) {
                        e.checked && (e.checked = !1);
                      });
                  },
                },
              ]) && We(t.prototype, n),
              i && We(t, i),
              Object.defineProperty(t, 'prototype', {
                writable: !1,
              }),
              e
            );
          })();
        (_e = function () {
          'scrollRestoration' in window.history &&
            (window.history.scrollRestoration = 'manual'),
            window.scrollTo(0, 0),
            (r().ios() || r().safari()) &&
              document.documentElement.classList.add('is-ios'),
            'function' == typeof s && new s().init();
          var e = [
            'background-color: #000000',
            'color: white',
            'display: block',
            'line-height: 24px',
            'text-align: center',
            'border: 1px solid #ffffff',
            'font-weight: bold',
          ].join(';');
          console.info('dev by: %c Bornfight Studio ', e),
            (window.width = window.innerWidth),
            (window.height = window.innerHeight),
            window.addEventListener('resize', function () {
              (window.width = window.innerWidth),
                (window.height = window.innerHeight);
            }),
            new d(),
            new xe(),
            new oe(),
            new qe();
          var t = new Z();
          new g(t),
            new C(),
            new A(t),
            new I(),
            new De(),
            new V(t),
            new Q(),
            new ue(),
            new me(),
            new ge(),
            new Te(),
            new Ne(),
            new Be().init();
        }),
          'loading' !== document.readyState
            ? _e()
            : document.addEventListener
            ? document.addEventListener('DOMContentLoaded', _e)
            : document.attachEvent('onreadystatechange', function () {
                'complete' === document.readyState && _e();
              });
      },
    },
    n = {};
  function i(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var o = (n[e] = {
      exports: {},
    });
    return t[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = t),
    (i.amdO = {}),
    (e = []),
    (i.O = (t, n, r, o) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, r, o] = e[c], l = !0, s = 0; s < n.length; s++)
            (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((l = !1), o < a && (a = o));
          if (l) {
            e.splice(c--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [n, r, o];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        i.d(t, {
          a: t,
        }),
        t
      );
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {
        296: 0,
      };
      i.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            o,
            [a, l, s] = n,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (r in l) i.o(l, r) && (i.m[r] = l[r]);
            if (s) var c = s(i);
          }
          for (t && t(n); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(c);
        },
        n = (self.webpackChunkb_creative = self.webpackChunkb_creative || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var r = i.O(void 0, [736], () => i(237));
  r = i.O(r);
})();
