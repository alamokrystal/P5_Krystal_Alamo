const main = document.getElementById('main');

fetch ('http://localhost:3000/api/furniture')
.then(response => response.json())
.then(data => {
    makeCards(data);
});

function makeCards(data){
    for(let i=0; i<data.length; i++){
        const card = document.createElement('a');
        card.setAttribute('href', `singleproduct.html?id=${data[i]._id}`);
        const image = document.createElement('img');
        image.setAttribute('src', data[i].imageUrl);
        console.log(data[i]);
        const name = document.createElement('h2');
        name.innerHTML = data[i].name;
        const description = document.createElement('p');
        description.innerHTML = data[i].description;
        
        
        card.className += 'square'
        image.className += 'pic'

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        main.appendChild(card);

    }
}