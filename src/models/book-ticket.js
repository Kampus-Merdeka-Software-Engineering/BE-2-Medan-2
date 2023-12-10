// ! Importing required modules from Sequelize
const { DataTypes } = require("sequelize");
// ! Importing the configured Sequelize instance
const sequelize = require("../config/dbConfig");

// ! Defining the 'Ticket' model using the 'define' method of the Sequelize instance
const Ticket = sequelize.define(
  "Ticket",
  {
    // Defining the fields of the 'Ticket' model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    leavingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Disabling timestamps (createdAt and updatedAt fields)
    timestamps: false,
    // Specifying the table name in the database
    tableName: "book_ticket",
  }
);

// ! Exporting the 'Ticket' model to be used in routes
module.exports = Ticket;