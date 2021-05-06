import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ProjetoAPI:ProjetoAPI@cluster0.9rise.mongodb.net/ProjetoAPI?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar com o banco de dados: ${erro}`);
  });

export { mongoose };