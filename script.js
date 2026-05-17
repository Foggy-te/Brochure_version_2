document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = Number(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal, .reveal-card, .reveal-row').forEach((el) => observer.observe(el));

  const btn = document.getElementById('mockConsultBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      btn.innerHTML = '✓ Запрос отправлен';
      setTimeout(() => {
        alert('Запрос на персональный расчёт налоговой экономии отправлен (демо-режим брошюры).\nРекомендуем обратиться в Корпорацию развития Иркутской области.');
      }, 120);
    });
  }

  const tableRows = document.querySelectorAll('.reveal-row');
  tableRows.forEach((row, index) => {
    row.style.transitionDelay = `${index * 60}ms`;
  });
});
