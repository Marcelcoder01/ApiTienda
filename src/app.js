const express = require("express");
const cors = require("cors");
const itemRouter = require("./routers/item.routers");  

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(itemRouter);  
app.use((req, res, next) => {
  res.status(404).json({ error: true, codigo: 404, message: "Endpoint no encontrado" });
});

module.exports = app;
