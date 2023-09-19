function formatPhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const formattedPhoneNumber = `(${phoneNumber.substring(0, 2)})${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
    phoneInput.value = formattedPhoneNumber;
}

  // Adiciona eventos para formatar o número enquanto o usuário digita
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', formatPhoneNumber);

  // Função para adicionar um contato à tabela
function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Verifica se o nome contém pelo menos um nome e um sobrenome
    const nameParts = name.split(' ');
    if (nameParts.length < 2) {
    alert('Por favor, insira pelo menos um nome e um sobrenome.');
    return;
    }

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${phone}</td>`;

    // Adiciona a nova linha à tabela
    const tableBody = document.getElementById('contacts-body');
    tableBody.appendChild(newRow);

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

  // Adiciona um evento de clique ao botão "Cadastrar"
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    addContact(); // Chama a função para adicionar o contato
});