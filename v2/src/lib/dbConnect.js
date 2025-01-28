import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const dbConnect = async() => await mongoose.connect(MONGODB_URI)

export default dbConnect