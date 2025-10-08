const express = require('exxpress');
const app = express();
const port = 3000;

app.get ('/', (req,res)=>){
    res.send('Sistema de Agendamento = API funcionando!');
});

app.listen(port,() => {
    console.log('Servidor rodando em http://localhost:${port}');

});
