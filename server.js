import express from 'express';

const app = express();

// app.get('/',(req,res) => {
//     res.send('server is ready')
// });

// get a list of 5 jokes

app.get('/api/jokes', (req,res) => {
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'this is joke'
        },
        {
            id:2,
            title:'joke 2',
            content:'this is 2 joke'
        },
        {
            id:3,
            title:'joke 3',
            content:'this is 3 joke'
        },
        {
            id:4,
            title:'joke 4',
            content:'this is 4joke'
        },
        {
            id:5,
            title:'joke 5',
            content:'this is joke 5'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
    
})