function pagination(currentPage, finalPage) {
  let pages = [];
  if (finalPage <= 7) {
    for (let i = 1; i <= Number(finalPage); i++) {
      pages.push(i);
    }
  } else {
    let firstPage = Number(currentPage) - 3 >= 1 ? Number(currentPage) - 3 : 1;
    let lastPage =
      Number(currentPage) + 3 > Number(finalPage)
        ? Number(finalPage)
        : Number(currentPage) + 3;
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(i);
    }
  }
  return pages;
}

module.exports = pagination;
