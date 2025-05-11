document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const messageArea = document.createElement('p');
  form.appendChild(messageArea);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      messageArea.textContent = 'Por favor, completa todos los campos.';
      messageArea.style.color = 'red';
    } else {
      messageArea.textContent = '¡Gracias por tu mensaje!';
      messageArea.style.color = 'green';
      form.reset();
    }
  });

  const goles = [
    "1986 - Maradona vs Inglaterra",
    "2002 - Ronaldo en la final",
    "2014 - James Rodríguez vs Uruguay"
  ];

  const searchInput = document.getElementById('search');
  const resultList = document.getElementById('resultados');

  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    resultList.innerHTML = '';

    const filtrados = goles.filter(gol => gol.toLowerCase().includes(term));
    filtrados.forEach(gol => {
      const li = document.createElement('li');
      li.textContent = gol;
      resultList.appendChild(li);
    });

    if (filtrados.length === 0 && term !== '') {
      resultList.innerHTML = '<li>No se encontraron resultados.</li>';
    }
  });
});
