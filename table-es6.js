// ES6 sticky table
function tableFixHead (e) {
  const el = e.target,
        sT = el.scrollTop,
        sL = el.scrollLeft;
  [...el.querySelectorAll("thead th")].forEach(th => 
    th.style.transform = `translateY(${sT}px)`
  );
  [...el.querySelectorAll("td:first-child")].forEach(td => 
    td.style.transform = `translateX(${sL}px)`
  );
}
[...document.querySelectorAll(".withes6 .table-wrapper")].forEach(el => 
  el.addEventListener("scroll", tableFixHead)
);