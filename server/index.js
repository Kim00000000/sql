const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "bigborisu19@",
    database: "CRUDDataBase"
});

app.use(cors());
app.use(express.json()); // accept information with json form
app.use(bodyParser.urlencoded({extended: true}));


// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "bigborisu19@",
//     database: "CRUDDataBase"
// });

// connection.connect();

// connection.query('SELECT * FROM movie_reviews', function(err, results, fields) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// connection.end();

app.post("/api/insert", (req, res) => {

    // const movieName = req.body.movieName;
    // const movieReview = req.body.movieReview;

    const correct = req.body.correct;
    const solvingtimeByQuestion = req.body.solvingtimeByQuestion;
    const questionVisitLog = req.body.questionVisitLog;
    const answerChangeNumber = req.body.answerChangeNumber;

    const sqlInsert = "INSERT INTO userdata (correct, solvingtimeByQuestion, questionVisitLog, answerChangeNumber) VALUES (?,?,?,?);";
    db.query(sqlInsert, [correct, solvingtimeByQuestion, questionVisitLog,answerChangeNumber], (err, result) => {
        console.log(err);
    });
});

// app.get("/api/get", (req,res) => {
//     const sqlselect = "SELECT * FROM userdata;";
//     db.query(sqlselect, (err, result) => {
//         console.log(sqlselect);
//         //res.sendFile(__dirname + '/tilematch.html');
//     });


                   

//     // const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('ccinception','good movie');";
//     // db.query(sqlInsert, (err, result) => {
//     //     res.send("hellos");
//     // });
    

// });


//register part
// app.post("/register", (req, res) => {

//     const username = req.body.username;
//     const password = req.body.password;

//     const sqlInsertre = "INSERT INTO users (username, password) VALUES (?,?);";
//     db.query(sqlInsertre, [username, password], (err, result) => {
//         console.log(err);
//     });
// });


app.listen(3001, () => {
    console.log('running 3001');
});

