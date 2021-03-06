// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*
// utilizar o objeto de banco de dados, para nossas operaçoes
db.serialize( () =>{

    // co omandos SQL eu vou:

    //1 criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    
    `)

    // 2 inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "Papersider",
        "Guilherme Gemball, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletronicos, Lâmpadas"

    ]

    function afterInsertData(err){
        //err  = objeto de erro
        if(err){
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

    
    db.run(query,values,afterInsertData)

    // 3 consultar os dados na tabela
 //   db.all(`SELECT * FROM places`, function(err,rows){
 //       if(err){
 //           return console.log(err)
 //       }

 //        console.log("aqui estao os seus registros")
 //       console.log(rows)

 //   })
    
    // 4 deletar um dado da tabela

    db.run(`DELETE FROM places WHERE id = ?`,[1],function(err){
       if(err){
            return console.log(err)
        }
        console.log("registro deletado com sucesso")
    })


})*/

