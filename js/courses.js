// New file: js/courses.js
(function () {
  'use strict';

  const cards = Array.from(document.querySelectorAll('.course-card'));
  const tabs = Array.from(document.querySelectorAll('.course-tab'));
  const searchInput = document.getElementById('courseSearch');
  const emptyState = document.getElementById('emptyCourses');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');

  function userData() {
    return window.LS?.Auth?.getUser?.() || { name: 'Alex Morgan', currentLevel: 'Communicator' };
  }

  function getInitials(name) {
    return name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'AM';
  }

  function hydrateUser() {
    const user = userData();
    const name = user.name || 'Alex Morgan';
    const firstName = name.split(/\s+/)[0];
    const level = user.currentLevel || 'Communicator';
    const avatar = getInitials(name);
    const nameEl = document.getElementById('sidebarUserName');
    const levelEl = document.getElementById('sidebarUserLevel');
    const sidebarAvatar = document.getElementById('sidebarAvatar');
    const topbarAvatar = document.getElementById('topbarAvatar');
    if (nameEl) nameEl.textContent = name;
    if (levelEl) levelEl.textContent = `${level} · Level 4`;
    if (sidebarAvatar) sidebarAvatar.textContent = avatar;
    if (topbarAvatar) topbarAvatar.textContent = avatar;
    document.title = `Courses · ${name} | LingoSphere`;
    return firstName;
  }

  function showToast(message) {
    if (window.LS?.Toast?.show) {
      window.LS.Toast.show(message);
      return;
    }
    window.alert(message);
  }

  function applyFilters() {
    const activeTab = document.querySelector('.course-tab.active');
    const filter = activeTab?.dataset.filter || 'all';
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const matchesFilter = filter === 'all' || card.dataset.status === filter || card.dataset.category === filter;
      const matchesSearch = !query || (card.dataset.search || '').includes(query) || card.querySelector('h3')?.textContent.toLowerCase().includes(query);
      const show = matchesFilter && matchesSearch;
      card.classList.toggle('is-hidden', !show);
      if (show) visible += 1;
    });

    if (emptyState) emptyState.hidden = visible > 0;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', applyFilters);

  clearFiltersBtn?.addEventListener('click', () => {
    searchInput.value = '';
    document.querySelector('.course-tab.active')?.classList.remove('active');
    const allTab = document.querySelector('.course-tab[data-filter="all"]');
    allTab?.classList.add('active');
    tabs.forEach(tab => tab.setAttribute('aria-selected', tab === allTab ? 'true' : 'false'));
    applyFilters();
  });

  document.querySelectorAll('.course-action').forEach(button => {
    button.addEventListener('click', () => {
      const courseName = button.dataset.course || 'course';
      const isResume = button.classList.contains('primary');
      showToast(`${isResume ? 'Resuming' : 'Starting'} ${courseName}. Lesson player will be connected next.`);
    });
  });

  document.querySelectorAll('.coming-soon-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      showToast(`${link.textContent.trim()} is coming soon.`);
    });
  });

  document.getElementById('notificationBtn')?.addEventListener('click', () => {
    showToast('You have 3 new notifications.');
  });

  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (window.LS?.Auth?.logout) window.LS.Auth.logout();
  });

  const sidebar = document.getElementById('learningSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const openBtn = document.getElementById('sidebarOpen');
  const closeBtn = document.getElementById('sidebarClose');
  const setSidebar = open => {
    sidebar?.classList.toggle('open', open);
    backdrop?.classList.toggle('show', open);
    document.body.classList.toggle('sidebar-open', open);
  };
  openBtn?.addEventListener('click', () => setSidebar(true));
  closeBtn?.addEventListener('click', () => setSidebar(false));
  backdrop?.addEventListener('click', () => setSidebar(false));

  hydrateUser();
  applyFilters();
})();
