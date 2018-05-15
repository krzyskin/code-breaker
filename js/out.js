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
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n$(function () {\n\n    $('.timer-btn').on('click', function () {\n        this.parentElement.nextElementSibling.style.display = 'block';\n    });\n    var valMin = 0;\n    $('.up-min').on('click', function () {\n        valMin = valMin + 1;\n        $('.min-value').text(valMin);\n    });\n\n    $('.down-min').on('click', function () {\n        if (valMin > 0) {\n            valMin = valMin - 1;\n            $('.min-value').text(valMin);\n        } else {\n            $('.min-value').text(valMin);\n        }\n    });\n    var valSec = 0;\n    $('.up-sec').on('click', function () {\n        valSec = valSec + 5;\n\n        if (valSec === 60) {\n            valSec = 0;\n            valMin = valMin + 1;\n        }\n        $('.min-value').text(valMin);\n        $('.sec-value').text(valSec);\n    });\n\n    $('.down-sec').on('click', function () {\n\n        if (valSec === 0 && valMin > 0) {\n            valSec = 55;\n            valMin = valMin - 1;\n            $('.min-value').text(valMin);\n            $('.sec-value').text(valSec);\n        } else if (valSec === 0 && valMin === 0) {\n            valSec = 0;\n            $('.sec-value').text(valSec);\n        } else {\n            valSec = valSec - 5;\n            $('.sec-value').text(valSec);\n        }\n    });\n\n    var game = function game() {\n        $('.check').on('click', function () {\n\n            var pass = $('#password').val().toUpperCase();\n            $('#inf').text(\"ENTER A WORD CONSISTING OF \" + pass.length + \" LETTERS\");\n            var newValue = $('#answer').val().toUpperCase();\n\n            if (newValue.length > pass.length) {\n                var tooLong = function () {\n                    $('#inf').text(\"TO MANY LETTERS! ENTER A WORD CONSISTING OF  \" + pass.length + \" LETTERS\");\n                    $('#answer').val('');\n                }();\n            } else if (newValue.length < pass.length) {\n                var tooShort = function () {\n                    $('#inf').text(\"NOT ENOUGH LETTERS! ENTER A WORD CONSISTING OF  \" + pass.length + \" LETTERS\");\n                    $('#answer').val('');\n                }();\n            } else {\n                var countInArray = function countInArray(array, value) {\n                    var valNum = array.reduce(function (n, x) {\n                        return n + (x === value);\n                    }, 0);\n                    return valNum;\n                };\n\n                var wordsList = $('.answers');\n                var green = 0;\n                var white = 0;\n\n                var arr = [];\n                for (var _i = 0; _i < pass.length; _i++) {\n                    for (var j = 0; j < newValue.length; j++) {\n                        if (pass[_i] == newValue[j]) {\n                            arr.push(pass[_i]);\n                            if (_i == j) {\n                                green = green + 1;\n                            }\n                        }\n                    }\n                }\n                var uniq = [].concat(_toConsumableArray(new Set(arr)));\n\n                for (var _i2 = 0; _i2 < uniq.length; _i2++) {\n                    var passUniq = countInArray([].concat(_toConsumableArray(pass)), uniq[_i2]);\n                    var newValueUniq = countInArray([].concat(_toConsumableArray(newValue)), uniq[_i2]);\n                    var uniqNumber = Math.min(passUniq, newValueUniq);\n\n                    white = white + uniqNumber;\n                }\n                white = white - green;\n\n                var newWord = document.createElement(\"li\");\n                var array = [];\n                var black = pass.length - (green + white);\n                if (black == pass.length) {\n                    newWord.innerHTML = '<div class=\"word\">' + newValue.toUpperCase() + '</div>\\n                                    <div class=\"dots\"><div class=\"black\">-------------------</div></div>';\n                } else {\n                    for (var i = 0; i < green; i++) {\n                        var q = '<div class=\"green\"></div>';\n                        array.push(q);\n                    }\n                    for (var i = 0; i < white; i++) {\n                        var _q = '<div class=\"white\"></div>';\n                        array.push(_q);\n                    }\n\n                    var arrayNew = array.join(\"\");\n                    newWord.innerHTML = '<div class=\"word\">' + newValue.toUpperCase() + '</div>\\n                                                <div class=\"dots\">' + arrayNew + '</div>';\n                }\n                wordsList.prepend(newWord);\n                var attempt = $('.answers').find('li');\n\n                if (green == pass.length) {\n                    this.nextElementSibling.style.display = \"flex\";\n                    console.log(this.nextElementSibling.firstElementChild);\n\n                    this.nextElementSibling.firstElementChild.innerHTML = 'CONGRATULATIONS!!!<br> YOU GUESSED THE PASSWORD<br> IN ' + attempt.length + ' ATTEMPT!!!';\n                }\n\n                $('#answer').val('');\n            }\n        });\n    };\n    var timeGame = function timeGame() {\n        var count = valMin * 60 + valSec;\n        var counter = setInterval(timer, 1000);\n\n        function timer() {\n            count = count - 1;\n            if (count === 0) {\n                clearInterval(counter);\n                document.querySelector('.win').style.display = \"flex\";\n                document.querySelector('.win').firstElementChild.innerHTML = 'TIME IS UP!!! <br> TRY ONCE AGAIN!';\n            } else if (count > 0) {\n                game();\n            }\n\n            var seconds = count % 60;\n            var minutes = Math.floor(count / 60);\n\n            minutes %= 60;\n\n            var adsec = (\"0\" + seconds).slice(-2);\n            var admin = (\"0\" + minutes).slice(-2);\n\n            $(\".inner-time\").text(admin + \" : \" + adsec);\n        }\n    };\n\n    $('.start').on('click', function () {\n\n        var pass = $('#password').val().toUpperCase();\n\n        if (pass.length !== 0) {\n            if (valMin == 0 && valSec == 0) {\n                this.parentElement.parentElement.nextElementSibling.children[2].style.display = \"none\";\n            } else {\n                this.parentElement.parentElement.nextElementSibling.children[2].style.display = \"block\";\n            }\n\n            $('#inf').text(\"WPISZ WYRAZ Z \" + pass.length + \" LITER\");\n            this.parentElement.style.display = \"none\";\n            this.parentElement.parentElement.nextElementSibling.style.display = \"flex\";\n            this.parentElement.nextElementSibling.style.display = \"block\";\n\n            var count = valMin * 60 + valSec;\n            if (count > 0) {\n                timeGame();\n            } else {\n                game();\n            }\n            ;\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });