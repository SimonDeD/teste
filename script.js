const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.mobile-nav-toggle');

if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (
      document.body.classList.contains('nav-open') &&
      !sidebar.contains(event.target) &&
      event.target !== toggle
    ) {
      sidebar.classList.remove('open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.news-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((other) => other.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    cards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const isVisible = filter ? categories.includes(filter) : true;
      card.style.display = isVisible ? '' : 'none';
    });
  });
});

const activeTab = document.querySelector('.tab.active');
if (activeTab) {
  activeTab.click();
}

// Enable keyboard navigation for horizontal stories list
const storyList = document.querySelector('.story-list');
if (storyList) {
  storyList.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      storyList.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }, { passive: false });
}
