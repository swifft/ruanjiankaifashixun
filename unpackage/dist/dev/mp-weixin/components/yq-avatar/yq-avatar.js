(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/yq-avatar/yq-avatar"],{

/***/ 126:
/*!************************************************************************!*\
  !*** E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& */ 127);
/* harmony import */ var _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yq-avatar.vue?vue&type=script&lang=js& */ 129);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yq-avatar.vue?vue&type=style&index=0&lang=css& */ 134);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/yq-avatar/yq-avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/*!**********************************************************************************************************************!*\
  !*** E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& */ 128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_template_id_795a15bc_name_yq_avatar___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 128:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=template&id=795a15bc&name=yq-avatar& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.imgStyle])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 129:
/*!*************************************************************************************************!*\
  !*** E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yq-avatar.vue?vue&type=script&lang=js& */ 130);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 130:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 131));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _createForOfIteratorHelper(o) {if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}
var tabHeight = 50;var _default =
{
  name: "yq-avatar",
  data: function data() {
    return {
      cvsStyleHeight: '0px',
      styleDisplay: 'none',
      styleTop: '-10000px',
      prvTop: '-10000px',
      imgStyle: {},
      selStyle: {},
      showOper: true,
      imgSrc: {
        imgSrc: '' },

      btnWidth: '19%',
      btnDsp: 'flex' };

  },
  watch: {
    avatarSrc: function avatarSrc() {
      this.imgSrc.imgSrc = this.avatarSrc;
    } },

  props: {
    avatarSrc: '',
    avatarStyle: '',
    selWidth: '',
    selHeight: '',
    expWidth: '',
    expHeight: '',
    minScale: '',
    maxScale: '',
    canScale: '',
    canRotate: '',
    lockWidth: '',
    lockHeight: '',
    stretch: '',
    lock: '',
    fileType: '',
    noTab: '',
    inner: '',
    quality: '',
    index: '',
    bgImage: '' },

  created: function created() {var _this = this;
    this.ctxCanvas = uni.createCanvasContext('avatar-canvas', this);
    this.ctxCanvasOper = uni.createCanvasContext('oper-canvas', this);
    this.ctxCanvasPrv = uni.createCanvasContext('prv-canvas', this);
    this.qlty = parseInt(this.quality) || 0.9;
    this.imgSrc.imgSrc = this.avatarSrc;
    this.letRotate = this.canRotate === 'false' || this.inner === true || this.inner === 'true' ? 0 : 1;
    this.letScale = this.canScale === 'false' ? 0 : 1;
    this.isin = this.inner === true || this.inner === 'true' ? 1 : 0;
    this.indx = this.index || undefined;
    this.mnScale = this.minScale || 0.3;
    this.mxScale = this.maxScale || 4;
    this.noBar = this.noTab === true || this.noTab === 'true' ? 1 : 0;
    this.stc = this.stretch;
    this.lck = this.lock;
    this.fType = this.fileType === 'jpg' ? 'jpg' : 'png';
    if (this.isin) {
      this.btnWidth = '24%';
      this.btnDsp = 'none';
    } else {
      this.btnWidth = '19%';
      this.btnDsp = 'flex';
    }

    if (this.noBar) {
      this.fWindowResize();
    } else {
      uni.showTabBar({
        complete: function complete(res) {
          _this.fWindowResize();
        } });

    }
  },
  methods: {
    fWindowResize: function fWindowResize() {
      var sysInfo = uni.getSystemInfoSync();
      this.platform = sysInfo.platform;
      this.pixelRatio = sysInfo.pixelRatio;
      this.windowWidth = sysInfo.windowWidth;























      this.windowHeight = sysInfo.windowHeight + tabHeight;
      this.cvsStyleHeight = this.windowHeight - tabHeight - 2 + 'px';



      this.pxRatio = this.windowWidth / 750;

      var style = this.avatarStyle;
      if (style && style !== true && (style = style.trim())) {
        style = style.split(';');
        var obj = {};var _iterator = _createForOfIteratorHelper(
        style),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var v = _step.value;
            if (!v) continue;
            v = v.trim().split(':');
            if (v[1].indexOf('upx') >= 0) {
              var arr = v[1].trim().split(' ');
              for (var k in arr) {
                if (!arr[k]) continue;
                if (arr[k].indexOf('upx') >= 0) {
                  arr[k] = parseFloat(arr[k]) * this.pxRatio + 'px';
                }
              }
              v[1] = arr.join(' ');
            }
            obj[v[0].trim()] = v[1].trim();
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
        this.imgStyle = obj;
      }

      this.expWidth && (this.exportWidth = this.expWidth.indexOf('upx') >= 0 ? parseInt(this.expWidth) * this.pxRatio :
      parseInt(this.expWidth));
      this.expHeight && (this.exportHeight = this.expHeight.indexOf('upx') >= 0 ? parseInt(this.expHeight) * this.pxRatio :
      parseInt(this.expHeight));

      if (this.styleDisplay === 'flex') {
        this.fDrawInit(true);
      }
      this.fHideImg();
    },
    fSelect: function fSelect() {var _this2 = this;
      if (this.fSelecting) return;
      this.fSelecting = true;
      setTimeout(function () {
        _this2.fSelecting = false;
      }, 500);

      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(r) {




          uni.showLoading({
            title: '加载中...',
            mask: true });



          var path = _this2.imgPath = r.tempFilePaths[0];
          uni.getImageInfo({
            src: path,
            success: function success(r) {
              _this2.imgWidth = r.width;
              _this2.imgHeight = r.height;
              _this2.path = path;
              if (!_this2.hasSel) {
                var style = _this2.selStyle || {};
                if (_this2.selWidth && _this2.selHeight) {
                  var selWidth = _this2.selWidth.indexOf('upx') >= 0 ? parseInt(_this2.selWidth) * _this2.pxRatio : parseInt(
                  _this2.selWidth),
                  selHeight = _this2.selHeight.indexOf('upx') >= 0 ? parseInt(_this2.selHeight) * _this2.pxRatio : parseInt(
                  _this2.selHeight);
                  style.width = selWidth + 'px';
                  style.height = selHeight + 'px';
                  style.top = (_this2.windowHeight - selHeight - tabHeight | 0) / 2 + 'px';
                  style.left = (_this2.windowWidth - selWidth | 0) / 2 + 'px';
                } else {
                  uni.showModal({
                    title: '裁剪框的宽或高没有设置',
                    showCancel: false });

                  return;
                }
                _this2.selStyle = style;
              }

              if (_this2.noBar) {
                _this2.fDrawInit(true);
              } else {
                uni.hideTabBar({
                  complete: function complete() {
                    _this2.fDrawInit(true);
                  } });

              }
            },
            fail: function fail() {
              uni.showToast({
                title: "请选择正确图片",
                duration: 2000 });

            },
            complete: function complete() {
              uni.hideLoading();
            } });

        } });

    },
    fUpload: function fUpload() {var _this3 = this;
      if (this.fUploading) return;
      this.fUploading = true;
      setTimeout(function () {
        _this3.fUploading = false;
      }, 1000);

      var style = this.selStyle,
      x = parseInt(style.left),
      y = parseInt(style.top),
      width = parseInt(style.width),
      height = parseInt(style.height),
      expWidth = (this.exportWidth || width) * this.pixelRatio,
      expHeight = (this.exportHeight || height) * this.pixelRatio;





      uni.showLoading({
        title: '加载中...',
        mask: true });



      this.styleDisplay = 'none';
      this.styleTop = '-10000px';
      this.hasSel = false;
      this.fHideImg();

































      uni.canvasToTempFilePath({
        x: x,
        y: y,
        width: width,
        height: height,
        destWidth: expWidth,
        destHeight: expHeight,
        canvasId: 'avatar-canvas',
        fileType: this.fType,
        quality: this.qlty,
        success: function success(r) {
          r = r.tempFilePath;



















































          _this3.$emit("upload", {
            avatar: _this3.imgSrc,
            path: r,
            index: _this3.indx,
            data: _this3.rtn,
            base64: _this3.base64 || null });


        },
        fail: function fail(res) {
          uni.showToast({
            title: "error1",
            duration: 2000 });

        },
        complete: function complete() {
          uni.hideLoading();
          _this3.noBar || uni.showTabBar();
        } },
      this);

    },
    fPrvUpload: function fPrvUpload() {var _this4 = this;
      if (this.fPrvUploading) return;
      this.fPrvUploading = true;
      setTimeout(function () {
        _this4.fPrvUploading = false;
      }, 1000);

      var style = this.selStyle,
      destWidth = parseInt(style.width),
      destHeight = parseInt(style.height),
      prvX = this.prvX,
      prvY = this.prvY,
      prvWidth = this.prvWidth,
      prvHeight = this.prvHeight,
      expWidth = (this.exportWidth || prvWidth) * this.pixelRatio,
      expHeight = (this.exportHeight || prvHeight) * this.pixelRatio;





      uni.showLoading({
        title: '加载中...',
        mask: true });



      this.styleDisplay = 'none';
      this.styleTop = '-10000px';
      this.hasSel = false;
      this.fHideImg();

































      uni.canvasToTempFilePath({
        x: prvX,
        y: prvY,
        width: prvWidth,
        height: prvHeight,
        destWidth: expWidth,
        destHeight: expHeight,
        canvasId: 'prv-canvas',
        fileType: this.fType,
        quality: this.qlty,
        success: function success(r) {
          r = r.tempFilePath;



















































          _this4.$emit("upload", {
            avatar: _this4.imgSrc,
            path: r,
            index: _this4.indx,
            data: _this4.rtn,
            base64: _this4.base64 || null });


        },
        fail: function fail() {
          uni.showToast({
            title: "error_prv",
            duration: 2000 });

        },
        complete: function complete() {
          uni.hideLoading();
          _this4.noBar || uni.showTabBar();
        } },
      this);

    },
    fDrawInit: function fDrawInit() {var _this5 = this;var ini = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var allWidth = this.windowWidth,
      allHeight = this.windowHeight,
      imgWidth = this.imgWidth,
      imgHeight = this.imgHeight,
      imgRadio = imgWidth / imgHeight,
      useWidth = allWidth - 40,
      useHeight = allHeight - tabHeight - 80,
      useRadio = useWidth / useHeight,
      selWidth = parseInt(this.selStyle.width),
      selHeight = parseInt(this.selStyle.height);

      this.fixWidth = 0;
      this.fixHeight = 0;
      this.lckWidth = 0;
      this.lckHeight = 0;
      switch (this.stc) {
        case 'x':
          this.fixWidth = 1;
          break;
        case 'y':
          this.fixHeight = 1;
          break;
        case 'long':
          if (imgRadio > 1) this.fixWidth = 1;else
          this.fixHeight = 1;
          break;
        case 'short':
          if (imgRadio > 1) this.fixHeight = 1;else
          this.fixWidth = 1;
          break;
        case 'longSel':
          if (selWidth > selHeight) this.fixWidth = 1;else
          this.fixHeight = 1;
          break;
        case 'shortSel':
          if (selWidth > selHeight) this.fixHeight = 1;else
          this.fixWidth = 1;
          break;}

      switch (this.lck) {
        case 'x':
          this.lckWidth = 1;
          break;
        case 'y':
          this.lckHeight = 1;
          break;
        case 'long':
          if (imgRadio > 1) this.lckWidth = 1;else
          this.lckHeight = 1;
          break;
        case 'short':
          if (imgRadio > 1) this.lckHeight = 1;else
          this.lckWidth = 1;
          break;
        case 'longSel':
          if (selWidth > selHeight) this.lckWidth = 1;else
          this.lckHeight = 1;
          break;
        case 'shortSel':
          if (selWidth > selHeight) this.lckHeight = 1;else
          this.lckWidth = 1;
          break;}

      if (this.fixWidth) {
        useWidth = selWidth;
        useHeight = useWidth / imgRadio;
      } else if (this.fixHeight) {
        useHeight = selHeight;
        useWidth = useHeight * imgRadio;
      } else if (imgRadio < useRadio) {
        if (imgHeight < useHeight) {
          useWidth = imgWidth;
          useHeight = imgHeight;
        } else {
          // useHeight = useHeight;
          useWidth = useHeight * imgRadio;
        }
      } else {
        if (imgWidth < useWidth) {
          useWidth = imgWidth;
          useHeight = imgHeight;
        } else {
          // useWidth = useWidth;
          useHeight = useWidth / imgRadio;
        }
      }
      if (this.isin) {
        if (useWidth < selWidth) {
          useWidth = selWidth;
          useHeight = useWidth / imgRadio;
          this.lckHeight = 0;
        }
        if (useHeight < selHeight) {
          useHeight = selHeight;
          useWidth = useHeight * imgRadio;
          this.lckWidth = 0;
        }
      }

      this.scaleSize = 1;
      this.rotateDeg = 0;
      this.posWidth = (allWidth - useWidth) / 2 | 0;
      this.posHeight = (allHeight - useHeight - tabHeight) / 2 | 0;
      this.useWidth = useWidth | 0;
      this.useHeight = useHeight | 0;
      this.centerX = this.posWidth + useWidth / 2;
      this.centerY = this.posHeight + useHeight / 2;
      this.focusX = 0;
      this.focusY = 0;

      var style = this.selStyle,
      left = parseInt(style.left),
      top = parseInt(style.top),
      width = parseInt(style.width),
      height = parseInt(style.height),
      canvas = this.canvas,
      canvasOper = this.canvasOper,
      ctxCanvas = this.ctxCanvas,
      ctxCanvasOper = this.ctxCanvasOper;

      ctxCanvasOper.setLineWidth(3);
      ctxCanvasOper.setGlobalAlpha(1);
      ctxCanvasOper.setStrokeStyle('white');
      ctxCanvasOper.strokeRect(left, top, width, height);

      ctxCanvasOper.setFillStyle('black');
      ctxCanvasOper.setGlobalAlpha(0.5);
      ctxCanvasOper.fillRect(0, 0, this.windowWidth, top);
      ctxCanvasOper.fillRect(0, top, left, height);
      ctxCanvasOper.fillRect(0, top + height, this.windowWidth, this.windowHeight - height - top - tabHeight);
      ctxCanvasOper.fillRect(left + width, top, this.windowWidth - width - left, height);

      ctxCanvasOper.setGlobalAlpha(1);
      ctxCanvasOper.setStrokeStyle('red');
      ctxCanvasOper.moveTo(left + 15, top);
      ctxCanvasOper.lineTo(left, top);
      ctxCanvasOper.lineTo(left, top + 15);
      ctxCanvasOper.moveTo(left + width - 15, top);
      ctxCanvasOper.lineTo(left + width, top);
      ctxCanvasOper.lineTo(left + width, top + 15);
      ctxCanvasOper.moveTo(left + 15, top + height);
      ctxCanvasOper.lineTo(left, top + height);
      ctxCanvasOper.lineTo(left, top + height - 15);
      ctxCanvasOper.moveTo(left + width - 15, top + height);
      ctxCanvasOper.lineTo(left + width, top + height);
      ctxCanvasOper.lineTo(left + width, top + height - 15);
      ctxCanvasOper.stroke();

      ctxCanvasOper.draw(false, function () {
        if (ini) {
          _this5.styleDisplay = 'flex';




          _this5.styleTop = '0';

          _this5.fDrawImage(true);
        }
      });

      this.$emit("avtinit");
    },
    fDrawImage: function fDrawImage() {var ini = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tm_now = Date.now();
      if (tm_now - this.drawTm < 20) return;
      this.drawTm = tm_now;

      var ctxCanvas = this.ctxCanvas,
      imgWidth = this.useWidth * this.scaleSize,
      imgHeight = this.useHeight * this.scaleSize;





      if (this.bgImage) {




        ctxCanvas.drawImage(this.bgImage, 0, 0, this.windowWidth, this.windowHeight - tabHeight);

      } else {
        ctxCanvas.fillRect(0, 0, this.windowWidth, this.windowHeight - tabHeight);
      }

      if (this.isin) {
        var cx = this.focusX * (this.scaleSize - 1),
        cy = this.focusY * (this.scaleSize - 1);

        ctxCanvas.translate(this.centerX, this.centerY);
        ctxCanvas.rotate(this.rotateDeg * Math.PI / 180);
        ctxCanvas.drawImage(this.imgPath, this.posWidth - this.centerX - cx, this.posHeight - this.centerY - cy, imgWidth, imgHeight);

      } else {
        ctxCanvas.translate(this.posWidth + imgWidth / 2, this.posHeight + imgHeight / 2);
        ctxCanvas.rotate(this.rotateDeg * Math.PI / 180);
        ctxCanvas.drawImage(this.imgPath, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
      }

      ctxCanvas.draw(false);




    },
    fPreview: function fPreview() {var _this6 = this;
      if (this.fPreviewing) return;
      this.fPreviewing = true;
      setTimeout(function () {
        _this6.fPreviewing = false;
      }, 1000);

      var style = this.selStyle,
      x = parseInt(style.left),
      y = parseInt(style.top),
      width = parseInt(style.width),
      height = parseInt(style.height);





      uni.showLoading({
        title: '加载中...',
        mask: true });


























































      uni.canvasToTempFilePath({
        x: x,
        y: y,
        width: width,
        height: height,
        expWidth: width * this.pixelRatio,
        expHeight: height * this.pixelRatio,
        canvasId: 'avatar-canvas',
        fileType: this.fType,
        quality: this.qlty,
        success: function success(r) {
          _this6.prvImgTmp = r = r.tempFilePath;

          var ctxCanvasPrv = _this6.ctxCanvasPrv,
          prvX = _this6.windowWidth,
          prvY = parseInt(_this6.cvsStyleHeight);










          var prvWidth = parseInt(_this6.selStyle.width),
          prvHeight = parseInt(_this6.selStyle.height),
          useWidth = prvX - 40,
          useHeight = prvY - 80,
          radio = useWidth / prvWidth,
          rHeight = prvHeight * radio;
          if (rHeight < useHeight) {
            prvWidth = useWidth;
            prvHeight = rHeight;
          } else {
            radio = useHeight / prvHeight;
            prvWidth *= radio;
            prvHeight = useHeight;
          }

          // ctxCanvasPrv.setFillStyle('black');
          ctxCanvasPrv.fillRect(0, 0, prvX, prvY);
          // ctxCanvasPrv.drawImage(this.bgImage, 0, 0, prvX, prvY); 预览显示背景图
          _this6.prvX = prvX = (prvX - prvWidth) / 2 | 0;
          _this6.prvY = prvY = (prvY - prvHeight) / 2 | 0;
          _this6.prvWidth = prvWidth = prvWidth | 0;
          _this6.prvHeight = prvHeight = prvHeight | 0;
          ctxCanvasPrv.drawImage(r, prvX, prvY, prvWidth, prvHeight);
          ctxCanvasPrv.draw(false);









          _this6.showOper = false;
          _this6.prvTop = '0';



















        },
        fail: function fail() {
          uni.showToast({
            title: "error2",
            duration: 2000 });

        },
        complete: function complete() {
          uni.hideLoading();
        } },
      this);

    },
    fChooseImg: function fChooseImg() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (params) {
        var selWidth = params.selWidth,
        selHeight = params.selHeight,
        expWidth = params.expWidth,
        expHeight = params.expHeight,
        quality = params.quality,
        canRotate = params.canRotate,
        canScale = params.canScale,
        minScale = params.minScale,
        maxScale = params.maxScale,
        stretch = params.stretch,
        fileType = params.fileType,
        inner = params.inner,
        lock = params.lock;

        expWidth && (this.exportWidth = expWidth.indexOf('upx') >= 0 ? parseInt(expWidth) * this.pxRatio : parseInt(
        expWidth));
        expHeight && (this.exportHeight = expHeight.indexOf('upx') >= 0 ? parseInt(expHeight) * this.pxRatio : parseInt(
        expHeight));
        this.letRotate = canRotate === 'false' || inner === 'true' || inner === true ? 0 : 1;
        this.letScale = canScale === 'false' ? 0 : 1;
        this.qlty = parseInt(quality) || 0.9;
        this.mnScale = minScale || 0.3;
        this.mxScale = maxScale || 4;
        this.stc = stretch;
        this.isin = inner === true || inner === 'true' ? 1 : 0;
        this.fType = fileType === 'jpg' ? 'jpg' : 'png';
        this.lck = lock;
        if (this.isin) {
          this.btnWidth = '24%';
          this.btnDsp = 'none';
        } else {
          this.btnWidth = '19%';
          this.btnDsp = 'flex';
        }

        if (selWidth && selHeight) {
          selWidth = selWidth.indexOf('upx') >= 0 ? parseInt(selWidth) * this.pxRatio : parseInt(selWidth);
          selHeight = selHeight.indexOf('upx') >= 0 ? parseInt(selHeight) * this.pxRatio : parseInt(selHeight);
          this.selStyle.width = selWidth + 'px';
          this.selStyle.height = selHeight + 'px';
          this.selStyle.top = (this.windowHeight - selHeight - tabHeight | 0) / 2 + 'px';
          this.selStyle.left = (this.windowWidth - selWidth | 0) / 2 + 'px';
          this.hasSel = true;
        }
      }
      this.rtn = data;
      this.indx = index;
      this.fSelect();
    },
    fRotate: function fRotate() {
      this.rotateDeg += 90 - this.rotateDeg % 90;
      this.fDrawImage();
    },
    fStart: function fStart(e) {
      var touches = e.touches,
      touch0 = touches[0],
      touch1 = touches[1];

      this.touch0 = touch0;
      this.touch1 = touch1;

      if (touch1) {
        var x = touch1.x - touch0.x,
        y = touch1.y - touch0.y;
        this.fgDistance = Math.sqrt(x * x + y * y);
      }
    },
    fMove: function fMove(e) {
      var touches = e.touches,
      touch0 = touches[0],
      touch1 = touches[1];

      if (touch1) {
        var x = touch1.x - touch0.x,
        y = touch1.y - touch0.y,
        fgDistance = Math.sqrt(x * x + y * y),
        scaleSize = 0.005 * (fgDistance - this.fgDistance),
        beScaleSize = this.scaleSize + scaleSize;

        do {
          if (!this.letScale) break;
          if (beScaleSize < this.mnScale) break;
          if (beScaleSize > this.mxScale) break;

          var growX = this.useWidth * scaleSize / 2,
          growY = this.useHeight * scaleSize / 2;
          if (this.isin) {
            var imgWidth = this.useWidth * beScaleSize,
            imgHeight = this.useHeight * beScaleSize,
            l = this.posWidth - growX,
            t = this.posHeight - growY,
            r = l + imgWidth,
            b = t + imgHeight,
            left = parseInt(this.selStyle.left),
            top = parseInt(this.selStyle.top),
            width = parseInt(this.selStyle.width),
            height = parseInt(this.selStyle.height),
            right = left + width,
            bottom = top + height,
            cx = void 0,cy = void 0;

            if (imgWidth <= width || imgHeight <= height) break;
            this.cx = cx = this.focusX * beScaleSize - this.focusX,
            this.cy = cy = this.focusY * beScaleSize - this.focusY;
            this.posWidth -= growX;
            this.posHeight -= growY;
            if (this.posWidth - cx > left) {
              this.posWidth = left + cx;
            }
            if (this.posWidth + imgWidth - cx < right) {
              this.posWidth = right - imgWidth + cx;
            }
            if (this.posHeight - cy > top) {
              this.posHeight = top + cy;
            }
            if (this.posHeight + imgHeight - cy < bottom) {
              this.posHeight = bottom - imgHeight + cy;
            }
          } else {
            this.posWidth -= growX;
            this.posHeight -= growY;
          }

          this.scaleSize = beScaleSize;
        } while (0);
        this.fgDistance = fgDistance;
        if (touch1.x !== touch0.x && this.letRotate) {
          x = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x);
          y = (touch1.y - touch0.y) / (touch1.x - touch0.x);
          this.rotateDeg += Math.atan((y - x) / (1 + x * y)) * 180 / Math.PI;
          this.touch0 = touch0;
          this.touch1 = touch1;
        }

        this.fDrawImage();
      } else if (this.touch0) {
        var _x = touch0.x - this.touch0.x,
        _y = touch0.y - this.touch0.y,
        beX = this.posWidth + _x,
        beY = this.posHeight + _y;
        if (this.isin) {
          var _imgWidth = this.useWidth * this.scaleSize,
          _imgHeight = this.useHeight * this.scaleSize,
          _l = beX,
          _t = beY,
          _r = _l + _imgWidth,
          _b = _t + _imgHeight,
          _left = parseInt(this.selStyle.left),
          _top = parseInt(this.selStyle.top),
          _right = _left + parseInt(this.selStyle.width),
          _bottom = _top + parseInt(this.selStyle.height),
          _cx,_cy;

          this.cx = _cx = this.focusX * this.scaleSize - this.focusX;
          this.cy = _cy = this.focusY * this.scaleSize - this.focusY;

          if (!this.lckWidth && Math.abs(_x) < 100) {
            if (_left < _l - _cx) {
              this.posWidth = _left + _cx;
            } else if (_right > _r - _cx) {
              this.posWidth = _right - _imgWidth + _cx;
            } else {
              this.posWidth = beX;
              this.focusX -= _x;
            }
          }
          if (!this.lckHeight && Math.abs(_y) < 100) {
            if (_top < _t - _cy) {
              this.focusY -= _top + _cy - this.posHeight;
              this.posHeight = _top + _cy;
            } else if (_bottom > _b - _cy) {
              this.focusY -= _bottom + _cy - (this.posHeight + _imgHeight);
              this.posHeight = _bottom - _imgHeight + _cy;
            } else {
              this.posHeight = beY;
              this.focusY -= _y;
            }
          }
        } else {
          if (Math.abs(_x) < 100 && !this.lckWidth) this.posWidth = beX;
          if (Math.abs(_y) < 100 && !this.lckHeight) this.posHeight = beY;
          this.focusX -= _x;
          this.focusY -= _y;
        }

        this.touch0 = touch0;
        this.fDrawImage();
      }
    },
    fEnd: function fEnd(e) {
      var touches = e.touches,
      touch0 = touches && touches[0],
      touch1 = touches && touches[1];
      if (touch0) {
        this.touch0 = touch0;
      } else {
        this.touch0 = null;
        this.touch1 = null;
      }
    },
    fHideImg: function fHideImg() {
      this.prvImg = '';
      this.prvTop = '-10000px';
      this.showOper = true;
      this.prvImgData = null;
      this.target = null;
    },
    fClose: function fClose() {
      this.styleDisplay = 'none';
      this.styleTop = '-10000px';
      this.hasSel = false;
      this.fHideImg();
      this.noBar || uni.showTabBar();
    },
    fGetImgData: function fGetImgData() {var _this7 = this;
      return new Promise(function (resolve, reject) {
        var prvX = _this7.prvX,
        prvY = _this7.prvY,
        prvWidth = _this7.prvWidth,
        prvHeight = _this7.prvHeight;















        uni.canvasGetImageData({
          canvasId: 'prv-canvas',
          x: prvX,
          y: prvY,
          width: prvWidth,
          height: prvHeight,
          success: function success(res) {
            resolve(res.data);
          },
          fail: function fail(err) {
            reject(err);
          } },
        _this7);

      });
    },
    fColorChange: function fColorChange(e) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var tm_now, data, target, i, r, g, b, a, h, s, l, d, p, q, t, min, max, hK, tR, tG, tB, n, correctRGB, createRGB, prvX, prvY, prvWidth, prvHeight;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                tm_now = Date.now();if (!(
                tm_now - _this8.prvTm < 100)) {_context.next = 3;break;}return _context.abrupt("return");case 3:
                _this8.prvTm = tm_now;





                uni.showLoading({
                  title: '加载中...',
                  mask: true });if (



                _this8.prvImgData) {_context.next = 11;break;}_context.next = 8;return (
                  _this8.fGetImgData().catch(function () {
                    uni.showToast({
                      title: "error_read",
                      duration: 2000 });

                  }));case 8:if (_this8.prvImgData = _context.sent) {_context.next = 10;break;}return _context.abrupt("return");case 10:

                _this8.target = new Uint8ClampedArray(_this8.prvImgData.length);case 11:


                data = _this8.prvImgData,
                target = _this8.target,
                i = e.detail.value;


                if (i === 0) {
                  target = data;
                } else {
                  i = (i + 100) / 200;
                  if (i < 0.005) i = 0;
                  if (i > 0.995) i = 1;
                  for (n = data.length - 1; n >= 0; n -= 4) {
                    r = data[n - 3] / 255;
                    g = data[n - 2] / 255;
                    b = data[n - 1] / 255;
                    max = Math.max(r, g, b);
                    min = Math.min(r, g, b);
                    d = max - min;
                    if (max === min) {
                      h = 0;
                    } else if (max === r && g >= b) {
                      h = 60 * ((g - b) / d);
                    } else if (max === r && g < b) {
                      h = 60 * ((g - b) / d) + 360;
                    } else if (max === g) {
                      h = 60 * ((b - r) / d) + 120;
                    } else if (max === b) {
                      h = 60 * ((r - g) / d) + 240;
                    }
                    l = (max + min) / 2;
                    if (l === 0 || max === min) {
                      s = 0;
                    } else if (0 < l && l <= 0.5) {
                      s = d / (2 * l);
                    } else if (l > 0.5) {
                      s = d / (2 - 2 * l);
                    }
                    data[n] && (a = data[n]);

                    if (i < 0.5) {
                      s = s * i / 0.5;
                    } else if (i > 0.5) {
                      s = 2 * s + 2 * i - s * i / 0.5 - 1;
                    }

                    if (s === 0) {
                      r = g = b = Math.round(l * 255);
                    } else {
                      if (l < 0.5) {
                        q = l * (1 + s);
                      } else if (l >= 0.5) {
                        q = l + s - l * s;
                      }
                      p = 2 * l - q;
                      hK = h / 360;
                      tR = hK + 1 / 3;
                      tG = hK;
                      tB = hK - 1 / 3;
                      correctRGB = function correctRGB(t) {
                        if (t < 0) {
                          return t + 1.0;
                        }
                        if (t > 1) {
                          return t - 1.0;
                        }
                        return t;
                      };
                      createRGB = function createRGB(t) {
                        if (t < 1 / 6) {
                          return p + (q - p) * 6 * t;
                        } else if (t >= 1 / 6 && t < 1 / 2) {
                          return q;
                        } else if (t >= 1 / 2 && t < 2 / 3) {
                          return p + (q - p) * 6 * (2 / 3 - t);
                        }
                        return p;
                      };
                      r = tR = Math.round(createRGB(correctRGB(tR)) * 255);
                      g = tG = Math.round(createRGB(correctRGB(tG)) * 255);
                      b = tB = Math.round(createRGB(correctRGB(tB)) * 255);
                    }
                    a && (target[n] = a);
                    target[n - 3] = r;
                    target[n - 2] = g;
                    target[n - 1] = b;
                  }
                }

                prvX = _this8.prvX,
                prvY = _this8.prvY,
                prvWidth = _this8.prvWidth,
                prvHeight = _this8.prvHeight;





















                uni.canvasPutImageData({
                  canvasId: 'prv-canvas',
                  x: prvX,
                  y: prvY,
                  width: prvWidth,
                  height: prvHeight,
                  data: target,
                  fail: function fail() {
                    uni.showToast({
                      title: 'error_put',
                      duration: 2000 });

                  },
                  complete: function complete() {
                    uni.hideLoading();
                  } },
                _this8);case 15:case "end":return _context.stop();}}}, _callee);}))();

    },
    btop: function btop(base64) {
      this.base64 = base64;
      return new Promise(function (resolve, reject) {
        var arr = base64.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([u8arr], {
          type: mime })));

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 134:
/*!*********************************************************************************************************!*\
  !*** E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./yq-avatar.vue?vue&type=style&index=0&lang=css& */ 135);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_yq_avatar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/ruanjiankaifashixun/components/yq-avatar/yq-avatar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/yq-avatar/yq-avatar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yq-avatar/yq-avatar-create-component',
    {
        'components/yq-avatar/yq-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(126))
        })
    },
    [['components/yq-avatar/yq-avatar-create-component']]
]);