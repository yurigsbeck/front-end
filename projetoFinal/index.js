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