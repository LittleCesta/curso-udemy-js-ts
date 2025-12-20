const fs = require('fs').promises

module.exports = (filePath, dados) =>{
  // A flag 'w' significa que se o 
  // arquivo já existir, ele será sobrescrito.

  // A flag 'a' significa que o arquivo será criado se não 
  // existir e se existir ele será apenas adicionado.
  fs.writeFile(filePath, dados, { flag: 'w', encoding: 'utf-8' })
}

