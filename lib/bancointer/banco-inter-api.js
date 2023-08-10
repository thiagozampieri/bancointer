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
var _querystring = _interopRequireDefault(require("querystring"));
var _https = _interopRequireDefault(require("https"));
var _responseError = require("./response-error");
var BancoInterAPI = /*#__PURE__*/function () {
  function BancoInterAPI(conta, cert, key, ca, clientId, clientSecret) {
    (0, _classCallCheck2["default"])(this, BancoInterAPI);
    this.conta = conta;
    this.cert = cert;
    this.key = key;
    this.ca = ca;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    (0, _defineProperty2["default"])(this, "httpsAgent", void 0);
    (0, _defineProperty2["default"])(this, "baseUrl", void 0);
    (0, _defineProperty2["default"])(this, "accessToken", '');
    (0, _defineProperty2["default"])(this, "credentials", {});
    this.baseUrl = 'https://cdpj.partners.bancointer.com.br';
    this.credentials.clientId = clientId;
    this.credentials.clientSecret = clientSecret;
    this.httpsAgent = new _https["default"].Agent({
      rejectUnauthorized: false,
      cert: cert,
      key: key,
      ca: ca
    });
  }
  (0, _createClass2["default"])(BancoInterAPI, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, queryParams) {
        var _context;
        var response;
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
              throw new _responseError.ResponseError(response.data.detail, response.data.violacoes, response.status);
            case 5:
              return _context2.abrupt("return", response);
            case 6:
            case "end":
              return _context2.stop();
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
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _axios["default"].post((0, _concat["default"])(_context3 = "".concat(this.baseUrl, "/")).call(_context3, path), data, this.config());
            case 2:
              response = _context4.sent;
              if (!(response.status !== 200 && response.status !== 201 && response.status !== 204)) {
                _context4.next = 5;
                break;
              }
              throw new _responseError.ResponseError(response.data.detail, response.data.violacoes, response.status);
            case 5:
              return _context4.abrupt("return", response);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee2, this);
      }));
      function post(_x3, _x4) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(path, data) {
        var _context5;
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _axios["default"].put((0, _concat["default"])(_context5 = "".concat(this.baseUrl, "/")).call(_context5, path), data, this.config());
            case 2:
              response = _context6.sent;
              if (!(response.status !== 200 && response.status !== 201 && response.status !== 204)) {
                _context6.next = 5;
                break;
              }
              throw new _responseError.ResponseError(response.data.detail, response.data.violacoes, response.status);
            case 5:
              return _context6.abrupt("return", response);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee3, this);
      }));
      function put(_x5, _x6) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(path, data) {
        var _context7;
        var response;
        return _regenerator["default"].wrap(function _callee4$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _axios["default"].patch((0, _concat["default"])(_context7 = "".concat(this.baseUrl, "/")).call(_context7, path), data, this.config());
            case 2:
              response = _context8.sent;
              if (!(response.status !== 200 && response.status !== 201 && response.status !== 204)) {
                _context8.next = 5;
                break;
              }
              throw new _responseError.ResponseError(response.data.detail, response.data.violacoes, response.status);
            case 5:
              return _context8.abrupt("return", response);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee4, this);
      }));
      function patch(_x7, _x8) {
        return _patch.apply(this, arguments);
      }
      return patch;
    }()
  }, {
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _context9;
        var path, data, response, access_token;
        return _regenerator["default"].wrap(function _callee5$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              path = 'oauth/v2/token';
              data = _querystring["default"].stringify({
                client_id: this.credentials.clientId,
                client_secret: this.credentials.clientSecret,
                grant_type: 'client_credentials',
                scope: 'extrato.read boleto-cobranca.read boleto-cobranca.write pagamento-boleto.write pagamento-boleto.read pagamento-darf.write payloadlocation.write payloadlocation.read cobv.write cobv.read cob.write cob.read pix.write pix.read webhook.read webhook.write payloadlocation.write payloadlocation.read pagamento-pix.write pagamento-pix.read webhook-banking.write webhook-banking.read'
              });
              _context10.next = 4;
              return _axios["default"].post((0, _concat["default"])(_context9 = "".concat(this.baseUrl, "/")).call(_context9, path), data, {
                httpsAgent: this.httpsAgent,
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                validateStatus: function validateStatus(status) {
                  return true;
                }
              });
            case 4:
              response = _context10.sent;
              if (!(response.status !== 200)) {
                _context10.next = 7;
                break;
              }
              throw new _responseError.ResponseError(response.data.error_title, response.data, response.status);
            case 7:
              access_token = response.data.access_token;
              this.accessToken = access_token;
              return _context10.abrupt("return", access_token);
            case 10:
            case "end":
              return _context10.stop();
          }
        }, _callee5, this);
      }));
      function connect() {
        return _connect.apply(this, arguments);
      }
      return connect;
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
        'content-type': 'application/json',
        Authorization: "Bearer ".concat(this.accessToken),
        'x-conta-corrente': this.conta
      };
    }
  }]);
  return BancoInterAPI;
}();
exports.BancoInterAPI = BancoInterAPI;