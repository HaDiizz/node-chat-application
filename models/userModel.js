const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dwiylz9ql/image/upload/v1667934940/sc-media/fst7pdgy4oucez13adob.jpg",
    },
    role: {
      type: String,
      default: "user"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);