'use strict';
function _typeof(e) {
  return (_typeof =
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
        })(e);
}
function ADialog(e) {
  e = 'object' === _typeof(e) ? e : {};
  var o = document.querySelector('.c-dialog-overlay');
  o ||
    (((o = document.createElement('div')).className = 'c-dialog-overlay'),
    (o.innerHTML =
      '<div class="c-dialog"><div class="c-dialog__body"></div><button type="button" class="c-dialog__close"></button></div>'),
    (o.dialogClose = function () {
      'function' == typeof o.dialogOptions.onBeforeClose && o.dialogOptions.onBeforeClose(),
        o.classList.add('m-closing'),
        setTimeout(function () {
          (o.outerHTML = ''),
            'function' == typeof o.dialogOptions.onClose && o.dialogOptions.onClose();
        }, 300);
    }),
    o.addEventListener('click', function (e) {
      e.target === e.currentTarget && !1 !== o.dialogOptions.overlayClose && o.dialogClose();
    }),
    o.querySelector('.c-dialog__close').addEventListener('click', function () {
      o.dialogClose();
    }),
    document.body.appendChild(o)),
    (o.dialogOptions = e),
    (o.querySelector('.c-dialog').className = 'c-dialog ' + (e.className || '')),
    'auto' === e.width
      ? ((o.querySelector('.c-dialog').style.width = 'auto'),
        (o.querySelector('.c-dialog').style.maxWidth = 'none'))
      : ((o.querySelector('.c-dialog').style.width = ''),
        (o.querySelector('.c-dialog').style.maxWidth = e.width ? e.width + 'px' : '')),
    (o.querySelector('.c-dialog__body').innerHTML = e.html || ''),
    [].forEach.call(o.querySelectorAll('.js-dialog-close'), function (e) {
      e.addEventListener('click', function () {
        o.dialogClose();
      });
    }),
    setTimeout(function () {
      o.classList.add('m-ready'),
        'function' == typeof o.dialogOptions.onOpen && o.dialogOptions.onOpen(o);
    }, 0);
}

