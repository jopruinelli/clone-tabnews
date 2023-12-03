function status(request, response) {
  response.status(200).json({ chave: "Amo meu amor, e vai dar tudo certo!" });
}

export default status;
