
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}
Comment.init({
    id:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
    },
   commentInfo:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
   },
   dateCreated: {
    type: DataTypes.DATEONLY,
    allowNull:false,
    defaultValue: DataTypes.NOW,
   },
   userId: {
    type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id',
    },
   },
   postId: {
    type: DataTypes.INTEGER,
    references: {
        model:'post',
        key: 'id',
    },
},
},
{
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName: 'comment',
}
);

module.exports = Comment;