let express = require("express");
let app = express();

app.get("/", (req, res, next) => {
    res.json(Math.random() > .5 ? 'yes' : 'no');
});


let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});