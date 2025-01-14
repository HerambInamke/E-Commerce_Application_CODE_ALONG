const app = require("./app");
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
      });
      ;
}

// Log environment variables to confirm they are loaded
console.log('PORT:', process.env.PORT);
console.log('DB_URL:', process.env.DB_URL);

connectDatabase();

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on https://localhost:${process.env.PORT || 8000}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
