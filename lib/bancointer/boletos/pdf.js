"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfBoletos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PdfBoletos = /*#__PURE__*/function () {
  function PdfBoletos(api) {
    (0, _classCallCheck2["default"])(this, PdfBoletos);
    this.api = api;
    this.api = api;
  }

  (0, _createClass2["default"])(PdfBoletos, [{
    key: "download",
    value: function download(nossoNumero, path) {
      var _this = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
          var response, base64;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _this.api.get("boletos/".concat(nossoNumero, "/pdf"));

                case 3:
                  response = _context.sent;
                  base64 = response.data; // if (err) reject(err)

                  resolve(base64);
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  reject(_context.t0);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);
  return PdfBoletos;
}();

exports.PdfBoletos = PdfBoletos;