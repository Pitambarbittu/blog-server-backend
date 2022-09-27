const express = require('express')
const bollyController = require('../details/data')

const bollyRouter = express.Router()
bollyRouter.route("/bolly")
.get(bollyController.apiController)
module.exports = bollyRouter