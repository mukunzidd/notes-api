"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/status', function (req, res) {
  res.status(200).send({
    status: 200,
    message: 'The server is up and running!'
  });
});
app.listen(process.env.PORT);