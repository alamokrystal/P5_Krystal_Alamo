const main = document.getElementById('product');

const param = new URLSearchParams(window.location.search);
console.log(param)

let id = param.get('id');
console.log(id)



const URL = 'http://localhost:3000/api/furniture/'+id;
// let response = fetch(URL);
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        makeCard(data);
    })
    .catch(error => console.log(error));



function makeCard(data){
        const card = document.createElement("section");
        const image = document.createElement('img');
        image.setAttribute('src', data.imageUrl);
        console.log(data);
        const name = document.createElement('h2');
        name.innerHTML = data.name;
        const description = document.createElement('p');
        description.innerHTML = data.description;
        const options = handleOptions(data.varnish);
        const price = document.createElement('p');
        price.innerHTML = data.price;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(options);
        card.appendChild(price);
        main.appendChild(card);

}

function handleOptions(array){
    const pullDown = document.createElement('select');
    for (let i=0; i<array.length; i++){
        const option = document.createElement('option');
        option.setAttribute('value', array[i]);
        option.innerHTML = array[i];

        pullDown.appendChild(option);
    }
    return pullDown;
}