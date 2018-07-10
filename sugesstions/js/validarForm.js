window.addEventListener('load', iniciar);

const container = document.querySelector('.element__sugesstions');

function iniciar(){
    fetch('https://randomuser.me/api')
    .then(datos => datos.json())
    .then(resp => {
        container.innerHTML = `

                <img src="${resp.results[0].picture.large}" class="image__sugesstions" alt="Imagen Icono" />
                
                <textarea name="texto" id="texto" class="text__sugesstions" rows="5" placeholder="Your comments and your sugesstions"></textarea>

        `
    })
}
