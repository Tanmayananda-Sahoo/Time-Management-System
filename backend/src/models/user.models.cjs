const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [4,"Name should be minimum of 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid mail address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password should be of minimum 4 characters."],
        select: false
    },
    role: {
        type: String,
        enum: ['Admin', 'Teacher', 'Student'],
        default: 'Student'
    },
    department: {
        type: String,
        required: [true, 'You are required to enter your department']
    }
},{timestamps: true})


userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = async function() {
    const token = jwt.sign(
        {
            userId: this._id
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '3d'
        }
    )
    return token;
} 

const User = new mongoose.model('User', userSchema);

module.exports = User;