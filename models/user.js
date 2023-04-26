const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Жак-Ив Кусто",
    minlength: [2, "Минимальная длина строки - 2 символа"],
    maxlength: [30, "Максимальная длина строки - 30 символов"],
  },
  about: {
    type: String,
    required: true,
    default: "Исследователь океанов",
    minlength: [2, "Минимальная длина строки - 2 символа"],
    maxlength: [30, "Максимальная длина строки - 30 символов"],
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
