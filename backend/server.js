const colors = require("colors/safe");
const app = require("./app");
const connectDatabase = require("./config/database");

//TODO: Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//TODO: Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "config/config.env" });

//TODO: Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    colors.rainbow(
      `Server is working on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    )
  );
});
