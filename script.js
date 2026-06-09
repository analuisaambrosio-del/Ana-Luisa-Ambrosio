// Aguarda o carregamento completo do documento HTML antes de rodar as funções
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o elemento do formulário da Caixa de Perguntas
    const formPerguntas = document.getElementById("form-perguntas");

    // Intercepta o envio do formulário
    formPerguntas.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Evita que a página atualize ao enviar

        // Captura os valores digitados pelo usuário
        const nomeUsuario = document.getElementById("nome").value;
        const emailUsuario = document.getElementById("email").value;
        const perguntaUsuario = document.getElementById("pergunta").value;

        // Aqui, futuramente, você poderá integrar com um sistema de banco de dados.
        // Por hora, exibiremos um feedback inteligente e profissional na tela.
        alert(`Obrigado pelo contato, ${nomeUsuario}!\n\nSua pergunta sobre o campo foi enviada com sucesso para a análise técnica de nossa equipe de agronomia.`);

        // Limpa o formulário após o envio bem-sucedido
        formPerguntas.reset();
    });
});