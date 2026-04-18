exports.middlewareGlobal = (req, res, next) => {
  // Injetando pelo middleware eu consigo inserir em mais
  // de uma rota a mesma variável, sem precisar repetir o código
  res.locals.umaVariavelLocal = "Este é o valor da variável local"
  next()
}