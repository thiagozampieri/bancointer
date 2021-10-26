"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.EmissaoBoletos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var EmissaoBoletos = /*#__PURE__*/function () {
  function EmissaoBoletos(api) {
    (0, _classCallCheck2["default"])(this, EmissaoBoletos);
    this.api = api;
    this.api = api;
  }

  (0, _createClass2["default"])(EmissaoBoletos, [{
    key: "emitir",
    value: function () {
      var _emitir = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.api.post("boletos", data);

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

      function emitir(_x) {
        return _emitir.apply(this, arguments);
      }

      return emitir;
    }()
  }]);
  return EmissaoBoletos;
}();

exports.EmissaoBoletos = EmissaoBoletos;