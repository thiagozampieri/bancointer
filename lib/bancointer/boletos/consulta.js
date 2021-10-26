"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsultaBoletos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ConsultaBoletos = /*#__PURE__*/function () {
  function ConsultaBoletos(api) {
    (0, _classCallCheck2["default"])(this, ConsultaBoletos);
    this.api = api;
    this.api = api;
  }

  (0, _createClass2["default"])(ConsultaBoletos, [{
    key: "consultar",
    value: function () {
      var _consultar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(nossoNumero) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.get("boletos/".concat(nossoNumero));

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

      function consultar(_x) {
        return _consultar.apply(this, arguments);
      }

      return consultar;
    }()
  }]);
  return ConsultaBoletos;
}();

exports.ConsultaBoletos = ConsultaBoletos;