const express = require('express');

const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();


planetsRouter.get('/planets', getAllPlanets, (req, res) => {


})


module.exports = planetsRouter;