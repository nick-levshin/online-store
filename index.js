(() => {
  var e = {
      4850: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don\'t need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don\'t interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n',
          '',
        ]);
        const i = a;
      },
      3546: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '#root {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}',
          '',
        ]);
        const i = a;
      },
      2827: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(9681),
          l = a()(function (e) {
            return e[1];
          }),
          c = o()(s);
        l.push([
          e.id,
          '.cards {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    gap: 3px;\r\n}\r\n\r\n.card__wrapperCard {\r\n    position: relative;\r\n    margin: 15px auto;\r\n    width: 270px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.card__bike {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.card__bike_img {\r\n    max-width: 100%;\r\n    height: 150px;\r\n    object-fit: cover;\r\n    border: 1px solid white;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.card__bike_descript {\r\n    border: 2px solid white;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    padding: 0 0 0 15px;\r\n\r\n}\r\n\r\n.bike__descript_firma h6 {\r\n    font-size: 16px;\r\n    color: aquamarine;\r\n    margin: 10px auto;\r\n}\r\n\r\nli {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.activeCardBike::after {\r\n    position: absolute;\r\n    content: url(' +
            c +
            ');\r\n    left: 5px;\r\n    top: 5px;\r\n    z-index: 5;\r\n    border-radius: 50%;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .card__wrapperCard {\r\n        position: relative;\r\n        margin: 10px auto;\r\n        width: 210px;\r\n        border: 2px solid white;\r\n        border-radius: 10px;\r\n    }\r\n\r\n    .card__bike_img {\r\n        height: 110px;\r\n\r\n    }\r\n\r\n    .bike__descript_firma h6 {\r\n        font-size: 14px;\r\n    }\r\n\r\n    li {\r\n        margin-bottom: 5px;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .bike__descript_firma h6 {\r\n        margin: 10px auto;\r\n    }\r\n\r\n    .card__bike_descript {\r\n        border: 2px solid white;\r\n        border-bottom-left-radius: 10px;\r\n        border-bottom-right-radius: 10px;\r\n        padding: 0;\r\n\r\n    }\r\n\r\n    .bike__descript_ul {\r\n        margin: 0;\r\n        padding-left: 20px;\r\n    }\r\n\r\n    .cards {\r\n        width: 97%;\r\n        flex-wrap: wrap;\r\n    }\r\n}',
          '',
        ]);
        const u = l;
      },
      3420: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          ".footer {\r\n    height: 80px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    color: aliceblue;\r\n    background-color: rgb(31, 3, 27);\r\n    padding: 20px;\r\n}\r\n\r\n.footer .copyright {\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n\r\n.footer .copyright a {\r\n    color: aliceblue;\r\n}\r\n\r\n.footer .copyright a:hover {\r\n    color: #555;\r\n}\r\n\r\n.footer .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer__img_RS,\r\n.footer__img_GitHub {\r\n    width: 110px;\r\n    height: 60px;\r\n    border: 3px solid white;\r\n    border-radius: 10px;\r\n}\r\n\r\n.footer__img_RS:hover,\r\n.footer__img_GitHub:hover {\r\n    border: 3px solid rgb(230, 226, 14);\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .footer {\r\n        width: 100%;\r\n        padding: 5px;\r\n    }\r\n\r\n    .footer__img_RS,\r\n    .footer__img_GitHub {\r\n        width: 90px;\r\n        height: 50px;\r\n        border: 3px solid white;\r\n        border-radius: 10px;\r\n    }\r\n}",
          '',
        ]);
        const i = a;
      },
      7172: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => h });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(571),
          l = r(8270),
          c = r(7616),
          u = a()(function (e) {
            return e[1];
          }),
          d = o()(s),
          p = o()(l),
          f = o()(c);
        u.push([
          e.id,
          '.filter__age {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\n.filter__age h5 {\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.filter__age_adult,\r\n.filter__age_teenage,\r\n.filter__age_children {\r\n    width: 35px;\r\n    height: 35px;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    background-size: 100%;\r\n    cursor: pointer;\r\n    border: 5px solid transparent;\r\n    background-repeat: no-repeat;\r\n    transition: all 0.3s ease-in;\r\n}\r\n\r\n.filter__age_adult:hover,\r\n.filter__age_teenage:hover,\r\n.filter__age_children:hover {\r\n    transform: scale(.9);\r\n}\r\n\r\n.filter__age_adult {\r\n    background-image: url(' +
            d +
            ');\r\n}\r\n\r\n.filter__age_teenage {\r\n    background-image: url(' +
            p +
            ');\r\n}\r\n\r\n.filter__age_children {\r\n    background-image: url(' +
            f +
            ');\r\n}\r\n\r\n.activeAge {\r\n    border: 5px solid red;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n    .filter__age_adult,\r\n    .filter__age_teenage,\r\n    .filter__age_children {\r\n        width: 25px;\r\n        height: 25px;\r\n        border: 2px solid transparent;\r\n    }\r\n\r\n    .filter__age {\r\n        gap: 5px;\r\n    }\r\n\r\n    .activeAge {\r\n        border: 2px solid red;\r\n    }\r\n\r\n    .filter__age h5 {\r\n        font-size: 12px;\r\n    }\r\n}',
          '',
        ]);
        const h = u;
      },
      8267: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.filter__color {\r\n   display: flex;\r\n   justify-content: flex-start;\r\n   align-items: center;\r\n   gap: 7px;\r\n}\r\n\r\n.filter__color h5 {\r\n   font-size: 14px;\r\n   margin: 0;\r\n}\r\n\r\n.filter__color_red,\r\n.filter__color_blue,\r\n.filter__color_green,\r\n.filter__color_grey,\r\n.filter__color_white,\r\n.filter__color_yellow {\r\n   width: 20px;\r\n   height: 20px;\r\n   border-radius: 50%;\r\n   cursor: pointer;\r\n   border: 5px solid transparent;\r\n   transition: all .3s ease-in;\r\n}\r\n\r\n.filter__color_red:hover,\r\n.filter__color_blue:hover,\r\n.filter__color_green:hover,\r\n.filter__color_grey:hover,\r\n.filter__color_white:hover,\r\n.filter__color_yellow:hover {\r\n   transform: scale(.9);\r\n}\r\n\r\n.filter__color_red {\r\n   background-color: red;\r\n}\r\n\r\n.filter__color_blue {\r\n   background-color: blue;\r\n}\r\n\r\n.filter__color_green {\r\n   background-color: green;\r\n}\r\n\r\n.filter__color_grey {\r\n   background-color: grey;\r\n}\r\n\r\n.filter__color_white {\r\n   background-color: white;\r\n}\r\n\r\n.filter__color_yellow {\r\n   background-color: yellow;\r\n}\r\n\r\n.activeColor {\r\n   border: 5px solid rgb(247, 103, 182);\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n   .filter__color_red,\r\n   .filter__color_blue,\r\n   .filter__color_green,\r\n   .filter__color_grey,\r\n   .filter__color_white,\r\n   .filter__color_yellow {\r\n      width: 15px;\r\n      height: 15px;\r\n      border: 2px solid transparent;\r\n   }\r\n\r\n   .filter__color {\r\n      gap: 5px;\r\n   }\r\n\r\n   .activeColor {\r\n      border: 2px solid rgb(247, 103, 182);\r\n   }\r\n\r\n   .filter__color h5 {\r\n      font-size: 12px;\r\n   }\r\n}',
          '',
        ]);
        const i = a;
      },
      1784: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => h });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(9757),
          l = r(6317),
          c = r(7001),
          u = a()(function (e) {
            return e[1];
          }),
          d = o()(s),
          p = o()(l),
          f = o()(c);
        u.push([
          e.id,
          '.filter__manufacturer {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.filter__manufacturer h5 {\r\n    margin: 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.manufacturer {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.filter__manufacturer_aist,\r\n.filter__manufacturer_greenway,\r\n.filter__manufacturer_stels {\r\n    width: 35px;\r\n    height: 35px;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n    border: 5px solid transparent;\r\n    background-repeat: no-repeat;\r\n    transition: all .3s ease-in;\r\n}\r\n\r\n.filter__manufacturer_aist:hover,\r\n.filter__manufacturer_greenway:hover,\r\n.filter__manufacturer_stels:hover {\r\n    transform: scale(.9);\r\n}\r\n\r\n.filter__manufacturer_aist {\r\n    background-image: url(' +
            d +
            ');\r\n}\r\n\r\n.filter__manufacturer_greenway {\r\n    background-image: url(' +
            p +
            ');\r\n}\r\n\r\n.filter__manufacturer_stels {\r\n    background-image: url(' +
            f +
            ');\r\n}\r\n\r\n.activeManufacturer {\r\n    border: 5px solid red;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n    .filter__manufacturer_aist,\r\n    .filter__manufacturer_greenway,\r\n    .filter__manufacturer_stels {\r\n        width: 25px;\r\n        height: 25px;\r\n        border: 2px solid transparent;\r\n    }\r\n\r\n    .filter__manufacturer {\r\n        gap: 5px;\r\n    }\r\n\r\n    .filter__manufacturer h5 {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .activeManufacturer {\r\n        border: 2px solid red;\r\n    }\r\n\r\n}',
          '',
        ]);
        const h = u;
      },
      5894: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          ".filter__popular {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.filter__popular_check {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    background-color: rgb(228, 195, 195);\r\n    position: relative;\r\n    display: flex;\r\n    transition: all 0.3s ease-in;\r\n}\r\n\r\n.filter__popular_check:hover {\r\n    background-color: rgb(223, 134, 134);\r\n}\r\n\r\n.filter__popular h5 {\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.activePopular::after {\r\n    content: '✔';\r\n    font-weight: 900;\r\n    font-size: 25px;\r\n    color: rgb(126, 9, 19);\r\n    margin: -5px auto 0;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n    .filter__popular_check {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n\r\n    .filter__popular h5 {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .activePopular::after {\r\n        font-weight: 700;\r\n        font-size: 16px;\r\n        margin: -2px auto 0;\r\n    }\r\n}",
          '',
        ]);
        const i = a;
      },
      1002: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header__filter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid rgb(251, 251, 255);\r\n    gap: 10px;\r\n    padding: 10px 10px;\r\n    min-width: 25%;\r\n}\r\n\r\nh2 {\r\n    font-size: 1rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n    .header__filter {\r\n        padding-left: 40px;\r\n    }\r\n}',
          '',
        ]);
        const i = a;
      },
      9356: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header__filterRange {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 10px 10px;\r\n  min-width: 236px;\r\n  width: 20%;\r\n}\r\n\r\n.range__slider .noUi-horizontal {\r\n  height: 10px;\r\n}\r\n\r\n.range__slider .noUi-horizontal .noUi-handle {\r\n  width: 20px;\r\n  height: 20px;\r\n  right: -9px;\r\n  top: -5px;\r\n}\r\n\r\n.noUi-handle:after {\r\n  left: 5px;\r\n}\r\n\r\n.range__slider .noUi-handle:before,\r\n.range__slider .noUi-handle:after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  height: 4px;\r\n  width: 2px;\r\n  background: transparent;\r\n  left: 10px;\r\n  top: 6px;\r\n}\r\n\r\n.header__filterRange h5,\r\n.range__title {\r\n  font-size: 14px;\r\n  margin-top: 0;\r\n}\r\n\r\n.range {\r\n  padding: 0;\r\n  margin: 0 5px;\r\n}\r\n\r\n.range__slider {\r\n  margin-top: 40px;\r\n}\r\n\r\n.noUi-origin .noUi-tooltip {\r\n  background: transparent;\r\n  color: aliceblue;\r\n  font-size: 10px;\r\n}\r\n\r\n.noUi-connects .noUi-connect {\r\n  background: rebeccapurple;\r\n}\r\n\r\n.noUi-touch-area {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n  .header__filterRange {\r\n    margin: 0 auto;\r\n  }\r\n}',
          '',
        ]);
        const i = a;
      },
      4239: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header {\r\n   background-color: rgb(31, 3, 27);\r\n   border: 2px solid rgb(251, 251, 255);\r\n   border-radius: 10px;\r\n   display: flex;\r\n   padding: 0;\r\n   margin: 0;\r\n   justify-content: space-between;\r\n}\r\n\r\n.header h1 {\r\n   font-size: 20px;\r\n   text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n   .header {\r\n      width: 35%;\r\n      min-width: 260px;\r\n      flex-direction: column;\r\n      justify-content: flex-start;\r\n   }\r\n\r\n   .header h1 {\r\n      margin-bottom: 0;\r\n   }\r\n}',
          '',
        ]);
        const i = a;
      },
      49: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(2314),
          l = a()(function (e) {
            return e[1];
          }),
          c = o()(s);
        l.push([
          e.id,
          '.header__find {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 20px;\r\n}\r\n\r\n.header__find h2 {\r\n  margin: 0 0 15px;\r\n}\r\n\r\n.find {\r\n  border: 1px solid #ccc;\r\n  height: 24px;\r\n  display: flex;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: white;\r\n}\r\n\r\n.find__input {\r\n  border: none;\r\n  outline: none;\r\n  height: 24px;\r\n  width: calc(100% - 35px);\r\n  margin: 0;\r\n  background-color: transparent;\r\n  padding: 0 15px;\r\n  font-size: 16px;\r\n}\r\n\r\n.find__button {\r\n  background-image: url(' +
            c +
            ');\r\n  background-repeat: no-repeat;\r\n  width: 24px;\r\n  height: 24px;\r\n  background-size: cover;\r\n  border: none;\r\n  background-color: white;\r\n}',
          '',
        ]);
        const u = l;
      },
      7602: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header__findSort {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid rgb(251, 251, 255);   \r\n  gap: 10px;\r\n  padding: 10px 10px;\r\n  min-width: 25%;\r\n}',
          '',
        ]);
        const i = a;
      },
      7753: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header__reset {\r\n   display: flex;\r\n   flex-direction: row;\r\n   padding: 10px;\r\n   justify-content: space-evenly;\r\n}\r\n\r\n.reset__button_filter,\r\n.reset__button_setting {\r\n   width: 45%;\r\n   border-radius: 10px;\r\n   border: 3px solid rgb(244, 242, 245);\r\n   background-color: transparent;\r\n   color: white;\r\n   height: 40px;\r\n   cursor: pointer;\r\n}\r\n\r\n.reset__button_filter:hover,\r\n.reset__button_setting:hover {\r\n   background-color: rebeccapurple;\r\n}\r\n\r\n.reset__button_filter:active,\r\n.reset__button_setting:active {\r\n   box-shadow: 1px 1px 1px 1px whitesmoke;\r\n   transform: scale(.95);\r\n}',
          '',
        ]);
        const i = a;
      },
      5219: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.header__sort {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.header__sort h2 {\r\n  margin: 0;\r\n}\r\n\r\n.sort {\r\n  width: 100%;\r\n  height: 25px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  padding: 0 15px;\r\n}\r\n\r\n.find__option {\r\n  font-size: 14px;\r\n}',
          '',
        ]);
        const i = a;
      },
      9916: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(8156),
          l = a()(function (e) {
            return e[1];
          }),
          c = o()(s);
        l.push([
          e.id,
          '.header__shoppingCart {\r\n  background-image: url(' +
            c +
            ');\r\n  background-size: cover;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.header__title {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n}\r\n\r\nh6 {\r\n  margin: 30px auto 0;\r\n  color: gold;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n.header__title p {\r\n  margin: 10px auto 0;\r\n  color: gold;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .header__title h6 {\r\n    margin: 5px auto 0;\r\n    font-size: 20px;\r\n  }\r\n  .header__shoppingCart {\r\n    background-image: url(' +
            c +
            ');\r\n    background-size: cover;\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n}',
          '',
        ]);
        const u = l;
      },
      9778: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(3645),
          a = r.n(n)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          '.main,\r\n.main__container {\r\n  width: 100%;\r\n  min-height: 70vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main__container h3 {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .main {\r\n    max-width: 64%;\r\n    min-width: 280px;\r\n    max-height: 700px;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n  .main {\r\n    max-width: 60%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .main {\r\n    max-width: 56%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .main {\r\n    max-width: 52%;\r\n  }\r\n}',
          '',
        ]);
        const i = a;
      },
      7767: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => h });
        var n = r(3645),
          a = r.n(n),
          i = r(1667),
          o = r.n(i),
          s = r(2895),
          l = r(4343),
          c = r(3465),
          u = a()(function (e) {
            return e[1];
          }),
          d = o()(s),
          p = o()(l),
          f = o()(c);
        u.push([
          e.id,
          "  *::-webkit-scrollbar {\r\n    height: 12px;\r\n    width: 12px;\r\n  }\r\n\r\n  *::-webkit-scrollbar-track {\r\n    background: #080a14;\r\n  }\r\n\r\n  *::-webkit-scrollbar-thumb {\r\n    background-color: rgb(15, 15, 107);\r\n    border-radius: 5px;\r\n    border: 3px solid orange;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: 'Inter';\r\n    src: url(" +
            d +
            ");\r\n    font-weight: 400;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: 'Inter';\r\n    src: url(" +
            p +
            ');\r\n    font-weight: 700;\r\n  }\r\n\r\n  body {\r\n    color: #fff;\r\n    background: #080a14;\r\n    background-image: url(' +
            f +
            ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-family: 'Inter';\r\n    box-sizing: border-box;\r\n    border: none;\r\n  }\r\n\r\n  @media screen and (max-width: 1000px) {\r\n    .body {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n    }\r\n  }",
          '',
        ]);
        const h = u;
      },
      3645: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(r, '}') : r;
              }).join('');
            }),
            (t.i = function (e, r, n) {
              'string' == typeof e && (e = [[null, e, '']]);
              var a = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var o = this[i][0];
                  null != o && (a[o] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (n && a[l[0]]) ||
                  (r &&
                    (l[2]
                      ? (l[2] = ''.concat(r, ' and ').concat(l[2]))
                      : (l[2] = r)),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      1667: (e) => {
        'use strict';
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            'string' != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : e)
          );
        };
      },
      4211: function (e, t) {
        !(function (e) {
          'use strict';
          function t(e) {
            return 'object' == typeof e && 'function' == typeof e.to;
          }
          function r(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function a(e) {
            e.preventDefault();
          }
          function i(e) {
            return 'number' == typeof e && !isNaN(e) && isFinite(e);
          }
          function o(e, t, r) {
            r > 0 &&
              (u(e, t),
              setTimeout(function () {
                d(e, t);
              }, r));
          }
          function s(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function l(e) {
            return Array.isArray(e) ? e : [e];
          }
          function c(e) {
            var t = (e = String(e)).split('.');
            return t.length > 1 ? t[1].length : 0;
          }
          function u(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += ' ' + t);
          }
          function d(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    '(^|\\b)' + t.split(' ').join('|') + '(\\b|$)',
                    'gi'
                  ),
                  ' '
                ));
          }
          function p(e) {
            var t = void 0 !== window.pageXOffset,
              r = 'CSS1Compat' === (e.compatMode || '');
            return {
              x: t
                ? window.pageXOffset
                : r
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : r
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function f(e, t) {
            return 100 / (t - e);
          }
          function h(e, t, r) {
            return (100 * t) / (e[r + 1] - e[r]);
          }
          function g(e, t) {
            for (var r = 1; e >= t[r]; ) r += 1;
            return r;
          }
          function m(e, t, r) {
            if (r >= e.slice(-1)[0]) return 100;
            var n = g(r, e),
              a = e[n - 1],
              i = e[n],
              o = t[n - 1],
              s = t[n];
            return (
              o +
              (function (e, t) {
                return h(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
              })([a, i], r) /
                f(o, s)
            );
          }
          function b(e, t, r, n) {
            if (100 === n) return n;
            var a = g(n, e),
              i = e[a - 1],
              o = e[a];
            return r
              ? n - i > (o - i) / 2
                ? o
                : i
              : t[a - 1]
              ? e[a - 1] +
                (function (e, t) {
                  return Math.round(e / t) * t;
                })(n - e[a - 1], t[a - 1])
              : n;
          }
          var x, v;
          (e.PipsMode = void 0),
            ((v = e.PipsMode || (e.PipsMode = {})).Range = 'range'),
            (v.Steps = 'steps'),
            (v.Positions = 'positions'),
            (v.Count = 'count'),
            (v.Values = 'values'),
            (e.PipsType = void 0),
            ((x = e.PipsType || (e.PipsType = {}))[(x.None = -1)] = 'None'),
            (x[(x.NoValue = 0)] = 'NoValue'),
            (x[(x.LargeValue = 1)] = 'LargeValue'),
            (x[(x.SmallValue = 2)] = 'SmallValue');
          var _ = (function () {
              function e(e, t, r) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [r || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var a = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    a.push([l(e[t]), t]);
                  }),
                    a.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < a.length;
                  n++
                )
                  this.handleEntryPoint(a[n][1], a[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], r = 0; r < this.xNumSteps.length - 1; r++)
                    t[r] = h(this.xVal, e, r);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, r) {
                  var n,
                    a = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[a + 1]; ) a++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (a = this.xPct.length - 2);
                  r || e !== this.xPct[a + 1] || a++, null === t && (t = []);
                  var i = 1,
                    o = t[a],
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0;
                  for (
                    n = r
                      ? (e - this.xPct[a]) / (this.xPct[a + 1] - this.xPct[a])
                      : (this.xPct[a + 1] - e) /
                        (this.xPct[a + 1] - this.xPct[a]);
                    o > 0;

                  )
                    (s = this.xPct[a + 1 + u] - this.xPct[a + u]),
                      t[a + u] * i + 100 - 100 * n > 100
                        ? ((l = s * n), (i = (o - 100 * n) / t[a + u]), (n = 1))
                        : ((l = ((t[a + u] * s) / 100) * i), (i = 0)),
                      r
                        ? ((c -= l), this.xPct.length + u >= 1 && u--)
                        : ((c += l), this.xPct.length - u >= 1 && u++),
                      (o = t[a + u] * i);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return m(this.xVal, this.xPct, e);
                }),
                (e.prototype.fromStepping = function (e) {
                  return (function (e, t, r) {
                    if (r >= 100) return e.slice(-1)[0];
                    var n = g(r, t),
                      a = e[n - 1],
                      i = e[n],
                      o = t[n - 1];
                    return (function (e, t) {
                      return (t * (e[1] - e[0])) / 100 + e[0];
                    })([a, i], (r - o) * f(o, t[n]));
                  })(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return b(this.xPct, this.xSteps, this.snap, e);
                }),
                (e.prototype.getDefaultStep = function (e, t, r) {
                  var n = g(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / r
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = g(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(c);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var r;
                  if (
                    !i(
                      (r = 'min' === e ? 0 : 'max' === e ? 100 : parseFloat(e))
                    ) ||
                    !i(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(r), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  r
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        h([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        f(this.xPct[e], this.xPct[e + 1]);
                      var r =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(r.toFixed(3)) - 1),
                        a = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = a;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            w = {
              to: function (e) {
                return void 0 === e ? '' : e.toFixed(2);
              },
              from: Number,
            },
            y = {
              target: 'target',
              base: 'base',
              origin: 'origin',
              handle: 'handle',
              handleLower: 'handle-lower',
              handleUpper: 'handle-upper',
              touchArea: 'touch-area',
              horizontal: 'horizontal',
              vertical: 'vertical',
              background: 'background',
              connect: 'connect',
              connects: 'connects',
              ltr: 'ltr',
              rtl: 'rtl',
              textDirectionLtr: 'txt-dir-ltr',
              textDirectionRtl: 'txt-dir-rtl',
              draggable: 'draggable',
              drag: 'state-drag',
              tap: 'state-tap',
              active: 'active',
              tooltip: 'tooltip',
              pips: 'pips',
              pipsHorizontal: 'pips-horizontal',
              pipsVertical: 'pips-vertical',
              marker: 'marker',
              markerHorizontal: 'marker-horizontal',
              markerVertical: 'marker-vertical',
              markerNormal: 'marker-normal',
              markerLarge: 'marker-large',
              markerSub: 'marker-sub',
              value: 'value',
              valueHorizontal: 'value-horizontal',
              valueVertical: 'value-vertical',
              valueNormal: 'value-normal',
              valueLarge: 'value-large',
              valueSub: 'value-sub',
            },
            S = '.__tooltips',
            k = '.__aria';
          function E(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function C(e, t) {
            if (!i(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function L(e, t) {
            if (!i(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function M(e, t) {
            if (!i(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function U(e, t) {
            if ('object' != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new _(t, e.snap || !1, e.singleStep);
          }
          function j(e, t) {
            if (((t = l(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function A(e, t) {
            if ('boolean' != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function P(e, t) {
            if ('boolean' != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function O(e, t) {
            if ('number' != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function N(e, t) {
            var r,
              n = [!1];
            if (
              ('lower' === t ? (t = [!0, !1]) : 'upper' === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (r = 1; r < e.handles; r++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function F(e, t) {
            switch (t) {
              case 'horizontal':
                e.ort = 0;
                break;
              case 'vertical':
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function B(e, t) {
            if (!i(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function z(e, t) {
            if (!i(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function V(e, t) {
            var r;
            if (!i(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !i(t[0]) && !i(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  r = 0;
                r < e.spectrum.xNumSteps.length - 1;
                r++
              )
                if (e.padding[0][r] < 0 || e.padding[1][r] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                a = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - a) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function T(e, t) {
            switch (t) {
              case 'ltr':
                e.dir = 0;
                break;
              case 'rtl':
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function D(e, t) {
            if ('string' != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var r = t.indexOf('tap') >= 0,
              n = t.indexOf('drag') >= 0,
              a = t.indexOf('fixed') >= 0,
              i = t.indexOf('snap') >= 0,
              o = t.indexOf('hover') >= 0,
              s = t.indexOf('unconstrained') >= 0,
              l = t.indexOf('drag-all') >= 0,
              c = t.indexOf('smooth-steps') >= 0;
            if (a) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              B(e, e.start[1] - e.start[0]);
            }
            if (s && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: r || i,
              drag: n,
              dragAll: l,
              smoothSteps: c,
              fixed: a,
              snap: i,
              hover: o,
              unconstrained: s,
            };
          }
          function H(e, r) {
            if (!1 !== r)
              if (!0 === r || t(r)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(r);
              } else {
                if ((r = l(r)).length !== e.handles)
                  throw new Error(
                    'noUiSlider: must pass a formatter for all handles.'
                  );
                r.forEach(function (e) {
                  if ('boolean' != typeof e && !t(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = r);
              }
          }
          function Z(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                'noUiSlider: must pass a attributes for all handles.'
              );
            e.handleAttributes = t;
          }
          function R(e, r) {
            if (!t(r))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = r;
          }
          function I(e, r) {
            if (
              !(function (e) {
                return t(e) && 'function' == typeof e.from;
              })(r)
            )
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = r;
          }
          function q(e, t) {
            if ('boolean' != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function G(e, t) {
            e.documentElement = t;
          }
          function $(e, t) {
            if ('string' != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function J(e, t) {
            if ('object' != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            'string' == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (r) {
                  e.cssClasses[r] = e.cssPrefix + t[r];
                }))
              : (e.cssClasses = t);
          }
          function Y(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: w,
                format: w,
              },
              r = {
                step: { r: !1, t: E },
                keyboardPageMultiplier: { r: !1, t: C },
                keyboardMultiplier: { r: !1, t: L },
                keyboardDefaultStep: { r: !1, t: M },
                start: { r: !0, t: j },
                connect: { r: !0, t: N },
                direction: { r: !0, t: T },
                snap: { r: !1, t: A },
                animate: { r: !1, t: P },
                animationDuration: { r: !1, t: O },
                range: { r: !0, t: U },
                orientation: { r: !1, t: F },
                margin: { r: !1, t: B },
                limit: { r: !1, t: z },
                padding: { r: !1, t: V },
                behaviour: { r: !0, t: D },
                ariaFormat: { r: !1, t: R },
                format: { r: !1, t: I },
                tooltips: { r: !1, t: H },
                keyboardSupport: { r: !0, t: q },
                documentElement: { r: !1, t: G },
                cssPrefix: { r: !0, t: $ },
                cssClasses: { r: !0, t: J },
                handleAttributes: { r: !1, t: Z },
              },
              a = {
                connect: !1,
                direction: 'ltr',
                behaviour: 'tap',
                orientation: 'horizontal',
                keyboardSupport: !0,
                cssPrefix: 'noUi-',
                cssClasses: y,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(r).forEach(function (i) {
                if (n(e[i]) || void 0 !== a[i])
                  r[i].t(t, n(e[i]) ? e[i] : a[i]);
                else if (r[i].r)
                  throw new Error("noUiSlider: '" + i + "' is required.");
              }),
              (t.pips = e.pips);
            var i = document.createElement('div'),
              o = void 0 !== i.style.msTransform,
              s = void 0 !== i.style.transform;
            t.transformRule = s
              ? 'transform'
              : o
              ? 'msTransform'
              : 'webkitTransform';
            return (
              (t.style = [
                ['left', 'top'],
                ['right', 'bottom'],
              ][t.dir][t.ort]),
              t
            );
          }
          function W(t, i, c) {
            var f,
              h,
              g,
              m,
              b,
              x,
              v,
              _ = window.navigator.pointerEnabled
                ? {
                    start: 'pointerdown',
                    move: 'pointermove',
                    end: 'pointerup',
                  }
                : window.navigator.msPointerEnabled
                ? {
                    start: 'MSPointerDown',
                    move: 'MSPointerMove',
                    end: 'MSPointerUp',
                  }
                : {
                    start: 'mousedown touchstart',
                    move: 'mousemove touchmove',
                    end: 'mouseup touchend',
                  },
              w =
                window.CSS &&
                CSS.supports &&
                CSS.supports('touch-action', 'none') &&
                (function () {
                  var e = !1;
                  try {
                    var t = Object.defineProperty({}, 'passive', {
                      get: function () {
                        e = !0;
                      },
                    });
                    window.addEventListener('test', null, t);
                  } catch (e) {}
                  return e;
                })(),
              y = t,
              E = i.spectrum,
              C = [],
              L = [],
              M = [],
              U = 0,
              j = {},
              A = t.ownerDocument,
              P = i.documentElement || A.documentElement,
              O = A.body,
              N = 'rtl' === A.dir || 1 === i.ort ? 0 : 100;
            function F(e, t) {
              var r = A.createElement('div');
              return t && u(r, t), e.appendChild(r), r;
            }
            function B(e, t) {
              var r = F(e, i.cssClasses.origin),
                n = F(r, i.cssClasses.handle);
              if (
                (F(n, i.cssClasses.touchArea),
                n.setAttribute('data-handle', String(t)),
                i.keyboardSupport &&
                  (n.setAttribute('tabindex', '0'),
                  n.addEventListener('keydown', function (e) {
                    return (function (e, t) {
                      if (T() || D(t)) return !1;
                      var r = ['Left', 'Right'],
                        n = ['Down', 'Up'],
                        a = ['PageDown', 'PageUp'],
                        o = ['Home', 'End'];
                      i.dir && !i.ort
                        ? r.reverse()
                        : i.ort && !i.dir && (n.reverse(), a.reverse());
                      var s,
                        l = e.key.replace('Arrow', ''),
                        c = l === a[0],
                        u = l === a[1],
                        d = l === n[0] || l === r[0] || c,
                        p = l === n[1] || l === r[1] || u,
                        f = l === o[0],
                        h = l === o[1];
                      if (!(d || p || f || h)) return !0;
                      if ((e.preventDefault(), p || d)) {
                        var g = d ? 0 : 1,
                          m = be(t)[g];
                        if (null === m) return !1;
                        !1 === m &&
                          (m = E.getDefaultStep(
                            L[t],
                            d,
                            i.keyboardDefaultStep
                          )),
                          (m *=
                            u || c
                              ? i.keyboardPageMultiplier
                              : i.keyboardMultiplier),
                          (m = Math.max(m, 1e-7)),
                          (m *= d ? -1 : 1),
                          (s = C[t] + m);
                      } else s = h ? i.spectrum.xVal[i.spectrum.xVal.length - 1] : i.spectrum.xVal[0];
                      return (
                        pe(t, E.toStepping(s), !0, !0),
                        oe('slide', t),
                        oe('update', t),
                        oe('change', t),
                        oe('set', t),
                        !1
                      );
                    })(e, t);
                  })),
                void 0 !== i.handleAttributes)
              ) {
                var a = i.handleAttributes[t];
                Object.keys(a).forEach(function (e) {
                  n.setAttribute(e, a[e]);
                });
              }
              return (
                n.setAttribute('role', 'slider'),
                n.setAttribute(
                  'aria-orientation',
                  i.ort ? 'vertical' : 'horizontal'
                ),
                0 === t
                  ? u(n, i.cssClasses.handleLower)
                  : t === i.handles - 1 && u(n, i.cssClasses.handleUpper),
                r
              );
            }
            function z(e, t) {
              return !!t && F(e, i.cssClasses.connect);
            }
            function V(e, t) {
              return (
                !(!i.tooltips || !i.tooltips[t]) &&
                F(e.firstChild, i.cssClasses.tooltip)
              );
            }
            function T() {
              return y.hasAttribute('disabled');
            }
            function D(e) {
              return h[e].hasAttribute('disabled');
            }
            function H() {
              b &&
                (ie('update' + S),
                b.forEach(function (e) {
                  e && r(e);
                }),
                (b = null));
            }
            function Z() {
              H(),
                (b = h.map(V)),
                ae('update' + S, function (e, t, r) {
                  if (b && i.tooltips && !1 !== b[t]) {
                    var n = e[t];
                    !0 !== i.tooltips[t] && (n = i.tooltips[t].to(r[t])),
                      (b[t].innerHTML = n);
                  }
                });
            }
            function R(e, t) {
              return e.map(function (e) {
                return E.fromStepping(t ? E.getStep(e) : e);
              });
            }
            function I(t) {
              var r,
                n = (function (t) {
                  if (
                    t.mode === e.PipsMode.Range ||
                    t.mode === e.PipsMode.Steps
                  )
                    return E.xVal;
                  if (t.mode === e.PipsMode.Count) {
                    if (t.values < 2)
                      throw new Error(
                        "noUiSlider: 'values' (>= 2) required for mode 'count'."
                      );
                    for (var r = t.values - 1, n = 100 / r, a = []; r--; )
                      a[r] = r * n;
                    return a.push(100), R(a, t.stepped);
                  }
                  return t.mode === e.PipsMode.Positions
                    ? R(t.values, t.stepped)
                    : t.mode === e.PipsMode.Values
                    ? t.stepped
                      ? t.values.map(function (e) {
                          return E.fromStepping(E.getStep(E.toStepping(e)));
                        })
                      : t.values
                    : [];
                })(t),
                a = {},
                i = E.xVal[0],
                o = E.xVal[E.xVal.length - 1],
                s = !1,
                l = !1,
                c = 0;
              return (
                ((r = n.slice().sort(function (e, t) {
                  return e - t;
                })),
                (n = r.filter(function (e) {
                  return !this[e] && (this[e] = !0);
                }, {})))[0] !== i && (n.unshift(i), (s = !0)),
                n[n.length - 1] !== o && (n.push(o), (l = !0)),
                n.forEach(function (r, i) {
                  var o,
                    u,
                    d,
                    p,
                    f,
                    h,
                    g,
                    m,
                    b,
                    x,
                    v = r,
                    _ = n[i + 1],
                    w = t.mode === e.PipsMode.Steps;
                  for (
                    w && (o = E.xNumSteps[i]),
                      o || (o = _ - v),
                      void 0 === _ && (_ = v),
                      o = Math.max(o, 1e-7),
                      u = v;
                    u <= _;
                    u = Number((u + o).toFixed(7))
                  ) {
                    for (
                      m = (f = (p = E.toStepping(u)) - c) / (t.density || 1),
                        x = f / (b = Math.round(m)),
                        d = 1;
                      d <= b;
                      d += 1
                    )
                      a[(h = c + d * x).toFixed(5)] = [E.fromStepping(h), 0];
                    (g =
                      n.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : w
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !i && s && u !== _ && (g = 0),
                      (u === _ && l) || (a[p.toFixed(5)] = [u, g]),
                      (c = p);
                  }
                }),
                a
              );
            }
            function q(t, r, n) {
              var a,
                o,
                s = A.createElement('div'),
                l =
                  (((a = {})[e.PipsType.None] = ''),
                  (a[e.PipsType.NoValue] = i.cssClasses.valueNormal),
                  (a[e.PipsType.LargeValue] = i.cssClasses.valueLarge),
                  (a[e.PipsType.SmallValue] = i.cssClasses.valueSub),
                  a),
                c =
                  (((o = {})[e.PipsType.None] = ''),
                  (o[e.PipsType.NoValue] = i.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = i.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = i.cssClasses.markerSub),
                  o),
                d = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
                p = [
                  i.cssClasses.markerHorizontal,
                  i.cssClasses.markerVertical,
                ];
              function f(e, t) {
                var r = t === i.cssClasses.value,
                  n = r ? l : c;
                return t + ' ' + (r ? d : p)[i.ort] + ' ' + n[e];
              }
              return (
                u(s, i.cssClasses.pips),
                u(
                  s,
                  0 === i.ort
                    ? i.cssClasses.pipsHorizontal
                    : i.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (a) {
                  !(function (t, a, o) {
                    if ((o = r ? r(a, o) : o) !== e.PipsType.None) {
                      var l = F(s, !1);
                      (l.className = f(o, i.cssClasses.marker)),
                        (l.style[i.style] = t + '%'),
                        o > e.PipsType.NoValue &&
                          (((l = F(s, !1)).className = f(
                            o,
                            i.cssClasses.value
                          )),
                          l.setAttribute('data-value', String(a)),
                          (l.style[i.style] = t + '%'),
                          (l.innerHTML = String(n.to(a))));
                    }
                  })(a, t[a][0], t[a][1]);
                }),
                s
              );
            }
            function G() {
              m && (r(m), (m = null));
            }
            function $(e) {
              G();
              var t = I(e),
                r = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (m = y.appendChild(q(t, r, n)));
            }
            function J() {
              var e = f.getBoundingClientRect(),
                t = 'offset' + ['Width', 'Height'][i.ort];
              return 0 === i.ort ? e.width || f[t] : e.height || f[t];
            }
            function W(e, t, r, n) {
              var a = function (a) {
                  var o,
                    s,
                    l = (function (e, t, r) {
                      var n = 0 === e.type.indexOf('touch'),
                        a = 0 === e.type.indexOf('mouse'),
                        i = 0 === e.type.indexOf('pointer'),
                        o = 0,
                        s = 0;
                      if (
                        (0 === e.type.indexOf('MSPointer') && (i = !0),
                        'mousedown' === e.type && !e.buttons && !e.touches)
                      )
                        return !1;
                      if (n) {
                        var l = function (t) {
                          var n = t.target;
                          return (
                            n === r ||
                            r.contains(n) ||
                            (e.composed && e.composedPath().shift() === r)
                          );
                        };
                        if ('touchstart' === e.type) {
                          var c = Array.prototype.filter.call(e.touches, l);
                          if (c.length > 1) return !1;
                          (o = c[0].pageX), (s = c[0].pageY);
                        } else {
                          var u = Array.prototype.find.call(
                            e.changedTouches,
                            l
                          );
                          if (!u) return !1;
                          (o = u.pageX), (s = u.pageY);
                        }
                      }
                      return (
                        (t = t || p(A)),
                        (a || i) &&
                          ((o = e.clientX + t.x), (s = e.clientY + t.y)),
                        (e.pageOffset = t),
                        (e.points = [o, s]),
                        (e.cursor = a || i),
                        e
                      );
                    })(a, n.pageOffset, n.target || t);
                  return (
                    !!l &&
                    !(T() && !n.doNotReject) &&
                    ((o = y),
                    (s = i.cssClasses.tap),
                    !(
                      (o.classList
                        ? o.classList.contains(s)
                        : new RegExp('\\b' + s + '\\b').test(o.className)) &&
                      !n.doNotReject
                    )) &&
                    !(e === _.start && void 0 !== l.buttons && l.buttons > 1) &&
                    (!n.hover || !l.buttons) &&
                    (w || l.preventDefault(),
                    (l.calcPoint = l.points[i.ort]),
                    void r(l, n))
                  );
                },
                o = [];
              return (
                e.split(' ').forEach(function (e) {
                  t.addEventListener(e, a, !!w && { passive: !0 }),
                    o.push([e, a]);
                }),
                o
              );
            }
            function X(e) {
              var t,
                r,
                n,
                a,
                o,
                l,
                c =
                  (100 *
                    (e -
                      ((t = f),
                      (r = i.ort),
                      (n = t.getBoundingClientRect()),
                      (a = t.ownerDocument),
                      (o = a.documentElement),
                      (l = p(a)),
                      /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                        (l.x = 0),
                      r
                        ? n.top + l.y - o.clientTop
                        : n.left + l.x - o.clientLeft))) /
                  J();
              return (c = s(c)), i.dir ? 100 - c : c;
            }
            function K(e, t) {
              'mouseout' === e.type &&
                'HTML' === e.target.nodeName &&
                null === e.relatedTarget &&
                ee(e, t);
            }
            function Q(e, t) {
              if (
                -1 === navigator.appVersion.indexOf('MSIE 9') &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ee(e, t);
              var r = (i.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              ce(
                r > 0,
                (100 * r) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ee(e, t) {
              t.handle && (d(t.handle, i.cssClasses.active), (U -= 1)),
                t.listeners.forEach(function (e) {
                  P.removeEventListener(e[0], e[1]);
                }),
                0 === U &&
                  (d(y, i.cssClasses.drag),
                  de(),
                  e.cursor &&
                    ((O.style.cursor = ''),
                    O.removeEventListener('selectstart', a))),
                i.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    pe(e, L[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    oe('update', e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  oe('change', e), oe('set', e), oe('end', e);
                });
            }
            function te(e, t) {
              if (!t.handleNumbers.some(D)) {
                var r;
                1 === t.handleNumbers.length &&
                  ((r = h[t.handleNumbers[0]].children[0]),
                  (U += 1),
                  u(r, i.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  o = W(_.move, P, Q, {
                    target: e.target,
                    handle: r,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: J(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: L.slice(),
                  }),
                  s = W(_.end, P, ee, {
                    target: e.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = W('mouseout', P, K, {
                    target: e.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, o.concat(s, l)),
                  e.cursor &&
                    ((O.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && u(y, i.cssClasses.drag),
                    O.addEventListener('selectstart', a, !1)),
                  t.handleNumbers.forEach(function (e) {
                    oe('start', e);
                  });
              }
            }
            function re(e) {
              e.stopPropagation();
              var t = X(e.calcPoint),
                r = (function (e) {
                  var t = 100,
                    r = !1;
                  return (
                    h.forEach(function (n, a) {
                      if (!D(a)) {
                        var i = L[a],
                          o = Math.abs(i - e);
                        (o < t ||
                          (o <= t && e > i) ||
                          (100 === o && 100 === t)) &&
                          ((r = a), (t = o));
                      }
                    }),
                    r
                  );
                })(t);
              !1 !== r &&
                (i.events.snap || o(y, i.cssClasses.tap, i.animationDuration),
                pe(r, t, !0, !0),
                de(),
                oe('slide', r, !0),
                oe('update', r, !0),
                i.events.snap
                  ? te(e, { handleNumbers: [r] })
                  : (oe('change', r, !0), oe('set', r, !0)));
            }
            function ne(e) {
              var t = X(e.calcPoint),
                r = E.getStep(t),
                n = E.fromStepping(r);
              Object.keys(j).forEach(function (e) {
                'hover' === e.split('.')[0] &&
                  j[e].forEach(function (e) {
                    e.call(xe, n);
                  });
              });
            }
            function ae(e, t) {
              (j[e] = j[e] || []),
                j[e].push(t),
                'update' === e.split('.')[0] &&
                  h.forEach(function (e, t) {
                    oe('update', t);
                  });
            }
            function ie(e) {
              var t = e && e.split('.')[0],
                r = t ? e.substring(t.length) : e;
              Object.keys(j).forEach(function (e) {
                var n = e.split('.')[0],
                  a = e.substring(n.length);
                (t && t !== n) ||
                  (r && r !== a) ||
                  ((function (e) {
                    return e === k || e === S;
                  })(a) &&
                    r !== a) ||
                  delete j[e];
              });
            }
            function oe(e, t, r) {
              Object.keys(j).forEach(function (n) {
                var a = n.split('.')[0];
                e === a &&
                  j[n].forEach(function (e) {
                    e.call(
                      xe,
                      C.map(i.format.to),
                      t,
                      C.slice(),
                      r || !1,
                      L.slice(),
                      xe
                    );
                  });
              });
            }
            function se(e, t, r, n, a, o, l) {
              var c;
              return (
                h.length > 1 &&
                  !i.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((c = E.getAbsoluteDistance(e[t - 1], i.margin, !1)),
                    (r = Math.max(r, c))),
                  a &&
                    t < h.length - 1 &&
                    ((c = E.getAbsoluteDistance(e[t + 1], i.margin, !0)),
                    (r = Math.min(r, c)))),
                h.length > 1 &&
                  i.limit &&
                  (n &&
                    t > 0 &&
                    ((c = E.getAbsoluteDistance(e[t - 1], i.limit, !1)),
                    (r = Math.min(r, c))),
                  a &&
                    t < h.length - 1 &&
                    ((c = E.getAbsoluteDistance(e[t + 1], i.limit, !0)),
                    (r = Math.max(r, c)))),
                i.padding &&
                  (0 === t &&
                    ((c = E.getAbsoluteDistance(0, i.padding[0], !1)),
                    (r = Math.max(r, c))),
                  t === h.length - 1 &&
                    ((c = E.getAbsoluteDistance(100, i.padding[1], !0)),
                    (r = Math.min(r, c)))),
                l || (r = E.getStep(r)),
                !((r = s(r)) === e[t] && !o) && r
              );
            }
            function le(e, t) {
              var r = i.ort;
              return (r ? t : e) + ', ' + (r ? e : t);
            }
            function ce(e, t, r, n, a) {
              var o = r.slice(),
                s = n[0],
                l = i.events.smoothSteps,
                c = [!e, e],
                u = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, r) {
                      var n = se(o, e, o[e] + t, c[r], u[r], !1, l);
                      !1 === n ? (t = 0) : ((t = n - o[e]), (o[e] = n));
                    })
                  : (c = u = [!0]);
              var d = !1;
              n.forEach(function (e, n) {
                d = pe(e, r[e] + t, c[n], u[n], !1, l) || d;
              }),
                d &&
                  (n.forEach(function (e) {
                    oe('update', e), oe('slide', e);
                  }),
                  null != a && oe('drag', s));
            }
            function ue(e, t) {
              return i.dir ? 100 - e - t : e;
            }
            function de() {
              M.forEach(function (e) {
                var t = L[e] > 50 ? -1 : 1,
                  r = 3 + (h.length + t * e);
                h[e].style.zIndex = String(r);
              });
            }
            function pe(e, t, r, n, a, o) {
              return (
                a || (t = se(L, e, t, r, n, !1, o)),
                !1 !== t &&
                  ((function (e, t) {
                    (L[e] = t), (C[e] = E.fromStepping(t));
                    var r = 'translate(' + le(ue(t, 0) - N + '%', '0') + ')';
                    (h[e].style[i.transformRule] = r), fe(e), fe(e + 1);
                  })(e, t),
                  !0)
              );
            }
            function fe(e) {
              if (g[e]) {
                var t = 0,
                  r = 100;
                0 !== e && (t = L[e - 1]), e !== g.length - 1 && (r = L[e]);
                var n = r - t,
                  a = 'translate(' + le(ue(t, n) + '%', '0') + ')',
                  o = 'scale(' + le(n / 100, '1') + ')';
                g[e].style[i.transformRule] = a + ' ' + o;
              }
            }
            function he(e, t) {
              return null === e || !1 === e || void 0 === e
                ? L[t]
                : ('number' == typeof e && (e = String(e)),
                  !1 !== (e = i.format.from(e)) && (e = E.toStepping(e)),
                  !1 === e || isNaN(e) ? L[t] : e);
            }
            function ge(e, t, r) {
              var n = l(e),
                a = void 0 === L[0];
              (t = void 0 === t || t),
                i.animate && !a && o(y, i.cssClasses.tap, i.animationDuration),
                M.forEach(function (e) {
                  pe(e, he(n[e], e), !0, !1, r);
                });
              var s = 1 === M.length ? 0 : 1;
              if (a && E.hasNoSize() && ((r = !0), (L[0] = 0), M.length > 1)) {
                var c = 100 / (M.length - 1);
                M.forEach(function (e) {
                  L[e] = e * c;
                });
              }
              for (; s < M.length; ++s)
                M.forEach(function (e) {
                  pe(e, L[e], !0, !0, r);
                });
              de(),
                M.forEach(function (e) {
                  oe('update', e), null !== n[e] && t && oe('set', e);
                });
            }
            function me(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === C.length ? C[0] : C.slice(0);
              var t = C.map(i.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function be(e) {
              var t = L[e],
                r = E.getNearbySteps(t),
                n = C[e],
                a = r.thisStep.step,
                o = null;
              if (i.snap)
                return [
                  n - r.stepBefore.startValue || null,
                  r.stepAfter.startValue - n || null,
                ];
              !1 !== a &&
                n + a > r.stepAfter.startValue &&
                (a = r.stepAfter.startValue - n),
                (o =
                  n > r.thisStep.startValue
                    ? r.thisStep.step
                    : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
                100 === t ? (a = null) : 0 === t && (o = null);
              var s = E.countStepDecimals();
              return (
                null !== a && !1 !== a && (a = Number(a.toFixed(s))),
                null !== o && !1 !== o && (o = Number(o.toFixed(s))),
                [o, a]
              );
            }
            u((v = y), i.cssClasses.target),
              0 === i.dir ? u(v, i.cssClasses.ltr) : u(v, i.cssClasses.rtl),
              0 === i.ort
                ? u(v, i.cssClasses.horizontal)
                : u(v, i.cssClasses.vertical),
              u(
                v,
                'rtl' === getComputedStyle(v).direction
                  ? i.cssClasses.textDirectionRtl
                  : i.cssClasses.textDirectionLtr
              ),
              (f = F(v, i.cssClasses.base)),
              (function (e, t) {
                var r = F(t, i.cssClasses.connects);
                (h = []), (g = []).push(z(r, e[0]));
                for (var n = 0; n < i.handles; n++)
                  h.push(B(t, n)), (M[n] = n), g.push(z(r, e[n + 1]));
              })(i.connect, f),
              (x = i.events).fixed ||
                h.forEach(function (e, t) {
                  W(_.start, e.children[0], te, { handleNumbers: [t] });
                }),
              x.tap && W(_.start, f, re, {}),
              x.hover && W(_.move, f, ne, { hover: !0 }),
              x.drag &&
                g.forEach(function (e, t) {
                  if (!1 !== e && 0 !== t && t !== g.length - 1) {
                    var r = h[t - 1],
                      n = h[t],
                      a = [e],
                      o = [r, n],
                      s = [t - 1, t];
                    u(e, i.cssClasses.draggable),
                      x.fixed && (a.push(r.children[0]), a.push(n.children[0])),
                      x.dragAll && ((o = h), (s = M)),
                      a.forEach(function (t) {
                        W(_.start, t, te, {
                          handles: o,
                          handleNumbers: s,
                          connect: e,
                        });
                      });
                  }
                }),
              ge(i.start),
              i.pips && $(i.pips),
              i.tooltips && Z(),
              ie('update' + k),
              ae('update' + k, function (e, t, r, n, a) {
                M.forEach(function (e) {
                  var t = h[e],
                    n = se(L, e, 0, !0, !0, !0),
                    o = se(L, e, 100, !0, !0, !0),
                    s = a[e],
                    l = String(i.ariaFormat.to(r[e]));
                  (n = E.fromStepping(n).toFixed(1)),
                    (o = E.fromStepping(o).toFixed(1)),
                    (s = E.fromStepping(s).toFixed(1)),
                    t.children[0].setAttribute('aria-valuemin', n),
                    t.children[0].setAttribute('aria-valuemax', o),
                    t.children[0].setAttribute('aria-valuenow', s),
                    t.children[0].setAttribute('aria-valuetext', l);
                });
              });
            var xe = {
              destroy: function () {
                for (
                  ie(k),
                    ie(S),
                    Object.keys(i.cssClasses).forEach(function (e) {
                      d(y, i.cssClasses[e]);
                    });
                  y.firstChild;

                )
                  y.removeChild(y.firstChild);
                delete y.noUiSlider;
              },
              steps: function () {
                return M.map(be);
              },
              on: ae,
              off: ie,
              get: me,
              set: ge,
              setHandle: function (e, t, r, n) {
                if (!((e = Number(e)) >= 0 && e < M.length))
                  throw new Error(
                    'noUiSlider: invalid handle number, got: ' + e
                  );
                pe(e, he(t, e), !0, !0, n), oe('update', e), r && oe('set', e);
              },
              reset: function (e) {
                ge(i.start, e);
              },
              __moveHandles: function (e, t, r) {
                ce(e, t, L, r);
              },
              options: c,
              updateOptions: function (e, t) {
                var r = me(),
                  a = [
                    'margin',
                    'limit',
                    'padding',
                    'range',
                    'animate',
                    'snap',
                    'step',
                    'format',
                    'pips',
                    'tooltips',
                  ];
                a.forEach(function (t) {
                  void 0 !== e[t] && (c[t] = e[t]);
                });
                var o = Y(c);
                a.forEach(function (t) {
                  void 0 !== e[t] && (i[t] = o[t]);
                }),
                  (E = o.spectrum),
                  (i.margin = o.margin),
                  (i.limit = o.limit),
                  (i.padding = o.padding),
                  i.pips ? $(i.pips) : G(),
                  i.tooltips ? Z() : H(),
                  (L = []),
                  ge(n(e.start) ? e.start : r, t);
              },
              target: y,
              removePips: G,
              removeTooltips: H,
              getPositions: function () {
                return L.slice();
              },
              getTooltips: function () {
                return b;
              },
              getOrigins: function () {
                return h;
              },
              pips: $,
            };
            return xe;
          }
          function X(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                'noUiSlider: create requires a single element, got: ' + e
              );
            if (e.noUiSlider)
              throw new Error('noUiSlider: Slider was already initialized.');
            var r = W(e, Y(t), t);
            return (e.noUiSlider = r), r;
          }
          var K = { __spectrum: _, cssClasses: y, create: X };
          (e.create = X),
            (e.cssClasses = y),
            (e.default = K),
            Object.defineProperty(e, '__esModule', { value: !0 });
        })(t);
      },
      1671: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(4850);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      6401: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(3546);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      3038: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(2827);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      2971: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(3420);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      1878: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(7172);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      5298: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(8267);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      2630: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(1784);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      4042: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(5894);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      6248: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(1002);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      6774: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(9356);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      7892: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(4239);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      8237: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(49);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      4414: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(7602);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      3151: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(7753);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      2334: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(5219);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      664: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(9916);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      6592: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(9778);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      3427: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var n = r(3379),
          a = r.n(n),
          i = r(7767);
        a()(i.Z, { insert: 'head', singleton: !1 });
        const o = i.Z.locals || {};
      },
      3379: (e, t, r) => {
        'use strict';
        var n,
          a = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var r = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                e[t] = r;
              }
              return e[t];
            };
          })(),
          i = [];
        function o(e) {
          for (var t = -1, r = 0; r < i.length; r++)
            if (i[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function s(e, t) {
          for (var r = {}, n = [], a = 0; a < e.length; a++) {
            var s = e[a],
              l = t.base ? s[0] + t.base : s[0],
              c = r[l] || 0,
              u = ''.concat(l, ' ').concat(c);
            r[l] = c + 1;
            var d = o(u),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== d
              ? (i[d].references++, i[d].updater(p))
              : i.push({ identifier: u, updater: g(p, t), references: 1 }),
              n.push(u);
          }
          return n;
        }
        function l(e) {
          var t = document.createElement('style'),
            n = e.attributes || {};
          if (void 0 === n.nonce) {
            var i = r.nc;
            i && (n.nonce = i);
          }
          if (
            (Object.keys(n).forEach(function (e) {
              t.setAttribute(e, n[e]);
            }),
            'function' == typeof e.insert)
          )
            e.insert(t);
          else {
            var o = a(e.insert || 'head');
            if (!o)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            o.appendChild(t);
          }
          return t;
        }
        var c,
          u =
            ((c = []),
            function (e, t) {
              return (c[e] = t), c.filter(Boolean).join('\n');
            });
        function d(e, t, r, n) {
          var a = r
            ? ''
            : n.media
            ? '@media '.concat(n.media, ' {').concat(n.css, '}')
            : n.css;
          if (e.styleSheet) e.styleSheet.cssText = u(t, a);
          else {
            var i = document.createTextNode(a),
              o = e.childNodes;
            o[t] && e.removeChild(o[t]),
              o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
          }
        }
        function p(e, t, r) {
          var n = r.css,
            a = r.media,
            i = r.sourceMap;
          if (
            (a ? e.setAttribute('media', a) : e.removeAttribute('media'),
            i &&
              'undefined' != typeof btoa &&
              (n +=
                '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  ' */'
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
        var f = null,
          h = 0;
        function g(e, t) {
          var r, n, a;
          if (t.singleton) {
            var i = h++;
            (r = f || (f = l(t))),
              (n = d.bind(null, r, i, !1)),
              (a = d.bind(null, r, i, !0));
          } else
            (r = l(t)),
              (n = p.bind(null, r, t)),
              (a = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(r);
              });
          return (
            n(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                n((e = t));
              } else a();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            'boolean' == typeof t.singleton ||
            (t.singleton =
              (void 0 === n &&
                (n = Boolean(
                  window && document && document.all && !window.atob
                )),
              n));
          var r = s((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              '[object Array]' === Object.prototype.toString.call(e))
            ) {
              for (var n = 0; n < r.length; n++) {
                var a = o(r[n]);
                i[a].references--;
              }
              for (var l = s(e, t), c = 0; c < r.length; c++) {
                var u = o(r[c]);
                0 === i[u].references && (i[u].updater(), i.splice(u, 1));
              }
              r = l;
            }
          };
        };
      },
      6077: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6401);
        const n = r(4977),
          a = r(8742),
          i = r(1583),
          o = r(2e3);
        t.default = class {
          constructor() {
            (this.header = new n.default()),
              (this.main = new i.default()),
              (this.footer = new o.default());
          }
          start(e = a.bikes) {
            const t = document.querySelector('#root');
            t.classList.add('body');
            const r = this.header.draw(),
              n = this.main.draw(e),
              i = this.footer.draw();
            return t.prepend(n), t.prepend(r), t.append(i), t;
          }
        };
      },
      8742: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.bikes = void 0),
          (t.bikes = [
            {
              name: 'Greenway 26M031',
              manufacturer: 'Greenway',
              color: 'green',
              url: './assets/images/1.jpg',
              age: 'adult',
              year: 2020,
              price: 564,
              type: 'mountain',
              amount: 73,
              shoppingCart: !1,
              indx: 0,
              popular: !0,
            },
            {
              name: 'Stels GTI',
              manufacturer: 'Stels',
              color: 'red',
              url: './assets/images/2.jpg',
              age: 'adult',
              year: 2021,
              price: 550,
              type: 'mountain',
              amount: 50,
              shoppingCart: !1,
              indx: 1,
              popular: !1,
            },
            {
              name: 'Stels Gadgets15',
              manufacturer: 'Stels',
              color: 'red',
              url: './assets/images/3.jpg',
              age: 'adult',
              year: 2022,
              price: 480,
              type: 'city',
              amount: 22,
              shoppingCart: !1,
              indx: 2,
              popular: !0,
            },
            {
              name: 'Greenway Kraft 400',
              manufacturer: 'Greenway',
              color: 'blue',
              url: './assets/images/4.jpg',
              age: 'children',
              year: 2021,
              price: 490,
              type: 'city',
              amount: 17,
              shoppingCart: !1,
              indx: 3,
              popular: !0,
            },
            {
              name: 'Aist 28-130 CKD',
              manufacturer: 'Aist',
              color: 'grey',
              url: './assets/images/5.jpg',
              age: 'adult',
              year: 2019,
              price: 425,
              type: 'road',
              amount: 29,
              shoppingCart: !1,
              indx: 4,
              popular: !0,
            },
            {
              name: 'Aist Rocky 1.0',
              manufacturer: 'Aist',
              color: 'grey',
              url: './assets/images/6.jpg',
              age: 'teenage',
              year: 2016,
              price: 475,
              type: 'mountain',
              amount: 68,
              shoppingCart: !1,
              indx: 5,
              popular: !1,
            },
            {
              name: 'Aist MAJESTIC',
              manufacturer: 'Aist',
              color: 'green',
              url: './assets/images/7.jpg',
              age: 'teenage',
              year: 2015,
              price: 652,
              type: 'city',
              amount: 29,
              shoppingCart: !1,
              indx: 6,
              popular: !0,
            },
            {
              name: 'Stels Jet 18',
              manufacturer: 'Stels',
              color: 'green',
              url: './assets/images/8.jpeg',
              age: 'children',
              year: 2021,
              price: 646,
              type: 'mountain',
              amount: 35,
              shoppingCart: !1,
              indx: 7,
              popular: !0,
            },
            {
              name: 'Aist Rt-24',
              manufacturer: 'Aist',
              color: 'blue',
              url: './assets/images/9.jpg',
              age: 'teenage',
              year: 2011,
              price: 386,
              type: 'city',
              amount: 62,
              shoppingCart: !1,
              indx: 8,
              popular: !1,
            },
            {
              name: 'Aist Avenue 1.026',
              manufacturer: 'Aist',
              color: 'white',
              url: './assets/images/10.jpg',
              age: 'adult',
              year: 2011,
              price: 486,
              type: 'city',
              amount: 42,
              shoppingCart: !1,
              indx: 9,
              popular: !0,
            },
            {
              name: 'Aist Pluto 16',
              manufacturer: 'Aist',
              color: 'yellow',
              url: './assets/images/11.jpg',
              age: 'children',
              year: 2017,
              price: 366,
              type: 'city',
              amount: 52,
              shoppingCart: !1,
              indx: 10,
              popular: !0,
            },
            {
              name: 'Aist Pirate 1.0',
              manufacturer: 'Aist',
              color: 'yellow',
              url: './assets/images/12.jpg',
              age: 'teenage',
              year: 2012,
              price: 386,
              type: 'city',
              amount: 42,
              shoppingCart: !1,
              indx: 11,
              popular: !0,
            },
            {
              name: 'Stels Wind z010',
              manufacturer: 'Stels',
              color: 'blue',
              url: './assets/images/13.jpg',
              age: 'children',
              year: 2016,
              price: 396,
              type: 'city',
              amount: 52,
              shoppingCart: !1,
              indx: 12,
              popular: !1,
            },
            {
              name: 'Greenway 24S006-L',
              manufacturer: 'Greenway',
              color: 'grey',
              url: './assets/images/14.jpg',
              age: 'teenage',
              year: 2011,
              price: 596,
              type: 'mountain',
              amount: 40,
              shoppingCart: !1,
              indx: 13,
              popular: !0,
            },
            {
              name: 'Aist Avatar Disc ',
              manufacturer: 'Aist',
              color: 'yellow',
              url: './assets/images/15.jpg',
              age: 'teenage',
              year: 2015,
              price: 542,
              type: 'mountain',
              amount: 53,
              shoppingCart: !1,
              indx: 14,
              popular: !0,
            },
            {
              name: 'Greenway Windrunner',
              manufacturer: 'Greenway',
              color: 'red',
              url: './assets/images/16.jpg',
              age: 'teenage',
              year: 2012,
              price: 602,
              type: 'mountain',
              amount: 45,
              shoppingCart: !1,
              indx: 15,
              popular: !0,
            },
            {
              name: 'Stels Jet Z010',
              manufacturer: 'Stels',
              color: 'red',
              url: './assets/images/17.jpg',
              age: 'children',
              year: 2005,
              price: 374,
              type: 'city',
              amount: 46,
              shoppingCart: !1,
              indx: 16,
              popular: !1,
            },
            {
              name: 'Stels Navigator v010',
              manufacturer: 'Stels',
              color: 'blue',
              url: './assets/images/18.jpeg',
              age: 'adult',
              year: 2002,
              price: 384,
              type: 'road',
              amount: 37,
              shoppingCart: !1,
              indx: 17,
              popular: !1,
            },
            {
              name: 'Stels Aggressor V010',
              manufacturer: 'Stels',
              color: 'grey',
              url: './assets/images/19.jpeg',
              age: 'teenage',
              year: 2011,
              price: 554,
              type: 'mountain',
              amount: 49,
              shoppingCart: !1,
              indx: 18,
              popular: !0,
            },
            {
              name: 'Stels 27.5" Adrenalin',
              manufacturer: 'Stels',
              color: 'blue',
              url: './assets/images/20.jpg',
              age: 'teenage',
              year: 2015,
              price: 654,
              type: 'mountain',
              amount: 79,
              shoppingCart: !1,
              indx: 19,
              popular: !1,
            },
            {
              name: 'Stels Focus V 26',
              manufacturer: 'Stels',
              color: 'blue',
              url: './assets/images/21.jpeg',
              age: 'adult',
              year: 2010,
              price: 684,
              type: 'mountain',
              amount: 49,
              shoppingCart: !1,
              indx: 20,
              popular: !0,
            },
            {
              name: 'Greenway 4919m 24',
              manufacturer: 'Greenway',
              color: 'red',
              url: './assets/images/22.jpg',
              age: 'teenage',
              year: 2017,
              price: 586,
              type: 'mountain',
              amount: 55,
              shoppingCart: !1,
              indx: 21,
              popular: !0,
            },
            {
              name: 'Greenway NM24',
              manufacturer: 'Greenway',
              color: 'blue',
              url: './assets/images/23.jpg',
              age: 'teenage',
              year: 2016,
              price: 686,
              type: 'mountain',
              amount: 59,
              shoppingCart: !1,
              indx: 22,
              popular: !0,
            },
            {
              name: 'Greenway WHit22',
              manufacturer: 'Greenway',
              color: 'white',
              url: './assets/images/24.jpg',
              age: 'teenage',
              year: 2014,
              price: 560,
              type: 'city',
              amount: 67,
              shoppingCart: !1,
              indx: 23,
              popular: !1,
            },
          ]);
      },
      9: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CardsBike = void 0),
          r(3038);
        const n = r(589);
        t.CardsBike = class {
          constructor() {
            this.addShoppihgCart = (e) => {
              const t = e.target.closest('.card__bike');
              if (!t) return;
              const r = t.getAttribute('data-indx');
              (0, n.countShoppingCart)(r, t);
            };
          }
          draw(e) {
            const t = document.createElement('div');
            return (
              t.classList.add('cards'),
              e.forEach((e) => {
                const r = document.createElement('div');
                r.classList.add('card__wrapperCard');
                const a = document.createElement('div');
                a.classList.add('card__bike'),
                  (e.shoppingCart || (0, n.hasShoppingCart)(`${e.indx}`)) &&
                    a.classList.add('activeCardBike'),
                  a.setAttribute('data-indx', `${e.indx}`),
                  a.addEventListener('click', this.addShoppihgCart);
                const i = document.createElement('img');
                i.classList.add('card__bike_img'),
                  (i.src = `${e.url}`),
                  (i.alt = 'image bike'),
                  a.prepend(i);
                const o = document.createElement('div');
                o.classList.add('card__bike_descript'),
                  a.append(o),
                  r.prepend(a),
                  t.append(r);
                const s = document.createElement('h6');
                o.classList.add('bike__descript_firma'),
                  (s.textContent = `${e.name}`),
                  o.prepend(s);
                const l = document.createElement('ul');
                l.classList.add('bike__descript_ul');
                const c = document.createElement('li');
                c.textContent = `ТИП: ${e.type}`;
                const u = document.createElement('li');
                u.textContent = `Возраст: ${e.age}`;
                const d = document.createElement('li');
                d.textContent = `Год выпуска: ${e.year}г.`;
                const p = document.createElement('li');
                p.textContent = `Цвет: ${e.color}`;
                const f = document.createElement('li');
                f.textContent = `Количество на складе: ${e.amount}`;
                const h = document.createElement('li');
                h.textContent = `Популярен: ${e.popular}`;
                const g = document.createElement('li');
                (g.textContent = `ЦЕНА: ${e.price}.00 руб`),
                  l.prepend(c, u, d, p, f, h, g),
                  o.append(l);
              }),
              t
            );
          }
        };
      },
      2e3: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          r(2971),
          (t.default = class {
            draw() {
              const e = document.createElement('div');
              e.classList.add('footer');
              const t = document.createElement('a');
              (t.href = 'https://rs.school/js/'), (t.target = '_blank');
              const r = document.createElement('img');
              r.setAttribute('alt', 'logotip RS school'),
                r.classList.add('footer__img_RS'),
                (r.src = './assets/images/logoRS3.png'),
                t.append(r);
              const n = document.createElement('a');
              n.classList.add('footer__github'),
                (n.href = 'https://github.com/nick-levshin'),
                (n.target = '_blank');
              const a = new Image();
              (a.src = './assets/images/github.jpg'),
                a.setAttribute('alt', 'img GitHub'),
                a.classList.add('footer__img_GitHub'),
                n.append(a);
              const i = document.createElement('p');
              return (
                i.classList.add('footer__year'),
                (i.innerHTML = '2022'),
                e.append(t, i, n),
                e
              );
            }
          });
      },
      2002: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(1878);
        const n = r(7347),
          a = r(6882),
          i = r(2247),
          o = r(1108),
          s = r(4218);
        t.default = class {
          filterAge(e) {
            const t = e.target,
              r = t.getAttribute('data-age');
            t.classList.toggle('activeAge'),
              (n.ObjectFilter.age[r.toLowerCase()] =
                t.classList.contains('activeAge')),
              (0, a.newMainDraw)((0, i.createNewArrBike)()),
              new o.default().sort(),
              (0, s.saveLocalStorage)();
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('filter__age');
            const t = document.createElement('h5');
            (t.innerHTML = 'Возраст:'), e.prepend(t);
            const r = ['children', 'teenage', 'adult'];
            for (const t of r) {
              const r = document.createElement('div');
              r.classList.add(`filter__age_${t}`),
                r.setAttribute('data-age', `${t}`),
                (0, s.checkLocalStorage)() &&
                  n.ObjectFilter.age[t] &&
                  r.classList.add('activeAge'),
                r.addEventListener('click', this.filterAge),
                e.append(r);
            }
            return e;
          }
        };
      },
      8794: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(5298);
        const n = r(7347),
          a = r(2247),
          i = r(6882),
          o = r(1108),
          s = r(4218);
        t.default = class {
          filterColor(e) {
            const t = e.target,
              r = t.getAttribute('data-color');
            t.classList.toggle('activeColor'),
              (n.ObjectFilter.color[r.toLowerCase()] =
                t.classList.contains('activeColor')),
              (0, i.newMainDraw)((0, a.createNewArrBike)()),
              new o.default().sort(),
              (0, s.saveLocalStorage)();
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('filter__color');
            const t = document.createElement('h5');
            (t.innerHTML = 'Цвет:'), e.prepend(t);
            const r = ['red', 'green', 'white', 'blue', 'grey', 'yellow'];
            for (const t of r) {
              const r = document.createElement('div');
              r.classList.add(`filter__color_${t}`),
                (0, s.checkLocalStorage)() &&
                  n.ObjectFilter.color[t] &&
                  r.classList.add('activeColor'),
                r.setAttribute('data-color', `${t}`),
                r.addEventListener('click', this.filterColor),
                e.append(r);
            }
            return e;
          }
        };
      },
      309: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(2630);
        const n = r(7347),
          a = r(2247),
          i = r(6882),
          o = r(1108),
          s = r(4218);
        t.default = class {
          constructor() {
            this.filterManufacture = (e) => {
              const t = e.target;
              t.classList.toggle('activeManufacturer');
              const r = t.getAttribute('data-manufacturer');
              (n.ObjectFilter.manufacturer[r.toLowerCase()] =
                t.classList.contains('activeManufacturer')),
                (0, i.newMainDraw)((0, a.createNewArrBike)()),
                new o.default().sort(),
                (0, s.saveLocalStorage)();
            };
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('filter__manufacturer');
            const t = document.createElement('h5');
            (t.innerHTML = 'Производитель:'), e.prepend(t);
            const r = ['aist', 'greenway', 'stels'];
            for (const t of r) {
              const r = document.createElement('div');
              r.classList.add(`filter__manufacturer_${t}`),
                (0, s.checkLocalStorage)() &&
                  n.ObjectFilter.manufacturer[t] &&
                  r.classList.add('activeManufacturer'),
                r.setAttribute('data-manufacturer', `${t}`),
                r.addEventListener('click', this.filterManufacture),
                e.append(r);
            }
            return e;
          }
        };
      },
      6438: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(4042);
        const n = r(7347),
          a = r(2247),
          i = r(6882),
          o = r(1108),
          s = r(4218);
        t.default = class {
          filterPopular(e) {
            const t = e.target;
            t.classList.toggle('activePopular'),
              (n.ObjectFilter.popular = t.classList.contains('activePopular')),
              (0, s.saveLocalStorage)(),
              (0, i.newMainDraw)((0, a.createNewArrBike)()),
              new o.default().sort();
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('filter__popular');
            const t = document.createElement('h5');
            t.innerHTML = 'Популярен:';
            const r = document.createElement('div');
            return (
              r.classList.add('filter__popular_check'),
              (0, s.checkLocalStorage)() &&
                n.ObjectFilter.popular &&
                r.classList.add('activePopular'),
              r.addEventListener('click', this.filterPopular),
              e.prepend(t, r),
              e
            );
          }
        };
      },
      6236: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6248);
        const n = r(309),
          a = r(8794),
          i = r(2002),
          o = r(6438);
        t.default = class {
          constructor() {
            (this.manufacturer = new n.default()),
              (this.color = new a.default()),
              (this.age = new i.default()),
              (this.popular = new o.default());
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('header__filter');
            const t = document.createElement('h2');
            return (
              (t.innerHTML = 'Фильтры по значению:'),
              e.prepend(t),
              e.append(this.manufacturer.draw()),
              e.append(this.color.draw()),
              e.append(this.age.draw()),
              e.append(this.popular.draw()),
              e
            );
          }
        };
      },
      452: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6774);
        const n = r(4211);
        r(1671);
        const a = r(7347),
          i = r(2247),
          o = r(6882),
          s = r(1108),
          l = r(4218);
        t.default = class {
          filterCountBike() {
            var e;
            if (document.querySelectorAll('.noUi-handle')[0]) {
              const t =
                document.querySelectorAll('.noUi-handle')[0].ariaValueNow;
              a.ObjectFilter.countBike.lowerBound = +t;
              const r =
                null === (e = document.querySelectorAll('.noUi-handle')[0]) ||
                void 0 === e
                  ? void 0
                  : e.ariaValueMax;
              (a.ObjectFilter.countBike.upperBound = +r),
                (0, l.saveLocalStorage)(),
                (0, o.newMainDraw)((0, i.createNewArrBike)()),
                new s.default().sort();
            }
          }
          draw() {
            var e;
            const t = document.createElement('section');
            t.classList.add('range');
            const r = document.createElement('div');
            r.classList.add('range__title');
            const i = document.createElement('h5');
            (i.innerHTML = 'Количество на складе:'), r.append(i);
            const o = document.createElement('div');
            o.classList.add('range__slider');
            const s = document.createElement('div');
            s.setAttribute('id', 'range'), o.append(s), t.append(r, o);
            const c = (0, l.checkLocalStorage)()
                ? a.ObjectFilter.countBike.lowerBound
                : 0,
              u = (0, l.checkLocalStorage)()
                ? a.ObjectFilter.countBike.upperBound
                : 100;
            return (
              n.create(s, {
                start: [c, u],
                connect: !0,
                behaviour: 'tap-drag',
                tooltips: !0,
                format: {
                  to: function (e) {
                    return e + '';
                  },
                  from: function (e) {
                    return +e;
                  },
                },
                range: { min: 0, max: 100 },
                step: 1,
              }),
              null === (e = s.noUiSlider) ||
                void 0 === e ||
                e.on('update', this.filterCountBike),
              t
            );
          }
        };
      },
      3647: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6774);
        const n = r(4211);
        r(1671);
        const a = r(7347),
          i = r(2247),
          o = r(6882),
          s = r(1108),
          l = r(4218);
        t.default = class {
          filterYear() {
            var e;
            if (document.querySelectorAll('.noUi-handle')[2]) {
              const t =
                document.querySelectorAll('.noUi-handle')[2].ariaValueNow;
              a.ObjectFilter.yearBike.lowerBound = +t;
              const r =
                null === (e = document.querySelectorAll('.noUi-handle')[2]) ||
                void 0 === e
                  ? void 0
                  : e.ariaValueMax;
              (a.ObjectFilter.yearBike.upperBound = +r),
                (0, l.saveLocalStorage)(),
                (0, o.newMainDraw)((0, i.createNewArrBike)()),
                new s.default().sort();
            }
          }
          draw() {
            var e;
            const t = document.createElement('section');
            t.classList.add('range');
            const r = document.createElement('div');
            r.classList.add('range__title');
            const i = document.createElement('h5');
            (i.innerHTML = 'Год выхода на рынок:'), r.append(i);
            const o = document.createElement('div');
            o.classList.add('range__slider');
            const s = document.createElement('div');
            s.setAttribute('id', 'range'), o.append(s), t.append(r, o);
            const c = (0, l.checkLocalStorage)()
                ? a.ObjectFilter.yearBike.lowerBound
                : 2e3,
              u = (0, l.checkLocalStorage)()
                ? a.ObjectFilter.yearBike.upperBound
                : 2022;
            return (
              n.create(s, {
                start: [c, u],
                connect: !0,
                behaviour: 'tap-drag',
                tooltips: !0,
                format: {
                  to: function (e) {
                    return e + '';
                  },
                  from: function (e) {
                    return +e;
                  },
                },
                range: { min: 2e3, max: 2022 },
                step: 1,
              }),
              null === (e = s.noUiSlider) ||
                void 0 === e ||
                e.on('update', this.filterYear),
              t
            );
          }
        };
      },
      6478: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6774);
        const n = r(452),
          a = r(3647);
        t.default = class {
          constructor() {
            (this.have = new n.default()), (this.year = new a.default());
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('header__filterRange');
            const t = document.createElement('h2');
            return (
              (t.innerHTML = 'Фильтры по диапазону:'),
              e.prepend(t),
              e.append(this.have.draw()),
              e.append(this.year.draw()),
              e
            );
          }
        };
      },
      4977: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(7892);
        const n = r(6236),
          a = r(1850),
          i = r(6478),
          o = r(5750);
        t.default = class {
          constructor() {
            (this.headerTitle = new a.default()),
              (this.headerFilterItem = new n.default()),
              (this.headerFilterRange = new i.default()),
              (this.headerSortFind = new o.default());
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('header');
            const t = this.headerTitle.draw(),
              r = this.headerFilterItem.draw(),
              n = this.headerFilterRange.draw(),
              a = this.headerSortFind.draw();
            return e.prepend(t, r, n, a), e;
          }
        };
      },
      7807: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(8237);
        const n = r(2247),
          a = r(7347),
          i = r(6882),
          o = r(1108),
          s = r(4218);
        t.default = class {
          constructor() {
            (this.find = () => {
              const e = document
                .querySelector('.find__input')
                .value.toLowerCase();
              (a.ObjectFilter.searchString = e),
                (0, s.saveLocalStorage)(),
                (0, i.newMainDraw)((0, n.createNewArrBike)()),
                new o.default().sort();
            }),
              (this.clean = () => {
                (a.ObjectFilter.searchString = ''),
                  (0, i.newMainDraw)((0, n.createNewArrBike)()),
                  new o.default().sort();
              });
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('header__find');
            const t = document.createElement('h2');
            t.innerHTML = 'Поиск:';
            const r = document.createElement('div');
            r.classList.add('find');
            const n = document.createElement('input');
            n.classList.add('find__input'),
              n.setAttribute('type', 'search'),
              n.setAttribute('placeholder', 'Введите данные'),
              (n.autofocus = !0),
              n.setAttribute('autocomplete', 'off'),
              n.addEventListener('keyup', this.find),
              n.addEventListener('search', this.clean),
              (0, s.checkLocalStorage)() &&
                (n.value = a.ObjectFilter.searchString);
            const i = document.createElement('button');
            return (
              i.classList.add('find__button'), r.append(n, i), e.append(t, r), e
            );
          }
        };
      },
      5750: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(4414);
        const n = r(7807),
          a = r(1108),
          i = r(2134);
        t.default = class {
          constructor() {
            (this.find = new n.default()),
              (this.sort = new a.default()),
              (this.reset = new i.default());
          }
          draw() {
            const e = document.createElement('div');
            return (
              e.classList.add('header__findSort'),
              e.append(this.find.draw()),
              e.append(this.sort.draw()),
              e.append(this.reset.draw()),
              e
            );
          }
        };
      },
      2134: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(3151);
        const n = r(1108),
          a = r(6195),
          i = r(589);
        t.default = class {
          constructor() {
            (this.resetFilter = (e) => {
              var t, r, i, o, s, l;
              e.stopPropagation(),
                null ===
                  (t = document.querySelectorAll('.activeManufacturer')) ||
                  void 0 === t ||
                  t.forEach((e) => e.classList.remove('activeManufacturer')),
                null === (r = document.querySelectorAll('.activeColor')) ||
                  void 0 === r ||
                  r.forEach((e) => e.classList.remove('activeColor')),
                null === (i = document.querySelectorAll('.activeAge')) ||
                  void 0 === i ||
                  i.forEach((e) => e.classList.remove('activeAge')),
                null === (o = document.querySelector('.activePopular')) ||
                  void 0 === o ||
                  o.classList.remove('activePopular'),
                (document.querySelector('.find__input').value = ''),
                null === (s = document.querySelector('#range').noUiSlider) ||
                  void 0 === s ||
                  s.set([0, 100]),
                null ===
                  (l = document.querySelectorAll('#range')[1].noUiSlider) ||
                  void 0 === l ||
                  l.set([2e3, 2022]),
                (0, a.resetObjectFilter)(),
                new n.default().sort();
            }),
              (this.resetSetting = (e) => {
                e.stopPropagation(),
                  (document.querySelector('.sort').value = 'offer'),
                  (document.querySelector('.find__input').value = ''),
                  (0, i.resetShoppingCart)(),
                  this.resetFilter(e),
                  localStorage.clear();
              });
          }
          draw() {
            const e = document.createElement('div');
            e.classList.add('header__reset');
            const t = document.createElement('button');
            t.setAttribute('type', 'button'),
              t.classList.add('reset__button_filter'),
              (t.innerHTML = 'Сброс фильтров'),
              t.addEventListener('click', this.resetFilter);
            const r = document.createElement('button');
            return (
              r.setAttribute('type', 'button'),
              r.classList.add('reset__button_setting'),
              (r.innerHTML = 'Сброс настроек'),
              r.addEventListener('click', this.resetSetting),
              e.append(t, r),
              e
            );
          }
        };
      },
      1108: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(2334);
        const n = r(6375),
          a = r(6882),
          i = r(9880),
          o = r(2247),
          s = r(228);
        t.default = class {
          constructor() {
            (this.sort = () => {
              switch (document.querySelector('.sort').value) {
                case 'offer':
                  localStorage.setItem('selectValue', 'offer'),
                    (0, a.newMainDraw)((0, o.createNewArrBike)());
                  break;
                case 'alfabet':
                  localStorage.setItem('selectValue', 'alfabet'),
                    (0, a.newMainDraw)((0, n.sortAlfabet)());
                  break;
                case 'alfabetReverse':
                  localStorage.setItem('selectValue', 'alfabetReverse'),
                    (0, a.newMainDraw)((0, i.sortAlfabetReverse)());
                  break;
                case 'year':
                  localStorage.setItem('selectValue', 'year'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('year', !0));
                  break;
                case 'yearReverse':
                  localStorage.setItem('selectValue', 'yearReverse'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('year', !1));
                  break;
                case 'count':
                  localStorage.setItem('selectValue', 'count'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('amount', !0));
                  break;
                case 'countReverse':
                  localStorage.setItem('selectValue', 'countReverse'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('amount', !1));
                  break;
                case 'price':
                  localStorage.setItem('selectValue', 'price'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('price', !0));
                  break;
                case 'priceReverse':
                  localStorage.setItem('selectValue', 'priceReverse'),
                    (0, a.newMainDraw)((0, s.sortMinMax)('price', !1));
              }
            }),
              (this.draw = () => {
                const e = document.createElement('div');
                e.classList.add('header__sort');
                const t = document.createElement('h2');
                t.innerHTML = 'Соpтировка:';
                const r = document.createElement('select');
                r.classList.add('sort'),
                  r.setAttribute('name', 'sortItem'),
                  r.addEventListener('change', this.sort);
                const n = document.createElement('option');
                n.classList.add('find__option'),
                  n.setAttribute('value', 'offer'),
                  (n.innerHTML = 'Выбери параметры');
                const a = document.createElement('option');
                a.classList.add('find__option'),
                  a.setAttribute('value', 'alfabet'),
                  (a.innerHTML = 'По названию, от А до Я');
                const i = document.createElement('option');
                i.classList.add('find__option'),
                  i.setAttribute('value', 'alfabetReverse'),
                  (i.innerHTML = 'По названию, от Я до А');
                const o = document.createElement('option');
                o.classList.add('find__option'),
                  o.setAttribute('value', 'year'),
                  (o.innerHTML = 'По году, по возрастанию');
                const s = document.createElement('option');
                s.classList.add('find__option'),
                  s.setAttribute('value', 'yearReverse'),
                  (s.innerHTML = 'По году, по убыванию');
                const l = document.createElement('option');
                l.classList.add('find__option'),
                  l.setAttribute('value', 'count'),
                  (l.innerHTML = 'По количеству, по возрастанию');
                const c = document.createElement('option');
                c.classList.add('find__option'),
                  c.setAttribute('value', 'countReverse'),
                  (c.innerHTML = 'По количеству, по убыванию');
                const u = document.createElement('option');
                u.classList.add('find__option'),
                  u.setAttribute('value', 'price'),
                  (u.innerHTML = 'По цене, по возрастанию');
                const d = document.createElement('option');
                return (
                  d.classList.add('find__option'),
                  d.setAttribute('value', 'priceReverse'),
                  (d.innerHTML = 'По цене, по убыванию'),
                  r.append(n, a, i, o, s, l, c, u, d),
                  e.append(t, r),
                  localStorage.getItem('selectValue')
                    ? (r.value = localStorage.getItem('selectValue'))
                    : (r.value = 'offer'),
                  e
                );
              });
          }
        };
      },
      1850: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        const n = r(589);
        r(664),
          (t.default = class {
            constructor() {
              this.draw = () => {
                const e = document.createElement('div');
                e.classList.add('header__title');
                const t = document.createElement('h1');
                t.innerHTML = 'Online Store';
                const r = document.createElement('h6'),
                  a = n.count;
                r.textContent = a;
                const i = document.createElement('div');
                i.classList.add('header__shoppingCart');
                const o = document.createElement('p');
                return (
                  o.classList.add('header__warningText'),
                  (o.innerHTML = ''),
                  e.prepend(t),
                  e.append(r),
                  e.append(i, o),
                  e
                );
              };
            }
          });
      },
      1583: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6592);
        const n = r(1287),
          a = r(4218),
          i = r(2247);
        t.default = class {
          constructor() {
            this.mainContainer = new n.default();
          }
          draw(e) {
            const t = document.createElement('div');
            let r;
            return (
              t.classList.add('main'),
              (r = (0, a.checkLocalStorage)()
                ? this.mainContainer.draw((0, i.createNewArrBike)())
                : this.mainContainer.draw(e)),
              t.prepend(r),
              t
            );
          }
        };
      },
      1287: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }), r(6592);
        const n = r(9);
        t.default = class {
          constructor() {
            this.cards = new n.CardsBike();
          }
          draw(e) {
            const t = document.createElement('div');
            t.classList.add('main__container');
            const r = this.cards.draw(e);
            return t.prepend(r), t;
          }
        };
      },
      589: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.indexShoppingCart =
            t.hasShoppingCart =
            t.resetShoppingCart =
            t.countShoppingCart =
            t.shoppingCart =
            t.count =
              void 0);
        const n = r(7955),
          a = r(8742);
        function i(e) {
          return -1 != t.shoppingCart.indexOf(e);
        }
        function o(e) {
          return t.shoppingCart.indexOf(e);
        }
        (t.count = localStorage.getItem('countShoppingCart') || '0'),
          (t.shoppingCart =
            JSON.parse(localStorage.getItem('shoppingCart')) || []),
          (t.countShoppingCart = function (e, r) {
            if (i(e))
              t.shoppingCart.splice(o(e), 1),
                (t.count = '' + (+t.count - 1)),
                localStorage.setItem('countShoppingCart', t.count),
                localStorage.setItem(
                  'shoppingCart',
                  JSON.stringify(t.shoppingCart)
                );
            else {
              if (
                ((t.count = '' + (+t.count + 1)),
                localStorage.setItem('countShoppingCart', t.count),
                +t.count > 20)
              )
                return (
                  (document.querySelector('.header__warningText').innerHTML =
                    'В корзине не может быть более 20 товаров'),
                  (t.count = '20'),
                  void localStorage.setItem('countShoppingCart', t.count)
                );
              t.shoppingCart.push(e),
                localStorage.setItem(
                  'shoppingCart',
                  JSON.stringify(t.shoppingCart)
                );
            }
            r.classList.toggle('activeCardBike'),
              (a.bikes[+e].shoppingCart =
                r.classList.contains('activeCardBike')),
              (0, n.drawNewHeaderTitle)();
          }),
          (t.resetShoppingCart = function () {
            a.bikes.forEach((e) => (e.shoppingCart = !1)),
              (t.count = '0'),
              (t.shoppingCart = []),
              localStorage.setItem(
                'shoppingCart',
                JSON.stringify(t.shoppingCart)
              ),
              (0, n.drawNewHeaderTitle)();
          }),
          (t.hasShoppingCart = i),
          (t.indexShoppingCart = o);
      },
      2247: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createNewArrBike = void 0);
        const n = r(8742),
          a = r(7369),
          i = r(7347);
        t.createNewArrBike = function () {
          const e = [];
          for (const t of n.bikes)
            (0, a.FilterBike)(t, i.ObjectFilter) && e.push(t);
          return e;
        };
      },
      7955: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.drawNewHeaderTitle = void 0);
        const n = r(1850);
        t.drawNewHeaderTitle = function () {
          var e, t;
          null === (e = document.querySelector('.header__title')) ||
            void 0 === e ||
            e.remove(),
            null === (t = document.querySelector('.header')) ||
              void 0 === t ||
              t.prepend(new n.default().draw());
        };
      },
      7369: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.FilterBike = void 0),
          (t.FilterBike = function (e, t) {
            return !(
              (Object.values(t.color).includes(!0) && !t.color[e.color]) ||
              (Object.values(t.age).includes(!0) && !t.age[e.age]) ||
              (Object.values(t.manufacturer).includes(!0) &&
                !t.manufacturer[e.manufacturer.toLowerCase()]) ||
              (t.popular && !e.popular) ||
              t.yearBike.lowerBound > e.year ||
              t.yearBike.upperBound < e.year ||
              t.countBike.lowerBound > e.amount ||
              t.countBike.upperBound < e.amount ||
              (t.searchString &&
                !e.name.toLowerCase().includes(t.searchString.toLowerCase()))
            );
          });
      },
      6882: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.newMainDraw = void 0);
        const n = r(1287);
        t.newMainDraw = function (e) {
          var t;
          null === (t = document.querySelector('.main__container')) ||
            void 0 === t ||
            t.remove();
          const r = document.querySelector('.main');
          if (e.length) r.prepend(new n.default().draw(e));
          else {
            const e = document.createElement('div');
            e.classList.add('main__container');
            const t = document.createElement('h3');
            t.classList.add('main__text'),
              (t.innerHTML = 'По Вашему запросу ничего не найдено'),
              e.prepend(t),
              r.prepend(e);
          }
        };
      },
      7347: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ObjectFilter = void 0),
          (t.ObjectFilter = localStorage.getItem('filterObject')
            ? JSON.parse(localStorage.getItem('filterObject'))
            : {
                manufacturer: { aist: !1, stels: !1, greenway: !1 },
                color: {
                  red: !1,
                  blue: !1,
                  green: !1,
                  white: !1,
                  yellow: !1,
                  grey: !1,
                },
                age: { children: !1, teenage: !1, adult: !1 },
                popular: !1,
                countBike: { lowerBound: 0, upperBound: 100 },
                yearBike: { lowerBound: 2e3, upperBound: 2022 },
                shoppingCart: !1,
                searchString: '',
              });
      },
      6195: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.resetObjectFilter = void 0);
        const n = r(7347);
        t.resetObjectFilter = function () {
          (n.ObjectFilter.manufacturer.aist = !1),
            (n.ObjectFilter.manufacturer.stels = !1),
            (n.ObjectFilter.manufacturer.greenway = !1),
            (n.ObjectFilter.color.red = !1),
            (n.ObjectFilter.color.blue = !1),
            (n.ObjectFilter.color.green = !1),
            (n.ObjectFilter.color.white = !1),
            (n.ObjectFilter.color.yellow = !1),
            (n.ObjectFilter.color.grey = !1),
            (n.ObjectFilter.age.children = !1),
            (n.ObjectFilter.age.teenage = !1),
            (n.ObjectFilter.age.adult = !1),
            (n.ObjectFilter.popular = !1),
            (n.ObjectFilter.countBike.lowerBound = 0),
            (n.ObjectFilter.countBike.upperBound = 100),
            (n.ObjectFilter.yearBike.lowerBound = 2e3),
            (n.ObjectFilter.yearBike.upperBound = 2022),
            (n.ObjectFilter.searchString = '');
        };
      },
      4218: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.saveLocalStorage = t.checkLocalStorage = void 0);
        const n = r(7347);
        (t.checkLocalStorage = function () {
          const e = localStorage.getItem('filterObject');
          return void 0 !== e || null !== e;
        }),
          (t.saveLocalStorage = function () {
            localStorage.setItem(
              'filterObject',
              JSON.stringify(n.ObjectFilter)
            );
          });
      },
      6375: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.sortAlfabet = void 0);
        const n = r(2247);
        function a(e, t) {
          return e.manufacturer < t.manufacturer ? -1 : 0;
        }
        t.sortAlfabet = function () {
          return (0, n.createNewArrBike)().sort(a);
        };
      },
      9880: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.sortAlfabetReverse = void 0);
        const n = r(2247);
        function a(e, t) {
          return e.manufacturer > t.manufacturer ? -1 : 0;
        }
        t.sortAlfabetReverse = function () {
          return (0, n.createNewArrBike)().sort(a);
        };
      },
      228: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.sortMinMax = void 0);
        const n = r(2247);
        t.sortMinMax = function (e, t) {
          const r = (function (e, t) {
            return function (r, n) {
              return t ? r[e] - n[e] : n[e] - r[e];
            };
          })(e, t);
          return (0, n.createNewArrBike)().sort(r);
        };
      },
      4343: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/Inter-Bold.ttf';
      },
      2895: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/Inter-Regular.ttf';
      },
      9757: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/aist.jpg';
      },
      9681: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/cart1.jpg';
      },
      7616: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/esperanza_1.png';
      },
      8270: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/esperanza_2.png';
      },
      571: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/esperanza_3.png';
      },
      3465: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/fon.jpg';
      },
      6317: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/greenway.jpg';
      },
      2314: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/search3.png';
      },
      8156: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/shopping.png';
      },
      7001: (e, t, r) => {
        'use strict';
        e.exports = r.p + 'assets/images/stels.png';
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { id: n, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + '');
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script');
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e);
    })(),
    (() => {
      'use strict';
      r(3427);
      const e = r(6077),
        t = r(8742),
        n = r(1108);
      new e.default().start(t.bikes), new n.default().sort();
    })();
})();
