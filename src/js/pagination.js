// приймає загальну кількість сторінок, створює розмітку списку пагінації, заповнює пустий елемент списку

export function createPagination(pagesQuantity, elToInner) {
  const pages = pagesQuantity;
  if (pages < 1) {
    return;
  }
  const arr = [];
  for (let i = 1; i <= pages; i += 1) {
    arr.push(`<li class="ex-pagination-el" data-page="${i}">${i}</li>`);
  }
  elToInner.innerHTML = arr.join('');
  console.log(arr);
}
