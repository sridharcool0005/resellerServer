// The User model.
'use strict'; 

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
    auth_key:{
        type: Sequelize.STRING,
        allowNull: false
    },
    partner_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dept:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email_id: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: config.userRoles.user
    },
    mobile_number:{
        type: Sequelize.STRING,
        allowNull: true
    },
    user_name:{
        type: Sequelize.STRING,
        allowNull: true
    },
   

};

// 2: The model options.
var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    }
};


// 3: Define the User model.
var UserModel = db.define('portal_adminusers', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if(error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password) {
            user.password = password;
        });
    }
}

module.exports = UserModel;