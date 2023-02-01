const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "The user is already registered",
      });
    }

    user = new User(req.body);
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    //* Generate JWT
    const token = await generateJWT(user.id, user.name);

    res.status(201).json({ ok: true, uid: user.id, name: user.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User does not exist with that email",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }

    const token = await generateJWT(user.id, user.name);

    res.json({ ok: true, uid: user.id, name: user.name, token });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};

const renewUser = async (req = request, res = response) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({ ok: true, uid, name, token });
};

module.exports = {
  createUser,
  loginUser,
  renewUser,
};
