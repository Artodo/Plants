'use strict';
const menu = document.querySelector('#burgerMenu');
const menuItems = document.querySelectorAll(".burger-item");
const burgerBtn = document.querySelector('#burgerBtn');


function openBurger() {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    burgerBtn.classList.remove('change');
    document.body.classList.remove('no-scroll');
  } else {
    menu.classList.add('show-menu');
    burgerBtn.classList.add('change');
    document.body.classList.add('no-scroll');
  }
}

burgerBtn.addEventListener('click', openBurger);


menuItems.forEach(
  function (el) {
    el.addEventListener('click', openBurger);
  });

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const gardens = document.querySelectorAll('.gardens-care');
const planting = document.querySelectorAll('.planting');
const lawn = document.querySelector('.lawn');
const serviceFilter = document.querySelector('.service__btn-block');
const gardenBtn = document.querySelector('#gardens');
const lawnBtn = document.querySelector('#lawn');
const plantingBtn = document.querySelector('#planting');
const serviceCard = document.querySelectorAll('.service__card')


function removeActive() {
  gardenBtn.classList.remove('btnActiv');
  lawnBtn.classList.remove('btnActiv');
  document.querySelector('#planting').classList.remove('btnActiv');
}


gardenBtn.addEventListener('click', function () {
  removeActive();
  serviceCard.forEach(
    function (el) {
      el.classList.remove('blur');
    })
  lawn.classList.add('blur');
  planting.forEach(
    function (el) {
      el.classList.add('blur');
    }
  )
  gardenBtn.classList.add('btnActiv');
})


lawnBtn.addEventListener('click', function () {
  removeActive();
  serviceCard.forEach(
    function (el) {
      el.classList.remove('blur');
    })
  planting.forEach(
    function (el) {
      el.classList.add('blur');
    }
  );
  gardens.forEach(
    function (el) {
      el.classList.add('blur');
    }
  )
  lawnBtn.classList.add('btnActiv');
})


plantingBtn.addEventListener('click', function () {
  removeActive();
  serviceCard.forEach(
    function (el) {
      el.classList.remove('blur');
    })
  lawn.classList.add('blur');
  gardens.forEach(
    function (el) {
      el.classList.add('blur');
    }
  )
  document.querySelector('#planting').classList.add('btnActiv');
})

// ................./////////////////////////////////////////////////////

const basicPrice = document.getElementById('pricesBasics');
const standardPrice = document.getElementById('pricesStandard');
const proPrice = document.getElementById('pricesPro');



function removeActiveClasses(btn) {
  btn.classList.remove('active');
  btn.nextElementSibling.classList.remove('active');
}

function closeMenus(targetId) {
  const otherBtns = document.querySelectorAll('.prices__btn:not(#' + targetId + ')');
  otherBtns.forEach(btn => {
    removeActiveClasses(btn);
  });
}

function handleMenu(btn) {
  closeMenus(btn.getAttribute('id'));
  if (btn.classList.contains('active')) {
    removeActiveClasses(btn);
  } else {
    btn.classList.add('active');
    btn.nextElementSibling.classList.add('active');
  }
}

function isContentClicked(el) {
  return !el.classList.contains("prices__btn")
    && !el.classList.contains("prices-menu")
    && !el.parentElement.classList.contains("prices-menu")
}

document.addEventListener('click', function (event) {
  if (isContentClicked(event.target)) {
    const activeBtns = document.querySelectorAll('.prices__btn.active');
    if (activeBtns.length > 0) {
      activeBtns.forEach(btn => {
        removeActiveClasses(btn);
      });
    }
  }
});


/////////////////////////////////////////////////////////////////////////////

const menuCity = document.querySelector('#cityList');
const cityMenuItems = document.querySelectorAll(".city-item");
const cityBtn = document.querySelector('.contacts__btn');


function openCityMenu() {
  if (menuCity.classList.contains('city-list-active')) {
    menuCity.classList.remove('city-list-active');
    // cityBtn.classList.remove('change');
  } else {
    menuCity.classList.add('city-list-active');
    // cityBtn.classList.add('change');
  }
}

cityBtn.addEventListener('click', openCityMenu);


cityMenuItems.forEach(
  function (el) {
    el.addEventListener('click', openCityMenu);
  })
///////////////////////////////////////////////////////////////////////////////////

const CITY = {
  Yonkers: {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    adress: "511 Warburton Ave",
  },

  Sherrill: {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    adress: "14 WEST Noyes BLVD",
  },

  Canandaigua: {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    adress: "151 Charlotte Street",
  },


  NewYorkCity: {
    city: "New York City",
    phone: "+1	212	456 0002",
    adress: "9 East 91st Street",
  }
};

let cityName = document.querySelector('#cityName');
let cityPhone = document.querySelector('#cityPhone');
let cityAdress = document.querySelector('#cityAdress');

const cityList = document.querySelector('#cityCard');

function openInfo(key) {
  cityList.classList.add('city-card-active');
  cityName.textContent = CITY[key].city;
  cityPhone.textContent = CITY[key].phone;
  cityAdress.textContent = CITY[key].adress;
  cityBtn.textContent = key;
  cityBtn.style.background = "#C1E698";
}



