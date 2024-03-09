import express from 'express';
import mysql from'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PROFATABillionaires95!',
    database: 'profata'
})

app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/emails', (req, res) => {
    db.query('SELECT * FROM emails', (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM profata.emails', (err, result) => {
        if (err) {
            res.send(err)
        } else {
            
            res.status(200).send({
                count: result[0].count
              })
        }
    })
})


app.post('/emails', (req, res) => {
    const q ='INSERT INTO emails (`emails`) VALUES (?)'
    const emails = [req.body.emails]
    db.query(q, [emails], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Added new entry")
        }
    })
})
