const descontarCheque = (diaAtual, diaCheque) =>
  new Promise((resolve, reject) => {
    if (diaAtual === diaCheque) {
      resolve(`Cheque descontado no dia ${diaCheque}`);
    } else {
      reject(
        `Hoje é dia ${diaAtual}. O cheque tem que ser descontado no dia ${diaCheque}`
      );
    }
  });

descontarCheque(10, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(11, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(12, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(13, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(14, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(15, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(16, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(17, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(18, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(19, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(20, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));
