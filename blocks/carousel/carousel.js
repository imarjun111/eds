export default function decorate(block) {

  const rows = [...block.children];

  // main wrapper
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'slider-wrapper';

  // slider track
  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'slider-track';

  rows.forEach((row) => {

    const cols = [...row.children];

    // skip if invalid
    if (cols.length < 2) return;

    const slide = document.createElement('div');
    slide.className = 'slide';

    // image
    const image = cols[0];

    // content
    const content = cols[1];

    slide.append(image);
    slide.append(content);

    sliderTrack.append(slide);
  });

  // buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'slider-btn prev';
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slider-btn next';
  nextBtn.innerHTML = '&#10095;';

  sliderWrapper.append(prevBtn);
  sliderWrapper.append(sliderTrack);
  sliderWrapper.append(nextBtn);

  block.innerHTML = '';
  block.append(sliderWrapper);

  // slider functionality
  let currentSlide = 0;

  function updateSlider() {
    sliderTrack.style.transform =
      `translateX(-${currentSlide * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < sliderTrack.children.length - 1) {
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