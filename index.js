import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;
const _dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});