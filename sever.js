
require('dotenv').config()
const express = require("express");
const app = express();
const {user} = require('./model/user');
const Port=process.env.Port||8080;
app.use(express.json());

app.post("/", (req, res) => {
    const { email, password } = req.body;


    if (!email) {
        return res.status(400).json({ error: "ERROR ,email cannot be empty" });
    }


    if (!password) {
        return res.status(400).json({ error: "  ERROR, password can't be empty" });
    }


    res.json({ message: "Login successful!" });
});



app.listen(Port, () => {
    console.log(`Server running on http://localhost:${Port}`);
});

