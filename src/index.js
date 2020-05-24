let express = require("express");
let app = express();

app.get("/api/yesno", (req, res, next) => {
    res.json(Math.random() > .5);
});

app.listen(3999, () => {
    console.log("Server running on port 3999");
});