$(function () {
  function e(e, o) {
    var s = 1 < arguments.length && void 0 !== o ? o : {};
    (s.scrollBy = s.scrollBy || 1),
      $(e).each(function (e, o) {
        var t = $('.carousel__items > ul', o),
          i = $('.carousel__btn-prev', o),
          l = $('.carousel__btn-next', o);
        function n() {
          i.toggleClass('is-active', !(0 === t[0].scrollLeft)),
            l.toggleClass(
              'is-active',
              !(t[0].scrollLeft + t[0].offsetWidth + 5 >= t[0].scrollWidth),
            );
        }
        n(),
          t.on('scroll', function () {
            n();
          }),
          i.on('click', function () {
            t[0].scrollLeft -= t[0].offsetWidth * s.scrollBy;
          }),
          l.on('click', function () {
            t[0].scrollLeft += t[0].offsetWidth * s.scrollBy;
          }),
          $(window).on('resize', n),
          setTimeout(function () {
            n();
          }, 100);
      });
  }
  document.body.classList[document.querySelector('.header-usernav') ? 'add' : 'remove'](
    'page-with-usernav',
  ),
    $('.side-filter__tree').each(function (e, o) {
      function n() {
        $('.side-filter__tree-level', o).each(function (e, o) {
          var t = !!$('> .side-filter__tree-level-row.is-expanded', o).length;
          $(o).toggleClass('has-no-expanded-items', !t);
        });
      }
      $('.side-filter__tree-head-btn', o).on('click', function () {
        $(o).hasClass('is-expanded')
          ? ($(o).removeClass('is-expanded'), $(o).find('> .side-filter__tree-body').slideUp(200))
          : ($(o).addClass('is-expanded'), $(o).find('> .side-filter__tree-body').slideDown(200));
      }),
        $('.side-filter__tree-level-btn', o).each(function (e, o) {
          var t = $(o).closest('.side-filter__tree-level-row'),
            i = t.find('> .side-filter__tree-level, > .side-filter__tree-list'),
            l = t.hasClass('is-initially-collapsed');
          t.toggleClass('is-expanded', !l),
            i.css('display', l ? 'none' : 'block'),
            setTimeout(function () {}, 0),
            n(),
            $(o).on('click', function () {
              t.hasClass('is-expanded')
                ? (i.addClass('is-animating').slideUp(200, function () {
                    return i.removeClass('is-animating');
                  }),
                  t.removeClass('is-expanded'))
                : (i.addClass('is-animating').slideDown(200, function () {
                    return i.removeClass('is-animating');
                  }),
                  t.addClass('is-expanded')),
                n();
            });
        });
    }),
    $('.side-col__items .side-col__item-text').each(function (e, o) {
      var t = Math.round($('h4', o).height() / 14),
        i = 6 - t;
      5 < t ? $('p', o).hide() : $('p', o).addClass('u-limit-lines-' + i);
    }),
    e('.suggestions-carousel'),
    e('.small-carousel', { scrollBy: 0.5 }),
    $('.carousel-with-dots').each(function (e, o) {
      var t = $('.carousel-with-dots__items', o),
        o = $('.carousel-with-dots__pager', o),
        i =
          (o.html(Array(t[0].children.length).fill('<div class="carousel-with-dots__dot" />')),
          $('.carousel-with-dots__dot', o));
      function l() {
        var e = t[0],
          e = Math.round(e.scrollLeft / e.offsetWidth);
        i.eq(e).addClass('is-active').siblings().removeClass('is-active');
      }
      l(),
        t.on('scroll', function () {
          l();
        });
    }),
    $('.faq-item').each(function (e, o) {
      var t = $('.faq-item__head', o),
        i = $('.faq-item__body', o);
      t.on('click', function () {
        t.toggleClass('is-expanded'), i.slideToggle();
      });
    }),
    $('.header-dpd').each(function (e, o) {
      function t(e) {
        e.target.closest('.header-dpd--opened') ||
          ($('body').off('click', t), $('.header-dpd--opened').trigger('close'));
      }
      var i = $(o),
        l = $('.header-dpd__value', o),
        n = $('.header-dpd__search', o),
        s = $('.header-dpd__options > div', o);
      i.on('click', function (e) {
        i.hasClass('header-dpd--opened') && e.stopPropagation();
      }),
        i.on('close', function () {
          i.removeClass('header-dpd--opened'), n.val(''), n.trigger('input');
        }),
        l.on('click', function () {
          $('body').on('click', t),
            i.hasClass('header-dpd--opened') || $('.header-dpd--opened').trigger('close'),
            i.toggleClass('header-dpd--opened');
        }),
        n.on('keydown', function (e) {
          'Escape' === e.key && (n.val(''), n.trigger('input'));
        }),
        n.on('input', function () {
          var t = n.val().toLowerCase();
          s.each(function (e, o) {
            o.classList[-1 < o.textContent.toLowerCase().indexOf(t) ? 'remove' : 'add'](
              'is-hidden',
            );
          });
        });
    });
  function o(e) {
    e.target === document.body && $('body').removeClass('is-mobile-nav-opened').off('click', o);
  }
  function t() {
    return i.toggleClass('is-active', 300 < window.scrollY);
  }
  $('.header-mobile__burger').on('click', function (e) {
    e.stopPropagation(), $('body').addClass('is-mobile-nav-opened').on('click', o);
  }),
    $('[data-open-modal]').on('click', function (e) {
      e.preventDefault();
      (e = e.target.closest('[data-open-modal]').getAttribute('data-open-modal')),
        (e = document.getElementById(e));
      e && (e.classList.add('is-active'), $('body').addClass('is-modal-opened'));
    }),
    $('[data-close-modal]').on('click', function (e) {
      e = e.target.closest('.mobile-modal');
      e &&
        (e.classList.remove('is-active'), 0 === $('.mobile-modal.is-active').length) &&
        $('body').removeClass('is-modal-opened');
    }),
    $('.mobile-modal__accordion').each(function (e, o) {
      $('.mobile-modal__accordion-head', o).on('click', function () {
        $(o).toggleClass('is-active');
      });
    });
  var i = $('.scroll-top__btn');
  i.on('click', function () {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }),
    t(),
    $(document).on('ready scroll', t),
    $('.field-textarea').each(function (e, o) {
      var t = $(o).find('textarea');
      t['' === t.val() ? 'addClass' : 'removeClass']('is-empty'),
        t.on('input', function (e) {
          t['' === t.val() ? 'addClass' : 'removeClass']('is-empty');
        });
    }),
    $('.info-block').each(function (e, o) {
      var t = $(o).find('.info-block__head'),
        i = $(o).find('.info-block__body'),
        l = $(o).find('.info-block__collapse');
      t.on('click', function () {
        var e = $(o).hasClass('info-block--collapsed');
        i[e ? 'slideDown' : 'slideUp'](300, function () {
          $(o)[e ? 'removeClass' : 'addClass']('info-block--collapsed');
        });
      }),
        l.on('click', function () {
          i.slideUp(300, function () {
            $(o).addClass('info-block--collapsed');
          });
        });
    }),
    $(document)
      .on('click', '.dialog-login__show', function (e) {
        e = $(e.target).closest('.dialog-login__input').find('input');
        e.attr('type', 'password' === e.attr('type') ? 'text' : 'password');
      })
      .on('click', '.js-open-login', function () {
        ADialog({
          html: document.getElementById('dialog-login').innerHTML,
          className: 'dialog-login',
          overlayClose: !1,
        });
      })
      .on('click', '.js-open-register', function () {
        ADialog({
          html: document.getElementById('dialog-register').innerHTML,
          className: 'dialog-login',
          overlayClose: !1,
        });
      })
      .on('click', '.with-dpd__trigger', function (e) {
        $(e.target).closest('.with-dpd').toggleClass('with-dpd--opened');
      });
});

