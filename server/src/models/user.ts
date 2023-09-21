import { Document, Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  user_name: string;
  email: string;
  password: string;
  role: string;

  comparePassword(candidatePassword: string): Promise<boolean>;
}

interface IUserModel extends IUser {
}

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  if (user.isModified("password")) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      //hash password
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
});

userSchema.methods.comparePassword = async function(
  candidatePassword: string,
) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const UserModel: Model<IUserModel> = model<IUserModel, Model<IUserModel>>("User", userSchema);

export default UserModel;
