const { Router } = require("express");
const { check } = require("express-validator");
const authRouter = Router();

const { createUser, loginUser, renewUser } = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { validateJWT } = require("../middlewares/validateJWT");

authRouter.post(
  "/new",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required and must be at least 6 characters long"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  createUser
);

authRouter.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required and must be at least 6 characters long"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  loginUser
);

authRouter.get("/renew", validateJWT, renewUser);

module.exports = authRouter;
