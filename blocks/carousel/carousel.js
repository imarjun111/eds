// export default function decorate(block) {

//   const rows = [...block.children];

//   // main wrapper
//   const sliderWrapper = document.createElement('div');
//   sliderWrapper.className = 'slider-wrapper';

//   // slider track
//   const sliderTrack = document.createElement('div');
//   sliderTrack.className = 'slider-track';

//   rows.forEach((row) => {

//     const cols = [...row.children];

//     // skip if invalid
//     if (cols.length < 2) return;

//     const slide = document.createElement('div');
//     slide.className = 'slide';

//     // image
//     const image = cols[0];

//     // content
//     const content = cols[1];

//     slide.append(image);
//     slide.append(content);

//     sliderTrack.append(slide);
//   });

//   // buttons
//   const prevBtn = document.createElement('button');
//   prevBtn.className = 'slider-btn prev';
//   prevBtn.innerHTML = '&#10094;';

//   const nextBtn = document.createElement('button');
//   nextBtn.className = 'slider-btn next';
//   nextBtn.innerHTML = '&#10095;';

//   sliderWrapper.append(prevBtn);
//   sliderWrapper.append(sliderTrack);
//   sliderWrapper.append(nextBtn);

//   block.innerHTML = '';
//   block.append(sliderWrapper);

//   // slider functionality
//   let currentSlide = 0;

//   function updateSlider() {
//     sliderTrack.style.transform =
//       `translateX(-${currentSlide * 100}%)`;
//   }

//   nextBtn.addEventListener('click', () => {
//     if (currentSlide < sliderTrack.children.length - 1) {
//       currentSlide += 1;
//       updateSlider();
//     }
//   });

//   prevBtn.addEventListener('click', () => {
//     if (currentSlide > 0) {
//       currentSlide -= 1;
//       updateSlider();
//     }
//   });
// }

export default function decorate(block) {

  const rows = [...block.children];

  // main slider container
  const slider = document.createElement('div');
  slider.className = 'cards-slider';

  // track
  const track = document.createElement('div');
  track.className = 'cards-track';

  rows.forEach((row) => {

    const cols = [...row.children];

    if (cols.length < 2) return;

    const card = document.createElement('div');
    card.className = 'card-slide';

    // image
    const image = cols[0];

    // content
    const content = cols[1];

    card.append(image);
    card.append(content);

    track.append(card);
  });

  // buttons
  const controls = document.createElement('div');
  controls.className = 'slider-controls';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'prev-btn';
  prevBtn.innerHTML = '&#8592;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-btn';
  nextBtn.innerHTML = '&#8594;';

  controls.append(prevBtn);
  controls.append(nextBtn);

  slider.append(track);
  slider.append(controls);

  block.innerHTML = '';
  block.append(slider);

  // slider logic
//   let scrollAmount = 0;

//   nextBtn.addEventListener('click', () => {
//     scrollAmount += 320;
//     track.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth',
//     });
//   });

//   prevBtn.addEventListener('click', () => {
//     scrollAmount -= 320;

//     if (scrollAmount < 0) {
//       scrollAmount = 0;
//     }

//     track.scrollTo({
//       left: scrollAmount,
//       behavior: 'smooth',
//     });
//   });

// slider logic
// clone first 3 cards
    const cards = [...track.children];

    cards.slice(0, 3).forEach((card) => {
    const clone = card.cloneNode(true);
    track.append(clone);
    });

    const cardWidth = 324;

    let currentIndex = 0;

    function updateSlider(withTransition = true) {

    if (withTransition) {
        track.style.transition = 'transform 0.5s ease';
    } else {
        track.style.transition = 'none';
    }

    track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;
    }

    // next slide
    function nextSlide() {

    currentIndex++;

    updateSlider(true);

    // when cloned slides reached
    if (currentIndex >= cards.length) {

        setTimeout(() => {

        currentIndex = 0;

        updateSlider(false);

        }, 500);
    }
    }

    // prev slide
    function prevSlide() {

    if (currentIndex > 0) {

        currentIndex--;

        updateSlider(true);
    }
    }

    // buttons
    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('click', prevSlide);

    // autoplay
    setInterval(() => {

    nextSlide();

    }, 3000);
}