"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaixaBoleto = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BaixaBoleto = /*#__PURE__*/function () {
  function BaixaBoleto(api) {
    (0, _classCallCheck2["default"])(this, BaixaBoleto);
    this.api = api;
    this.api = api;
  }

  (0, _createClass2["default"])(BaixaBoleto, [{
    key: "baixar",
    value: function () {
      var _baixar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.post("boletos/".concat(data.nossoNumero, "/baixa"), {
                  codigoBaixa: data.codigoBaixa
                });

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function baixar(_x) {
        return _baixar.apply(this, arguments);
      }

      return baixar;
    }()
  }]);
  return BaixaBoleto;
}();

exports.BaixaBoleto = BaixaBoleto;