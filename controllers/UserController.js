const UserModel = require("../models/User");

const createUser = async (req, res) => {
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.status(201).send({
      status: true,
      data: user,
      message: "User created successfully!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginUser = async (req, res) => {
  const { idNumber } = req.body;

  try {
    const user = await UserModel.findOne({ idNumber });

    if (user) {
      res.status(200).send({ success: true, message: "Login successful" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  loginUser,
};
