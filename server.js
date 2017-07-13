import path from "path";
import express from "express";
import cors from "cors";
import config from "./config";

const server = express();
const publicPath = express.static(path.join(__dirname, "public"));
const apiPath = express.static(path.join(__dirname, "api"));

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index", {
    content: "..."
  });
});

server.use(cors());
server.use("/public", publicPath);
server.use("/api", apiPath);

server.listen(config.port, () => {
  console.info("Express listening on port", config.port);
});
