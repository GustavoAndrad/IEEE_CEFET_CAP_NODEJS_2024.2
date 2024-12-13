const Router = require("express").Router
const router = Router();
const userController = require("./controller/userController")
const auth = require("./middleware/auth")

router.get("/user", auth, userController.readUserById)
router.get("/user", userController.readUser)
router.post("/user", userController.createUser)
router.patch("/user/:id", userController.updateUser)
router.delete("/user/:id", userController.deleteUser)

router.post("/login", userController.login);

router.get("/", (req, res)=>{
    res.send("Funciona!!");
})

module.exports = router;