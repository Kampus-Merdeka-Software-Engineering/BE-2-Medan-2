// ! Importing Sequelize module
const { Sequelize } = require("sequelize");

// ! Creating a new Sequelize instance with environment variables for database configuration
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql", // Specifying the SQL dialect
    port: process.env.DATABASE_PORT,
  }
);

// ! Function to connect to the database
async function connectToDatabase() {
  try {
    // Attempt to authenticate the connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    // Log the error if the connection fails
    console.error("Failed to connect to the MySQL database.", err);
  }
}

// ! Connect to the database
connectToDatabase();

// ! Exporting the sequelize instance to be used in book-ticket model
module.exports = sequelize;