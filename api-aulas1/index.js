const apikey = '53fbc98';

document.getElementById('buscarFilme').addEventListener('submit', function (e) {
    e.preventDefault();

    const novoFilme = document.getElementById('copy').value;

    fetch(`http://www.omdbapi.com/?t=${novoFilme}&apikey=${apikey}`)
    .then(response => response.json())
    .then(data => {
        if (data.Response === "True") {
            document.getElementById('Title').textContent = `Título: ${data.Tittle}`;
            document.getElementById('Year').textContent = `Ano: ${data.Year}`;
            document.getElementById('Poster').src = data.Poster;
        } else {
            document.getElementById('Tile').textContent = 'Filme não encontrado';
            document.getElementById('Year').textContent = '';
            document.getElementById('Poster').src = '';
          }
    })
    .catch(error => console.error('Erro:', error));
});

