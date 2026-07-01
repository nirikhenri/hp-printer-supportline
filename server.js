const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "hp-printer-supportline"));
});

app.get("*", (req, res) => {
    const file = path.join(__dirname, req.path);

    res.sendFile(file, err => {
        if (err) {
            res.sendFile(path.join(__dirname, "hp-printer-supportline"));
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});