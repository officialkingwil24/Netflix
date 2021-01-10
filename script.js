let container = document.getElementById('container');
let query = document.getElementById('search').value ||"Power"
let page = 1
let last = '';
let containerLocation = document.getElementById('container').style.left

function search(){
    query = document.getElementById('search').value ||"Power"
    let url = `http://www.omdbapi.com/?page=${page}&s=${query}&apikey=d961dcc`
//    if(query !== last){
//     page = 1
//     container.innerHTML=''
//    }

    fetch(url) // promised response

    .then(res => res.json())
    .then(res=> movies(res)) // an object that have an array or object inside
    .catch(err=> console.log(err)) // catch all the information that can handle it all
}
window.onload = search

function movies(res){

    console.log(res)
    for(let i = 0; i < res.Search.length; i++){ // loop through each items
        let card = document.createElement('div'); // create elements
        let poster = document.createElement('img');
        let title = document.createElement('h2');
        let year = document.createElement('p');

        card.setAttribute('class', 'card'); // adding them to elements
        poster.setAttribute('class', 'poster');

        poster.src = res.Search[i].Poster
        // year.innerText = res.Search[i].Year
        // title.innerText = res.Search[i].Title

        // card.appendChild(title); // append data to netflix
        card.appendChild(poster);
        // card.appendChild(year);
        container.appendChild(card);

    }
}

function myScrollRight(e){
        containerLocation -= window.innerWidth - 700
        document.getElementById('container').style.left = containerLocation+'px'
        page++
        search();
        
}

function myScrollLeft(e){
        containerLocation +=window.innerWidth - 700
        document.getElementById('container').style.left = containerLocation+'px'
}