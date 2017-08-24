/*!
 * ChoosyGallery v0.1.1
 * 
 * MIT License
 * 
 * Copyright (c) 2017 Jake Low
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["choosyGallery"] = factory();
	else
		root["choosyGallery"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = jQuery;

function desiredHeight(element) {
  var desired = $(element).data('desired-height');

  if (!isNaN(desired)) {
    return desired;
  } else {
    return 300;
  }
}

var Row = function () {
  function Row(elements, width) {
    _classCallCheck(this, Row);

    this.elements = elements;
    this.width = width;

    //this.freeze();
  }

  _createClass(Row, [{
    key: 'aspects',
    value: function aspects() {
      return this.elements.map(function (idx, e) {
        return $(e).width() / $(e).height();
      }).get();
    }
  }, {
    key: 'height',
    value: function height() {
      return this.width / this.aspects().reduce(function (a, b) {
        return a + b;
      });
    }
  }, {
    key: 'widths',
    value: function widths() {
      var _this = this;

      return this.aspects().map(function (a) {
        return a * _this.height() / _this.width * 100 + '%';
      });
    }
  }]);

  return Row;
}();

var Partition = function () {
  function Partition() {
    _classCallCheck(this, Partition);

    for (var _len = arguments.length, rows = Array(_len), _key = 0; _key < _len; _key++) {
      rows[_key] = arguments[_key];
    }

    this.rows = rows;
  }

  _createClass(Partition, [{
    key: 'concat',
    value: function concat(other) {
      return new (Function.prototype.bind.apply(Partition, [null].concat(_toConsumableArray(this.rows.concat(other.rows)))))();
    }
  }, {
    key: 'errors',
    value: function errors() {
      return this.rows.map(function (row) {
        var rowError = row.elements.map(function (idx, e) {
          return desiredHeight(e) - row.height();
        }).get();
        return rowError;
      }).reduce(function (a, b) {
        return a.concat(b);
      });
    }
  }, {
    key: 'score',
    value: function score() {
      // lower is better
      return this.errors().map(function (e) {
        return Math.pow(e, 2);
      }).reduce(function (a, b) {
        return a + b;
      });
    }
  }]);

  return Partition;
}();

var Partitioner = function Partitioner(gallery) {
  _classCallCheck(this, Partitioner);

  this.targetWidth = gallery.selector.width();
  this.cache = {};
};

var OptimalPartitioner = function (_Partitioner) {
  _inherits(OptimalPartitioner, _Partitioner);

  function OptimalPartitioner() {
    _classCallCheck(this, OptimalPartitioner);

    return _possibleConstructorReturn(this, (OptimalPartitioner.__proto__ || Object.getPrototypeOf(OptimalPartitioner)).apply(this, arguments));
  }

  _createClass(OptimalPartitioner, [{
    key: 'solve',
    value: function solve(elements) {
      var signature = elements.map(function (idx, e) {
        return e.outerHTML;
      }).get();

      if (!this.cache[signature]) {
        if (elements.length == 1) {
          // base case: only one element
          var element = elements.first();
          this.cache[signature] = new Partition(new Row(element, this.targetWidth));
        } else {

          var best = new Partition(new Row(elements, this.targetWidth));

          for (var i = 1; i < elements.length; ++i) {

            var left = this.solve(elements.slice(0, i));
            var right = this.solve(elements.slice(i));

            var candidate = left.concat(right);

            if (candidate.score() < best.score()) {
              best = candidate;
            }
          }

          this.cache[signature] = best;
        }
      }

      return this.cache[signature];
    }
  }]);

  return OptimalPartitioner;
}(Partitioner);

var PrettyGoodPartitioner = function (_Partitioner2) {
  _inherits(PrettyGoodPartitioner, _Partitioner2);

  function PrettyGoodPartitioner() {
    _classCallCheck(this, PrettyGoodPartitioner);

    return _possibleConstructorReturn(this, (PrettyGoodPartitioner.__proto__ || Object.getPrototypeOf(PrettyGoodPartitioner)).apply(this, arguments));
  }

  _createClass(PrettyGoodPartitioner, [{
    key: 'solve',
    value: function solve(elements) {
      var signature = elements.map(function (idx, e) {
        return e.outerHTML;
      }).get();

      if (!this.cache[signature]) {
        if (elements.length == 1) {
          // base case: only one element
          var element = elements.first();
          this.cache[signature] = new Partition(new Row(element, this.targetWidth));
        } else if (elements.length < 8) {

          var best = new Partition(new Row(elements, this.targetWidth));

          for (var i = 1; i < elements.length; ++i) {

            var left = this.solve(elements.slice(0, i));
            var right = this.solve(elements.slice(i));

            var candidate = left.concat(right);

            if (candidate.score() < best.score()) {
              best = candidate;
            }
          }

          this.cache[signature] = best;
        } else {
          var half = Math.floor(elements.length / 2);

          var _left = this.solve(elements.slice(0, half));
          var _right = this.solve(elements.slice(half));

          this.cache[signature] = _left.concat(_right);
        }
      }

      return this.cache[signature];
    }
  }]);

  return PrettyGoodPartitioner;
}(Partitioner);

var Gallery = function () {
  function Gallery(element) {
    var _this4 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Gallery);

    this.options = Object.assign({
      renderFrequency: 50, // re-render every 10 pixels
      debug: false
    }, options);

    this.selector = $(element);

    if (this.options.debug) {
      $(element).children().append("<div class='debug'>PHOOEY</div>");
      $(element).find('.debug').css('font-size', '20px').css('position', 'absolute').css('top', '60%').css('left', '50%').css('transform', 'translateX(-50%)');
    }

    $(document).ready(function () {
      // as soon as the DOM is ready, hide the gallery. this prevents images
      // from showing on the screen before we've had time to set their sizes
      $(element).after("<div class='loading' style='display:block;'></div>");
      _this4.unmount();

      setTimeout(function () {
        // in case onload never fires, set a timer to mount the component.
        // FIXME this is a hack; ideally we'd detect whether images were loaded
        // some other way.
        _this4.render();
        _this4.mount();
      }, 2000);
    });

    $(window).on('load', function () {
      // once the window (including all resources) has loaded, we'll be able
      // to query the dimensions of each image, so we can begin rendering.
      _this4.render();
      // once the render is complete, unhide the gallery.
      _this4.mount();
    });

    $(window).on('resize', function () {
      // when the window is resized, check if the current gallery size differs
      // from the size at last render time by at least the configured render
      // frequency.
      if (Math.abs(_this4.selector.width() - _this4.lastRenderWidth) > _this4.options.renderFrequency) {
        // if it does, re-render the gallery.
        _this4.render();
      }
    });
  }

  _createClass(Gallery, [{
    key: 'unmount',
    value: function unmount() {
      // make the gallery invisible, but keep it in the document flow so its
      // width doesn't change.
      this.selector.css('visibility', 'hidden');
      this.selector.css('height', 0);
      console.log('unmount');
      $('.loading').css('display', 'block');
    }
  }, {
    key: 'mount',
    value: function mount() {
      // make the gallery visible again
      this.selector.css('visibility', 'visible');
      this.selector.css('height', 'auto');
      console.log('mount');
      $('.loading').css('display', 'none');
    }
  }, {
    key: 'render',
    value: function render() {
      // get the width of the container; this works even when gallery is
      // unmounted because we don't remove it from the document flow
      var targetWidth = this.selector.width();

      // fetch the items from the gallery
      var elements = this.selector.children();

      if (elements.length == 0) {
        // if there are no items in the gallery, no need to render
        return;
      }

      var partitioner = new PrettyGoodPartitioner(this);
      var solution = partitioner.solve(elements);

      var gallery = this;

      var widths = solution.rows.map(function (row) {
        return row.widths();
      }).reduce(function (a, b) {
        return a.concat(b);
      });
      var errors = solution.errors();

      elements.each(function (index) {
        // and apply that partition's dictated percent-widths to each element
        $(this).width(widths[index]);
        $(this).height('auto');

        if (gallery.options.debug) {
          // add title text to each item in the gallery indicating whether it
          // wants to be bigger or smaller than it ended up, and by how much.
          var err = Math.round(errors[index]);

          if (err > 20) {
            $(this).attr('title', 'wants to be ' + err + ' px bigger');
            $(this).find('.debug').text('+' + err).css('color', 'green').css('font-size', 12 + err / 6 + 'px');
          } else if (err < -20) {
            $(this).attr('title', 'wants to be ' + Math.abs(err) + ' px smaller');
            $(this).find('.debug').text(err).css('color', 'red').css('font-size', 12 + Math.abs(err) / 6 + 'px');
          } else {
            $(this).attr('title', 'wow, just about the right size! (' + err + ')');

            $(this).find('.debug').text('--');
          }
        }
      });

      this.lastRenderWidth = targetWidth;
    }
  }]);

  return Gallery;
}();

if ((typeof jQuery === 'undefined' ? 'undefined' : _typeof(jQuery)) !== undefined) {
  jQuery.fn.choosyGallery = function (options) {
    return this.each(function () {
      // $(selector).data('gallery') can be used to access the Gallery instance,
      // which may be useful e.g. for forcing it to render() after modification.
      $(this).data('gallery', new Gallery(this, options));
    });
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=choosy-gallery.min.js.map