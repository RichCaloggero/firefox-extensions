{ // local
window.addEventListener ("popstate", modifyPage);

try {
$(".issues-listing .pagination").addEventListener ("click", () => {
setTimeout(() => modifyPage(), 100);
});
} catch (e) {}

modifyPage ();


function modifyPage () {
//alert ("modifyPage()");
let modified = "github-issues-modified";
removePositiveTabindexValues ();

// this is present on issues list page as well as individual issue pages
let issuesRegion = $(`.issues-listing:not(.${modified})`);

if (issuesRegion) {
//issuesRegion.setAttribute ("role", "region");
//issuesRegion.setAttribute ("aria-label", "Issues");
issuesRegion.classList.add (modified);
let title = document.createElement("h2");
title.textContent = "Issues";
issuesRegion.insertAdjacentElement ("afterbegin", title);
} // if

// this is only present on issues list page
let issuesList = $(`.issues-listing ul.js-navigation-container:not(.${modified})`);

if (issuesList) {
issuesList.classList.add (modified);
let title = document.createElement ("h3");
title.textContent = "Issues List";
issuesList.insertAdjacentElement ("beforebegin", title);

$$(`.issues-listing li a.js-navigation-open:not(.${modified})`, e => {
//alert (`adding title to ${e.textContent}`);
e.classList.add (modified);
let title = document.createElement ("h4");
e.parentElement.replaceChild (title, e);
title.appendChild (e);
});
} // if

// This is only present on individual issue page
let issue = $("#show_issue");

if (issue) {
let comments = $$(`.timeline-comment-header-text:not(${modified})`, e => {
e.classList.add (modified);
let heading = document.createElement ("h3");
e.parentElement.replaceChild (heading, e);
heading.appendChild (e);
});
} // if

} // modifyPage

function $(selector) {
return document.querySelector (selector);
} // $

function $$(selector, processor) {
let nodes = Array.from(document.querySelectorAll (selector));
if (processor) {
nodes.forEach (processor);
} // if

return nodes;
} // $$

function removePositiveTabindexValues () {
$$("*[tabindex]", e => {
let value = e.getAttribute("tabindex");
if (value && !Number.isNaN(value) && Number.parseInt(value) > 0) {
//alert (`tabindex ${e.nodeName} ${e.textContent}`);
e.removeAttribute("tabindex");
} // if
});
} // removePositiveTabindexValues

}; // local
