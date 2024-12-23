"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports.requester = void 0;

var _Constants = require("@utils/constants/Constants");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var requester = _axios["default"].create({
    baseURL: _Constants.BASE_URL,
});

exports.requester = requester;
