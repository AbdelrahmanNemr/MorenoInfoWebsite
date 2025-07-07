// Gallery slider integration for gallery.html

const sliderImages = [
  {src: '../images/1.jpeg', alt: 'Gallery Image 1', title: 'Gallery Image 1', desc: 'Moreno Resort Gallery Image 1'},
  {src: '../images/2.jpeg', alt: 'Gallery Image 2', title: 'Gallery Image 2', desc: 'Moreno Resort Gallery Image 2'},
  {src: '../images/3.jpeg', alt: 'Gallery Image 3', title: 'Gallery Image 3', desc: 'Moreno Resort Gallery Image 3'},
  {src: '../images/4.jpeg', alt: 'Gallery Image 4', title: 'Gallery Image 4', desc: 'Moreno Resort Gallery Image 4'},
  {src: '../images/5.jpeg', alt: 'Gallery Image 5', title: 'Gallery Image 5', desc: 'Moreno Resort Gallery Image 5'},
  {src: '../images/6.jpeg', alt: 'Gallery Image 6', title: 'Gallery Image 6', desc: 'Moreno Resort Gallery Image 6'},
  {src: '../images/7.jpeg', alt: 'Gallery Image 7', title: 'Gallery Image 7', desc: 'Moreno Resort Gallery Image 7'},
  {src: '../images/8.jpeg', alt: 'Gallery Image 8', title: 'Gallery Image 8', desc: 'Moreno Resort Gallery Image 8'},
  {src: '../images/9.jpeg', alt: 'Gallery Image 9', title: 'Gallery Image 9', desc: 'Moreno Resort Gallery Image 9'},
  {src: '../images/10.jpeg', alt: 'Gallery Image 10', title: 'Gallery Image 10', desc: 'Moreno Resort Gallery Image 10'},
  {src: '../images/11.jpeg', alt: 'Gallery Image 11', title: 'Gallery Image 11', desc: 'Moreno Resort Gallery Image 11'},
  {src: '../images/12.jpeg', alt: 'Gallery Image 12', title: 'Gallery Image 12', desc: 'Moreno Resort Gallery Image 12'},
  {src: '../images/13.jpeg', alt: 'Gallery Image 13', title: 'Gallery Image 13', desc: 'Moreno Resort Gallery Image 13'},
  {src: '../images/14.jpeg', alt: 'Gallery Image 14', title: 'Gallery Image 14', desc: 'Moreno Resort Gallery Image 14'},
  {src: '../images/15.jpeg', alt: 'Gallery Image 15', title: 'Gallery Image 15', desc: 'Moreno Resort Gallery Image 15'},
  {src: '../images/16.jpeg', alt: 'Gallery Image 16', title: 'Gallery Image 16', desc: 'Moreno Resort Gallery Image 16'},
  {src: '../images/17.jpeg', alt: 'Gallery Image 17', title: 'Gallery Image 17', desc: 'Moreno Resort Gallery Image 17'},
  {src: '../images/18.jpeg', alt: 'Gallery Image 18', title: 'Gallery Image 18', desc: 'Moreno Resort Gallery Image 18'},
  {src: '../images/19.jpeg', alt: 'Gallery Image 19', title: 'Gallery Image 19', desc: 'Moreno Resort Gallery Image 19'},
  {src: '../images/20.jpeg', alt: 'Gallery Image 20', title: 'Gallery Image 20', desc: 'Moreno Resort Gallery Image 20'},
  {src: '../images/21.jpeg', alt: 'Gallery Image 21', title: 'Gallery Image 21', desc: 'Moreno Resort Gallery Image 21'},
  {src: '../images/22.jpeg', alt: 'Gallery Image 22', title: 'Gallery Image 22', desc: 'Moreno Resort Gallery Image 22'},
  {src: '../images/23.jpeg', alt: 'Gallery Image 23', title: 'Gallery Image 23', desc: 'Moreno Resort Gallery Image 23'},
  {src: '../images/24.jpeg', alt: 'Gallery Image 24', title: 'Gallery Image 24', desc: 'Moreno Resort Gallery Image 24'},
  {src: '../images/25.jpeg', alt: 'Gallery Image 25', title: 'Gallery Image 25', desc: 'Moreno Resort Gallery Image 25'},
  {src: '../images/26.jpeg', alt: 'Gallery Image 26', title: 'Gallery Image 26', desc: 'Moreno Resort Gallery Image 26'},
  {src: '../images/27.jpeg', alt: 'Gallery Image 27', title: 'Gallery Image 27', desc: 'Moreno Resort Gallery Image 27'},
  {src: '../images/28.jpeg', alt: 'Gallery Image 28', title: 'Gallery Image 28', desc: 'Moreno Resort Gallery Image 28'}
];

let currentSlide = 0;
let sliderInterval;

