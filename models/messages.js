const { Schema, model } = require("mongoose");

const MenssageSchema = Schema({
  de: { type: Schema.Types.ObjectId,ref: "User", required: true },
  para: { type: Schema.Types.ObjectId,ref: "User", required: true },
  mensaje: { type: String, required: true },
},{timestamps: true});

MenssageSchema.method("toJSON", function () {
  const { __v, _id,  ...object } = this.toObject();
  return object;
});

module.exports = model("Message", MenssageSchema);
