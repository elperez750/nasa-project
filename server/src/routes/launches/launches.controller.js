const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function HttpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function HttpAddNewLaunch(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch)
    return res.status(201).json(launch);

}


module.exports = { httpGetAllLaunches, HttpAddNewLaunch };