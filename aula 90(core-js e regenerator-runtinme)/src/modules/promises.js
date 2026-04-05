function promessa(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Oi eu sou a promise");
      resolve()
    }, 2000)
  })
}

export default async function executa(){
  await promessa()
  console.log("Executou");
}
