import mongoose from "mongoose";

interface iAuth {
  name?: string;
  email?: string;
}

interface iAuthServce extends iAuth, mongoose.Document {}

const authModel = new mongoose.Schema<iAuth>(
  {
    name: {
      type: String,
      required:true
    },
    email: {
      type: String,
      unquie: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      toLowerCase: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iAuthServce>("auths", authModel);
