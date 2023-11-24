const { Router } = require("express");
const router = Router();
const itemCtrl = require("../controllers/item.controller");

router.get("/items", itemCtrl.getItem);
router.get("/items2", itemCtrl.getItem2);


module.exports = router;
