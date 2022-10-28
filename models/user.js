const { Model, DataTypes } = require("sequelize")

const {Model, DataTypes} = require('sequelize');
const { INITIALLY_DEFERRED } = require("sequelize/types/deferrable");
const sequelize = require('../config/connection');

class User extends Model{
    checkPassword(loginPassword){
        return bcrypt.compareSync(loginPassword, this.password);
    }
}
User.init (
    {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate:{

            isEmail: true,
        },
        
    },
    
        hooks:{
            beforeCreate: async(newUserINfo) =>{
                newUserINfo.password = await bcrypt.hash(newUserINfo.password, 10);
                return newUserINfo;
            },
            beforeUpdate: async(updatedUserInfo) =>{
                updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 10);
                return updatedUserInfo;
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

);

module.exports = User;