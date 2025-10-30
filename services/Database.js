export const carregarDados = async () => {
  try {
    const dadosString = localStorage.getItem('registros_livros');
    return dadosString ? JSON.parse(dadosString) : [];
  } catch (e) {
    console.error('Erro ao carregar dados:', e);
    return [];
  }
};

export const salvarDados = async (registros) => {
  try {
    localStorage.setItem('registros_livros', JSON.stringify(registros));
  } catch (e) {
    console.error('Erro ao salvar dados:', e);
  }
};
