// -------------MOUSE EFFECT----------------- //

let mouseCursor = document.querySelector(".cursor");
let pictures = document.querySelectorAll(".pictures");
let mail = document.querySelectorAll(".mail");
let ac = document.getElementById("ac");
let o = document.getElementById("o");
let s = document.getElementById("s");
let background = document.querySelectorAll(".project-chronology");
let year = document.querySelector("#project-year");
let chair = document.querySelectorAll(".chair-front");
let info = document.querySelector('#info-card');
let gray = document.getElementById("gray");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
};

pictures.forEach(link => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("picture-grow");
      link.classList.add('grayscale');
      link.classList.remove('z-index-1000');
    });
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("picture-grow");
      link.classList.remove('grayscale');
      link.classList.add('z-index-1000');
    })
});

mail.forEach(mail => {
  mail.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("picture-grow");
    mouseCursor.classList.remove("z-index-1000");
  });
  mail.addEventListener("mouseover", () => {
    mouseCursor.classList.add("picture-grow");
    mouseCursor.classList.add("z-index-1000");
  });
});

background.forEach(bg => {
  bg.addEventListener("mouseleave", () => {
    year.classList.add("hidden");
    year.classList.remove("z-index-1000");
  });
  bg.addEventListener("mouseover", () => {
    year.classList.remove("hidden");
    year.classList.remove("z-index-1000");
  });
});

chair.forEach(c => {
  c.addEventListener("mouseleave", () => {
    year.classList.add("hidden");
  });
  c.addEventListener("mouseover", () => {
    year.classList.remove("hidden");
  });
});

// -------------CARD INFO DISPLAY-------------- //

ac.addEventListener("click", showInfo);
gray.addEventListener("click", hideInfo);

function showInfo() {
  info.classList.add('open');
  gray.classList.add('open');
};

function hideInfo() {
  info.classList.remove('open');
  gray.classList.remove('open');
};

// -------------NAVBAR EFFECT---------------- //

ac.addEventListener("mouseover", () => {
  ac.textContent = "STUDIO";
  ac.style.color = "#70C9FC";
});

ac.addEventListener("mouseleave", () => {
  ac.textContent = "AC";
  ac.style.color = "#649d66";
});

o.addEventListener("mouseover", () => {
  o.textContent = "Objet";
  o.style.color = "#649d66";
});

o.addEventListener("mouseleave", () => {
  o.textContent = "O";
  o.style.color = "#649d66";
});

s.addEventListener("mouseover", () => {
  s.textContent = "Space";
  s.style.color = "#70C9FC";
});

s.addEventListener("mouseleave", () => {
  s.textContent = "S";
  s.style.color = "#70C9FC";
});

// ----------HOVER YEAR COLOR RED------------ //

let year2017 = document.querySelector("#project-year-2017");
let pictures2017 = document.querySelectorAll(".pictures-2017");

pictures2017.forEach(pictures => {
  pictures.addEventListener("mouseover", () => {
    year2017.style.color = "#EE8070";
  });
  pictures.addEventListener("mouseleave", () => {
    year2017.style.color = "";
  });
});

let year2019 = document.querySelector("#project-year-2019");
let pictures2019 = document.querySelectorAll(".pictures-2019");

pictures2019.forEach(pictures => {
  pictures.addEventListener("mouseover", () => {
    year2019.style.color = "#EE8070";
  });
  pictures.addEventListener("mouseleave", () => {
    year2019.style.color = "";
  });
});

let year2020 = document.querySelector("#project-year-2020");
let pictures2020 = document.querySelectorAll(".pictures-2020");

pictures2020.forEach(pictures => {
  pictures.addEventListener("mouseover", () => {
    year2020.style.color = "#EE8070";
  });
  pictures.addEventListener("mouseleave", () => {
    year2020.style.color = "";
  });
});

// -----------TOGGLE DIV OPEN-------------- //

let showPicturesHide = document.querySelector(".show-pictures-hide");
let openPicHide = document.querySelector(".open-pictures");

function showLastPictures() {
  showPicturesHide.classList.remove('active');
}

document.addEventListener('mouseup', function(e) {
  if (!openPicHide.contains(e.target)) {
    showPicturesHide.classList.add('active');
  };
});

let imgPic = document.querySelectorAll("img.pictures");

imgPic.forEach( img => {
  let openPic = img.closest(".open-pictures");
  let scrollY = img.closest(".scroll-y");
  let openPicImg = img.closest(".open-pictures img");
  let chairFront = document.querySelector(".chair-front");
  let showPictures = img.closest(".show-pictures");
  let allPictures = img.closest(".allpictures");

  img.addEventListener("click", () => {
    showPictures.style.display = "flex";
    showPictures.style.visibility = "visible";
    showPictures.style.height = "";
    showPictures.style.width = "auto";
    showPictures.style.padding = "0px 40px 40px 40px";
    showPictures.classList.add("active");
    openPic.style.width = "1100px";
    openPic.style.height = "calc(100vh - 84px)";
    openPic.classList.add("active");
    openPicImg.style.maxHeight = "30rem";
    openPicImg.style.maxWidth = "30rem";
    openPicImg.style.filter = "none";
    scrollY.style.height = "";
    scrollY.style.top = "0";
    chairFront.style.display = "none";
    year.style.opacity = "0";
    allPictures.style.position = "initial";
  });

  document.addEventListener('mouseup', function(e) {
    if (!openPic.contains(e.target)) {
      openPic.style.width = '250px';
      openPic.style.height = "80vh";
      openPic.classList.remove("active");
      openPicImg.style.maxHeight = "";
      openPicImg.style.maxWidth = "";
      openPicImg.style.left = "";
      openPicImg.style.filter = "";
      showPictures.style.display = "";
      showPictures.style.visibility = "";
      showPictures.style.height = "";
      showPictures.style.width = "";
      showPictures.style.padding = "";
      showPictures.classList.remove("active");
      scrollY.style.height = "0";
      chairFront.style.display = "";
      year.style.opacity = "";
      allPictures.style.position = "";
    }
  });

});
