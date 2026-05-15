export default function decorate(block) {

  const slides = [...block.children];

  // wrapper
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'slider-wrapper';

  // track
  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'slider-track';

  slides.forEach((slide) => {

    const cols = [...slide.children];

    const slideItem = document.createElement('div');
    slideItem.className = 'slide';

    // image
    const imageCol = cols[0];

    // content
    const contentCol = cols[1];

    slideItem.append(imageCol);
    slideItem.append(contentCol);

    sliderTrack.append(slideItem);
  });

  // buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'slider-btn prev';
  prevBtn.innerText = '<';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slider-btn next';
  nextBtn.innerText = '>';

  sliderWrapper.append(prevBtn);
  sliderWrapper.append(sliderTrack);
  sliderWrapper.append(nextBtn);

  block.innerHTML = '';
  block.append(sliderWrapper);

  // slider logic
  let currentSlide = 0;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide += 1;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updateSlider();
    }
  });
}