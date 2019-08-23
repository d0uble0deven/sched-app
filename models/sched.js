var userSchema = new mongoose.Schema ({
    date: Date,
    time: Number,
    details: String,
    location: String,
    googleId: String
})