function renderSlider() {
  const slider = document.getElementById('gallery-slider');
  if (!slider) return;
  slider.innerHTML = `
    <button id="prev-slide" class="slider-nav-btn" aria-label="Previous Slide">&#8592;</button>
    <div class="slider-cards">
      ${sliderImages.map((img, i) => `
        <div class="card${i === 0 ? ' active' : ''}">
          <a href="${img.src}" data-lightbox="resort">
            <img src="${img.src}" alt="${img.alt}" />
          </a>
          <div class="card-info">
            <h3>${img.title}</h3>
            <p>${img.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
    <button id="next-slide" class="slider-nav-btn" aria-label="Next Slide">&#8594;</button>
  `;

  document.getElementById('prev-slide').onclick = function() {
    prevSlide();
    resetSliderInterval();
  };
  document.getElementById('next-slide').onclick = function() {
    nextSlide();
    resetSliderInterval();
  };
  startSliderInterval();
}

function showSlide(idx) {
  const slider = document.getElementById('gallery-slider');
  if (!slider) return;
  const cards = slider.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === idx);
    card.style.display = i === idx ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  showSlide(currentSlide);
}

function startSliderInterval() {
  sliderInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function resetSliderInterval() {
  clearInterval(sliderInterval);
  startSliderInterval();
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('gallery-slider')) {
    renderSlider();
    showSlide(currentSlide);
  }
});
function resetSliderInterval() {
  clearInterval(sliderInterval);
  startSliderInterval();
}

document.addEventListener('DOMContentLoaded', function() {
  // Home/galleries slider (old logic)
  document.querySelectorAll('.gallery-slider').forEach(function(sliderEl) {
    sliderEl.innerHTML = sliderImages.map((img, i) => `
      <div class=\"card${i === 0 ? ' active' : ''}\">
        <a href=\"${img.src}\" data-lightbox=\"resort\">
          <img src=\"${img.src}\" alt=\"${img.alt}\" />
        </a>
        <div class=\"card-info\">
          <h3>${img.title}</h3>
          <p>${img.desc}</p>
        </div>
      </div>
    `).join('');
  });
  startSliderInterval();

  // Animated card for gallery.html
  var animatedGallery = document.getElementById('animated-gallery-card');
  if (animatedGallery) {
    let idx = 0;
    function showAnimatedCard(i) {
      animatedGallery.innerHTML = `
        <div class="card fade-card" style="width:100%;max-width:350px;margin:0 auto;">
          <a href="${sliderImages[i].src}" data-lightbox="resort">
            <img src="${sliderImages[i].src}" alt="${sliderImages[i].alt}" style="width:100%;height:220px;object-fit:cover;border-radius:8px;" />
          </a>
          <div class="card-info">
            <h3>${sliderImages[i].title}</h3>
            <p>${sliderImages[i].desc}</p>
          </div>
        </div>
      `;
    }
    showAnimatedCard(idx);
    setInterval(function() {
      idx = (idx + 1) % sliderImages.length;
      // Fade out, then in
      let card = animatedGallery.querySelector('.fade-card');
      if(card) {
        card.style.opacity = 0;
        setTimeout(function() {
          showAnimatedCard(idx);
          let newCard = animatedGallery.querySelector('.fade-card');
          if(newCard) {
            newCard.style.opacity = 0;
            setTimeout(function() { newCard.style.transition = 'opacity 0.7s'; newCard.style.opacity = 1; }, 10);
          }
        }, 400);
      } else {
        showAnimatedCard(idx);
      }
    }, 2500);
  }
});

// تأثير بسيط: عند تمرير الماوس على البطاقة، تتحرك للأعلى وتزداد الظلال
// (التأثير الأساسي موجود في CSS لكن سنضيف أنيميشن لطيف بالـ JS)
document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s';
      card.style.transform = 'translateY(-8px) scale(1.04)';
      card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
});

// ميزة إضافية: عند الضغط مرتين على صورة بطاقة، تكبر الصورة (zoom) وتظهر فوق باقي الصفحة
// (إغلاقها عند الضغط خارجها)
document.addEventListener('DOMContentLoaded', function() {
  var gallery = document.getElementById('gallery');
  if (!gallery) return;
  gallery.addEventListener('dblclick', function(e) {
    var img = e.target.closest('img');
    if(img) {
      showZoom(img.src);
    }
  });
});

// Inject .hidden-image CSS rule dynamically on DOMContentLoaded
(function() {
  var style = document.createElement('style');
  style.textContent = '.hidden-image { display: none; }';
  document.head.appendChild(style);
})();

function showZoom(src) {
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.8)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;
  overlay.style.cursor = 'zoom-out';

  var image = document.createElement('img');
  image.src = src;
  image.style.maxWidth = '90vw';
  image.style.maxHeight = '90vh';
  image.style.borderRadius = '12px';
  image.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';

  overlay.appendChild(image);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function() {
    overlay.remove();
  });
}
// تم استبدال السلايدر بكود Swiper.js في gallery.html بناءً على طلب المستخدم. الكود القديم معطل.

document.addEventListener('DOMContentLoaded', function() {
  // مصفوفة أسماء الصور (تعديل حسب الموجود فعلياً)
  const images = [
    '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg',
    '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg',
    '20.jpeg', '21.jpeg', '22.jpeg', '23.jpeg', '24.jpeg', '25.jpeg', '26.jpeg', '27.jpeg', '28.jpeg'
  ];
  let activeIndex = 0;
  let animating = false;

  const slider = document.querySelector('.gallery-3d-slider');
  const dots = document.querySelectorAll('.gallery-3d-dot');

  function renderSlides(index) {
    // احذف كل العناصر القديمة
    slider.innerHTML = '';
    // أضف الثلاثة صور فقط
    for (let i = 0; i < 3; i++) {
      let imgIndex = (index + i) % images.length;
      let div = document.createElement('div');
      div.className = 'gallery-3d-slide';
      if (i === 0) div.classList.add('active');
      if (i === 1) div.classList.add('next');
      if (i === 2) div.classList.add('next2');
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.marginRight = i<2 ? '20px' : '0';
      let img = document.createElement('img');
      img.src = `../images/${images[imgIndex]}`;
      img.alt = `Gallery ${imgIndex+1}`;
      img.style.width = '260px';
      img.style.height = '340px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '18px';
      img.style.boxShadow = '0 6px 32px #0002';
      img.style.marginRight = i<2 ? '20px' : '0';
      img.style.transition = 'transform 0.2s, box-shadow 0.2s';
      img.onmouseover = () => { img.style.transform = 'scale(1.045)'; img.style.boxShadow = '0 12px 44px #0003'; };
      img.onmouseout = () => { img.style.transform = 'scale(1)'; img.style.boxShadow = '0 6px 32px #0002'; };
      div.appendChild(img);
      slider.appendChild(div);
    }
    // أضف الأحداث على الكروت
    Array.from(slider.children).forEach((slide, i) => {
      slide.addEventListener('click', () => {
        if (i === 1) {
          nextSlide();
        } else if (i === 2) {
          nextSlide(); nextSlide();
        }
      });
    });
  }

  function updateGallery3D(index) {
    if (animating) return;
    animating = true;
    renderSlides(index);
    // تحديث المؤشرات الثلاثة فقط
    dots.forEach(dot => dot.classList.remove('active', 'next', 'next2'));
    dots[0].classList.add('active');
    dots[1].classList.add('next');
    dots[2].classList.add('next2');
    setTimeout(() => { animating = false; }, 700);
  }

  function nextSlide() {
    activeIndex = (activeIndex + 1) % images.length;
    updateGallery3D(activeIndex);
  }
  function prevSlide() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    updateGallery3D(activeIndex);
  }

  // المؤشرات
  dots[0].addEventListener('click', () => {
    updateGallery3D(activeIndex);
  });

  // كود الهيدر الجديد للهواتف (إظهار/إخفاء القائمة)
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.elementor-menu-toggle');
  var nav = document.querySelector('.nav-menu');
  var body = document.body;
  if(menuToggle && nav) {
    function toggleMenu() {
      var expanded = body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
    menuToggle.addEventListener('click', function(e) {
      toggleMenu();
      e.stopPropagation();
    });
    menuToggle.addEventListener('keydown', function(e) {
      if(e.key === 'Enter' || e.key === ' ') {
        toggleMenu();
        e.preventDefault();
      }
    });
    // إغلاق القائمة عند الضغط خارج overlay أو على أي عنصر
    window.addEventListener('click', function(e) {
      if(body.classList.contains('menu-open')) {
        if(!nav.contains(e.target) && e.target!==menuToggle) {
          body.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

  dots[1].addEventListener('click', () => {
    nextSlide();
  });
  dots[2].addEventListener('click', () => {
    nextSlide(); nextSlide();
  });

  // سحب بالماوس والموبايل
  let startX = null;
  if (slider) {
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', (e) => {
      if (startX === null) return;
      let endX = e.changedTouches[0].clientX;
      if (endX - startX > 40) prevSlide();
      else if (startX - endX > 40) nextSlide();
      startX = null;
    });
    let dragging = false;
    let dragStartX = null;
    slider.addEventListener('mousedown', (e) => {
      dragging = true;
      dragStartX = e.clientX;
    });
    slider.addEventListener('mouseup', (e) => {
      if (!dragging) return;
      let dragEndX = e.clientX;
      if (dragEndX - dragStartX > 40) prevSlide();
      else if (dragStartX - dragEndX > 40) nextSlide();
      dragging = false;
      dragStartX = null;
    });
    slider.addEventListener('mouseleave', () => {
      dragging = false;
      dragStartX = null;
    });
  }

  // Autoplay
  let autoplayInterval = setInterval(() => {
    nextSlide();
  }, 4000);
  [slider, ...dots].forEach(el => {
    if (el) {
      el.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
      el.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
          nextSlide();
        }, 4000);
      });
    }
  });

  // أول عرض
  renderSlides(activeIndex);
  updateGallery3D(activeIndex);
});


  // Autoplay
  let autoplayInterval = setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    updateGallery3D(activeIndex);
  }, 4000);

  // Pause autoplay on interaction
  [slider, ...dots].forEach(el => {
    if (el) {
      el.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
      el.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
          activeIndex = (activeIndex + 1) % slides.length;
          updateGallery3D(activeIndex);
        }, 4000);
      });
    }
  });
  // Ensure first slide is active on load
  updateGallery3D(activeIndex);
