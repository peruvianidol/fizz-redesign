const modalToggles = document.querySelectorAll('.fizz-modal-toggle');

Array.from(modalToggles).forEach( toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const modalName = toggle.dataset.modal;
    const modal = document.querySelector('#' + modalName);
    modal.classList.toggle('fizz-is-open');
  });
});

const filterButtons = document.querySelectorAll('.fizz-sidebar-toggle');

Array.from(filterButtons).forEach( toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const modalName = toggle.dataset.parent;
    const modal = document.querySelector('#' + modalName);

    modal.classList.toggle('fizz-sidebar-is-open');
  });
});


const paginationPrevButton = document.querySelectorAll('.fizz-prev');
Array.from(paginationPrevButton).forEach(prevButton => {
  prevButton.addEventListener('click', function(e) {
    var pageDisplay = document.querySelector('.page-display');
    var currentPage = document.querySelector('.fizz-is-active');
    var prevPage = currentPage.previousElementSibling;
    var nextButton = document.getElementById('next');

    if (nextButton.hasAttribute('disabled')) {
      nextButton.removeAttribute('disabled');
    }

    if(!prevPage.previousElementSibling) {
      prevButton.toggleAttribute('disabled');
    }

    if (prevPage) {
      currentPage.classList.remove('fizz-is-active');
      prevPage.classList.add('fizz-is-active');
      pageDisplay.textContent = 'Page ' + prevPage.innerText;
    }
  })
})


const paginationNextButton = document.querySelectorAll('.fizz-next');
Array.from(paginationNextButton).forEach(nextButton => {
  nextButton.addEventListener('click', function(e) {
    var pageDisplay = document.querySelector('.page-display');
    var currentPage = document.querySelector('.fizz-is-active');
    var nextPage = currentPage.nextElementSibling;
    var prevButton = document.getElementById('previous');

    if (prevButton.hasAttribute('disabled')) {
      prevButton.removeAttribute('disabled');
    }

    if(!nextPage.nextElementSibling) {
      nextButton.toggleAttribute('disabled');
    }

    if (nextPage) {
      currentPage.classList.remove('fizz-is-active');
      nextPage.classList.add('fizz-is-active');
      pageDisplay.textContent = 'Page ' + nextPage.innerText;
    }
  })
})

const tableMenuIcon = document.querySelectorAll('.fizz-table-menu .fizz-icon-button-small');
Array.from(tableMenuIcon).forEach(tableIcon => {
  tableIcon.addEventListener('click', function(e) {
    tableIcon.classList.toggle('fizz-is-active')
  })
})

// toggle the width/height of the iframe
const desktop = document.getElementById("desktop");
const mobile = document.getElementById("mobile");

if (desktop) {
  desktop.addEventListener("click", function() { 
    desktop.classList.add("fizz-is-active");
    mobile.classList.remove("fizz-is-active");
    document.querySelector("iframe").classList.remove('fizz-iframe-small');
  });
}

if (mobile) {
  mobile.addEventListener("click", function() { 
    mobile.classList.add("fizz-is-active");
    desktop.classList.remove("fizz-is-active");
    document.querySelector("iframe").classList.add('fizz-iframe-small');
  });
}

// Tooltips

const triggers = document.querySelectorAll(".fizz-tooltip-trigger");
const tooltipContainers = document.querySelectorAll(".fizz-tooltip-container");

triggers.forEach(function(trigger) {

  trigger.addEventListener('click', function() {
    const container = trigger.closest('.fizz-tooltip-container');
    container.classList.toggle("fizz-is-active");
    
    const offListener = (e) => {
      if (container.contains(e.target)) {
        return;
      }
      container.classList.remove('fizz-is-active');
      document.body.removeEventListener('click', offListener);
    }
    
    document.body.addEventListener('click', offListener);
  });

  trigger.addEventListener('mouseover', () => {
    tooltipContainers.forEach((container) => {
      if (container.contains(trigger)) {
        return;
      }
      container.classList.remove('fizz-is-active');
    })
  })
});