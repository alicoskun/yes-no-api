let express = require("express");
let app = express();

app.get("/", (req, res, next) => {
    res.json(Math.random() > .5 ? 'yes' : 'no');
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});