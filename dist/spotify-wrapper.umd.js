(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpotifyWrapper"] = factory();
	else
		root["SpotifyWrapper"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TOKEN_API = exports.TOKEN_API = 'BQDqfnVlB1yxd7vt7PIOCCbp4q5P0eKwv-qut-JC-5cJt-W7VtCzAjePIP5QV4B19lEcRX7uRhStXQHsdYjYXgo8yZAOiFO_YAhxvWvVuGc6ye2zt5wxhc-U-CMc5SF5Zmj2kP8TwtpypewAaSfWxEmU2o8rP8tRWDshhOOx2TANvN2x2ez8bUWnLvPRfRU-vfUhEt3cQ2Fe134Y7Ztpr9r_EpYdcDu_Rz36WKEgB1sUIt-8QjAN4LvDGeG3qLYHGjIEeR3SIe_5P-lJlxQc';

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

var HEADERS = {
    headers: {
        'Authorization': 'Bearer ' + TOKEN_API
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJson = exports.toJson = function toJson(data) {
  return data.json();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id, _config.HEADERS).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums/?ids=' + ids, _config.HEADERS).then(_utils.toJSON);
};

var getTracks = exports.getTracks = function getTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks', _config.HEADERS).then(_utils.toJSON);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(_utils.toJSON);
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(3);

var _album = __webpack_require__(2);

module.exports = {
    search: _search.search,
    searchArtists: _search.searchArtists,
    searchAlbums: _search.searchAlbums,
    searchPlaylists: _search.searchPlaylists,
    getAlbum: _album.getAlbum,
    getAlbums: _album.getAlbums,
    getTracks: _album.getTracks
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map