// importando o sequelize

const Sequelize = require("sequelize")
const sequelize = new Sequelize('criacao_api','geek','university',{host:'localhost',dialect: 'mysql'})

// Criando o objeto  do modelo de dados da tabela Usuario
const Usuario = sequelize.define("usuario",{

    nome: {type: Sequelize.DataTypes.STRING, allowNull: false},
    cpf: {type: Sequelize.DataTypes.STRING, allowNull: false},
    idade: {type: Sequelize.DataTypes.INTEGER,allowNull:false}

})

module.exports = Usuario