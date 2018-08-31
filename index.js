const express = require('express');
const sever = express();
sever.get('/',(req,res)=>{
    res.send('ok')
    }
)
sever.listen(80)