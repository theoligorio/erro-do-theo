const servicesRoutes = require('express').Router();
const services = require('../controllers/services.controller');
const { validaToken } = require('../middlewares/auth');
const upload = require("../middlewares/uploadImgServices");

servicesRoutes.get("/all", validaToken, services.findAll);

servicesRoutes.get("/show/:id", validaToken, services.findOne);

servicesRoutes.post("/create", services.create);

servicesRoutes.put("/update", validaToken, services.update);

servicesRoutes.delete("/delete/:id", validaToken, services.delete);

servicesRoutes.put("/edit-services-image", validaToken, upload.single('servicesImages'), services.editServicesImage);

module.exports = servicesRoutes;