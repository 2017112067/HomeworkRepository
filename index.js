const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/posts", function(req, res){
    res.json([
        {postId: 1, title: "HELLO"},
        {postId: 2, title: "WORLD"},
    ]);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT,() => {
    console.log("서버가 실행됐습니다.");
    console.log(`서버주소: http://localhost:${PORT}`);
});