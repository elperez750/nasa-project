const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();


planetsRouter.get('/', httpGetAllPlanets, (req, res) => {


})


module.exports = planetsRouter;