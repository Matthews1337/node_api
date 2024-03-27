const express = require("express");
const router = express.Router();



// Importar o controller
const apiController = require("../controller/apiController")





// Rotas que eu precise na aplicação

// função para obter todos os dados
router.get("/dados",apiController.listaDados);





// função para inserir novos dados
router.post("/dados", apiController.salvarDados);





// função para editar o dado selecionado
router.put("/dados/id=:id", apiController.editarDados);



// função para deletar o dado selecionado
router.delete("/dados/id=:id",apiController.deletarDados);




module.exports = router;




// https://www.youtube.com/watch?v=Xk9ipk8sGMo