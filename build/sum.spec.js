"use strict";

var _chai = require("chai");

var _sum = _interopRequireDefault(require("./sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('True or False', function () {
  it('true is true', function () {
    (0, _chai.expect)(true).to.eql(true);
  });
  it('false is false', function () {
    (0, _chai.expect)(false).to.eql(false);
  });
});
describe('sum() function', function () {
  it('sums two integers', function () {
    (0, _chai.expect)((0, _sum["default"])(1, -3)).to.eql(-2);
  });
});