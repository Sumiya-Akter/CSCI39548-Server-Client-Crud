const Sequelize = require('sequelize');
// const { toDefaultValue } = require('sequelize/types/lib/utils');   !!!!!
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'johnsmith@email.com',
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://img.icons8.com/small/452/error.png'
  },

  gpa: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0
  }

});

module.exports = Student;