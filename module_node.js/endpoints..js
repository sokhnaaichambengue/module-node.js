
const express=require('express');
const app=express();
const port=3000;
app.post('/tasks',(req,res)=>{
res.send('tache creee avec succes');
});
app.get('/tasks',(req,res)=>{
    req.send('liste des taches');
});
app.delete('/tasks/:id',(req,res)=>{
    const taskID=req.parems.id;
    res.send();
});
app.listen(port,()=>{
    console.log('serveur en cours dexecution sur le port ${port}');
});
