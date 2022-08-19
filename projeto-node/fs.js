

const fs = require('fs');


//fs.existsSync() - verify that the file exists;
//fs.mkdirSync() - create a directory;
//fs.renameSync() - rename the file;
//fs.rmdirSync() - remove the directory

// if(!fs.existsSync("./public")){
//     fs.mkdirSync("./public",(err)=>{
//         if(err) throw err;

//         console.log("pasta criada com sucesso");

//     })
// }else{
//     console.log("a pasta 'public' ja existe")
// }




// if(fs.existsSync("./public")){
//     fs.renameSync("./public","./pedromuteka",(err)=>{
//         if(err) throw err;

//         console.log("pasta renomeada com sucesso");

//     })
// }else{
//     console.log("a pasta 'public' não  existe")
// }

// fs.existsSync("./public") || fs.mkdirSync("./public")



// if(fs.existsSync("./pedro")){
//     fs.rmdir("./pedro",{recursive:true},(err)=>{
//         if(err) throw err;
//         console.log("pasta deletada com sucesso");
//     })
// }else{
//     console.log("impossivel deletar a pasta")
// }


// if(!fs.existsSync("teste.html")){
//     fs.writeFile("teste.html","teste de conteudo",(err)=>{
//         if(err) throw err;

//         console.log("Arquivo criado com sucesso!");
//     });
// }



// fs.appendFile("teste.html", "\n\nadicionando conteudo", (err)=>{
//     if(err) throw err;

//     console.log("arquivo adicionado com sucesso");
// })


// fs.open("teste.html", "w", (err, file)=>{
//     if(err) throw err;

//     console.log("salvo");
// });


// fs.rename("muteka.js", "most.js", (err)=>{
//     if(err) throw err;

//     console.log("arquivo renomeado com sucesso");
// })


// fs.unlink("most.js",(err)=>{
//     if(err) throw err;

//     console.log("Arquivo deletado com sucesso");
// })