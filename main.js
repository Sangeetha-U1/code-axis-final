/* ============================================
   CODE AXIS - GLOBAL JAVASCRIPT
   ============================================ */

'use strict';

// ---- SIDEBAR ----
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const topNavbar = document.getElementById('topNavbar');
const sidebarToggle = document.getElementById('sidebarToggle');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
  if (window.innerWidth <= 992) {
    sidebar && sidebar.classList.toggle('mobile-open');
    overlay && overlay.classList.toggle('active');
  } else {
    sidebar && sidebar.classList.toggle('collapsed');
    mainContent && mainContent.classList.toggle('collapsed');
    topNavbar && topNavbar.classList.toggle('collapsed');
  }
}

sidebarToggle && sidebarToggle.addEventListener('click', toggleSidebar);
overlay && overlay.addEventListener('click', () => {
  sidebar && sidebar.classList.remove('mobile-open');
  overlay && overlay.classList.remove('active');
});
// ================= MODALS =================
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ================= TOAST =================
const CodeAxis = {
  toast(message, type = "success") {
    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "8px";
    toast.style.color = "#fff";
    toast.style.fontWeight = "600";
    toast.style.zIndex = "9999";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
    toast.style.transition = "0.3s";

    if (type === "success") {
      toast.style.background = "#22C55E";
    } else if (type === "danger") {
      toast.style.background = "#EF4444";
    } else {
      toast.style.background = "#4F46E5";
    }

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";

      setTimeout(() => {
        toast.remove();
      }, 300);

    }, 2500);
  }
};

// ================= DARK MODE =================
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ================= USER MENU =================
const userBtn = document.getElementById("userAvatarBtn");
const userMenu = document.getElementById("userMenu");

if (userBtn && userMenu) {
  userBtn.addEventListener("click", () => {
    userMenu.classList.toggle("show");
  });
}

// ================= NOTIFICATIONS =================
const notifBtn = document.getElementById("notifBtn");
const notifPanel = document.getElementById("notifPanel");

if (notifBtn && notifPanel) {
  notifBtn.addEventListener("click", () => {
    notifPanel.classList.toggle("show");
  });
}

// ================= SIDEBAR =================
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (sidebarToggle && sidebar && overlay) {

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}
// ---- NOTIFICATIONS ----
const notifBtn = document.getElementById('notifBtn');
const notifPanel = document.getElementById('notifPanel');

notifBtn && notifBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  notifPanel && notifPanel.classList.toggle('open');
  userMenu && userMenu.classList.remove('open');
});

// ---- USER MENU ----
const userAvatarBtn = document.getElementById('userAvatarBtn');
const userMenu = document.getElementById('userMenu');

userAvatarBtn && userAvatarBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  userMenu && userMenu.classList.toggle('open');
  notifPanel && notifPanel.classList.remove('open');
});

document.addEventListener('click', () => {
  notifPanel && notifPanel.classList.remove('open');
  userMenu && userMenu.classList.remove('open');
});

// ---- MODALS ----
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// ---- DROPDOWNS ----
document.querySelectorAll('[data-dropdown]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const target = document.getElementById(btn.dataset.dropdown);
    target && target.classList.toggle('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
});

// ---- DARK MODE ----
const darkToggle = document.getElementById('darkModeToggle');
const savedTheme = localStorage.getItem('ca-theme');
if (savedTheme === 'dark') document.body.classList.add('dark-mode');

darkToggle && darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('ca-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ---- ACTIVE NAV ----
document.querySelectorAll('.nav-item[data-page]').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  });
});

// ---- SEARCH ----
const globalSearch = document.getElementById('globalSearch');
globalSearch && globalSearch.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('[data-searchable]').forEach(el => {
    el.closest('tr') && (el.closest('tr').style.display = el.textContent.toLowerCase().includes(query) ? '' : 'none');
  });
});

// ---- ALERTS AUTO-DISMISS ----
document.querySelectorAll('.alert[data-dismiss]').forEach(alert => {
  const delay = parseInt(alert.dataset.dismiss) || 4000;
  setTimeout(() => {
    alert.style.opacity = '0';
    alert.style.transform = 'translateY(-8px)';
    alert.style.transition = 'all 0.3s ease';
    setTimeout(() => alert.remove(), 300);
  }, delay);
});

// ---- FORM VALIDATION HELPERS ----
window.CodeAxis = {
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validatePhone(phone) {
    return /^[\+]?[0-9]{10,13}$/.test(phone.replace(/\s/g, ''));
  },
  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add('error');
    field.classList.remove('success');
    const err = field.parentElement.querySelector('.form-error');
    if (err) err.textContent = message;
  },
  showFieldSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.remove('error');
    field.classList.add('success');
    const err = field.parentElement.querySelector('.form-error');
    if (err) err.textContent = '';
  },
  clearField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.remove('error', 'success');
  },
  toast(message, type = 'success') {
    const toast = document.createElement('div');
    const icons = { success: '✅', danger: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.className = `alert alert-${type}`;
    toast.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;max-width:350px;animation:slideIn 0.3s ease;';
    toast.innerHTML = `<span class="alert-icon">${icons[type]}</span><div><div class="alert-title">${message}</div></div>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
  }
};

// ---- PROGRESS BARS ANIMATE ---- 
function animateProgressBars() {
  document.querySelectorAll('.progress-fill[data-width]').forEach(bar => {
    setTimeout(() => { bar.style.width = bar.dataset.width; }, 200);
  });
}
document.addEventListener('DOMContentLoaded', animateProgressBars);
// Global Search Functionality
const searchInput = document.getElementById("globalSearch");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();

  // Select searchable items
  const items = document.querySelectorAll(
    ".nav-item, .kpi-card, .activity-item, .emp-row"
  );

  items.forEach(item => {
    const text = item.innerText.toLowerCase();

    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
