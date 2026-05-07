const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
const chips = document.querySelectorAll('.chip');
const searchInput = document.querySelector('#guide-search');
const clearSearch = document.querySelector('#clear-search');
const guideCards = document.querySelectorAll('.guide-card');
const emptyState = document.querySelector('#empty-state');
const submitForm = document.querySelector('#submit-form');
const formMessage = document.querySelector('#form-message');

let activeFilter = 'all';

function normalize(value) {
  return value.trim().toLowerCase();
}

function filterGuides() {
  const keyword = normalize(searchInput.value);
  let visibleCount = 0;

  guideCards.forEach((card) => {
    const tags = card.dataset.tags.split(' ');
    const title = normalize(card.dataset.title);
    const content = normalize(card.textContent);
    const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
    const matchesKeyword = !keyword || title.includes(keyword) || content.includes(keyword);
    const shouldShow = matchesFilter && matchesKeyword;

    card.hidden = !shouldShow;
    if (shouldShow) visibleCount += 1;
  });

  emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    filterGuides();
  });
});

searchInput.addEventListener('input', filterGuides);

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  filterGuides();
});

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = '投稿已记录！上线后可把这里接入真实后端或表单服务。';
  submitForm.reset();
});
