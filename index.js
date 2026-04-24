import express from 'express';
const app = express();

app.get('/health', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
