let express = require("express");
let app = express();

app.get("/api/yesno", (req, res, next) => {
    res.json(Math.random() > .5);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});