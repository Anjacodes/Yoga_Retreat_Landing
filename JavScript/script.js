// Select elements

const hamburgerBtn = document.querySelector('nav > a');
const closeBtn = document.querySelector('.mobileMenu > a');
const mobileMenu = document.querySelector('.mobileMenu');
const body = document.querySelector('body');
const mobMenuLinks = document.querySelectorAll('.mobileMenu > ul > li > a');
const teachersCont = document.getElementById('teachersCont');
const teachersCont2 = document.getElementById('teachersCont2');
const more = document.querySelector('.more');

// Add Event Listeners

// Hamburger Menu

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.style.overflow = 'hidden';
});

// Mobile Menu Close Button

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.style.overflow = 'auto';
});

// Mobile Menu Links
mobMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    body.style.overflow = 'auto';
  });
});

// Create Javascript Objects for Teacher Section

const teacher1 = {
  image: 'images/yoga_woman_square.jpg',
  alt: 'Female Yoga Teacher meditating',
  name: 'Jane Doe',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.',
};

const teacher2 = {
  image: 'images/yoga_man_square.jpg',
  alt: 'Male Yoga Teacher meditating',
  name: 'John Doe',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.',
};

const teacher3 = {
  image: 'images/massage_square.jpg',
  alt: 'Massage therapist',
  name: 'Levi Smith',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.',
};

const teacher4 = {
  image: 'images/chef_square.jpg',
  alt: 'Female chef portrait',
  name: 'Amy Meyer',
  subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.',
};

const teachers = [teacher1, teacher2];
const teachers2 = [teacher3, teacher4];

// Function to create HTML

const teachersHtmlTemplate = (obj) => `
<div class="imgCont">
  <img class="backgroundImg" src="images/icons/grid.png" alt="background icon">
  <img class="teacherImage" src="${obj.image}" alt="${obj.alt}"/>
</div>
  <div class="teacherCont">
    <h4 class="teacherName">${obj.name}</h4>
    <hr class="separator">
    <h5 class="teacherSubtitle">${obj.subtitle}</h5>
    <p class="teacherDescription">${obj.description}</p>
  </div>`;

// make function to generate html

const loadTeachers = (arr) => {
  arr.forEach((teacher) => {
    const dinContent = document.createDocumentFragment();
    const newLi = document.createElement('li');

    newLi.innerHTML = teachersHtmlTemplate(teacher);
    dinContent.appendChild(newLi);
    teachersCont.appendChild(dinContent);
  });
};

// Append template

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    loadTeachers(teachers);
    more.addEventListener('click', () => {
      loadTeachers(teachers2);
      more.style.display = 'none';
    });
  } else {
    loadTeachers(teachers);
    loadTeachers(teachers2);
  }
});