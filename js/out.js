/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n$(function () {\n\n    $('.start').on('click', function () {\n\n        this.parentElement.style.visibility = \"hidden\";\n        this.parentElement.nextElementSibling.style.visibility = 'visible';\n\n        var header = function () {\n            var pass = $('#password').val();\n            $('#inf').text(\"WPISZ WYRAZ Z \" + pass.length + \" LITER\");\n        }();\n    });\n\n    $('.check').on('click', function () {\n        var pass = $('#password').val();\n        var newValue = $('#answer').val();\n\n        if (newValue.length > pass.length) {\n            var tooLong = function () {\n                $('#inf').text(\"ZBYT DUŻO LITER! PODAJ WYRAZ Z \" + pass.length + \" LITER\");\n                $('#answer').val('');\n            }();\n        } else if (newValue.length < pass.length) {\n            var tooShort = function () {\n                $('#inf').text(\"ZBYT MAŁO LITER! PODAJ WYRAZ Z \" + pass.length + \" LITER\");\n                $('#answer').val('');\n            }();\n        } else {\n            var countInArray = function countInArray(pass, value) {\n                var ok = [].concat(_toConsumableArray(pass)).reduce(function (n, x) {\n                    return n + (x === value);\n                }, 0);\n                if (ok > 0) {\n                    counter = counter + ok;\n                }\n                white = counter - red;\n            };\n\n            var wordsList = $('.answers');\n            var red = 0;\n            var white = 0;\n            for (var _i = 0; _i < pass.length; _i++) {\n                if (pass.indexOf(newValue[_i]) > -1) {\n                    if (pass[_i] == newValue[_i]) {\n                        red = red + 1;\n                    }\n                }\n            }\n            var uniqueLetters = [];\n            $.each([].concat(_toConsumableArray(newValue)), function (i, el) {\n                if ($.inArray(el, uniqueLetters) === -1) uniqueLetters.push(el);\n                return uniqueLetters;\n            });\n            var counter = 0;\n\n            for (var i = 0; i < uniqueLetters.length; i++) {\n                countInArray(pass, uniqueLetters[i]);\n            }\n\n            var newWord = document.createElement(\"li\");\n            var array = [];\n            var black = pass.length - (red + white);\n            if (black == pass.length) {\n                newWord.innerHTML = '<p class=\"word\">' + newValue.toUpperCase() + '</p>\\n                                <div class=\"dots\"><div class=\"black\">-------------------</div></div>';\n            } else {\n                for (var i = 0; i < red; i++) {\n                    var q = '<div class=\"green\"></div>';\n                    array.push(q);\n                }\n                for (var i = 0; i < white; i++) {\n                    var _q = '<div class=\"white\"></div>';\n                    array.push(_q);\n                }\n\n                var arrayNew = array.join(\"\");\n                newWord.innerHTML = '<p class=\"word\">' + newValue.toUpperCase() + '</p>\\n                                <div class=\"dots\">' + arrayNew + '</div>';\n            }\n            wordsList.prepend(newWord);\n\n            $('#answer').val('');\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });