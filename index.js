import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const tweets = [];


app.post("/sign-up", (req,res) => {
 const {username, tweet} = req.body;
 users.push(req.body);
 console.log(users);
 res.send("Ok")

});


app.post("/tweets", (req,res) => {
   const {username, tweet} = req.body;
   
   const newTweet = {
      username,
      avatar: users.find((user)=> user.username === username).avatar,
      tweet
    };

   tweets.push(newTweet);
   res.send("Ok")
});

app.get("/tweets", (req,res) => {
 const lastTweets = tweets.slice(-10);
 res.send(lastTweets);
});

app.listen(5000, () => {
console.log("App running on port 5000")
})