const pool = require("../config/db");

exports.registerCompany = async (req, res) => {
  const { company_name, address, city, state, country, postal_code, industry } = req.body;

  await pool.query(
    "INSERT INTO company_profile (owner_id, company_name, address, city, state, country, postal_code, industry) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
    [req.user.id, company_name, address, city, state, country, postal_code, industry]
  );

  res.status(201).json({ message: "Company created" });
};

exports.getProfile = async (req, res) => {
  const data = await pool.query(
    "SELECT * FROM company_profile WHERE owner_id=$1",
    [req.user.id]
  );
  res.json(data.rows[0]);
};
