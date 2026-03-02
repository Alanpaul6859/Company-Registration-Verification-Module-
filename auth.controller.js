const bcrypt = require("bcrypt");
const pool = require("../config/db");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { email, password, full_name, gender, mobile_no } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const result = await pool.query(
    "INSERT INTO users (email,password,full_name,gender,mobile_no) VALUES ($1,$2,$3,$4,$5) RETURNING id",
    [email, hash, full_name, gender, mobile_no]
  );

  res.status(201).json({ user_id: result.rows[0].id });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (!user.rowCount) return res.status(401).json({ message: "Invalid login" });

  const valid = await bcrypt.compare(password, user.rows[0].password);
  if (!valid) return res.status(401).json({ message: "Invalid login" });

  res.json({ token: generateToken({ id: user.rows[0].id }) });
};
