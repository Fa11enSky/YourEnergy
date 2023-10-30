import { createPagination } from './pagination';

const listEl = document.querySelector('.js-ex-list');


 export function createMurkupEx(data) {
     return data.map(el => {
         let rating = el.rating;
         if (rating.toString().length === 1) {
             rating = rating + '.0'
             
         }
        return `
        <li class="full-ex-item">
      <div class="full-ex-item-wrapper">
        <div class="full-ex-item-header">
          <span class="full-ex-list-subtitle">WORKOUT</span
          ><span class="text-rating">${rating} <svg width="18" height="18">
            <use href="./img/main-sprite.svg#icon-ex-star"></use>
          </svg></span
          >
        </div><button type="button" data-id="${el.id}" class="full-ex-list-btn">Start <svg class="start-svg" width="16" height="16">
          <use href="../img/main-sprite.svg#icon-ex-arrow"></use>
        </svg></button>
      </div>
      <h3 class="full-ex-list-title" title="${el.name}"> ${el.name[0].toUpperCase()+ el.name.slice(1, el.name.length)}</h3>
      <ul class="full-ex-sublist">
        <li class="full-ex-sublist-item">
          Burned calories:<span>${el.burnedCalories} / ${el.time} min</span>
        </li>
        <li class="full-ex-sublist-item">Body part:<span class="span-ex-body-part">${el.bodyPart}</span></li>
        <li class="full-ex-sublist-item">Target:<span class="span-ex-target">${el.target}</span></li>
      </ul>
    </li>
        `
    }).join('');
}




 