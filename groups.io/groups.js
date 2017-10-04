{ // local
fixPagination ();
makeHeading (document.querySelector (".breadcrumb"), 1);
document.querySelectorAll("span.subject").forEach (e => makeHeading(e, 3));
document.querySelectorAll ("a[name]+.row .pull-left").forEach(e => makeHeading(e, 5));

function fixPagination () {
let pagers = document.querySelectorAll (".pagination");
if (! pagers) return;

pagers.forEach (fixNextPrevious);
makeHeading (pagers[0].previousElementSibling, 2);
makeRegion (pagers[1].closest("table").parentElement, "Pagination");

function fixNextPrevious (pagination) {
let prev = document.createElement("span");
let next = document.createElement("span");
let itemCount = pagination.children.length;

prev.textContent = "previous page";
next.textContent = "next page";

pagination.children[0].firstElementChild.appendChild (prev);
pagination.children[itemCount-1].firstElementChild.appendChild (next);
} // fixNextPrevious

} // fixPagination

function makeRegion (element, label) {
if (element) {
element.setAttribute ("role", "region");
element.setAttribute ("aria-label", label);
} // if
} // makeRegion

function makeHeading (element, level) {
if (element) {
element.setAttribute("role", "heading");
element.setAttribute ("aria-level", level.toString());
} // if
} // makeHeading

} // local
