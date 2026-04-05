exports.middlewareGlobal = (req, res, next) => {
  if(req.body){
    req.body.cliente = req.body.cliente.toUpperCase()
    console.log()
    console.log(`Você postou o ${req.body.cliente}`)
    console.log()
  }
  next()
}