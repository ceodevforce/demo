import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3500, () => {
    console.log('Server is running on port 3500');
})