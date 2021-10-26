"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.BancoInterAPI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _axios = _interopRequireDefault(require("axios"));

var _https = _interopRequireDefault(require("https"));

var _responseError = require("./response-error");

var BancoInterAPI = /*#__PURE__*/function () {
  function BancoInterAPI(conta, cert, key, pass) {
    (0, _classCallCheck2["default"])(this, BancoInterAPI);
    this.conta = conta;
    this.cert = cert;
    this.key = key;
    this.pass = pass;
    (0, _defineProperty2["default"])(this, "httpsAgent", void 0);
    (0, _defineProperty2["default"])(this, "baseUrl", void 0);
    this.baseUrl = 'https://apis.bancointer.com.br/openbanking/v1/certificado';
    this.httpsAgent = new _https["default"].Agent({
      rejectUnauthorized: false,
      cert: cert,
      key: key,
      passphrase: pass
    });
  }

  (0, _createClass2["default"])(BancoInterAPI, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, queryParams) {
        var _context;

        var response;
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _axios["default"].get((0, _concat["default"])(_context = "".concat(this.baseUrl, "/")).call(_context, path), (0, _assign["default"])(this.config(), {
                  params: queryParams
                }));

              case 2:
                response = _context2.sent;

                if (!(response.status !== 200)) {
                  _context2.next = 5;
                  break;
                }

                throw new _responseError.ResponseError(response.data.message, response.status);

              case 5:
                return _context2.abrupt("return", response);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(path, data) {
        var _context3;

        var response;
        return _regenerator["default"].wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios["default"].post((0, _concat["default"])(_context3 = "".concat(this.baseUrl, "/")).call(_context3, path), data, this.config());

              case 2:
                response = _context4.sent;

                if (!(response.status !== 200)) {
                  _context4.next = 5;
                  break;
                }

                throw new _responseError.ResponseError(response.data.message, response.status);

              case 5:
                return _context4.abrupt("return", response);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function post(_x3, _x4) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "config",
    value: function config() {
      return {
        httpsAgent: this.httpsAgent,
        headers: this.headers(),
        validateStatus: function validateStatus(status) {
          return true;
        }
      };
    }
  }, {
    key: "headers",
    value: function headers() {
      return {
        'x-inter-conta-corrente': this.conta,
        'content-type': 'application/json'
      };
    }
  }]);
  return BancoInterAPI;
}();

exports.BancoInterAPI = BancoInterAPI;