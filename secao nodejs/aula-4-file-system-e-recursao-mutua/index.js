// File system e recursão mutua

const fs = require('fs').promises
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//   .then(files => console.log(files))
//   .catch(err => console.log(err))

async function readdir(rootDir){
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  await walk(files, rootDir);
}

async function walk(files, rootDir){
  for(let file of files){
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    //validando se é a pasta do git e ignorando o console.log nesses casos
    if (/\.git/g.test(fileFullPath)){
      continue
    }
    //validando se é a pasta do node_modules e ignorando o console.log nesses casos
    if (/node_modules/g.test(fileFullPath)){
      continue
    }

    if(stats.isDirectory()){
      readdir(fileFullPath)
      continue;
    }

    //validando se o arquivo não é css ou html
    if(
      !/\.css$/g.test(fileFullPath) &&
      !/\.html$/g.test(fileFullPath)
    ){
      continue
    }

    console.log(fileFullPath.slice(fileFullPath.indexOf("Curso Udemy Js-Ts")))
  }
}

readdir("/Users/T-Gamer/Documents/Codigos(VS Code)/Curso Udemy Js-Ts")

