import './style.css';
import pictureSearch from "./apiService";
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');
// var debounce = require('lodash.debounce');

import pictureCard from './templates/picture-card.hbs';


const gallery = document.querySelector('.gallery');
const form = document.querySelector('#search-form');
const input = document.querySelector('#input');
const button = document.querySelector('button');


console.log(input);

form.addEventListener('submit', showPictures);
button.addEventListener('click', showPictures);


let page = 1;
let currentHeight = 0;
 


function showPictures(event) { 
    
    event.preventDefault();
    const inputText = input.value;  

    if (event.type === "click") {
        page += 1;
        currentHeight = gallery.offsetHeight;

    } else {
        page = 1;
        currentHeight = 0;
        gallery.innerHTML = "";    
    }
    

 pictureSearch(inputText, page)
        .then(data => {            
            console.log(data);
            
            if (data.totalHits) {
                gallery.insertAdjacentHTML('beforeend', pictureCard(data.hits));
                      window.scrollTo({
                      top: currentHeight + 40,
                      left: 0,
                      behavior: 'smooth'
                      });
                
                button.classList.remove('is-hidden');
            } 
            else {
                error({ text: "По вашему запросу ничего не найдено!" });
                console.log('По вашему запросу ничего не найдено!');
                gallery.innerHTML = "";
            }
        })
        .catch(error => console.log(error));



};



// function checkClick()
  
// function clearPictureSearch() {
//     inputText = "";
//     gallery.innerHTML = "";  
//  }


    // pictureSearch(event.target.value, page)
    //     .then(data => {            
    //         console.log(data);
            
    //         if (data.totalHits) {
    //             gallery.insertAdjacentHTML('beforeend', pictureCard(data.hits));
                
    //         } else {
    //             gallery.innerHTML = "";
    //         }
    //     })
    //     .catch(error => console.log(error));
    

// }
// function showPictures(event) {
//     console.log(event);
//     console.log(query);
// }
