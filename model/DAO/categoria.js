/****************************************************************************************************************************************************
* Objetivo: Criar a interação com o Banco de Dados MySQL para fazer CRUD de categorias
* Data: 26/09/2024
* Autor: Luiz Vidal, Luan Oliveira, Pedro Barbosa, Ryan Alves & Vitória Azevedo
* Versão: 1.0
****************************************************************************************************************************************************/

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Inserir uma nova categoria
const insertNovaCategoria = async (dadosCategoria) => {

    try {

        let sql = `insert into tbl_categoria  (   
                                                categoria,
                                                categoria_status
                                            ) 
                                            values 
                                            (
                                                '${dadosCategoria.categoria}',
                                                true
                                            )`
                                            console.log(sql)
        let resultStatus = await prisma.$executeRawUnsafe(sql)

        if (resultStatus) {
            return true
        }
        else {
            return false
        }

    } catch (error) {
        console.error("Erro ao inserir categoria: ", error);

        console.log(error + "aqui");

        return false
    }

}

module.exports = {
    insertNovaCategoria
}