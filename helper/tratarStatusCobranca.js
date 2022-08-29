export function selecionarStatus(status, vencimento) {
  if (status === 'Paga') {
    return 2;
  };

  if (status === 'Pendente' && new Date(vencimento) >= new Date()) {
    return 1;
  } else {
    return 0;
  };
};
