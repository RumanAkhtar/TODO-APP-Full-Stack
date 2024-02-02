import mongoose from "mongoose"

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://cseruman:YPInArgw9TxwcGmM@cluster0.gojqewc.mongodb.net/TODO-APP')
  console.log("DB Connected");
}