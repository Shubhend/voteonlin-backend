module.exports = (sequelize,DataTypes) => {

const User = sequelize.define('users', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },

  createdAt:{
  type: DataTypes.STRING
  },

  updatedAt: {
  type: DataTypes.STRING
  },
  password: {
  type: DataTypes.STRING
  }

}, {
  // Other model options go here
});
return User;
}