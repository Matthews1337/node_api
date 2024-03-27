// Acessar o banco de dados

const Usuario = require("../model/dados");





// GET
exports.listaDados = async(req, res, next)=>{

    const  usuario = await Usuario.findAll();
    return res.send(usuario);

}

// POST
exports.salvarDados = async(req, res, next)=>{
    const usuario = await Usuario.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade
    })

    await usuario.save().then((result) => {
        res.json({
            message: "Dado salvo com sucesso"
        })
        
    }).catch((err) => {
        console.log(err);
    });
}

// PUT
exports.editarDados = async(req, res, next) =>{
    try {
        const {id} = req.params
        const usuario = await Usuario.findOne({where: {id}})
        const {nome, cpf, idade} = req.body
    
        if(!usuario){
            res.status(401).json({message: "nenhum usuario encontrado"})
        }else{
            const usuario = await Usuario.update(
                {
                nome,
                cpf,
                idade
            },{
                where:{
                    id: req.params.id
                }
            })
            res.status(200).json({usuario, message: "Usuário atualizado!"})
        }
        
       } catch (error) {
        res.status(400).json({error})
        
       }
}


// DELETE
exports.deletarDados = async(req,res,next) => {
    try {
        const usuario = await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });

        if (usuario === 0) {
            // Se nenhum usuário foi excluído (possivelmente porque o usuário não existe)
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Se a exclusão foi bem-sucedida
        return res.status(200).json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}