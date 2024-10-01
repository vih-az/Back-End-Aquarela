/****************************************************************************************************************************************************
* Objetivo: Criar a interação com o Banco de Dados MySQL para fazer CRUD de categorias
* Data: 01/10/2024
* Autor: Luiz Vidal, Luan Oliveira, Pedro Barbosa, Ryan Alves & Vitória Azevedo
* Versão: 1.0
****************************************************************************************************************************************************/

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const insertNovoSeguidor = async (dadosSeguidores) => {

  try {

    let sql = `insert into tbl_seguidores  (   
                                              id_seguidores,
                                              id_seguidor,
                                              id_seguindo,
                                              seguidores_status
                                          ) 
                                          values 
                                          (
                                              '${dadosSeguidores.id_seguidores}',
                                              '${dadosSeguidores.id_seguidor}',
                                              '${dadosSeguidores.id_seguindo}',
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
    console.error("Erro ao inserir seguidor: ", error);

    console.log(error + "aqui");

    return false
  }
}

const selectAllFollowers = async () => {

    try {
        let sql = `select * from tbl_seguidores`
        let rsSeguidor = await prisma.$queryRawUnsafe(sql)

        return rsSeguidor

    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = {
  insertNovoSeguidor,
  selectAllFollowers
}