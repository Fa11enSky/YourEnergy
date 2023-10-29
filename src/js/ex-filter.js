import { getExercisesCategory } from './api-requests/filter-list-api';
import { createPagination } from './pagination';
// !посилання----------------------------------------------------------------
const exListEl = document.querySelector('.ex-list');
const filterElements = document.querySelector('.ex-filter-list');
const filterBtn = document.querySelectorAll('.ex-filter-btn');
const paginationList = document.querySelector('.ex-pagination');
const screenWidth = window.innerWidth;

filterElements.addEventListener('click', onFilterClick);
paginationList.addEventListener('click', onPaginationClick);


// ! змінні-------------------------------------------------------------------
const params = {
  filter: 'Body parts',
  page: 1,
  limit: 9,
};
if (screenWidth > 768) {
    params.limit = 12;
}
let paginationPageFilter = 1;
let prevPaginatinoTargetFilter = null;

//! ---------------------------------------------------------------------------

// !Виклики функцій
getExercisesCategory(params).then(response => {
  console.log(response.data.results);
  exListEl.innerHTML = createMurkup(response.data.results);
  paginationPageFilter = response.data.totalPages;
  createPagination(paginationPageFilter, paginationList);
  prevPaginatinoTargetFilter = document.querySelector('.ex-pagination-el');
  prevPaginatinoTargetFilter.classList.add('ex-pagination-el-active');
});

// ! Функції оголошення.-------------------------------------------------------------------

// створення розмітки основного списку
function createMurkup(data) {
  return data
    .map(el => {
      return `
        <li class="ex-item" data-filter="${el.name}"
         style= "background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%,
          rgba(17, 17, 17, 0.50) 100%), url('${el.imgURL}'),
          lightgray -41.978px 0px / 125.157% 100% no-repeat;background-size:cover ;  " 
        >
         <h3 class="ex-subtitle">${
           el.name[0].toUpperCase() + el.name.slice(1, el.name.length)
         }</h3>
         <p class="ex-description">${el.filter}</p>
        </li>
        `;
    })
    .join('');
}
// клік по фільтру
function onFilterClick(ev) {
  if (!ev.target.classList.contains('ex-filter-btn')) {
    return;
  }
  filterBtn.forEach(el => el.classList.remove('filter-btn-active'));
  ev.target.classList.add('filter-btn-active');
  updateParams(ev.target.dataset.category, 1, params.limit);
  getExercisesCategory(params).then(response => {
    exListEl.innerHTML = createMurkup(response.data.results);
    paginationPageFilter = response.data.totalPages;
    createPagination(paginationPageFilter, paginationList);
    prevPaginatinoTargetFilter = document.querySelector('.ex-pagination-el');
    prevPaginatinoTargetFilter.classList.add('ex-pagination-el-active');
  });
}
// Оновлює об'єкт параметрів при кліку
function updateParams(filter, page, limit) {
  params.filter = filter;
  params.page = page;
  params.limit = limit;
}
// клік на пагінацію змінює клас активної кнопки пагінаії, робить запит на бекенд
function onPaginationClick(ev) {
  if (ev.target.nodeName !== 'LI') {
    return;
  }
  const paramsRequstForPagination = {
    filter: params.filter,
    page: ev.target.dataset.page,
    limit: params.limit,
  };
  getExercisesCategory(paramsRequstForPagination).then(response => {
    exListEl.innerHTML = createMurkup(response.data.results);
  });
  ev.target.classList.add('ex-pagination-el-active');
  prevPaginatinoTargetFilter.classList.remove('ex-pagination-el-active');
  prevPaginatinoTargetFilter = ev.target;
}
