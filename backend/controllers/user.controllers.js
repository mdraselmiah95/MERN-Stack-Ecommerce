const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/user.model");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatar/1",
      url: "https://tomrider.com",
    },
  });
});
