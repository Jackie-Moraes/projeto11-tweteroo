import express from "express"
import cors from "cors"
import chalk from "chalk";
import bodyparser from "body-parser"

const app = express();
app.use(cors());
app.use(express.json());

let conta = {
    username: "",
    avatar: ""
}

let tweets = []

app.post("/sign-up", (req, res) => {
    conta.username = req.body.username
    conta.avatar = req.body.avatar
    res.send("Ok!");
})

app.post("/tweets", (req, res) => {
    tweets.unshift({
        username: req.body.username,
        avatar: conta.avatar,
        tweet: req.body.tweet
    });
    tweets.splice(10, 1);
    res.send("Ok!");
})

app.get("/tweets", (req, res) => {
    res.send(tweets);
})


app.listen (5000, () => {
    console.log(chalk.blue.bold("Up and running!"))
})