import './styles/main.css';

const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

const closeNavigation = () => {
    body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
};

navToggle?.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    body.classList.toggle('nav-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
});

const currentPage = body.dataset.page;
document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute('aria-current', 'page');
document.querySelectorAll('[data-year]').forEach((year) => {
    year.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {rootMargin: '0px 0px -8%', threshold: 0.08});
    revealElements.forEach((element) => revealObserver.observe(element));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const products = document.querySelectorAll('[data-category]');
const resultsCount = document.querySelector('.results-count');
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;
        let visibleCount = 0;
        filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
        products.forEach((product) => {
            const visible = category === 'all' || product.dataset.category === category;
            product.hidden = !visible;
            if (visible) visibleCount += 1;
        });
        if (resultsCount) resultsCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'piece' : 'pieces'}`;
    });
});

document.querySelectorAll('.save-button').forEach((button) => {
    button.addEventListener('click', () => {
        const isSaved = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', String(!isSaved));
        button.textContent = isSaved ? '♡' : '♥';
    });
});

document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = form.querySelector('.form-status');
        if (status) status.textContent = form.classList.contains('contact-form')
            ? 'Thanks—this demo is ready to connect to your preferred form service.'
            : 'You’re on the list. Watch this space.';
        form.reset();
    });
});
