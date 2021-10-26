"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ResponseError = /*#__PURE__*/function () {
  function ResponseError(message, status) {
    (0, _classCallCheck2["default"])(this, ResponseError);
    (0, _defineProperty2["default"])(this, "error", void 0);
    (0, _defineProperty2["default"])(this, "message", void 0);
    (0, _defineProperty2["default"])(this, "status", void 0);
    this.error = new Error(message);
    this.message = message;
    this.status = status;
  }

  (0, _createClass2["default"])(ResponseError, [{
    key: "isBancoInterOfflineError",
    value: function isBancoInterOfflineError() {
      if (this.status === 401 && !this.message) {
        return true;
      }

      if (this.status === 403 && this.message === 'request denied') {
        return true;
      }

      return false;
    }
  }]);
  return ResponseError;
}();

exports.ResponseError = ResponseError;