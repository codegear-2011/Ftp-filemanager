const express = require('express');
const ftp = require('basic-ftp');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/connect', async (req, res) => {
    let { host, user, pass } = req.body;
    let client = new ftp.Client();

    try {
        await client.access({ host, user, password: pass });
        let list = await client.list();
        res.json(list.map(file => file.name));
    } catch (err) {
        res.status(500).send("FTP Connection Failed");
    }
    client.close();
});

app.listen(3000, () => console.log("Server running on port 3000"));
          
