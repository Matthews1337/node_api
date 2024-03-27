const express = require("express")
const app = express()
//app.use(express.json()) // Para ler arquivos Json

// importando o sequelize (para conexao no banco de dados MYSQL)
const Sequelize = require('sequelize')

// npm install --save mysql2
// Conectando com o BD

const sequelize = new Sequelize('criacao_api','geek','university',{host:'localhost',dialect: 'mysql'})

// Mostra mensagem se conectado ao BD
sequelize.authenticate().then(()=>{console.log("Conectado ao BD!")}).catch((erro)=>{console.error(erro)})  

const port = 3000 //seleciona a porta no qual a troca de informação vai ser feita


// importando apiRoutes
const apiRoutes = require("./routes/apiRoutes")


app.use(express.json()); // pega os request e os transforma em json, sem isto nao se consegue pegar os request's
app.use(apiRoutes); //usa as rotas criadas na pasta "routes"


// Verificando se o server esta online
app.listen(port, ()=>{
      console.log("Server online... " + port)
});
















//https://www.youtube.com/watch?v=zaWFnHagbrM&t=1370s
 
//https://www.youtube.com/watch?v=VkQ1tVcx8vs
    
//https://www.youtube.com/watch?v=Xk9ipk8sGMo
    
    