const { Router } = require("express");
const indexRouter = Router();
const pool = require("../db/pool"); 

indexRouter.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY added ASC");
    res.render("index", { title: "Mini Messageboard", messages: result.rows });
  } catch (err) {
    next(err);
  }
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", async (req, res, next) => {
  const { messageText, authorsName } = req.body;
  try {
    await pool.query(
      "INSERT INTO messages (text, username) VALUES ($1, $2)",
      [messageText, authorsName]
    );
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = indexRouter;
