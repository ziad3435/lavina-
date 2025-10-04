let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let mainContent = document.querySelector('.main-content');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // الحروف تطلع
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 200);
    });

    // الحروف تختفي
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2400);

    // لافينا تطلع لفوق والخلفية تطلع لفوق وتظهر الصفحة


    setTimeout(() => {
      logoHeader.classList.add('move-up');
      intro.classList.add('hidden-up');
      mainContent.classList.add('show');
    }, 2800);
  });
}); 
 
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  menu.classList.toggle('active');
  nav.classList.toggle('active');
}

function toggleDropdown(e) {
  e.preventDefault();
  const dropdown = e.target.parentElement;
  dropdown.classList.toggle("active");
}

// Preview image change
const listItems = document.querySelectorAll('.dropdown-list > li');
const previewImg = document.getElementById('preview-img');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const imgSrc = item.getAttribute('data-img');
    if (imgSrc) {
      previewImg.style.opacity = 0;
      setTimeout(() => {
        previewImg.src = imgSrc;
        previewImg.style.opacity = 1;
      }, 200);
    }
  });
});

// Toggle sub-list
const subParents = document.querySelectorAll('.has-sub > a');
subParents.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.toggle('active');
  });
});

// Change preview for sub-items
const subLinks = document.querySelectorAll('.sub-list li');
subLinks.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const imgSrc = item.getAttribute('data-img');
    if (imgSrc) {
      previewImg.style.opacity = 0;
      setTimeout(() => {
        previewImg.src = imgSrc;
        previewImg.style.opacity = 1;
      }, 200);
    }
  });
});




//change video in background

function changeVideo(name) {
    const bgvideolist = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    bgvideolist.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)){
            video.classList.add('active');
        }
    });

     models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)){
            model.classList.add('active');
        }
    });


   
}

/* TABS */
// toggle m



// AOS Scroll Animation Init
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200,
        once: true
    });
});

// Search filter
const searchBar = document.getElementById("searchBar");
if (searchBar){
  searchBar.addEventListener("keyup", function(e) {
      let term = e.target.value.toLowerCase();
      let cards = document.querySelectorAll(".card, .ca");
      cards.forEach(card => {
          let text = card.innerText.toLowerCase();
          if (text.includes(term)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  });
}
