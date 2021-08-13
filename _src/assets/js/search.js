(function(){

  var searchIndex = null;
  var searchResults = document.querySelector('#search-results');
  var searchInput = document.querySelector('#search-str');

  // clear the current results
  var clearResults = function(){
    while (searchResults.firstChild) {
      searchResults.removeChild(searchResults.firstChild);
    }
  }

  // search and display
  var find = function(str) {

    str = str.toLowerCase();

    // look for matches in the search JSON
    var results = [];
    for(var item in searchIndex ) {
      var found = searchIndex[item].text.indexOf(str);
      if(found != -1 ) {
        results.push(searchIndex[item]);
      }
    }

    // build and insert the new result entries
    clearResults();
    for(var item in results) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.textContent = results[item].title;
      link.setAttribute('href', results[item].url);
      listItem.appendChild(link);
      searchResults.appendChild(listItem);
    }
  }

  searchInput.addEventListener("focus", function(event) {

    // get the data
    fetch('/search.json').then(function(response) {
      return response.json();
    }).then(function(response) {
      searchIndex = response.search;
    });

    searchInput.addEventListener('keyup', function(event) {
      var str = searchInput.value
      if(str.length > 2) {
        find(str);
      } else {
        clearResults();
      }
      
      if (searchResults.childElementCount > 0) {
        searchResults.classList.remove("fizz-is-hidden");
      } else {
        searchResults.classList.add("fizz-is-hidden");
      }
    });

  });

  // hide the search results when clicking outside them
  document.addEventListener("click", (event) => {
    let targetEl = event.target; // clicked element      
    do {
      if(targetEl == searchResults) {
        return;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl);
    searchResults.classList.add("fizz-is-hidden");
  });

})();

let open = document.getElementById('menu-open');
let close = document.getElementById('menu-close');
let container = document.querySelector(".layout-two-column");
let menu = document.querySelector('[data-grid-area="nav"');
open.addEventListener("click", (e) => {
  container.classList.add("overflow-hidden");
  menu.classList.toggle("is-open");
});
close.addEventListener("click", (e) => {
  container.classList.remove("overflow-hidden");
  menu.classList.toggle("is-open");
});

