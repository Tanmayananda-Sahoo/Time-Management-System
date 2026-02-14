const User = require('../models/user.models.cjs');
const jwt = require('jsonwebtoken');

/**
 * Register Controller.
 *
 * Will be used while registering the user.
 */

const register = async(req,res) => {
    //Taking the input
    const { name, email, password, confirmPassword, role, department } = req.body;

    //Validation
    if([name, password, email, confirmPassword, role, department].some((field) => field.trim() === '')) {
        return res.status(401)
        .json({
            message: 'Fields cannot be empty. Every field is compulsory'
        })
    }

    if(password != confirmPassword) {
        return res.status(401)
        .json({
            message: 'Password and Confirm Password must match'
        })
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.status(401)
        .json({
            message: "Please enter a valid email address"
        })
    }

    if(role == 'admin') {
        return res.status(401)
        .json({
            message: 'You cannot be admin sir.'
        })
    }

    //Checking if the user is already present.

    const ifUserExist = await User.findOne({email});
    if(ifUserExist) {
        return res.status(401)
        .json({
            message: "User already exists. Please Login."
        })
    }

    //Creating a user.

    const createdUser = await User.create({
        name,
        email,
        password,
        role,
        department
    })
    
    const { token } = await createdUser.generateToken();
    if(!token) {
        return res.status(401)
        .json({
            message: "Token could not be generated."
        })
    }

    return res.status(200)
    .cookie('Token',token)
    .json({
        message: 'User created successfully',
        user: createdUser
    })
}

/**
 * 
 * Login Controller.
 * 
 * Will be used while logging in the user.
 */
const login = async(req,res) => {

}

module.exports = {
    register,
    login
}