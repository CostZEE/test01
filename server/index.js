const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const corsOptions = {
    // origin: 'https://test01-chi-wheat.vercel.app',
    origin: '*',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());

const db = mysql.createConnection({
    user: "sql6633264",
    host: "sql6.freemysqlhosting.net",
    password: "Q7DEWQRXmF",
    database: "sql6633264",
});

app.get('/', (req, res) => {
    res.send('Server is Running');
})

app.get('/trytest', (req, res) => {
    res.send([
        {
            "id": "1",
            "name": "Hamburger"
        }, {
            "id": "2",
            "name": "Pizza"
        }
    ]);
})

// app.get('/employee', (req, res) => {
//     db.query("SELECT * FROM employee", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.post('/create', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const salary = req.body.salary;

//     db.query("INSERT INTO employee (name, age, country, position, salary) VALUES (?,?,?,?,?)",
//         [name, age, country, position, salary],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// app.post('/update', (req, res) => {
//     const id = req.body.id;
//     const salary = req.body.salary;
//     db.query("UPDATE employee SET salary = ? WHERE id = ?", [salary, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         })
// });

// app.post('/delete', (req, res) => {
//     const id = req.body.id;
//     db.query("DELETE FROM employee WHERE id = ?", [id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         })
// });

app.listen('3306', () => {
    console.log('Server is running on port 3306');
});

module.exports = app;