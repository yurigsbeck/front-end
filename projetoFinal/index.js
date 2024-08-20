const toque = document.getElementById('me');
const paragrafo = document.getElementById('meText');

toque.addEventListener('click', function() {
    if (paragrafo.style.display === 'none') {
        paragrafo.style.display = 'block';
        toque.textContent = 'Sobre Mim';
    } else {
        paragrafo.style.display = 'none';
        toque.textContent = 'Sobre Mim';
    }
});

const toque2 = document.getElementById('forma');
const paragrafo2 = document.getElementById('formaText');

toque2.addEventListener('click', function() {
    if (paragrafo2.style.display === 'none') {
        paragrafo2.style.display = 'block';
         toque2.textContent = 'Formação';
    } else {
        paragrafo2.style.display = 'none';
        toque2.textContent = 'Formação';
    }
});

const toque3 = document.getElementById('exp');
const paragrafo3 = document.getElementById('expText');

toque3.addEventListener('click', function() {
    if (paragrafo3.style.display === 'none') {
        paragrafo3.style.display = 'block';
         toque3.textContent = 'Experiencia';
    } else {
        paragrafo3.style.display = 'none';
        toque3.textContent = 'Experiencia';
    }
});

function fetchGitHubProjects() {
    const username = 'yurigsbeck';
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            data.forEach(repo => {
                const projectItem = `
                    <div class="project-item">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Sem descrição'}</p>
                        <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
                    </div>
                `;
                projectsList.innerHTML += projectItem;
            });
        })
        .catch(error => console.error('Erro ao carregar os repositórios:', error));
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);