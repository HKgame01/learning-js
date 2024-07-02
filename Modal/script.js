'use strict';

const modals = document.querySelectorAll(".show-modal");

const clickModal = function () { 
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");

}

const hideModel =  function () { 
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");

}

for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click',clickModal );

}

document.querySelector(".close-modal").addEventListener('click', hideModel)
document.querySelector(".overlay").addEventListener('click', hideModel)
document.addEventListener('keydown', function (e) {
    if (e.key==='Escape') {
        if (!document.querySelector(".modal").classList.contains('hidden')){
            hideModel();
        }
    }
    
  })