window.addEventListener('DOMContentLoaded', () => {
  //currancy
  const currencyMainBtn = document.querySelector('.header-dpd__main-btn');
  const currencyMainBtnM = document.querySelector('.header-mobile__settings button');
  const currencyBtns = document.querySelectorAll('.header-dpd__btn');
  const currencyBtnsM = document.querySelectorAll('.field-radio__label');
  const currencyMainBtnValue = currencyMainBtnM.querySelector('strong');

  currencyMainBtnM.addEventListener('click', changeValueMobile);
  currencyMainBtn.addEventListener('click', changeValueDesctop);

  function changeValueMobile() {
    currencyBtnsM.forEach((item) => {
      item.addEventListener('click', function () {
        currencyMainBtnValue.textContent = item.innerHTML;
      });
    });
  }

  function changeValueDesctop() {
    currencyBtns.forEach((item) => {
      item.addEventListener('click', function () {
        currencyMainBtn.textContent = item.innerHTML;
      });
    });
  }

  //кнопка

  //активный элемент
  const elem = document.querySelectorAll('.small-carousel__item');
  const searchInputs = document.querySelectorAll('.mobile-modal__search-input');
  const searchBtns = document.querySelectorAll('.mobile-modal__search-btn');
  const searchTips = document.querySelectorAll('.search-tips');

  searchInputs.forEach((item) => {
    item.addEventListener('click', function () {
      searchTips.forEach((element) => {
        element.classList.toggle('is-active');
      });
      searchBtns.forEach((item) => {
        item.classList.toggle('is-active');
      });
    });
  });

  elem.forEach((item) => {
    item.addEventListener('click', function () {
      elem.forEach((element) => {
        if (element.classList.contains('is-active')) {
          element.classList.remove('is-active');
        }
      });
      item.classList.add('is-active');
    });
  });
});
