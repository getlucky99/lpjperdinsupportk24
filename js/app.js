// ==================== LOGO INJECTION ====================
const LOGO_B64 = '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';
const LOGO_SRC = 'data:image/jpeg;base64,' + LOGO_B64;

function injectLogos() {
  const loginWrap = document.getElementById('login-logo-real');
  if (loginWrap) {
    loginWrap.innerHTML = '<img src="' + LOGO_SRC + '" alt="Apotek K24" class="login-logo-img">';
  }
  const sidebarWrap = document.getElementById('sidebar-logo-wrap');
  if (sidebarWrap) {
    sidebarWrap.innerHTML = '<img src="' + LOGO_SRC + '" alt="K24" class="sidebar-logo-img">';
  }
  // About page logo
  const aboutWrap = document.getElementById('about-logo-wrap');
  if (aboutWrap) {
    aboutWrap.innerHTML = '<img src="' + LOGO_SRC + '" alt="Apotek K24" class="about-k24-logo-img">';
  }
}

/* ============================================================
   APOTEK K24 - Aplikasi Perjalanan Dinas
   app.js - Main Application Logic (Fixed)
   ============================================================ */

// ==================== STATE ====================
const APP = {
  isDemo: true,
  currentUser: null,
  currentLaporan: null,
  laporanList: [],
  settings: {},
  kategoriDinas: ['PREOP', 'PM (Preventive Maintenance)', 'Visite'],
  kategoriPerjalanan: ['Transport Utama', 'Transport Lokal', 'Uang Operasional Harian', 'Penginapan'],
  currentStep: 0,
  radRows: [],
  rpdRows: [],
  notaRows: [],
  users: [],
  enterNavReady: false
};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  setupLoginEnter();
  injectLogos();
  showLoginPage();
});

function showLoginPage() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app-screen').style.display  = 'none';
  document.body.style.background = 'linear-gradient(135deg, #e8f5e5 0%, #f0faf0 50%, #fff8e1 100%)';
}

function showAppScreen() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-screen').style.display  = 'flex';
  document.body.style.background = 'var(--bg-main, #f0f4f0)';
}

// ==================== STORAGE ====================
// ==================== STORAGE & API ====================
// Mode otomatis: jika scriptUrl terkonfigurasi → pakai Google Sheets
// Jika tidak → pakai localStorage (mode demo)

function isLiveMode() {
  return !!(APP.settings?.scriptUrl && APP.settings.scriptUrl.trim());
}

function updateModeIndicator() {
  const live = isLiveMode();
  const el   = document.getElementById('sidebar-mode-text');
  if (el) {
    el.textContent = live ? 'Mode Live' : 'Mode Demo';
    el.style.color = live ? '#4ade80' : '';
    el.style.fontWeight = live ? '700' : '';
    // Update ikon parent
    const icon = el.previousElementSibling;
    if (icon) icon.style.color = live ? '#4ade80' : '';
  }
}

async function apiCall(action, payload, retries) {
  const baseUrl = APP.settings.scriptUrl;
  if (!baseUrl) throw new Error('URL Apps Script belum dikonfigurasi');
  retries = retries === undefined ? 2 : retries;

  const jsonPayload = JSON.stringify({ action, ...(payload||{}) });

  // Selalu pakai GET dengan ?data= — paling kompatibel dengan Apps Script
  // GET tidak pernah trigger CORS preflight
  const separator = baseUrl.includes('?') ? '&' : '?';
  const url = baseUrl + separator + 'data=' + encodeURIComponent(jsonPayload);

  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method  : 'GET',
        redirect: 'follow',
        cache   : 'no-store',
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      if (!text || !text.trim()) throw new Error('Response kosong dari server');
      let data;
      try {
        data = JSON.parse(text);
      } catch(e) {
        // Apps Script kadang return HTML error page
        if (text.includes('<html') || text.includes('<!DOCTYPE')) {
          throw new Error('Server return HTML bukan JSON — pastikan Apps Script sudah di-deploy ulang sebagai Web App');
        }
        throw new Error('Response bukan JSON: ' + text.substring(0, 100));
      }
      if (data && data.error) throw new Error(data.error);
      return data;
    } catch(e) {
      lastError = e;
      if (attempt < retries) {
        // Tunggu sebentar sebelum retry
        await new Promise(r => setTimeout(r, 800 * (attempt + 1)));
      }
    }
  }
  throw lastError;
}

function loadFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem('lpj_k24_data') || '{}');
    if (saved.laporanList)        APP.laporanList        = saved.laporanList;
    if (saved.kategoriDinas)      APP.kategoriDinas      = saved.kategoriDinas;
    if (saved.kategoriPerjalanan) APP.kategoriPerjalanan = saved.kategoriPerjalanan;
    if (saved.settings)           APP.settings           = saved.settings;
    if (saved.users && saved.users.length) APP.users     = saved.users;
  } catch(e) { console.warn('loadFromStorage error:', e); }
  ensureDemoUsers();
}

function ensureDemoUsers() {
  const DEMO = [
    { nama:'admin123', password:'admin123', role:'Super Admin',   jabatan:'Super Admin', divisi:'IT', bank:'', rekening:'', cabang:'', atasNama:'Admin K24' },
    { nama:'support',  password:'123',      role:'IT Pelaksana',  jabatan:'IT Support',  divisi:'IT', bank:'BCA', rekening:'6005368134', cabang:'Yogyakarta', atasNama:'Support' }
  ];
  if (!APP.users || APP.users.length === 0) {
    APP.users = DEMO.slice();
  } else {
    DEMO.forEach(d => { if (!APP.users.find(u => u.nama === d.nama)) APP.users.unshift(d); });
  }
  saveToStorage();
}

function saveToStorage() {
  try {
    localStorage.setItem('lpj_k24_data', JSON.stringify({
      laporanList: APP.laporanList, kategoriDinas: APP.kategoriDinas,
      kategoriPerjalanan: APP.kategoriPerjalanan, users: APP.users, settings: APP.settings
    }));
  } catch(e) { console.warn('saveToStorage error:', e); }
}

// ---- Refresh semua UI setelah data berubah ----
function refreshUI() {
  try { updateStats(); }         catch(e) { console.warn('updateStats:', e); }
  try { renderRecentTable(); }   catch(e) { console.warn('renderRecentTable:', e); }
  try { renderLaporanTable(); }  catch(e) { console.warn('renderLaporanTable:', e); }
  try { updateModeIndicator(); } catch(e) {}
}

// ---- Live mode: load data dari Google Sheets ----
async function loadFromServer() {
  if (!isLiveMode()) return;
  try {
    showToast('Memuat data dari server...', 'success');
    // Load laporan
    const lData = await apiCall('getLaporanList', {});
    if (lData.data) APP.laporanList = lData.data;
    // Load users
    const uData = await apiCall('getUsers', {});
    if (uData.data) {
      // Merge: user dari server, pastikan demo user tetap ada di local
      APP.users = uData.data.map(u => ({
        id       : u.ID_User,
        nama     : u.Nama,
        username : u.Username,
        password : '',
        role     : u.Role,
        jabatan  : u.Jabatan,
        divisi   : u.Divisi,
        bank     : u.Bank,
        rekening : u.Rekening,
        cabang   : u.Cabang,
        atasNama : u.AtasNama,
      }));
    }
    // Load kategori
    const kData = await apiCall('getKategori', {});
    if (kData.data && kData.data.length) APP.kategoriPerjalanan = kData.data;
    // Load usedIds dari server untuk cegah duplikasi ID
    try {
      const uidData = await apiCall('getUsedIds', {});
      if (uidData.data && Array.isArray(uidData.data)) {
        if (!APP.settings.usedIds) APP.settings.usedIds = [];
        uidData.data.forEach(id => {
          if (!APP.settings.usedIds.includes(id)) APP.settings.usedIds.push(id);
        });
      }
    } catch(e) { console.warn('getUsedIds skip:', e.message); }

    syncUsedIdsFromServer();
    saveToStorage();
    updateModeIndicator();
    showToast('Data berhasil dimuat dari server.', 'success');
  } catch(e) {
    console.warn('loadFromServer error:', e);
    showToast('Gagal konek server, menggunakan data lokal.', 'warning');
  }
  syncUsedIdsFromServer();
  // Selalu refresh UI setelah load (berhasil atau gagal)
  refreshUI();
}

// ---- Live mode: login via server ----
async function loginViaServer(username, password) {
  const data = await apiCall('login', { username, password });
  if (!data.success) throw new Error(data.msg || 'Login gagal');
  const u = data.user;
  return {
    id       : u.ID_User,
    nama     : u.Nama,
    username : u.Username,
    password : '',
    role     : u.Role,
    jabatan  : u.Jabatan,
    divisi   : u.Divisi,
    bank     : u.Bank,
    rekening : u.Rekening,
    cabang   : u.Cabang,
    atasNama : u.AtasNama,
  };
}

// ---- Live mode: simpan laporan ke server ----
async function saveLaporanToServer(laporan) {
  if (!isLiveMode()) return;
  try {
    await apiCall('saveLaporan', { laporan, username: APP.currentUser?.nama });
  } catch(e) {
    console.warn('saveLaporanToServer error:', e);
    showToast('Gagal simpan ke server: ' + e.message, 'warning');
  }
}

// ---- Live mode: hapus laporan dari server ----
async function deleteLaporanFromServer(id) {
  if (!isLiveMode()) return;
  await apiCall('deleteLaporan', { id });
}



// ==================== ENTER KEY: LOGIN ====================
function setupLoginEnter() {
  const un = document.getElementById('username');
  const pw = document.getElementById('password');
  if (un) un.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (pw) pw.focus(); } });
  if (pw) pw.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doLogin(); } });
}

// ==================== ENTER KEY: FORM WIZARD ====================
function setupEnterNav() {
  if (APP.enterNavReady) return;
  APP.enterNavReady = true;
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const formPage = document.getElementById('page-form');
    if (!formPage || !formPage.classList.contains('active')) return;
    const active = document.activeElement;
    if (!active || !['INPUT','SELECT'].includes(active.tagName)) return;
    if (['file','button','submit','checkbox','radio'].includes(active.type)) return;
    const sel = `#form-step-${APP.currentStep} input:not([type=file]):not([type=hidden]):not([type=checkbox]):not([type=radio]), #form-step-${APP.currentStep} select`;
    const focusable = [...document.querySelectorAll(sel)].filter(el => !el.disabled && el.offsetParent !== null);
    const idx = focusable.indexOf(active);
    if (idx >= 0 && idx < focusable.length - 1) {
      e.preventDefault();
      focusable[idx + 1].focus();
    }
    // Sengaja TIDAK auto-klik Save saat Enter di input terakhir (no. 5)
    // Tombol Save hanya bisa diklik mouse/tap
  });
}

// ==================== LOGIN ====================
function togglePassword() {
  const pw = document.getElementById('password');
  const icon = document.getElementById('pw-icon');
  if (pw.type === 'password') { pw.type = 'text';     icon.className = 'fas fa-eye-slash'; }
  else                        { pw.type = 'password'; icon.className = 'fas fa-eye'; }
}

async function doLogin() {
  const nama = (document.getElementById('username').value || '').trim();
  const pw   = (document.getElementById('password').value  || '');
  if (!nama || !pw) { showToast('Masukkan nama dan kata sandi', 'error'); return; }

  const btn = document.querySelector('#login-screen .btn-login');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Masuk...'; }

  try {
    let user = null;
    if (isLiveMode()) {
      try {
        user = await loginViaServer(nama, pw);
      } catch(e) {
        // Fallback ke local jika server tidak bisa dijangkau
        user = APP.users.find(u => (
      (u.username && u.username.toLowerCase() === nama.toLowerCase()) ||
      u.nama.toLowerCase() === nama.toLowerCase()
    ) && u.password === pw) || null;
        if (!user) { showToast('Login gagal: ' + e.message, 'error'); return; }
        showToast('Server tidak terjangkau, menggunakan data lokal.', 'warning');
      }
    } else {
      user = APP.users.find(u => (
      (u.username && u.username.toLowerCase() === nama.toLowerCase()) ||
      u.nama.toLowerCase() === nama.toLowerCase()
    ) && u.password === pw) || null;
    }

    if (!user) { showToast('Nama atau kata sandi salah', 'error'); return; }
    APP.currentUser = user;
    enterApp();
    if (isLiveMode()) {
      await loadFromServer(); // loadFromServer sudah panggil refreshUI di dalamnya
    }
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-right-to-bracket"></i> Masuk'; }
  }
}

function enterApp() {
  showAppScreen();
  setupEnterNav();
  updateModeIndicator();
  refreshUI(); // render dashboard, tabel laporan, stats

  const u = APP.currentUser;
  const initials = u.nama.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('user-avatar-sidebar').textContent = initials;
  document.getElementById('user-details-sidebar').innerHTML =
    `<span class="user-name-sidebar">${u.nama}</span>` +
    `<span class="user-role-sidebar badge-role">${u.role}</span>`;
  document.getElementById('dash-greeting').textContent = `Selamat datang, ${u.nama}!`;

  fillSettingsForm();
  updateStats();
  renderRecentTable();
  renderLaporanTable();
  updateKategoriSelects();
  showPage('dashboard');
}

function doLogout() {
  APP.currentUser = null;
  APP.enterNavReady = false;
  // Reset field login
  const un = document.getElementById('username');
  const pw = document.getElementById('password');
  if (un) un.value = '';
  if (pw) pw.value = '';
  showLoginPage();
}

// ==================== NAVIGATION ====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById(`page-${page}`);
  if (el) el.classList.add('active');
  const navMap = { dashboard: 0, 'laporan-list': 1, settings: 2, about: 3 };
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item:not(.nav-logout)');
  if (navMap[page] !== undefined && navItems[navMap[page]]) navItems[navMap[page]].classList.add('active');
  const mc = document.getElementById('main-content');
  if (mc) mc.scrollTop = 0;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

// ==================== STATS ====================
function updateStats() {
  const myLaporan = getMyLaporan();
  const selesai = myLaporan.filter(l => l.status === 'Selesai').length;
  const draft    = myLaporan.filter(l => l.status === 'Draft').length;
  document.getElementById('stat-selesai').textContent = selesai;
  document.getElementById('stat-draft').textContent   = draft;
}

function getMyLaporan() {
  if (!APP.currentUser) return [];
  const role = APP.currentUser.role;
  // Super Admin, IT Koordinator, IT Administrasi → lihat semua laporan
  if (role === 'Super Admin' || role === 'IT Koordinator' || role === 'IT Administrasi') {
    return APP.laporanList;
  }
  // IT Pelaksana → hanya laporan milik sendiri
  return APP.laporanList.filter(l =>
    l.pelaksana && l.pelaksana.some(p => p.toLowerCase() === APP.currentUser.nama.toLowerCase())
  );
}

// ==================== LAPORAN TABLE ====================
function renderRecentTable() {
  const tbody = document.getElementById('recent-table-body');
  if (!tbody) return;
  const list = getMyLaporan().slice(-5).reverse();
  if (!list.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="6">Belum ada laporan. Mulai buat laporan baru!</td></tr>';
    return;
  }
  tbody.innerHTML = list.map(l => renderLaporanRow(l, 'recent')).join('');
}

function renderLaporanTable(filtered) {
  const tbody = document.getElementById('laporan-table-body');
  if (!tbody) return;
  const list = (filtered || getMyLaporan()).slice().reverse();
  if (!list.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="8">Belum ada laporan.</td></tr>';
    return;
  }
  tbody.innerHTML = list.map(l => renderLaporanRow(l, 'full')).join('');
}

function renderLaporanRow(l, mode) {
  const canEdit   = canEditLaporan(l);
  const canDelete = canDeleteLaporan(l);
  const canView   = canViewLaporan(l);

  // IT Pelaksana: sembunyikan baris laporan orang lain sama sekali
  if (!canView) return '';

  if (mode === 'recent') {
    return `<tr>
      <td><code style="font-size:11px">${l.id}</code></td>
      <td>${l.tujuan || '-'}</td>
      <td>${l.tglMulai || '-'}</td>
      <td>${l.kategori || '-'}</td>
      <td>${statusBadge(l.status)}</td>
      <td>
        <button class="btn-outline btn-sm" onclick="viewLaporan('${l.id}')" title="Lihat"><i class="fas fa-eye"></i></button>
        ${canEdit ? `<button class="btn-outline btn-sm" onclick="editLaporan('${l.id}')" title="Edit" style="margin-left:4px"><i class="fas fa-pen"></i></button>` : ''}
      </td>
    </tr>`;
  }
  return `<tr>
    <td><code style="font-size:11px">${l.id}</code></td>
    <td>${l.pelaksana ? l.pelaksana.join(', ') : '-'}</td>
    <td>${l.tujuan || '-'}</td>
    <td>${l.tglMulai || '-'}</td>
    <td>${l.tglSelesai || '-'}</td>
    <td>${l.kategori || '-'}</td>
    <td>${statusBadge(l.status)}</td>
    <td style="display:flex;gap:5px;flex-wrap:wrap">
      <button class="btn-outline btn-sm" onclick="viewLaporan('${l.id}')" title="Lihat"><i class="fas fa-eye"></i></button>
      ${canEdit   ? `<button class="btn-outline btn-sm" onclick="editLaporan('${l.id}')" title="Edit"><i class="fas fa-pen"></i></button>` : ''}
      ${canDelete ? `<button class="btn-danger  btn-sm" onclick="deleteLaporan('${l.id}')" title="Hapus"><i class="fas fa-trash"></i></button>` : ''}
      <button class="btn-outline btn-sm" onclick="quickPrint('${l.id}')" title="Print"><i class="fas fa-print"></i></button>
    </td>
  </tr>`;
}

function canEditLaporan(l) {
  if (!APP.currentUser) return false;
  const role  = APP.currentUser.role;
  const isOwn = l.pelaksana && l.pelaksana.some(p => p.toLowerCase() === APP.currentUser.nama.toLowerCase());

  if (role === 'Super Admin')     return true;               // semua bisa
  if (role === 'IT Koordinator')  return false;              // hanya lihat
  if (role === 'IT Administrasi') return true;               // edit semua, tidak hapus
  if (role === 'IT Pelaksana')    return isOwn;              // hanya milik sendiri
  return false;
}

function canDeleteLaporan(l) {
  if (!APP.currentUser) return false;
  const role  = APP.currentUser.role;
  const isOwn = l.pelaksana && l.pelaksana.some(p => p.toLowerCase() === APP.currentUser.nama.toLowerCase());

  if (role === 'Super Admin')     return true;               // hapus semua
  if (role === 'IT Koordinator')  return false;              // tidak bisa hapus
  if (role === 'IT Administrasi') return false;              // tidak bisa hapus
  if (role === 'IT Pelaksana')    return isOwn;              // hanya milik sendiri
  return false;
}

// canViewLaporan: apakah tombol View (mata) ditampilkan
function canViewLaporan(l) {
  if (!APP.currentUser) return false;
  const role  = APP.currentUser.role;
  const isOwn = l.pelaksana && l.pelaksana.some(p => p.toLowerCase() === APP.currentUser.nama.toLowerCase());

  if (role === 'Super Admin')     return true;
  if (role === 'IT Koordinator')  return true;               // lihat semua
  if (role === 'IT Administrasi') return true;               // lihat semua
  if (role === 'IT Pelaksana')    return isOwn;              // hanya milik sendiri
  return false;
}

function statusBadge(status) {
  const map = { Draft: 'badge-draft', Selesai: 'badge-selesai', Diajukan: 'badge-diajukan' };
  return `<span class="badge-status ${map[status] || 'badge-draft'}">${status || 'Draft'}</span>`;
}

function filterLaporan() {
  const from   = document.getElementById('filter-from').value;
  const to     = document.getElementById('filter-to').value;
  const tujuan = document.getElementById('filter-tujuan').value.toLowerCase();
  const status = document.getElementById('filter-status').value;
  const list   = getMyLaporan().filter(l => {
    if (from   && l.tglMulai  < from)                         return false;
    if (to     && l.tglSelesai > to)                          return false;
    if (tujuan && !l.tujuan?.toLowerCase().includes(tujuan))  return false;
    if (status && l.status !== status)                        return false;
    return true;
  });
  renderLaporanTable(list);
}

function clearFilter() {
  ['filter-from','filter-to','filter-tujuan'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('filter-status').value = '';
  renderLaporanTable();
}

// ==================== NEW LAPORAN ====================
function startNewLaporan() {
  if (APP.currentUser?.role === 'IT Koordinator') {
    showToast('IT Koordinator hanya bisa melihat laporan, tidak bisa membuat.', 'error');
    return;
  }
  APP.currentLaporan = {
    id: generateId(), status: 'Draft',
    pelaksana: [APP.currentUser?.nama || ''],
    tglMulai: '', tglSelesai: '', kategori: '',
    tujuan: '', tujuanList: [],
    jenisAnggaran: '', bebanDept: '', atasanLangsung: '', pimpinanDept: '', managerFA: '',
    tglPencairan: '', radItems: [], rpdItems: [], notaItems: [],
    totalRAD: 0, totalRPD: 0, totalNota: 0
  };
  APP.radRows  = [newRADRow()];
  APP.rpdRows  = [newRPDRow()];
  APP.notaRows = [newNotaRow()];
  APP.currentStep = 0;
  goToStep(0);
  fillStep0();
  document.getElementById('form-title').textContent      = 'Buat Laporan Baru';
  document.getElementById('form-id-display').textContent = `ID: ${APP.currentLaporan.id}`;
  showPage('form');
}

function editLaporan(id) {
  const l = APP.laporanList.find(x => x.id === id);
  if (!l) return;
  if (!canEditLaporan(l)) { showToast('Anda tidak memiliki akses edit laporan ini.', 'error'); return; }
  APP.currentLaporan = JSON.parse(JSON.stringify(l));
  APP.radRows  = (l.radItems  || []).map(r => ({...r}));
  APP.rpdRows  = (l.rpdItems  || []).map(r => ({...r}));
  APP.notaRows = (l.notaItems || []).map(r => ({...r}));
  if (!APP.radRows.length)  APP.radRows  = [newRADRow()];
  if (!APP.rpdRows.length)  APP.rpdRows  = [newRPDRow()];
  if (!APP.notaRows.length) APP.notaRows = [newNotaRow()];
  APP.currentStep = 0;
  goToStep(0);
  fillStep0();
  document.getElementById('form-title').textContent      = 'Edit Laporan';
  document.getElementById('form-id-display').textContent = `ID: ${l.id}`;
  showPage('form');
}

function viewLaporan(id)    { editLaporan(id); }
function quickPrint(id)     { const l = APP.laporanList.find(x => x.id === id); if (l) { APP.currentLaporan = l; printLaporan('detail'); } }

async function deleteLaporan(id) {
  if (!confirm('Yakin ingin menghapus laporan ini?')) return;
  // Catat ID yang dihapus agar tidak pernah dipakai lagi
  if (!APP.settings.usedIds) APP.settings.usedIds = [];
  if (id && !APP.settings.usedIds.includes(id)) APP.settings.usedIds.push(id);
  APP.laporanList = APP.laporanList.filter(l => l.id !== id);
  saveToStorage();
  if (isLiveMode()) {
    try { await deleteLaporanFromServer(id); }
    catch(e) { showToast('Laporan dihapus lokal, gagal hapus di server: '+e.message,'warning'); }
  }
  renderLaporanTable();
  renderRecentTable();
  updateStats();
  showToast('Laporan dihapus.', 'success');
}

function confirmBack() {
  if (confirm('Kembali ke dashboard? Perubahan yang belum disimpan akan hilang.')) showPage('dashboard');
}

// ==================== STEP 0 ====================
function fillStep0() {
  const l = APP.currentLaporan;
  const pList = document.getElementById('pelaksana-list');
  pList.innerHTML = '';
  const pelaksana = l.pelaksana?.length ? l.pelaksana : [APP.currentUser?.nama || ''];
  pelaksana.forEach((p, i) => addPelaksanaRow(p, i));

  document.getElementById('tgl-mulai').value         = normalizeDate(l.tglMulai)   || '';
  document.getElementById('tgl-selesai').value       = normalizeDate(l.tglSelesai) || '';
  document.getElementById('keterangan-umum').value   = l.keteranganUmum   || '';
  document.getElementById('atasan-langsung').value   = l.atasanLangsung   || '';
  document.getElementById('pimpinan-dept').value   = l.pimpinanDept   || '';
  document.getElementById('manager-fa').value      = l.managerFA      || '';

  // Multi-tujuan
  const tujuanList = document.getElementById('tujuan-list');
  tujuanList.innerHTML = '';
  const tujuans = Array.isArray(l.tujuanList) && l.tujuanList.length
    ? l.tujuanList
    : (l.tujuan ? [l.tujuan] : ['']);
  tujuans.forEach((t, i) => addTujuanRow(t, i));

  if (l.jenisAnggaran) {
    const radio = document.querySelector(`input[name="jenis-anggaran"][value="${l.jenisAnggaran}"]`);
    if (radio) { radio.checked = true; toggleAnggaranInput(); }
  }
  if (l.bebanDept) document.getElementById('beban-dept-input').value = l.bebanDept;
  updateKategoriSelects();
  if (l.kategori) document.getElementById('kategori-dinas').value = l.kategori;
}

// ---- Multi Tujuan ----
function addTujuanRow(nilai, idx) {
  const list = document.getElementById('tujuan-list');
  const div  = document.createElement('div');
  div.className   = 'tujuan-item';
  div.dataset.idx = idx;
  div.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:8px';

  const numBadge = document.createElement('span');
  numBadge.style.cssText = 'min-width:22px;height:22px;border-radius:50%;background:var(--k24-green);color:white;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0';
  numBadge.textContent = idx + 1;

  const inp = document.createElement('input');
  inp.type = 'text'; inp.value = nilai || '';
  inp.placeholder = `Tujuan ${idx + 1}...`;
  inp.style.flex = '1';
  inp.className = 'tujuan-input';
  inp.id = `tujuan-${idx}`;

  div.appendChild(numBadge);
  div.appendChild(inp);

  if (idx > 0) {
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn-danger btn-sm';
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    delBtn.style.flexShrink = '0';
    delBtn.addEventListener('click', () => {
      div.remove();
      renumberTujuan();
    });
    div.appendChild(delBtn);
  }
  list.appendChild(div);
}

function addTujuan() {
  const inputs = [...document.querySelectorAll('.tujuan-input')];
  const last   = inputs[inputs.length - 1];
  if (last && !last.value.trim()) {
    showToast('Isi tujuan sebelumnya terlebih dahulu.', 'warning');
    last.focus(); return;
  }
  addTujuanRow('', inputs.length);
}

function renumberTujuan() {
  const items = [...document.querySelectorAll('#tujuan-list .tujuan-item')];
  items.forEach((item, i) => {
    const badge = item.querySelector('span');
    const inp   = item.querySelector('.tujuan-input');
    if (badge) badge.textContent = i + 1;
    if (inp)   inp.placeholder   = `Tujuan ${i + 1}...`;
    item.dataset.idx = i;
  });
}

function getTujuanList() {
  return [...document.querySelectorAll('.tujuan-input')]
    .map(i => i.value.trim()).filter(Boolean);
}

function isMultiTujuan() {
  return (APP.currentLaporan.tujuanList?.length || 0) > 1;
}

function addPelaksanaRow(nama, idx) {
  const pList = document.getElementById('pelaksana-list');
  const div   = document.createElement('div');
  div.className   = 'pelaksana-item';
  div.dataset.idx = idx;

  // Ambil daftar user yang sudah terdaftar
  const userOptions = APP.users.map(u =>
    `<option value="${esc(u.nama)}" ${u.nama === nama ? 'selected' : ''}>${esc(u.nama)} — ${esc(u.jabatan||u.role)}</option>`
  ).join('');

  const selectHtml = `
    <div style="position:relative;flex:1">
      <i class="fas fa-user" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;font-size:13px"></i>
      <select class="pelaksana-select" id="pelaksana-${idx}"
        style="width:100%;padding:9px 12px 9px 34px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-family:var(--font-main);font-size:13px;background:white;color:var(--text-primary);outline:none;appearance:none;cursor:pointer;"
        onfocus="this.style.borderColor='var(--k24-green)';this.style.boxShadow='0 0 0 3px rgba(45,143,30,0.12)'"
        onblur="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
        <option value="">-- Pilih IT Pelaksana --</option>
        ${userOptions}
      </select>
      <i class="fas fa-chevron-down" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;font-size:11px"></i>
    </div>`;

  div.innerHTML = `
    ${selectHtml}
    ${idx === 0
      ? '<span class="badge-pj" style="flex-shrink:0">PJ</span>'
      : `<button class="btn-danger btn-sm" type="button" onclick="removePelaksana(this)" style="flex-shrink:0"><i class="fas fa-times"></i></button>`
    }`;
  pList.appendChild(div);
}

function addPelaksana() {
  const pList = document.getElementById('pelaksana-list');
  const idx   = pList.children.length;

  // Cek apakah baris sebelumnya sudah dipilih
  const selects = [...pList.querySelectorAll('.pelaksana-select')];
  const lastSel = selects[selects.length - 1];
  if (lastSel && !lastSel.value) {
    showToast('Pilih IT Pelaksana pada baris sebelumnya terlebih dahulu.', 'warning');
    lastSel.focus();
    return;
  }
  addPelaksanaRow('', idx);
  // Fokus ke select baru
  setTimeout(() => {
    const newSel = document.getElementById(`pelaksana-${idx}`);
    if (newSel) newSel.focus();
  }, 50);
}

function removePelaksana(btn) { btn.closest('.pelaksana-item').remove(); }

function toggleAnggaranInput() {
  const val = document.querySelector('input[name="jenis-anggaran"]:checked')?.value;
  const inp = document.getElementById('beban-dept-input');
  if (val === 'Beban Dept/Divisi') inp.classList.remove('hidden');
  else inp.classList.add('hidden');
}

function saveStep0() {
  const selects = [...document.querySelectorAll('.pelaksana-select')];
  const pelaksanaInputs = selects.map(s => s.value.trim()).filter(Boolean);
  if (!pelaksanaInputs.length) { showToast('Pilih minimal 1 IT Pelaksana.', 'error'); return; }
  if (selects.some(s => !s.value)) { showToast('Ada IT Pelaksana yang belum dipilih.', 'error'); return; }
  const unique = new Set(pelaksanaInputs);
  if (unique.size !== pelaksanaInputs.length) { showToast('Tidak boleh memilih pelaksana yang sama lebih dari satu kali.', 'error'); return; }

  const tujuanList = getTujuanList();
  if (!tujuanList.length) { showToast('Tujuan harus diisi minimal satu.', 'error'); return; }

  const tglMulai  = document.getElementById('tgl-mulai').value;
  const tglSelesai= document.getElementById('tgl-selesai').value;
  if (!tglMulai || !tglSelesai) { showToast('Tanggal mulai dan selesai harus diisi.', 'error'); return; }
  const jenisAnggaran = document.querySelector('input[name="jenis-anggaran"]:checked')?.value || '';
  Object.assign(APP.currentLaporan, {
    pelaksana   : pelaksanaInputs,
    tujuanList,
    tujuan      : tujuanList[0],
    keteranganUmum: (document.getElementById('keterangan-umum')?.value || '').trim(),
    tglMulai, tglSelesai,
    kategori       : document.getElementById('kategori-dinas').value,
    jenisAnggaran,
    bebanDept      : document.getElementById('beban-dept-input').value,
    atasanLangsung : document.getElementById('atasan-langsung').value,
    pimpinanDept   : document.getElementById('pimpinan-dept').value,
    managerFA      : document.getElementById('manager-fa').value
  });
  autoSaveLaporan();
  goToStep(1);
  renderRADTable();
  // Isi field tglPencairan dari data laporan
  const pcEl = document.getElementById('tgl-pencairan');
  if (pcEl) pcEl.value = normalizeDate(APP.currentLaporan.tglPencairan) || '';
}

// ==================== STEP 1: RAD ====================
function newRADRow() {
  return { detail:'', kategori:'', qty:1, satuan:0, subTotal:0, keterangan:'', tujuan:'', pelaksana:'' };
}

function buildTujuanOpts(selected) {
  const list = APP.currentLaporan.tujuanList || [APP.currentLaporan.tujuan || ''];
  return list.map(t => `<option value="${esc(t)}" ${selected===t?'selected':''}>${esc(t)}</option>`).join('');
}

function buildPelaksanaOpts(selected) {
  return (APP.currentLaporan.pelaksana||[]).map(p =>
    `<option value="${esc(p)}" ${selected===p?'selected':''}>${esc(p)}</option>`
  ).join('');
}

function renderRADTable() {
  const tbody   = document.getElementById('rad-tbody');
  const thead   = document.getElementById('rad-thead');
  tbody.innerHTML = '';
  const multi = (APP.currentLaporan.tujuanList?.length || 0) > 1;

  // Update header
  thead.innerHTML = `<tr>
    <th>No</th>
    ${multi ? '<th>Tujuan</th><th>IT Pelaksana</th>' : ''}
    <th>Detail Perjalanan</th>
    <th>Kategori</th>
    <th>QTY</th>
    <th>Satuan (Rp)</th>
    <th>Sub Total</th>
    <th>Keterangan</th>
    <th></th>
  </tr>`;

  APP.radRows.forEach((row, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="width:36px;text-align:center;color:#888">${i+1}</td>
      ${multi ? `
        <td>
          <select onchange="APP.radRows[${i}].tujuan=this.value" style="min-width:130px">
            <option value="">-- Tujuan --</option>
            ${buildTujuanOpts(row.tujuan)}
          </select>
        </td>
        <td>
          <select onchange="APP.radRows[${i}].pelaksana=this.value" style="min-width:120px">
            <option value="">-- Pelaksana --</option>
            ${buildPelaksanaOpts(row.pelaksana)}
          </select>
        </td>` : ''}
      <td><input type="text" value="${esc(row.detail)}" oninput="APP.radRows[${i}].detail=this.value" placeholder="Deskripsi..."></td>
      <td>
        <select onchange="APP.radRows[${i}].kategori=this.value">
          <option value="">-- Pilih --</option>
          ${APP.kategoriPerjalanan.map(k=>`<option value="${k}" ${row.kategori===k?'selected':''}>${k}</option>`).join('')}
        </select>
      </td>
      <td><input type="number" min="1" value="${row.qty}" oninput="updateRADRow(${i},'qty',this.value)" style="width:64px"></td>
      <td><input type="number" min="0" value="${row.satuan}" oninput="updateRADRow(${i},'satuan',this.value)" style="width:110px"></td>
      <td style="font-family:var(--font-mono);font-weight:600;color:var(--k24-green);white-space:nowrap" id="rad-sub-${i}">${formatRp(row.subTotal)}</td>
      <td><input type="text" value="${esc(row.keterangan)}" oninput="APP.radRows[${i}].keterangan=this.value" placeholder="Opsional"></td>
      <td><button class="del-row" type="button" onclick="deleteRADRow(${i})"><i class="fas fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
  });
  updateRADTotal();
  updateRADPreview();
}

function updateRADRow(idx, field, val) {
  APP.radRows[idx][field]    = parseFloat(val) || 0;
  APP.radRows[idx].subTotal  = APP.radRows[idx].qty * APP.radRows[idx].satuan;
  const el = document.getElementById(`rad-sub-${idx}`);
  if (el) el.textContent = formatRp(APP.radRows[idx].subTotal);
  updateRADTotal(); updateRADPreview();
  debounceSave(); // Fix 1: auto-save
}

function updateRADTotal() {
  const total = APP.radRows.reduce((s,r) => s+(r.subTotal||0), 0);
  document.getElementById('rad-total').textContent = formatRp(total);
  APP.currentLaporan.totalRAD = total;
}

function addRADRow()         { APP.radRows.push(newRADRow()); renderRADTable(); }
function deleteRADRow(idx)   {
  if (APP.radRows.length <= 1) { showToast('Minimal 1 baris harus ada.', 'warning'); return; }
  APP.radRows.splice(idx,1); renderRADTable();
}

function updateRADPreview() {
  const preview = document.getElementById('rad-preview-section');
  const tbody   = document.getElementById('rad-preview-tbody');
  const hasData = APP.radRows.some(r => r.subTotal > 0);
  if (!hasData) { preview.style.display='none'; return; }
  preview.style.display='block';
  const groups = {};
  APP.kategoriPerjalanan.forEach(k => groups[k] = { qty:0, total:0, items:[] });
  APP.radRows.forEach(r => { if (r.kategori) { groups[r.kategori].qty+=r.qty; groups[r.kategori].total+=r.subTotal; groups[r.kategori].items.push(r); }});
  let no=1;
  tbody.innerHTML = Object.entries(groups)
    .filter(([,v])=>v.total>0)
    .map(([k,v])=>`<tr><td>${no++}</td><td>${k}</td><td>${v.qty}</td><td>${v.items.length?formatRp(v.items[0].satuan):'-'}</td><td style="font-weight:700;font-family:var(--font-mono)">${formatRp(v.total)}</td></tr>`)
    .join('');
  const total = APP.radRows.reduce((s,r)=>s+(r.subTotal||0),0);
  document.getElementById('rad-preview-total').textContent = formatRp(total);
}

function saveStep1() {
  if (!APP.radRows.some(r=>r.subTotal>0)) { showToast('Tambahkan minimal 1 item RAD dengan nilai > 0.','error'); return; }
  const pencairan = document.getElementById('tgl-pencairan').value;
  APP.currentLaporan.tglPencairan = pencairan;
  APP.currentLaporan.radItems     = JSON.parse(JSON.stringify(APP.radRows));
  APP.currentLaporan.totalRAD     = APP.radRows.reduce((s,r)=>s+(r.subTotal||0),0);

  // Auto-populate RPD dari RAD jika RPD masih kosong
  const rpdBlank = APP.rpdRows.length === 0 ||
    (APP.rpdRows.length === 1 && !APP.rpdRows[0].detail && APP.rpdRows[0].subTotal === 0);
  if (rpdBlank) {
    APP.rpdRows = APP.radRows.map(r => ({
      detail      : r.detail,
      kategori    : r.kategori,
      qty         : r.qty,
      satuan      : 0,
      subTotal    : 0,
      keterangan  : '',
      nota        : '',
      radSatuan   : r.satuan,
      radSubTotal : r.subTotal,
      tujuan      : r.tujuan    || '',
      pelaksana   : r.pelaksana || '',
      tanggal     : ''
    }));
  }
  autoSaveLaporan();
  goToStep(2);
  renderRPDTable();
}

document.addEventListener('change', e => {
  if (e.target.id!=='tgl-pencairan') return;
  const selesai = document.getElementById('tgl-selesai')?.value;
  const hint    = document.getElementById('reimburse-hint');
  if (hint) hint.style.display = (selesai && e.target.value>selesai) ? 'flex' : 'none';
});

// ==================== STEP 2: RPD ====================
function newRPDRow() {
  return { detail:'', kategori:'', qty:1, satuan:0, subTotal:0, keterangan:'', nota:'',
           radSatuan:0, radSubTotal:0, tujuan:'', pelaksana:'', tanggal:'' };
}

// Tombol Sinkron RAD → RPD
function resetRPDFilter() {
  const sp = document.getElementById('rpd-filter-pelaksana');
  const st = document.getElementById('rpd-filter-tujuan');
  if (sp) sp.value = '';
  if (st) st.value = '';
  renderRPDTable();
}

function sinkronRAD() {
  if (!APP.radRows.some(r => r.subTotal > 0 || r.detail)) {
    showToast('Belum ada data RAD untuk disinkron.', 'warning'); return;
  }
  if (APP.rpdRows.some(r => r.subTotal > 0) &&
      !confirm('Data RPD yang sudah ada akan ditimpa oleh data RAD. Lanjutkan?')) return;

  APP.rpdRows = APP.radRows.map(r => ({
    detail      : r.detail,
    kategori    : r.kategori,
    qty         : r.qty,
    satuan      : 0,
    subTotal    : 0,
    keterangan  : '',
    nota        : '',
    radSatuan   : r.satuan,
    radSubTotal : r.subTotal,
    tujuan      : r.tujuan   || '',
    pelaksana   : r.pelaksana|| '',
    tanggal     : ''
  }));
  renderRPDTable();
  showToast('Data RAD berhasil disinkron ke RPD.', 'success');
}

function renderRPDTable() {
  const tbody = document.getElementById('rpd-tbody');
  const thead = document.getElementById('rpd-thead');
  tbody.innerHTML = '';
  const l         = APP.currentLaporan;
  const multi     = (l.tujuanList?.length || 0) > 1;
  const jmlPelaks = (l.pelaksana||[]).length;
  const jmlTujuan = (l.tujuanList||[l.tujuan]).filter(Boolean).length;

  // ---- Tentukan kondisi filter ----
  // K1: 1 pelaksana, 1 tujuan  → semua filter OFF
  // K2: 1 pelaksana, >1 tujuan → filter tujuan ON saja
  // K3: >1 pelaksana, 1 tujuan → filter pelaksana ON saja
  // K4: >1 pelaksana, >1 tujuan → kedua filter ON
  const showFilterPelaksana = jmlPelaks > 1;
  const showFilterTujuan    = jmlTujuan > 1;
  const showFilterBar       = showFilterPelaksana || showFilterTujuan;

  const filterBar = document.getElementById('rpd-filter-bar');
  const elFP      = document.getElementById('rpd-filter-pelaksana');
  const elFT      = document.getElementById('rpd-filter-tujuan');
  const wrapFP    = elFP?.closest('.filter-group');
  const wrapFT    = elFT?.closest('.filter-group');

  if (filterBar) {
    filterBar.style.display = showFilterBar ? 'flex' : 'none';

    // Tampilkan/sembunyikan masing-masing filter
    if (wrapFP) wrapFP.style.display = showFilterPelaksana ? '' : 'none';
    if (wrapFT) wrapFT.style.display = showFilterTujuan    ? '' : 'none';

    // Reset dan isi dropdown pelaksana
    if (elFP && showFilterPelaksana) {
      const curP = elFP.value;
      elFP.innerHTML = '<option value="">— Semua Pelaksana —</option>';
      (l.pelaksana||[]).forEach(p => {
        const opt = document.createElement('option');
        opt.value = p; opt.textContent = p;
        if (p === curP) opt.selected = true;
        elFP.appendChild(opt);
      });
    } else if (elFP) {
      elFP.value = ''; // reset jika filter dinonaktifkan
    }

    // Reset dan isi dropdown tujuan
    if (elFT && showFilterTujuan) {
      const curT = elFT.value;
      elFT.innerHTML = '<option value="">— Semua Tujuan —</option>';
      (l.tujuanList||[]).filter(Boolean).forEach(t => {
        const opt = document.createElement('option');
        opt.value = t; opt.textContent = t;
        if (t === curT) opt.selected = true;
        elFT.appendChild(opt);
      });
    } else if (elFT) {
      elFT.value = '';
    }
  }

  // ---- Ambil nilai filter aktif (hanya dari filter yang ditampilkan) ----
  const filterPelaksana = showFilterPelaksana ? (elFP?.value || '') : '';
  const filterTujuan    = showFilterTujuan    ? (elFT?.value || '') : '';

  // ---- Filter rows ----
  const visibleRows = APP.rpdRows.filter(row => {
    if (filterPelaksana && (row.pelaksana||'') !== filterPelaksana) return false;
    if (filterTujuan    && (row.tujuan||'')    !== filterTujuan)    return false;
    return true;
  });

  // Update header RPD
  thead.innerHTML = `<tr>
    <th>No</th>
    ${multi ? '<th>Tujuan</th><th>IT Pelaksana</th>' : ''}
    <th>Detail Perjalanan</th>
    <th>Kategori</th>
    <th>Tanggal</th>
    <th>QTY</th>
    <th>Satuan RAD</th>
    <th>Realisasi/Satuan</th>
    <th>Sub Total</th>
    <th>Keterangan</th>
    <th>Upload Nota</th>
    <th></th>
  </tr>`;

  // Tampilkan badge info filter aktif
  if (showFilterBar && (filterPelaksana || filterTujuan)) {
    const filtDesc = [
      filterPelaksana && `Pelaksana: <b>${filterPelaksana}</b>`,
      filterTujuan    && `Tujuan: <b>${filterTujuan}</b>`
    ].filter(Boolean).join(' &nbsp;|&nbsp; ');
    const msgRow = document.createElement('tr');
    msgRow.innerHTML = `<td colspan="12" style="background:#fffde7;color:#7a6000;padding:6px 10px;font-size:12px;font-style:italic">
      <i class="fas fa-filter"></i> Filter aktif: ${filtDesc} — menampilkan <b>${visibleRows.length}</b> dari <b>${APP.rpdRows.length}</b> baris
    </td>`;
    tbody.appendChild(msgRow);
  }

  visibleRows.forEach((row) => {
    const i = APP.rpdRows.indexOf(row);
    const tr = document.createElement('tr');
    const radRef = row.radSatuan > 0
      ? `<span class="rad-ref-badge">${formatRp(row.radSatuan)}</span>`
      : `<span class="rad-ref-badge empty">-</span>`;
    tr.innerHTML = `
      <td style="width:36px;text-align:center;color:#888">${i+1}</td>
      ${multi ? `
        <td>
          <select onchange="APP.rpdRows[${i}].tujuan=this.value" style="min-width:130px">
            <option value="">-- Tujuan --</option>
            ${buildTujuanOpts(row.tujuan)}
          </select>
        </td>
        <td>
          <select onchange="APP.rpdRows[${i}].pelaksana=this.value" style="min-width:120px">
            <option value="">-- Pelaksana --</option>
            ${buildPelaksanaOpts(row.pelaksana)}
          </select>
        </td>` : ''}
      <td><input type="text" value="${esc(row.detail)}" oninput="APP.rpdRows[${i}].detail=this.value" placeholder="Deskripsi..."></td>
      <td>
        <select onchange="APP.rpdRows[${i}].kategori=this.value">
          <option value="">-- Pilih --</option>
          ${APP.kategoriPerjalanan.map(k=>`<option value="${k}" ${row.kategori===k?'selected':''}>${k}</option>`).join('')}
        </select>
      </td>
      <td><input type="date" value="${row.tanggal||''}" onchange="APP.rpdRows[${i}].tanggal=this.value" style="width:140px"></td>
      <td style="text-align:center;font-weight:700;font-family:var(--font-mono);font-size:14px;color:var(--k24-green)">${row.qty}</td>
      <td class="rad-ref-cell">
        <div class="rad-ref-wrap">
          <span class="rad-ref-label">RAD</span>${radRef}
        </div>
      </td>
      <td>
        <input type="number" min="0" value="${row.satuan||''}" oninput="updateRPDRow(${i},'satuan',this.value)"
          placeholder="Realisasi" style="width:120px"
          class="${row.satuan>(row.radSatuan||0)&&row.radSatuan>0?'input-overbudget':''}">
      </td>
      <td style="font-family:var(--font-mono);font-weight:700;white-space:nowrap;color:${row.subTotal>(row.radSubTotal||0)&&row.radSubTotal>0?'var(--k24-red)':'var(--k24-green)'}" id="rpd-sub-${i}">${formatRp(row.subTotal)}</td>
      <td><input type="text" value="${esc(row.keterangan)}" oninput="APP.rpdRows[${i}].keterangan=this.value" placeholder="Opsional"></td>
      <td>
        <div class="nota-drop-zone" id="nota-drop-${i}" onclick="document.getElementById('nota-file-${i}').click()">
          <input type="file" id="nota-file-${i}" accept="image/*,application/pdf" style="display:none" onchange="handleNota(${i},this)">
          <div class="drop-label">
            ${row.nota
              ? `<i class="fas fa-file-check" style="color:var(--k24-green)"></i> ${esc(row.nota)}`
              : `<i class="fas fa-cloud-arrow-up"></i><span>Drop / Pilih</span>`
            }
          </div>
        </div>
      </td>
      <td><button class="del-row" type="button" onclick="deleteRPDRow(${i})"><i class="fas fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
    // Pasang drag&drop listener setelah DOM tersedia
    setTimeout(() => setupNotaDrop(i), 0);
  });
  updateRPDTotal(); updateComparison();
}
function updateRPDRow(idx,field,val) {
  APP.rpdRows[idx][field]   = parseFloat(val)||0;
  APP.rpdRows[idx].subTotal = APP.rpdRows[idx].qty * APP.rpdRows[idx].satuan;
  const el = document.getElementById(`rpd-sub-${idx}`);
  if (el) {
    const over = APP.rpdRows[idx].subTotal > (APP.rpdRows[idx].radSubTotal||0) && APP.rpdRows[idx].radSubTotal > 0;
    el.textContent  = formatRp(APP.rpdRows[idx].subTotal);
    el.style.color  = over ? 'var(--k24-red)' : 'var(--k24-green)';
  }
  updateRPDTotal(); updateComparison();
  debounceSave(); // Fix 1
}

// escape HTML untuk value attribute
function esc(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function updateRPDTotal() {
  const total = APP.rpdRows.reduce((s,r)=>s+(r.subTotal||0),0);
  document.getElementById('rpd-total').textContent = formatRp(total);
  APP.currentLaporan.totalRPD = total;
}

function addRPDRow()       { APP.rpdRows.push(newRPDRow()); renderRPDTable(); }
function deleteRPDRow(idx) {
  if (APP.rpdRows.length<=1) { showToast('Minimal 1 baris harus ada.','warning'); return; }
  APP.rpdRows.splice(idx,1); renderRPDTable();
}

function handleNota(idx, input) {
  const file = input.files[0];
  if (file) applyNota(idx, file);
}

function applyNota(idx, file) {
  APP.rpdRows[idx].nota = file.name;
  const fnEl  = document.getElementById(`nota-fn-${idx}`);
  const dropEl= document.getElementById(`nota-drop-${idx}`);
  if (fnEl) fnEl.textContent = file.name;
  if (dropEl) {
    dropEl.classList.add('has-file');
    dropEl.querySelector('.drop-label').innerHTML =
      `<i class="fas fa-file-check" style="color:var(--k24-green)"></i> ${file.name}`;
  }
  debounceSave();
}

function setupNotaDrop(idx) {
  const zone = document.getElementById(`nota-drop-${idx}`);
  if (!zone) return;
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', ()=> zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) applyNota(idx, file);
  });
}

function updateComparison() {
  const wrapper    = document.getElementById('comparison-table-wrapper');
  const totalRAD   = APP.radRows.reduce((s,r)=>s+(r.subTotal||0),0);
  const totalRPD   = APP.rpdRows.reduce((s,r)=>s+(r.subTotal||0),0);
  const selisih    = totalRAD - totalRPD;
  const overbudget = totalRPD > totalRAD;
  document.getElementById('overbudget-warning').style.display = overbudget?'flex':'none';
  const groups = {};
  APP.kategoriPerjalanan.forEach(k=>groups[k]={rad:0,rpd:0});
  APP.radRows.forEach(r=>{if(r.kategori)groups[r.kategori].rad+=r.subTotal||0;});
  APP.rpdRows.forEach(r=>{if(r.kategori)groups[r.kategori].rpd+=r.subTotal||0;});
  const rows = Object.entries(groups).filter(([,v])=>v.rad>0||v.rpd>0);
  if (!rows.length){wrapper.innerHTML=''; return;}
  wrapper.innerHTML=`<table class="preview-table">
    <thead><tr><th>Kategori</th><th>RAD (Rencana)</th><th>RPD (Realisasi)</th><th>Selisih</th></tr></thead>
    <tbody>${rows.map(([k,v])=>{const d=v.rad-v.rpd;const c=d<0?'color:var(--k24-red)':'color:var(--k24-green)';return`<tr><td>${k}</td><td>${formatRp(v.rad)}</td><td>${formatRp(v.rpd)}</td><td style="${c};font-weight:700">${d<0?'-':'+'}${formatRp(Math.abs(d))}</td></tr>`}).join('')}</tbody>
    <tfoot><tr><td class="total-label">TOTAL</td><td class="total-value">${formatRp(totalRAD)}</td><td class="total-value">${formatRp(totalRPD)}</td>
      <td class="total-value" style="${overbudget?'color:var(--k24-red)':'color:var(--k24-green)'}">${overbudget?'-':'+'}${formatRp(Math.abs(selisih))}</td></tr></tfoot>
  </table>`;
}

function saveStep2() {
  APP.currentLaporan.rpdItems  = JSON.parse(JSON.stringify(APP.rpdRows));
  APP.currentLaporan.totalRPD  = APP.rpdRows.reduce((s,r)=>s+(r.subTotal||0),0);
  autoSaveLaporan(); goToStep(3); renderNotaTable();
}

// ==================== STEP 3: TANPA NOTA ====================
function newNotaRow() { return { rincian:'', qty:1, satuan:0, jumlah:0, _rpdIdx: undefined }; }

function getRPDOptions() {
  const src = (APP.currentLaporan.rpdItems && APP.currentLaporan.rpdItems.length)
    ? APP.currentLaporan.rpdItems
    : APP.rpdRows;
  return src.filter(r => r.detail || r.kategori);
}

function renderNotaTable() {
  const tbody   = document.getElementById('nota-tbody');
  tbody.innerHTML = '';
  const rpdOpts = getRPDOptions();

  APP.notaRows.forEach((row, i) => {
    const tr = document.createElement('tr');

    // -- No --
    const tdNo = document.createElement('td');
    tdNo.style.cssText = 'width:36px;text-align:center;color:#888;';
    tdNo.textContent = i + 1;

    // -- Rincian: dropdown dari RPD --
    const tdRincian = document.createElement('td');
    tdRincian.style.minWidth = '200px';

    const sel = document.createElement('select');
    sel.style.cssText = 'width:100%;border:1.5px solid #2d8f1e;border-radius:6px;background:#e8f5e5;padding:7px 8px;font-size:13px;color:#1a2e1a;';

    const optDefault = document.createElement('option');
    optDefault.value = '';
    optDefault.textContent = rpdOpts.length ? '-- Pilih item RPD --' : '-- Tidak ada data RPD --';
    sel.appendChild(optDefault);

    rpdOpts.forEach((r, ri) => {
      const opt = document.createElement('option');
      opt.value = ri;
      opt.textContent = (r.detail || r.kategori) + '   (' + formatRp(r.satuan) + ' × ' + r.qty + ')';
      if (row._rpdIdx === ri) opt.selected = true;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', function() { onNotaSelectChange(i, this); });
    tdRincian.appendChild(sel);

    // label rincian terpilih
    const lbl = document.createElement('div');
    lbl.id = 'nota-lbl-' + i;
    lbl.style.cssText = 'font-size:12px;color:#2d8f1e;font-weight:600;margin-top:4px;min-height:16px;';
    lbl.textContent = row.rincian || '';
    tdRincian.appendChild(lbl);

    // -- QTY --
    const tdQty = document.createElement('td');
    const qtyInp = document.createElement('input');
    qtyInp.type = 'number'; qtyInp.min = '1'; qtyInp.value = row.qty;
    qtyInp.id = 'nota-qty-' + i;
    qtyInp.style.width = '64px';
    qtyInp.addEventListener('input', function() { updateNotaRow(i, 'qty', this.value); });
    tdQty.appendChild(qtyInp);

    // -- Satuan --
    const tdSatuan = document.createElement('td');
    const satuanInp = document.createElement('input');
    satuanInp.type = 'number'; satuanInp.min = '0';
    satuanInp.value = row.satuan || '';
    satuanInp.id = 'nota-satuan-' + i;
    satuanInp.placeholder = 'Harga satuan';
    satuanInp.style.width = '130px';
    satuanInp.addEventListener('input', function() { updateNotaRow(i, 'satuan', this.value); });
    tdSatuan.appendChild(satuanInp);

    // -- Sub Total --
    const tdSub = document.createElement('td');
    tdSub.id = 'nota-sub-' + i;
    tdSub.style.cssText = 'font-family:var(--font-mono);font-weight:700;color:var(--k24-green);white-space:nowrap;';
    tdSub.textContent = formatRp(row.jumlah);

    // -- Hapus --
    const tdDel = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.className = 'del-row';
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.addEventListener('click', function() { deleteNotaRow(i); });
    tdDel.appendChild(delBtn);

    tr.append(tdNo, tdRincian, tdQty, tdSatuan, tdSub, tdDel);
    tbody.appendChild(tr);
  });
  updateNotaTotal();
}

function onNotaSelectChange(idx, selectEl) {
  const ri      = parseInt(selectEl.value, 10);
  const rpdOpts = getRPDOptions();
  const rpd     = rpdOpts[ri];
  if (!rpd) return;

  APP.notaRows[idx]._rpdIdx = ri;
  APP.notaRows[idx].rincian = rpd.detail || rpd.kategori;
  APP.notaRows[idx].qty     = rpd.qty;
  APP.notaRows[idx].satuan  = rpd.satuan;
  APP.notaRows[idx].jumlah  = rpd.qty * rpd.satuan;

  const qtyInp    = document.getElementById('nota-qty-'    + idx);
  const satuanInp = document.getElementById('nota-satuan-' + idx);
  const subEl     = document.getElementById('nota-sub-'    + idx);
  const lblEl     = document.getElementById('nota-lbl-'    + idx);

  if (qtyInp)    qtyInp.value    = rpd.qty;
  if (satuanInp) satuanInp.value = rpd.satuan;
  if (subEl)     subEl.textContent = formatRp(APP.notaRows[idx].jumlah);
  if (lblEl)     lblEl.textContent = rpd.detail || rpd.kategori;

  updateNotaTotal();
  showToast('Data RPD diambil: ' + APP.notaRows[idx].rincian, 'success');
}

function updateNotaRow(idx,field,val){
  APP.notaRows[idx][field]  = parseFloat(val)||0;
  APP.notaRows[idx].jumlah  = APP.notaRows[idx].qty * APP.notaRows[idx].satuan;
  const el=document.getElementById(`nota-sub-${idx}`); if(el) el.textContent=formatRp(APP.notaRows[idx].jumlah);
  updateNotaTotal();
  debounceSave(); // Fix 1
}

function updateNotaTotal(){
  const total=APP.notaRows.reduce((s,r)=>s+(r.jumlah||0),0);
  document.getElementById('nota-total').textContent=formatRp(total);
  APP.currentLaporan.totalNota=total;
}

function addNotaRow()       { APP.notaRows.push(newNotaRow()); renderNotaTable(); }
function deleteNotaRow(idx) {
  if(APP.notaRows.length<=1){showToast('Minimal 1 baris harus ada.','warning');return;}
  APP.notaRows.splice(idx,1); renderNotaTable();
}

function saveStep3(){
  APP.currentLaporan.notaItems = JSON.parse(JSON.stringify(APP.notaRows));
  APP.currentLaporan.totalNota = APP.notaRows.reduce((s,r)=>s+(r.jumlah||0),0);
  autoSaveLaporan(); goToStep(4); renderResume();
}

// ==================== STEP 4: FINALISASI ====================
function renderResume(){
  const l=APP.currentLaporan;
  const totalRAD=l.totalRAD||0, totalRPD=l.totalRPD||0, totalNota=l.totalNota||0;
  const sisa=totalRAD-totalRPD;
  const isReimburse = sisa < 0;
  const sisaLabel = isReimburse
    ? `<span style="color:var(--k24-red);font-weight:800;display:flex;align-items:center;gap:6px"><i class="fas fa-triangle-exclamation"></i> Reimburse</span>`
    : `<span style="color:var(--k24-green);font-weight:700">Sisa Dana</span>`;
  const sisaValue = isReimburse
    ? `<strong style="color:var(--k24-red)">${formatRp(Math.abs(sisa))}</strong>`
    : `<strong style="color:var(--k24-green)">${formatRp(sisa)}</strong>`;

  const tujuanDisplay = Array.isArray(l.tujuanList) && l.tujuanList.length > 1
    ? l.tujuanList.map((t,i)=>`<div style="padding:2px 0">${i+1}. ${t}</div>`).join('')
    : (l.tujuan||'-');

  // ---- Resume per pelaksana (hanya jika >1 orang) ----
  const rpdItems = l.rpdItems || [];
  const multiOrang = (l.pelaksana||[]).length > 1;
  const perPelaksanaCards = multiOrang ? (l.pelaksana||[]).map(nama => {
    const pRows = rpdItems.filter(r => (r.pelaksana||'') === nama || !r.pelaksana);
    const pRAD  = (l.radItems||[]).filter(r=>(r.pelaksana||'')=== nama||!r.pelaksana).reduce((s,r)=>s+(r.subTotal||0),0);
    const pRPD  = pRows.reduce((s,r)=>s+(r.subTotal||0),0);
    const pSisa = pRAD - pRPD;
    const pReim = pSisa < 0;
    const initials = nama.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    return `<div class="resume-card pelaksana-resume-card">
      <h4 style="display:flex;align-items:center;gap:8px">
        <span style="width:28px;height:28px;border-radius:50%;background:var(--grad-green);color:white;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${initials}</span>
        <span>${nama}</span>
      </h4>
      <div class="resume-item"><span>RAD</span><strong>${formatRp(pRAD)}</strong></div>
      <div class="resume-item"><span>RPD</span><strong>${formatRp(pRPD)}</strong></div>
      <div class="resume-total">
        <div class="resume-item">
          <span style="color:${pReim?'var(--k24-red)':'var(--k24-green)'};font-weight:700">${pReim?'⚠ Reimburse':'Sisa Dana'}</span>
          <strong style="color:${pReim?'var(--k24-red)':'var(--k24-green)'}">${formatRp(Math.abs(pSisa))}</strong>
        </div>
      </div>
    </div>`;
  }).join('') : '';

  document.getElementById('resume-content').innerHTML=`
    <div class="resume-card" style="grid-column:1/-1">
      <h4><i class="fas fa-id-card"></i> Informasi Perjalanan</h4>
      <div class="resume-item"><span>ID Perjalanan</span><strong>${l.id}</strong></div>
      <div class="resume-item"><span>IT Pelaksana</span><strong>${l.pelaksana?.join(', ')||'-'}</strong></div>
      <div class="resume-item"><span>Tujuan</span><div style="text-align:right">${tujuanDisplay}</div></div>
      <div class="resume-item"><span>Kategori</span><strong>${l.kategori||'-'}</strong></div>
      <div class="resume-item"><span>Tanggal</span><strong>${l.tglMulai} s/d ${l.tglSelesai}</strong></div>
      <div class="resume-item"><span>Jenis Anggaran</span><strong>${l.jenisAnggaran||'-'}${l.bebanDept?' - '+l.bebanDept:''}</strong></div>
    </div>
    <div class="resume-card">
      <h4><i class="fas fa-calculator"></i> Rencana Anggaran (RAD)</h4>
      ${(l.radItems||[]).map(r=>`<div class="resume-item"><span>${r.detail||r.kategori}</span><strong>${formatRp(r.subTotal)}</strong></div>`).join('')}
      <div class="resume-total"><div class="resume-item"><span>Total RAD</span><strong>${formatRp(totalRAD)}</strong></div></div>
    </div>
    <div class="resume-card">
      <h4><i class="fas fa-receipt"></i> Realisasi (RPD)</h4>
      ${rpdItems.map(r=>`<div class="resume-item"><span>${r.detail||r.kategori}</span><strong>${formatRp(r.subTotal)}</strong></div>`).join('')}
      <div class="resume-total">
        <div class="resume-item"><span>Total RPD</span><strong>${formatRp(totalRPD)}</strong></div>
        <div class="resume-item"><span>Tanpa Nota</span><strong>${formatRp(totalNota)}</strong></div>
        <div class="resume-item" style="padding-top:8px;border-top:1px solid var(--border-light)">
          <span>${sisaLabel}</span>${sisaValue}
        </div>
      </div>
    </div>
    <div class="resume-card">
      <h4><i class="fas fa-users"></i> Penandatangan</h4>
      <div class="resume-item"><span>Atasan Langsung</span><strong>${l.atasanLangsung||'-'}</strong></div>
      <div class="resume-item"><span>Pimpinan Dept</span><strong>${l.pimpinanDept||'-'}</strong></div>
      <div class="resume-item"><span>Manager F&A</span><strong>${l.managerFA||'-'}</strong></div>
    </div>
    ${multiOrang ? `<div style="grid-column:1/-1">
      <div class="resume-section-title"><i class="fas fa-chart-pie"></i> Resume Per IT Pelaksana</div>
      <div class="pelaksana-resume-grid">${perPelaksanaCards}</div>
    </div>` : ''}`;
}

function finalizeLaporan(){
  APP.currentLaporan.status='Selesai';
  autoSaveLaporan();
  showToast('Laporan berhasil diselesaikan!','success');
  updateStats(); renderRecentTable(); renderLaporanTable();
  setTimeout(()=>showPage('laporan-list'),1200);
}

// ==================== AUTO SAVE ====================
let _saveTimer = null;
function debounceSave() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    // Sinkronkan baris aktif ke currentLaporan sebelum simpan
    if (APP.currentStep === 1) {
      APP.currentLaporan.radItems  = JSON.parse(JSON.stringify(APP.radRows));
      APP.currentLaporan.totalRAD  = APP.radRows.reduce((s,r)=>s+(r.subTotal||0),0);
    } else if (APP.currentStep === 2) {
      APP.currentLaporan.rpdItems  = JSON.parse(JSON.stringify(APP.rpdRows));
      APP.currentLaporan.totalRPD  = APP.rpdRows.reduce((s,r)=>s+(r.subTotal||0),0);
    } else if (APP.currentStep === 3) {
      APP.currentLaporan.notaItems = JSON.parse(JSON.stringify(APP.notaRows));
      APP.currentLaporan.totalNota = APP.notaRows.reduce((s,r)=>s+(r.jumlah||0),0);
    }
    const idx = APP.laporanList.findIndex(l => l.id === APP.currentLaporan.id);
    if (idx >= 0) APP.laporanList[idx] = JSON.parse(JSON.stringify(APP.currentLaporan));
    else APP.laporanList.push(JSON.parse(JSON.stringify(APP.currentLaporan)));
    saveToStorage();
    // Tampilkan indikator saved kecil di sudut
    showSavedIndicator();
  }, 1200);
}

function showSavedIndicator() {
  let ind = document.getElementById('auto-save-ind');
  if (!ind) {
    ind = document.createElement('div');
    ind.id = 'auto-save-ind';
    ind.style.cssText = 'position:fixed;bottom:70px;right:20px;background:#1a3d12;color:white;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;z-index:500;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(0,0,0,0.2);transition:opacity 0.4s';
    ind.innerHTML = '<i class="fas fa-cloud-arrow-up"></i> Tersimpan otomatis';
    document.body.appendChild(ind);
  }
  ind.style.opacity = '1';
  clearTimeout(ind._timer);
  ind._timer = setTimeout(() => { ind.style.opacity = '0'; }, 2500);
}

function autoSaveLaporan(){
  const idx=APP.laporanList.findIndex(l=>l.id===APP.currentLaporan.id);
  if(idx>=0) APP.laporanList[idx]=JSON.parse(JSON.stringify(APP.currentLaporan));
  else APP.laporanList.push(JSON.parse(JSON.stringify(APP.currentLaporan)));
  saveToStorage();
  if (isLiveMode()) saveLaporanToServer(APP.currentLaporan);
  showToast('Tersimpan otomatis','success');
}

// ==================== STEP NAV ====================
function goToStep(step){
  document.querySelectorAll('.form-step').forEach(s=>s.classList.remove('active'));
  document.getElementById(`form-step-${step}`).classList.add('active');
  for(let i=0;i<=4;i++){
    const el=document.getElementById(`step-${i}`);
    if(!el) continue;
    el.classList.remove('active','done');
    if(i<step) el.classList.add('done');
    if(i===step) el.classList.add('active');
  }
  document.querySelectorAll('.step-line').forEach((line,i)=>line.classList.toggle('done',i<step));
  APP.currentStep=step;
  if(step===1&&APP.radRows.length)  renderRADTable();
  if(step===2&&APP.rpdRows.length)  renderRPDTable();
  if(step===3&&APP.notaRows.length) renderNotaTable();
  if(step===4) renderResume();
}

// ==================== KATEGORI ====================
function updateKategoriSelects(){
  const sel=document.getElementById('kategori-dinas'); if(!sel) return;
  const cur=sel.value;
  sel.innerHTML='<option value="">-- Pilih Kategori --</option>'+
    APP.kategoriDinas.map(k=>`<option value="${k}" ${cur===k?'selected':''}>${k}</option>`).join('');
}

function showKategoriManager(){ renderKategoriModal(); document.getElementById('modal-kategori').style.display='flex'; }
function renderKategoriModal(){
  document.getElementById('kategori-list-modal').innerHTML=
    APP.kategoriDinas.map((k,i)=>`<li>${k} <button class="btn-danger btn-sm" onclick="removeKategori(${i})"><i class="fas fa-trash"></i></button></li>`).join('');
}
function addKategori(){
  const val=document.getElementById('new-kategori-input').value.trim();
  if(!val) return;
  if(APP.kategoriDinas.includes(val)){showToast('Kategori sudah ada.','warning');return;}
  APP.kategoriDinas.push(val); saveToStorage(); updateKategoriSelects(); renderKategoriModal();
  document.getElementById('new-kategori-input').value='';
}
function removeKategori(idx){ APP.kategoriDinas.splice(idx,1); saveToStorage(); updateKategoriSelects(); renderKategoriModal(); }

function showKategoriPerjalananManager(){ renderKategoriPerjalananModal(); document.getElementById('modal-kategori-perjalanan').style.display='flex'; }
function renderKategoriPerjalananModal(){
  document.getElementById('kategori-perjalanan-list-modal').innerHTML=
    APP.kategoriPerjalanan.map((k,i)=>`<li>${k} <button class="btn-danger btn-sm" onclick="removeKategoriPerjalanan(${i})"><i class="fas fa-trash"></i></button></li>`).join('');
}
function addKategoriPerjalanan(){
  const val=document.getElementById('new-kategori-perjalanan-input').value.trim();
  if(!val) return;
  if(APP.kategoriPerjalanan.includes(val)){showToast('Kategori sudah ada.','warning');return;}
  APP.kategoriPerjalanan.push(val); saveToStorage(); renderKategoriPerjalananModal(); renderRADTable(); renderRPDTable();
  document.getElementById('new-kategori-perjalanan-input').value='';
}
function removeKategoriPerjalanan(idx){ APP.kategoriPerjalanan.splice(idx,1); saveToStorage(); renderKategoriPerjalananModal(); renderRADTable(); renderRPDTable(); }

function closeModal(id){ document.getElementById(id).style.display='none'; }

// ==================== SETTINGS ====================
function fillSettingsForm() {
  if (!APP.currentUser) return;
  const u = APP.currentUser;
  document.getElementById('setting-nama').value      = u.nama      || '';
  document.getElementById('setting-divisi').value    = u.divisi    || '';
  document.getElementById('setting-jabatan').value   = u.jabatan   || '';
  document.getElementById('setting-role').value      = u.role      || 'IT Pelaksana';
  document.getElementById('setting-bank').value      = u.bank      || '';
  document.getElementById('setting-rek').value       = u.rekening  || '';
  document.getElementById('setting-cabang').value    = u.cabang    || '';
  document.getElementById('setting-atas-nama').value = u.atasNama  || '';
  document.getElementById('setting-api-url').value   = APP.settings.apiUrl  || '';
  document.getElementById('setting-sheet-id').value  = APP.settings.sheetId || '';
  document.getElementById('setting-drive-id').value  = APP.settings.driveId || '';

  // Tampilkan user management hanya untuk Super Admin dan IT Koordinator
  const role = u.role;
  const canManage = (role === 'Super Admin' || role === 'IT Koordinator');
  const mgmtCard = document.getElementById('settings-usermgmt-card');
  if (mgmtCard) mgmtCard.style.display = canManage ? 'block' : 'none';
  if (canManage) renderUserMgmtTable();
}

function saveUserSettings() {
  if (!APP.currentUser) return;
  APP.currentUser.nama     = document.getElementById('setting-nama').value;
  APP.currentUser.divisi   = document.getElementById('setting-divisi').value;
  APP.currentUser.jabatan  = document.getElementById('setting-jabatan').value;
  APP.currentUser.role     = document.getElementById('setting-role').value;
  APP.currentUser.bank     = document.getElementById('setting-bank').value;
  APP.currentUser.rekening = document.getElementById('setting-rek').value;
  APP.currentUser.cabang   = document.getElementById('setting-cabang').value;
  APP.currentUser.atasNama = document.getElementById('setting-atas-nama').value;
  const idx = APP.users.findIndex(u => u.nama.toLowerCase() === APP.currentUser.nama.toLowerCase());
  if (idx >= 0) APP.users[idx] = { ...APP.users[idx], ...APP.currentUser };
  saveToStorage();
  showToast('Profil berhasil disimpan.', 'success');
}

// Reset password sendiri
function resetPasswordSendiri() {
  const newPw  = document.getElementById('setting-new-pw').value;
  const confPw = document.getElementById('setting-confirm-pw').value;
  if (!newPw)          { showToast('Password baru tidak boleh kosong.', 'error'); return; }
  if (newPw !== confPw){ showToast('Konfirmasi password tidak cocok.', 'error');  return; }
  if (newPw.length < 3){ showToast('Password minimal 3 karakter.', 'error');      return; }
  const idx = APP.users.findIndex(u => u.nama.toLowerCase() === APP.currentUser.nama.toLowerCase());
  if (idx >= 0) { APP.users[idx].password = newPw; APP.currentUser.password = newPw; }
  saveToStorage();
  document.getElementById('setting-new-pw').value    = '';
  document.getElementById('setting-confirm-pw').value = '';
  showToast('Password berhasil diubah.', 'success');
}

// ---- USER MANAGEMENT TABLE ----
function renderUserMgmtTable() {
  const tbody   = document.getElementById('user-mgmt-tbody');
  if (!tbody) return;
  const role    = APP.currentUser.role;
  const isSuper = role === 'Super Admin';
  const isKoor  = role === 'IT Koordinator';

  tbody.innerHTML = '';
  APP.users.forEach((u, i) => {
    const isTargetSuper = u.role === 'Super Admin';
    // IT Koordinator tidak bisa kelola (edit/hapus/reset pw) Super Admin
    const canAct      = isSuper || (isKoor && !isTargetSuper);
    const canResetPw  = isSuper || (isKoor && !isTargetSuper);
    const isSelf      = u.nama.toLowerCase() === APP.currentUser.nama.toLowerCase();

    const tr = document.createElement('tr');
    const initials = u.nama.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    tr.innerHTML = `
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:32px;height:32px;border-radius:50%;background:var(--k24-green);color:white;font-weight:700;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${initials}</div>
          <div>
            <div style="font-weight:600;font-size:13px">${esc(u.nama)}</div>
            ${isSelf ? '<span style="font-size:11px;color:var(--k24-green);font-weight:600">(Anda)</span>' : ''}
          </div>
        </div>
      </td>
      <td style="font-size:13px;font-family:monospace">${esc(u.username||u.nama)}</td>
      <td style="font-size:13px">${esc(u.jabatan||'-')}</td>
      <td style="font-size:13px">${esc(u.divisi||'-')}</td>
      <td><span class="badge-status ${roleBadgeClass(u.role)}">${esc(u.role)}</span></td>
      <td style="font-size:13px">${esc(u.bank||'-')}</td>
      <td>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${canAct ? `<button class="btn-outline btn-sm" onclick="showEditUserModal(${i})" title="Edit"><i class="fas fa-pen"></i></button>` : ''}
          ${canResetPw ? `<button class="btn-outline btn-sm" onclick="showResetPwModal(${i},'${esc(u.nama)}')" title="Reset Password"><i class="fas fa-key"></i></button>` : ''}
          ${canAct && !isSelf ? `<button class="btn-danger btn-sm" onclick="deleteUser(${i})" title="Hapus"><i class="fas fa-trash"></i></button>` : ''}
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

function roleBadgeClass(role) {
  const map = {
    'Super Admin'    : 'badge-selesai',
    'IT Koordinator' : 'badge-diajukan',
    'IT Administrasi': 'badge-draft',
    'IT Pelaksana'   : 'badge-draft'
  };
  return map[role] || 'badge-draft';
}

// ---- ADD/EDIT USER MODAL ----
function showAddUserModal() {
  document.getElementById('modal-user-title').textContent = 'Daftarkan User Baru';
  document.getElementById('edit-user-idx').value = '';
  ['mu-nama','mu-username','mu-password','mu-jabatan','mu-divisi','mu-bank','mu-rek','mu-cabang','mu-atasnama'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('mu-role').value = 'IT Pelaksana';
  // IT Koordinator tidak bisa daftarkan Super Admin
  const roleOpt = document.getElementById('mu-role');
  if (APP.currentUser.role === 'IT Koordinator') {
    [...roleOpt.options].forEach(o => { o.disabled = o.value === 'Super Admin'; });
  } else {
    [...roleOpt.options].forEach(o => { o.disabled = false; });
  }
  document.getElementById('modal-add-user').style.display = 'flex';
}

function showEditUserModal(idx) {
  const u = APP.users[idx];
  if (!u) return;
  document.getElementById('modal-user-title').textContent = 'Edit Data User';
  document.getElementById('edit-user-idx').value  = idx;
  document.getElementById('mu-nama').value         = u.nama     || '';
  document.getElementById('mu-username').value     = u.username || '';
  document.getElementById('mu-password').value     = '';  // password tidak ditampilkan
  document.getElementById('mu-jabatan').value      = u.jabatan  || '';
  document.getElementById('mu-divisi').value       = u.divisi   || '';
  document.getElementById('mu-role').value         = u.role     || 'IT Pelaksana';
  document.getElementById('mu-bank').value         = u.bank     || '';
  document.getElementById('mu-rek').value          = u.rekening || '';
  document.getElementById('mu-cabang').value       = u.cabang   || '';
  document.getElementById('mu-atasnama').value     = u.atasNama || '';
  document.getElementById('modal-add-user').style.display = 'flex';
}

async function saveUserModal() {
  const idxStr   = document.getElementById('edit-user-idx').value;
  const isEdit   = idxStr !== '';
  const idx      = isEdit ? parseInt(idxStr, 10) : -1;
  const nama     = document.getElementById('mu-nama').value.trim();
  const username = document.getElementById('mu-username').value.trim();
  const pw       = document.getElementById('mu-password').value;

  if (!nama)     { showToast('Nama tidak boleh kosong.', 'error');     return; }
  if (!username) { showToast('Username tidak boleh kosong.', 'error'); return; }
  if (!isEdit && !pw) { showToast('Password tidak boleh kosong untuk user baru.', 'error'); return; }

  // Cek duplikasi nama
  const dupNama = APP.users.findIndex(u => u.nama.toLowerCase() === nama.toLowerCase());
  if (!isEdit && dupNama >= 0) { showToast('Nama user sudah ada.', 'error'); return; }
  if (isEdit && dupNama >= 0 && dupNama !== idx) { showToast('Nama user sudah dipakai.', 'error'); return; }

  // Cek duplikasi username
  const dupUser = APP.users.findIndex(u => (u.username||u.nama).toLowerCase() === username.toLowerCase());
  if (!isEdit && dupUser >= 0) { showToast('Username sudah dipakai.', 'error'); return; }
  if (isEdit && dupUser >= 0 && dupUser !== idx) { showToast('Username sudah dipakai user lain.', 'error'); return; }

  const data = {
    nama, username,
    jabatan  : document.getElementById('mu-jabatan').value.trim(),
    divisi   : document.getElementById('mu-divisi').value.trim(),
    role     : document.getElementById('mu-role').value,
    bank     : document.getElementById('mu-bank').value.trim(),
    rekening : document.getElementById('mu-rek').value.trim(),
    cabang   : document.getElementById('mu-cabang').value.trim(),
    atasNama : document.getElementById('mu-atasnama').value.trim(),
  };
  if (pw) data.password = pw;

  // Update local
  const localData = { ...data, password: pw || (isEdit ? APP.users[idx].password : '') };
  if (isEdit) {
    APP.users[idx] = { ...APP.users[idx], ...localData };
  } else {
    APP.users.push(localData);
  }
  saveToStorage();

  // Simpan ke database jika live mode
  if (isLiveMode()) {
    try {
      const existing = isEdit ? APP.users[idx] : {};
      await apiCall('saveUser', {
        user: {
          ID_User  : existing.id || ('USR-' + Date.now()),
          Nama     : data.nama,
          Username : data.username,
          Password : pw || (isEdit ? APP.users[idx].password : ''),
          Role     : data.role,
          Jabatan  : data.jabatan,
          Divisi   : data.divisi,
          Bank     : data.bank,
          Rekening : data.rekening,
          Cabang   : data.cabang,
          AtasNama : data.atasNama,
        }
      });
      showToast((isEdit ? 'Data user diupdate' : 'User baru didaftarkan') + ' & tersimpan ke database.', 'success');
    } catch(e) {
      showToast('Tersimpan lokal, gagal ke database: ' + e.message, 'warning');
    }
  } else {
    showToast(isEdit ? 'Data user berhasil diupdate.' : 'User baru berhasil didaftarkan.', 'success');
  }

  renderUserMgmtTable();
  closeModal('modal-add-user');
}

// ---- RESET PASSWORD MODAL ----
function showResetPwModal(idx, nama) {
  document.getElementById('reset-pw-idx').value  = idx;
  document.getElementById('reset-pw-nama').textContent = nama;
  document.getElementById('reset-pw-new').value     = '';
  document.getElementById('reset-pw-confirm').value = '';
  document.getElementById('modal-reset-pw').style.display = 'flex';
}

function doResetPassword() {
  const idx    = parseInt(document.getElementById('reset-pw-idx').value, 10);
  const newPw  = document.getElementById('reset-pw-new').value;
  const confPw = document.getElementById('reset-pw-confirm').value;
  if (!newPw)           { showToast('Password baru tidak boleh kosong.', 'error'); return; }
  if (newPw !== confPw) { showToast('Konfirmasi password tidak cocok.', 'error');  return; }
  if (newPw.length < 3) { showToast('Password minimal 3 karakter.', 'error');      return; }

  // Guard: IT Koordinator tidak bisa reset password Super Admin
  const targetUser = APP.users[idx];
  if (APP.currentUser.role === 'IT Koordinator' && targetUser?.role === 'Super Admin') {
    showToast('IT Koordinator tidak bisa reset password Super Admin.', 'error');
    closeModal('modal-reset-pw');
    return;
  }

  APP.users[idx].password = newPw;
  // Jika reset password diri sendiri, update currentUser juga
  if (APP.users[idx].nama.toLowerCase() === APP.currentUser.nama.toLowerCase()) {
    APP.currentUser.password = newPw;
  }
  saveToStorage();
  closeModal('modal-reset-pw');
  showToast(`Password ${APP.users[idx].nama} berhasil direset.`, 'success');
}

// ---- DELETE USER ----
async function deleteUser(idx) {
  const u = APP.users[idx];
  if (!u) return;
  if (APP.currentUser.role === 'IT Koordinator' && u.role === 'Super Admin') {
    showToast('Anda tidak bisa menghapus Super Admin.', 'error'); return;
  }
  if (!confirm(`Hapus user "${u.nama}"? Tindakan ini tidak bisa dibatalkan.`)) return;

  // Hapus dari local
  const userId = u.id || null;
  APP.users.splice(idx, 1);
  saveToStorage();
  renderUserMgmtTable();

  // Hapus dari database jika live mode
  if (isLiveMode() && userId) {
    try {
      await apiCall('deleteUser', { id: userId });
      showToast(`User ${u.nama} berhasil dihapus dari database.`, 'success');
    } catch(e) {
      showToast(`User dihapus lokal, gagal hapus di database: ${e.message}`, 'warning');
    }
  } else if (isLiveMode() && !userId) {
    // User tidak punya ID — coba hapus by username
    try {
      await apiCall('deleteUser', { username: u.username || u.nama });
      showToast(`User ${u.nama} berhasil dihapus.`, 'success');
    } catch(e) {
      showToast(`User dihapus lokal. ${e.message}`, 'warning');
    }
  } else {
    showToast(`User ${u.nama} berhasil dihapus.`, 'success');
  }
}

// ---- TOGGLE PASSWORD VISIBILITY (generic) ----
function togglePwField(inputId, iconId) {
  const inp  = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!inp) return;
  if (inp.type === 'password') { inp.type = 'text';     if (icon) icon.className = 'fas fa-eye-slash'; }
  else                         { inp.type = 'password'; if (icon) icon.className = 'fas fa-eye'; }
}

async function saveDbSettings() {
  APP.settings.scriptUrl = document.getElementById('setting-api-url').value.trim();
  APP.settings.sheetId   = document.getElementById('setting-sheet-id').value.trim();
  APP.settings.driveId   = document.getElementById('setting-drive-id').value.trim();
  APP.settings.apiUrl    = APP.settings.scriptUrl;
  saveToStorage();
  updateModeIndicator();
  if (isLiveMode()) {
    showToast('Konfigurasi disimpan. Memuat data dari server...', 'success');
    await loadFromServer();
    refreshUI();
  } else {
    showToast('Konfigurasi database disimpan.', 'success');
  }
}

async function testConnection() {
  const url = (document.getElementById('setting-api-url').value || '').trim();
  const status = document.getElementById('connection-status');
  status.style.display = 'block';
  if (!url) {
    status.className = 'connection-status error';
    status.innerHTML = '<i class="fas fa-circle-xmark"></i> URL API belum diisi.';
    return;
  }
  status.className = 'connection-status';
  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mencoba koneksi...';
  try {
    // Test koneksi via GET dengan parameter action=ping
    // Apps Script doGet mendukung GET request tanpa CORS issue
    const testUrl = url + (url.includes('?') ? '&' : '?') + 'action=ping';
    const res = await fetch(testUrl, { method: 'GET', redirect: 'follow' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); }
    catch(e) { throw new Error('Response tidak valid: ' + text.substring(0, 80)); }
    if (data.error) throw new Error(data.error);

    // Berhasil — simpan URL dan aktifkan live mode
    APP.settings.scriptUrl = url;
    APP.settings.apiUrl    = url;
    document.getElementById('setting-api-url').value = url;
    saveToStorage();
    updateModeIndicator();

    status.className = 'connection-status success';
    status.innerHTML = '<i class="fas fa-circle-check"></i> Koneksi berhasil! Memuat data dari server...';

    await loadFromServer();
    refreshUI();
    status.innerHTML = '<i class="fas fa-circle-check"></i> Koneksi berhasil! Mode Live aktif — data berhasil dimuat.';
  } catch(e) {
    console.error('testConnection error:', e);
    let hint = '';
    if (e.message && e.message.includes('HTML')) {
      hint = 'Apps Script belum di-deploy ulang setelah perubahan kode.';
    } else if (e.message && e.message.includes('Failed to fetch')) {
      hint = 'Kemungkinan URL salah atau koneksi internet bermasalah.';
    } else if (e.message && e.message.includes('HTTP 4')) {
      hint = 'URL Apps Script tidak valid atau akses tidak diizinkan.';
    } else {
      hint = 'Pastikan: 1) Deploy sebagai Web App, 2) Execute as: Me, 3) Who has access: Anyone';
    }
    status.className = 'connection-status error';
    status.innerHTML = '<i class="fas fa-circle-xmark"></i> <b>Koneksi gagal:</b> ' + e.message
      + '<br><small style="opacity:0.8;font-size:10px;line-height:1.5">💡 ' + hint + '</small>';
  }
}

// ==================== PRINT / EXPORT ====================
function exportRAD(type){
  const l=APP.currentLaporan;
  if(type==='print'||type==='pdf') openPrint(generateRADHtml(l));
  else if(type==='excel') exportToExcel(l,'rad');
}
function exportLPJ(type){
  if(type==='excel') exportDetailXlsx(APP.currentLaporan);
  else if(type==='pdf') openPrint(generateDetailHtml(APP.currentLaporan));
}
function printLaporan(type){
  const l=APP.currentLaporan;
  if(type==='detail'){
    openPrint(generateDetailHtml(l), true);
  } else if(type==='fa'){
    openPrint(generateFAHtml(l), 'fa');
  } else {
    openPrint(generateTanpaNotaHtml(l), 'tanpa-nota');
  }
}

function openPrint(html, showXlsx){
  const overlay=document.getElementById('print-overlay');
  const content=document.getElementById('print-content');
  content.innerHTML=html;
  overlay.classList.remove('hidden');
  const bar=document.createElement('div');
  bar.className='no-print';
  bar.style.cssText='position:sticky;top:0;background:white;padding:10px 14px;border-bottom:1px solid #ddd;display:flex;gap:8px;flex-wrap:wrap;z-index:10;box-shadow:0 2px 8px rgba(0,0,0,0.08)';

  let extraBtns = '';
  if (showXlsx === true) {
    // Cetak Detail
    extraBtns = `
    <button onclick="exportDetailXlsx(APP.currentLaporan)" style="background:#1565c0;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-excel"></i> Export Excel (.csv)</button>
    <button onclick="exportDetailOds(APP.currentLaporan)" style="background:#0f7c3a;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-alt"></i> Export ODS</button>`;
  } else if (showXlsx === 'fa') {
    // Cetak FA
    extraBtns = `
    <button onclick="exportFACsv(APP.currentLaporan)" style="background:#1565c0;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-excel"></i> Export Excel (.csv)</button>
    <button onclick="exportFAOds(APP.currentLaporan)" style="background:#0f7c3a;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-alt"></i> Export ODS</button>`;
  } else if (showXlsx === 'tanpa-nota') {
    extraBtns = `
    <button onclick="exportTanpaNotaCsv(APP.currentLaporan)" style="background:#1565c0;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-excel"></i> Export Excel (.csv)</button>
    <button onclick="exportTanpaNotaOds(APP.currentLaporan)" style="background:#0f7c3a;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-file-alt"></i> Export ODS</button>`;
  }

  bar.innerHTML=`
    <button onclick="closePrint()" style="background:#e02020;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-xmark"></i> Tutup</button>
    <button onclick="window.print()" style="background:#2d8f1e;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px"><i class="fas fa-print"></i> Print / Simpan PDF</button>
    ${extraBtns}
  `;
  content.insertBefore(bar,content.firstChild);
}
function closePrint(){ document.getElementById('print-overlay').classList.add('hidden'); }

// ========== HELPER: hitung jumlah hari unik dari rpdItems ==========
function getUniqueDates(items) {
  const dates = [...new Set((items||[]).map(r=>r.tanggal).filter(Boolean))].sort();
  return dates;
}
function getDayCount(l) {
  // Hitung dari tglMulai s/d tglSelesai
  if (!l.tglMulai || !l.tglSelesai) return 1;
  const d1 = parseLocalDate(normalizeDate(l.tglMulai));
  const d2 = parseLocalDate(normalizeDate(l.tglSelesai));
  const diff = Math.round((d2 - d1) / 86400000) + 1;
  return diff > 0 ? diff : 1;
}

// ========== LOGO untuk print (base64 sudah di LOGO_B64) ==========
function getLogoImgTag(h) {
  return `<img src="${LOGO_SRC}" alt="Apotek K24" style="height:${h||48}px;width:auto;border-radius:8px;vertical-align:middle">`;
}

// ========== GENERATE DETAIL HTML (semua kondisi A/B/C/D) ==========
function generateDetailHtml(l) {
  const rows    = l.rpdItems || [];
  const total   = rows.reduce((s,r)=>s+(r.subTotal||0), 0);
  const uangPD  = l.totalRAD || 0;
  const sisa    = uangPD - total;
  const isReim  = sisa < 0;
  const sisaTxt = isReim
    ? `<span style="color:#e02020;font-weight:bold">Reimburse: ${formatRp(Math.abs(sisa))}</span>`
    : `<span style="color:#2d8f1e;font-weight:bold">Sisa Dana: ${formatRp(sisa)}</span>`;

  const jumlahOrang = (l.pelaksana||[]).length;
  const jumlahHari  = getDayCount(l);

  // Tentukan kondisi
  let kondisi;
  if      (jumlahOrang === 1 && jumlahHari === 1) kondisi = 'A';
  else if (jumlahOrang === 1 && jumlahHari  > 1)  kondisi = 'B';
  else if (jumlahOrang  > 1 && jumlahHari === 1)  kondisi = 'C';
  else                                             kondisi = 'D';

  // Header laporan — logo asli, tujuan/nama/waktu rata kiri
  const tujuanTxt = Array.isArray(l.tujuanList) && l.tujuanList.length > 1
    ? l.tujuanList.join(', ')
    : (l.tujuan || '-');

  const headerHtml = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;border-bottom:2px solid #2d8f1e;padding-bottom:12px">
      ${getLogoImgTag(56)}
      <div>
        <div style="font-size:16px;font-weight:900;color:#1a2e1a;text-transform:uppercase">${l.kategori || 'LAPORAN PERJALANAN DINAS'}</div>
      </div>
    </div>
    <div style="margin-bottom:14px;font-size:12px;line-height:1.8">
      <div><b>Tujuan</b> : ${tujuanTxt}</div>
      <div><b>Nama</b> &nbsp;&nbsp;: ${(l.pelaksana||[]).join(', ')}</div>
      <div><b>Waktu</b> &nbsp;: ${formatDateRange(l.tglMulai, l.tglSelesai)}</div>
    </div>`;

  // Fungsi bantu render baris tabel
  const renderRow = (r, no) =>
    `<tr><td style="text-align:center">${no}</td><td>${r.detail||''}</td><td style="text-align:center">${r.qty}</td><td style="text-align:right">${formatRp(r.satuan)}</td><td style="text-align:right;font-weight:700">${formatRp(r.subTotal)}</td><td>${r.keterangan||''}</td></tr>`;

  const tableHead = `<table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:4px">
    <thead><tr style="background:#2d8f1e;color:white">
      <th style="padding:6px 8px;text-align:center;width:36px">No.</th>
      <th style="padding:6px 8px;text-align:left">Keterangan</th>
      <th style="padding:6px 8px;text-align:center;width:50px">Qty</th>
      <th style="padding:6px 8px;text-align:right;width:100px">Satuan</th>
      <th style="padding:6px 8px;text-align:right;width:110px">Sub Total</th>
      <th style="padding:6px 8px;text-align:left;width:100px">Ket.</th>
    </tr></thead><tbody>`;
  const tableClose = (subtot, label) =>
    `</tbody><tfoot><tr style="background:#e8f5e5;font-weight:bold">
      <td colspan="4" style="padding:6px 8px;text-align:right;border-top:2px solid #2d8f1e">${label||'Total'}</td>
      <td style="padding:6px 8px;text-align:right;border-top:2px solid #2d8f1e">${formatRp(subtot)}</td>
      <td style="border-top:2px solid #2d8f1e"></td>
    </tr></tfoot></table>`;

  let bodyHtml = '';
  let no = 1;

  if (kondisi === 'A') {
    // Kondisi A: 1 orang, 1 hari — tampil flat
    bodyHtml = tableHead + rows.map(r => renderRow(r, no++)).join('') + tableClose(total);

  } else if (kondisi === 'B') {
    // Kondisi B: 1 orang, >1 hari — 1 tabel, header baris per tanggal
    const dates = getUniqueDates(rows);
    const noDateRows = rows.filter(r => !r.tanggal);
    bodyHtml += tableHead;
    dates.forEach(date => {
      const grpRows = rows.filter(r => r.tanggal === date);
      if (!grpRows.length) return;
      const dayLabel = formatDateFull(date);
      bodyHtml += `<tr style="background:#e8f5e5"><td colspan="6" style="padding:6px 8px;font-weight:800;font-size:11px;border-left:4px solid #2d8f1e">${dayLabel}</td></tr>`;
      bodyHtml += grpRows.map(r => renderRow(r, no++)).join('');
    });
    if (noDateRows.length) {
      bodyHtml += `<tr style="background:#f5f5f5"><td colspan="6" style="padding:6px 8px;font-weight:700;font-size:11px;border-left:4px solid #aaa">Tanpa Tanggal</td></tr>`;
      bodyHtml += noDateRows.map(r => renderRow(r, no++)).join('');
    }
    bodyHtml += tableClose(total);

  } else if (kondisi === 'C') {
    // Kondisi C: >1 orang, 1 hari — 1 tabel, header baris per pelaksana
    // Tujuan diambil dari field r.tujuan pada baris RPD (mapping per pelaksana)
    bodyHtml += tableHead;
    (l.pelaksana||[]).forEach(nama => {
      const grpRows = rows.filter(r => (r.pelaksana||'') === nama);
      if (!grpRows.length) return;
      // Ambil tujuan unik dari baris-baris RPD milik pelaksana ini
      const tujuanSet = [...new Set(grpRows.map(r => r.tujuan).filter(Boolean))];
      const tujuanTxt = tujuanSet.length ? tujuanSet.join(', ') : (l.tujuan || '');
      bodyHtml += `<tr style="background:#e8f5e5"><td colspan="6" style="padding:6px 8px;font-weight:800;font-size:11px;border-left:4px solid #2d8f1e">👤 <b>${nama}</b>${tujuanTxt ? ' &nbsp;—&nbsp; <b>' + tujuanTxt + '</b>' : ''}</td></tr>`;
      bodyHtml += grpRows.map(r => renderRow(r, no++)).join('');
    });
    // Baris tanpa pelaksana
    const orphan = rows.filter(r => !r.pelaksana);
    if (orphan.length) bodyHtml += orphan.map(r => renderRow(r, no++)).join('');
    bodyHtml += tableClose(total);

  } else {
    // Kondisi D: >1 orang, >1 hari — 1 tabel, header per hari lalu per pelaksana
    // Tujuan diambil dari field r.tujuan pada baris RPD (mapping per pelaksana+tanggal)
    const dates = getUniqueDates(rows);
    const allDates = dates.length ? dates : [''];
    bodyHtml += tableHead;
    allDates.forEach(date => {
      const dateRows = date ? rows.filter(r=>r.tanggal===date) : rows.filter(r=>!r.tanggal);
      if (!dateRows.length) return;
      const dayLabel = date ? formatDateFull(date) : 'Tanpa Tanggal';
      bodyHtml += `<tr style="background:#d4edcc"><td colspan="6" style="padding:7px 10px;font-weight:900;font-size:12px;border-left:5px solid #2d8f1e">${dayLabel}</td></tr>`;
      (l.pelaksana||[]).forEach(nama => {
        const grpRows = dateRows.filter(r=>(r.pelaksana||'')===nama);
        if (!grpRows.length) return;
        // Ambil tujuan unik dari baris RPD milik pelaksana+tanggal ini
        const tujuanSet = [...new Set(grpRows.map(r => r.tujuan).filter(Boolean))];
        const tujuanTxt = tujuanSet.length ? tujuanSet.join(', ') : (l.tujuan || '');
        bodyHtml += `<tr style="background:#f0f8f0"><td colspan="6" style="padding:5px 8px 5px 20px;font-weight:700;font-size:11px;border-left:3px solid #56b944">👤 <b>${nama}</b>${tujuanTxt ? ' &nbsp;—&nbsp; <b>' + tujuanTxt + '</b>' : ''}</td></tr>`;
        bodyHtml += grpRows.map(r => renderRow(r, no++)).join('');
      });
      // Baris tanpa pelaksana pada tanggal ini
      const noOwner = dateRows.filter(r=>!r.pelaksana);
      if (noOwner.length) bodyHtml += noOwner.map(r => renderRow(r, no++)).join('');
    });
    bodyHtml += tableClose(total);
  }

  // Ringkasan total & tanda tangan
  const summaryHtml = `
    <div style="margin-top:16px;text-align:right;font-size:12px;border-top:2px solid #2d8f1e;padding-top:10px">
      <table style="margin-left:auto;border-collapse:collapse;font-size:12px">
        <tr><td style="padding:3px 12px"><b>Uang PD</b></td><td style="padding:3px 12px;text-align:right"><b>: ${formatRp(uangPD)}</b></td></tr>
        <tr><td style="padding:3px 12px"><b>Terpakai</b></td><td style="padding:3px 12px;text-align:right"><b>: ${formatRp(total)}</b></td></tr>
        <tr style="font-size:13px"><td style="padding:3px 12px"><b style="color:${isReim?'#e02020':'#2d8f1e'}">${isReim?'⚠ Reimburse':'Sisa Dana'}</b></td><td style="padding:3px 12px;text-align:right"><b style="color:${isReim?'#e02020':'#2d8f1e'}">: ${formatRp(Math.abs(sisa))}</b></td></tr>
      </table>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:28px;text-align:center;font-size:11px">
      <div style="border:1px solid #ccc;padding:12px 8px 12px;border-radius:6px">
        <div style="font-weight:600;margin-bottom:72px">Di Buat Oleh,</div>
        <div style="border-top:1px solid #888;padding-top:6px;font-weight:700">${l.pelaksana?.[0]||'...........'}</div>
      </div>
      <div style="border:1px solid #ccc;padding:12px 8px 12px;border-radius:6px">
        <div style="font-weight:600;margin-bottom:72px">Diketahui Oleh,</div>
        <div style="border-top:1px solid #888;padding-top:6px;font-weight:700">${l.atasanLangsung||'...........'}</div>
      </div>
      <div style="border:1px solid #ccc;padding:12px 8px 12px;border-radius:6px">
        <div style="font-weight:600;margin-bottom:72px">Diterima Oleh,</div>
        <div style="border-top:1px solid #888;padding-top:6px;font-weight:700">${l.managerFA||'...........'}</div>
      </div>
    </div>`;

  // CSS print: sembunyikan header/footer browser, page-break rapi
  const printCss = `
    <style>
      @page {
        size: A4 portrait;
        margin: 12mm;
      }
      @media print {
        html, body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .no-print { display: none !important; }
        table     { page-break-inside: auto; }
        tr        { page-break-inside: avoid; page-break-after: auto; }
        thead     { display: table-header-group; }
        tfoot     { display: table-footer-group; }
      }
      body {
        font-family: Arial, sans-serif;
        font-size: 11px;
        color: #1a1a1a;
        margin: 0;
        padding: 0;
      }
      table { width:100%; border-collapse:collapse; }
      th,td { border:1px solid #ccc; padding:5px 8px; }
      th    { background:#2d8f1e !important; color:white !important; }
    </style>`;

  return printCss + `<div style="padding:8px 0">` + headerHtml + bodyHtml + summaryHtml + `</div>`;
}

// Format tanggal lengkap dari YYYY-MM-DD
function formatDateFull(dateStr) {
  if (!dateStr) return '-';
  const days   = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const d = parseLocalDate(normalizeDate(dateStr));
  if (!d || isNaN(d)) return String(dateStr).substring(0,10);
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// ========== EXPORT DETAIL KE .ODS (OpenDocument Spreadsheet) ==========
function exportDetailOds(l) {
  const rows   = l.rpdItems || [];
  const total  = rows.reduce((s,r)=>s+(r.subTotal||0),0);
  const uangPD = l.totalRAD||0;
  const sisa   = uangPD - total;

  // Build data rows sama seperti CSV
  const dataRows = [];
  dataRows.push(['LAPORAN PERJALANAN DINAS']);
  dataRows.push(['']);
  dataRows.push(['ID Perjalanan', l.id]);
  dataRows.push(['Tujuan', (Array.isArray(l.tujuanList)&&l.tujuanList.length>1)?l.tujuanList.join('; '):(l.tujuan||'-')]);
  dataRows.push(['Pelaksana', (l.pelaksana||[]).join(', ')]);
  dataRows.push(['Waktu', `${l.tglMulai} s/d ${l.tglSelesai}`]);
  dataRows.push(['']);
  dataRows.push(['No.','Keterangan','Tanggal','Pelaksana','QTY','Satuan (Rp)','Sub Total (Rp)','Keterangan']);

  let no = 1;
  const jumlahOrang = (l.pelaksana||[]).length;
  const jumlahHari  = getDayCount(l);
  let kondisi;
  if      (jumlahOrang===1&&jumlahHari===1) kondisi='A';
  else if (jumlahOrang===1&&jumlahHari >1)  kondisi='B';
  else if (jumlahOrang >1 &&jumlahHari===1) kondisi='C';
  else                                       kondisi='D';

  if (kondisi==='A') {
    rows.forEach(r=>dataRows.push([no++,r.detail||'',r.tanggal||'',r.pelaksana||'',r.qty,r.satuan,r.subTotal,r.keterangan||'']));
  } else if (kondisi==='B') {
    getUniqueDates(rows).forEach(date=>{
      dataRows.push(['--- '+formatDateFull(date)+' ---']);
      rows.filter(r=>r.tanggal===date).forEach(r=>dataRows.push([no++,r.detail||'',r.tanggal||'',r.pelaksana||'',r.qty,r.satuan,r.subTotal,r.keterangan||'']));
    });
    rows.filter(r=>!r.tanggal).forEach(r=>dataRows.push([no++,r.detail||'','',r.pelaksana||'',r.qty,r.satuan,r.subTotal,r.keterangan||'']));
  } else if (kondisi==='C') {
    (l.pelaksana||[]).forEach(nama=>{
      dataRows.push(['--- '+nama+' ---']);
      rows.filter(r=>(r.pelaksana||'')===nama||!r.pelaksana).forEach(r=>dataRows.push([no++,r.detail||'',r.tanggal||'',r.pelaksana||'',r.qty,r.satuan,r.subTotal,r.keterangan||'']));
    });
  } else {
    getUniqueDates(rows).forEach(date=>{
      dataRows.push(['=== '+formatDateFull(date)+' ===']);
      (l.pelaksana||[]).forEach(nama=>{
        const grp=rows.filter(r=>r.tanggal===date&&(r.pelaksana===nama||!r.pelaksana));
        if(!grp.length)return;
        dataRows.push(['--- '+nama+' ---']);
        grp.forEach(r=>dataRows.push([no++,r.detail||'',r.tanggal||'',r.pelaksana||'',r.qty,r.satuan,r.subTotal,r.keterangan||'']));
      });
    });
  }
  dataRows.push(['']);
  dataRows.push(['','','','','','','TOTAL',total]);
  dataRows.push(['','','','','','','Uang PD',uangPD]);
  dataRows.push(['','','','','','','Terpakai',total]);
  dataRows.push(['','','','','','',sisa<0?'Reimburse':'Sisa Dana',Math.abs(sisa)]);

  // Build ODS XML (FODS = Flat ODS, 1 file XML, langsung dibaca LibreOffice & WPS)
  const esc = v => String(v===undefined||v===null?'':v)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  let rowsXml = '';
  dataRows.forEach(row => {
    rowsXml += '<table:table-row>';
    (Array.isArray(row)?row:[row]).forEach(cell => {
      const v = String(cell===undefined||cell===null?'':cell);
      const isNum = v !== '' && !isNaN(v) && !isNaN(parseFloat(v));
      if (isNum) {
        rowsXml += `<table:table-cell office:value-type="float" office:value="${v}"><text:p>${v}</text:p></table:table-cell>`;
      } else {
        rowsXml += `<table:table-cell office:value-type="string"><text:p>${esc(v)}</text:p></table:table-cell>`;
      }
    });
    rowsXml += '</table:table-row>';
  });

  const fods = `<?xml version="1.0" encoding="UTF-8"?>
<office:document xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  xmlns:office2="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  office:mimetype="application/vnd.oasis.opendocument.spreadsheet"
  office:version="1.2">
<office:body>
<office:spreadsheet>
<table:table table:name="Laporan Detail">
${rowsXml}
</table:table>
</office:spreadsheet>
</office:body>
</office:document>`;

  const blob = new Blob([fods], { type: 'application/vnd.oasis.opendocument.spreadsheet;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${l.id}_Detail_LPJ.fods`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File ODS berhasil diunduh. Buka dengan LibreOffice Calc atau WPS.', 'success');
}
function exportDetailXlsx(l) {
  const rows   = l.rpdItems || [];
  const total  = rows.reduce((s,r)=>s+(r.subTotal||0),0);
  const uangPD = l.totalRAD||0;
  const sisa   = uangPD - total;
  const jumlahOrang = (l.pelaksana||[]).length;
  const jumlahHari  = getDayCount(l);
  let kondisi;
  if      (jumlahOrang===1 && jumlahHari===1) kondisi='A';
  else if (jumlahOrang===1 && jumlahHari >1)  kondisi='B';
  else if (jumlahOrang >1  && jumlahHari===1) kondisi='C';
  else                                         kondisi='D';

  // Bangun baris data
  const dataRows = [];
  dataRows.push(['LAPORAN PERJALANAN DINAS']);
  dataRows.push(['']);
  dataRows.push(['ID Perjalanan', l.id]);
  dataRows.push(['Tujuan', (Array.isArray(l.tujuanList)&&l.tujuanList.length>1)?l.tujuanList.join('; '):(l.tujuan||'-')]);
  dataRows.push(['Pelaksana', (l.pelaksana||[]).join(', ')]);
  dataRows.push(['Waktu', `${l.tglMulai} s/d ${l.tglSelesai}`]);
  dataRows.push(['Kategori', l.kategori||'-']);
  dataRows.push(['']);
  dataRows.push(['No.','Keterangan','Tanggal','Pelaksana','QTY','Satuan (Rp)','Sub Total (Rp)','Keterangan']);

  let no = 1;
  if (kondisi === 'A') {
    rows.forEach(r => dataRows.push([no++, r.detail||'', r.tanggal||'', r.pelaksana||'', r.qty, r.satuan, r.subTotal, r.keterangan||'']));
  } else if (kondisi === 'B') {
    const dates = getUniqueDates(rows);
    dates.forEach(date => {
      const grp = rows.filter(r=>r.tanggal===date);
      dataRows.push(['--- '+formatDateFull(date)+' ---']);
      grp.forEach(r => dataRows.push([no++, r.detail||'', r.tanggal||'', r.pelaksana||'', r.qty, r.satuan, r.subTotal, r.keterangan||'']));
      dataRows.push(['','','','','','','Subtotal',grp.reduce((s,r)=>s+(r.subTotal||0),0)]);
    });
    rows.filter(r=>!r.tanggal).forEach(r => dataRows.push([no++, r.detail||'', '', r.pelaksana||'', r.qty, r.satuan, r.subTotal, r.keterangan||'']));
  } else if (kondisi === 'C') {
    (l.pelaksana||[]).forEach(nama => {
      const grp = rows.filter(r=>(r.pelaksana||'')=== nama||!r.pelaksana);
      dataRows.push(['--- '+nama+' ---']);
      grp.forEach(r => dataRows.push([no++, r.detail||'', r.tanggal||'', r.pelaksana||'', r.qty, r.satuan, r.subTotal, r.keterangan||'']));
      dataRows.push(['','','','','','','Subtotal',grp.reduce((s,r)=>s+(r.subTotal||0),0)]);
    });
  } else {
    const dates = getUniqueDates(rows);
    dates.forEach(date => {
      dataRows.push(['=== '+formatDateFull(date)+' ===']);
      (l.pelaksana||[]).forEach(nama => {
        const grp = rows.filter(r=>r.tanggal===date&&(r.pelaksana===nama||!r.pelaksana));
        if (!grp.length) return;
        dataRows.push(['--- '+nama+' ---']);
        grp.forEach(r => dataRows.push([no++, r.detail||'', r.tanggal||'', r.pelaksana||'', r.qty, r.satuan, r.subTotal, r.keterangan||'']));
        dataRows.push(['','','','','','','Subtotal',grp.reduce((s,r)=>s+(r.subTotal||0),0)]);
      });
    });
  }

  dataRows.push(['']);
  dataRows.push(['','','','','','','TOTAL',total]);
  dataRows.push(['']);
  dataRows.push(['','','','','','','Uang PD',uangPD]);
  dataRows.push(['','','','','','','Terpakai',total]);
  dataRows.push(['','','','','','',sisa<0?'Reimburse':'Sisa Dana',Math.abs(sisa)]);

  // Export sebagai CSV yang pasti bisa dibuka Excel (UTF-8 BOM)
  // Pisahkan kolom dengan semicolon agar Excel Indonesia langsung parse
  const escCsv = v => {
    const s = String(v===undefined||v===null?'':v);
    // Wrap dalam double-quote jika ada koma/semicolon/newline/quote
    if (s.includes('"') || s.includes(';') || s.includes(',') || s.includes('\n')) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  };
  const csvLines = dataRows.map(row =>
    (Array.isArray(row) ? row : [row]).map(escCsv).join(';')
  );
  // BOM UTF-8 agar Excel baca karakter Indonesia dengan benar
  const BOM  = '\uFEFF';
  const csv  = BOM + csvLines.join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${l.id}_Detail_LPJ.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File CSV berhasil diunduh. Buka dengan Excel, pilih semicolon sebagai pemisah.', 'success');
}

// ========== EXPORT FA KE CSV & ODS ==========
function buildFADataRows(l) {
  const user = APP.currentUser || {};
  const radItems = l.radItems || [];
  const rpdItems = l.rpdItems || [];
  const katList  = APP.kategoriPerjalanan || [];
  const groups   = {};
  katList.forEach(k => groups[k] = { qty:0, satuan:0, disetujui:0, realisasi:0 });
  // Tambahkan kategori yang ada di radItems tapi belum di katList
  radItems.forEach(r => { if (r.kategori && !groups[r.kategori]) groups[r.kategori]={qty:0,satuan:0,disetujui:0,realisasi:0}; });
  radItems.forEach(r => {
    if (r.kategori) {
      groups[r.kategori].qty       += r.qty;
      groups[r.kategori].disetujui += r.subTotal;
      groups[r.kategori].satuan     = r.satuan;
    }
  });
  rpdItems.forEach(r => {
    if (r.kategori && groups[r.kategori]) groups[r.kategori].realisasi += r.subTotal;
  });
  const rows = Object.entries(groups).filter(([,v])=>v.disetujui>0||v.realisasi>0);
  const totalD = rows.reduce((s,[,v])=>s+v.disetujui, 0);
  const totalR = rows.reduce((s,[,v])=>s+v.realisasi, 0);
  const multiTujuan = Array.isArray(l.tujuanList) && l.tujuanList.length > 1;
  const keperluan   = multiTujuan ? (l.keteranganUmum||l.tujuanList.join(', ')) : `${l.kategori||''} ${l.tujuan||''}`.trim();

  const data = [];
  data.push(['FORM REALISASI ANGGARAN']);
  data.push(['']);
  data.push(['Dept./Divisi', user.divisi||'IT']);
  data.push(['Nama Pelaksana', l.pelaksana?.[0]||'-']);
  data.push(['Jabatan', user.jabatan||'IT Support']);
  data.push(['Tanggal Pengajuan', '']);
  data.push(['Tanggal Pelaksanaan', `${l.tglMulai||''} s/d ${l.tglSelesai||''}`]);
  data.push(['Keperluan', keperluan]);
  data.push(['Jenis Anggaran', l.jenisAnggaran||'-', l.bebanDept||'']);
  data.push(['']);
  data.push(['NO','RINCIAN KEBUTUHAN','QTY','HARGA SATUAN','YANG DISETUJUI','REALISASI','PARAF']);
  rows.forEach(([kat,v],i) => data.push([i+1, kat, v.qty, v.satuan, v.disetujui, v.realisasi, '']));
  data.push(['','','','TOTAL', totalD, totalR, '']);
  data.push(['']);
  data.push(['Tanggal Cair', l.tglPencairan||'']);
  data.push(['Pelaksana/Admin Dept.', l.pelaksana?.[0]||'', 'Atasan Langsung/Pimpinan Dept.', l.pimpinanDept||'', 'Pimpinan Dept (dibebankan)', '', 'Manager F&A', l.managerFA||'']);
  data.push(['Nama Bank', user.bank||'', 'Nomor Rekening', user.rekening||'', 'Cabang', user.cabang||'', 'Atas Nama', user.atasNama||l.pelaksana?.[0]||'']);
  return data;
}

function exportFACsv(l) {
  const data = buildFADataRows(l);
  const BOM  = '\uFEFF';
  const escCsv = v => {
    const s = String(v===undefined||v===null?'':v);
    return (s.includes(';')||s.includes('"')||s.includes('\n')) ? '"'+s.replace(/"/g,'""')+'"' : s;
  };
  const csv = BOM + data.map(r=>(Array.isArray(r)?r:[r]).map(escCsv).join(';')).join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=`${l.id}_FormFA.csv`; a.click();
  URL.revokeObjectURL(url);
  showToast('File CSV Form FA berhasil diunduh.','success');
}

function exportFAOds(l) {
  const data = buildFADataRows(l);
  const escX = v => String(v===undefined||v===null?'':v)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let rowsXml = '';
  data.forEach(row => {
    rowsXml += '<table:table-row>';
    (Array.isArray(row)?row:[row]).forEach(cell => {
      const v = String(cell===undefined||cell===null?'':cell);
      const isNum = v!==''&&!isNaN(v)&&!isNaN(parseFloat(v));
      rowsXml += isNum
        ? `<table:table-cell office:value-type="float" office:value="${v}"><text:p>${v}</text:p></table:table-cell>`
        : `<table:table-cell office:value-type="string"><text:p>${escX(v)}</text:p></table:table-cell>`;
    });
    rowsXml += '</table:table-row>';
  });
  const fods = `<?xml version="1.0" encoding="UTF-8"?>
<office:document xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  office:mimetype="application/vnd.oasis.opendocument.spreadsheet" office:version="1.2">
<office:body><office:spreadsheet>
<table:table table:name="Form FA">${rowsXml}</table:table>
</office:spreadsheet></office:body></office:document>`;
  const blob = new Blob([fods],{type:'application/vnd.oasis.opendocument.spreadsheet;charset=utf-8;'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=`${l.id}_FormFA.fods`; a.click();
  URL.revokeObjectURL(url);
  showToast('File ODS Form FA berhasil diunduh.','success');
}

function generateFAHtml(l) {
  const user     = APP.currentUser || {};
  const radItems = l.radItems  || [];
  const rpdItems = l.rpdItems  || [];

  // Group RAD by kategori
  const groups = {}, katOrder = [];
  (APP.kategoriPerjalanan||[]).forEach(k=>{groups[k]={qty:0,satuan:0,disetujui:0,realisasi:0};katOrder.push(k);});
  radItems.forEach(r=>{
    if(!r.kategori)return;
    if(!groups[r.kategori]){groups[r.kategori]={qty:0,satuan:0,disetujui:0,realisasi:0};katOrder.push(r.kategori);}
    groups[r.kategori].qty       += r.qty;
    groups[r.kategori].disetujui += r.subTotal;
    groups[r.kategori].satuan     = r.satuan;
  });
  rpdItems.forEach(r=>{if(r.kategori&&groups[r.kategori])groups[r.kategori].realisasi+=r.subTotal;});
  const pRows  = katOrder.filter((k,i)=>katOrder.indexOf(k)===i&&(groups[k].disetujui>0||groups[k].realisasi>0));
  const totalD = pRows.reduce((s,k)=>s+groups[k].disetujui,0);
  const totalR = pRows.reduce((s,k)=>s+groups[k].realisasi,0);

  const multiTujuan = Array.isArray(l.tujuanList)&&l.tujuanList.length>1;
  const keperluan   = multiTujuan?(l.keteranganUmum||l.tujuanList.join(', ')):((l.kategori||'')+' '+(l.tujuan||'')).trim();
  const ja=l.jenisAnggaran||'';
  const isBeban=ja.includes('Beban'), isDitag=ja.includes('Ditagihkan'), isPotong=ja.includes('Potong');
  const bebanTxt=l.bebanDept||'';
  const namaPJ=l.pelaksana?.[0]||'';
  const fRp=v=>v?'Rp\u00a0'+Number(v).toLocaleString('id-ID'):'\u2014';

  // Data user IT Pelaksana PJ — ambil dari APP.users
  const pjUser = APP.users.find(u=>u.nama===namaPJ) || user;
  const bank    = pjUser.bank      || user.bank      || '';
  const rek     = pjUser.rekening  || user.rekening  || '';
  const cab     = pjUser.cabang    || user.cabang    || '';
  const atNama  = pjUser.atasNama  || user.atasNama  || namaPJ;
  const divisi  = pjUser.divisi    || user.divisi    || 'IT';
  const jabatan = pjUser.jabatan   || user.jabatan   || 'IT Support';

  const MAX=10, emptyCount=Math.max(0,MAX-pRows.length);

  // Logo asli
  const logoHtml=`<img src="${LOGO_SRC}" alt="K24" style="height:58px;width:auto;border-radius:5px;display:block">`;

  // Satu sisi (kiri=asli, kanan=copy+paraf)
  function oneSide(isCopy) {
    const tglLabel = isCopy ? 'Tanggal Pelaporan' : 'Tanggal Pengajuan';

    // Tabel baris data
    const B = 'border-bottom:1px solid #bbb;';
    const dataRows = pRows.map((k,i)=>`
      <tr>
        <td style="text-align:center;border-right:1px solid #555;${B}padding:3px 2px;font-size:8.5px">${i+1}</td>
        <td style="border-right:1px solid #555;${B}padding:3px 5px;font-size:8.5px">${k}</td>
        <td style="text-align:center;border-right:1px solid #555;${B}padding:3px 2px;font-size:8.5px">${groups[k].qty}</td>
        <td style="text-align:right;border-right:1px solid #555;${B}padding:3px 5px;white-space:nowrap;font-size:8.5px">${fRp(groups[k].satuan)}</td>
        <td style="text-align:right;border-right:1px solid #555;${B}padding:3px 5px;white-space:nowrap;font-size:8.5px">${fRp(groups[k].disetujui)}</td>
        <td style="text-align:right;${B}padding:3px 5px;white-space:nowrap;font-size:8.5px;${isCopy?'border-right:1px solid #555':''}">${fRp(groups[k].realisasi)}</td>
        ${isCopy?`<td style="width:34px;${B}padding:3px 2px"></td>`:''}
      </tr>`).join('');

    // Baris kosong — merge 4 kolom kiri (NO+RINCIAN+QTY+HARGA) di kiri, paraf di kanan
    // Per row kosong: jika isCopy -> kolom NO, RINCIAN, QTY, HARGA masing2 merged 1 baris (standard)
    const emptyRows = Array(emptyCount).fill(0).map((_,ei)=>`
      <tr style="height:17px">
        <td style="border-right:1px solid #555;border-bottom:1px solid #bbb;padding:0"></td>
        <td style="border-right:1px solid #555;border-bottom:1px solid #bbb;padding:0"></td>
        <td style="border-right:1px solid #555;border-bottom:1px solid #bbb;padding:0"></td>
        <td style="border-right:1px solid #555;border-bottom:1px solid #bbb;padding:0"></td>
        <td style="border-right:1px solid #555;border-bottom:1px solid #bbb;padding:0"></td>
        <td style="border-bottom:1px solid #bbb;padding:0;${isCopy?'border-right:1px solid #555':''}"></td>
        ${isCopy?'<td style="width:34px;border-bottom:1px solid #bbb;padding:0"></td>':''}
      </tr>`).join('');

    // Header tabel — kanan tambah PARAF
    const theadRow2 = isCopy
      ? `<th style="font-size:8px;width:85px;border-right:1px solid #555;padding:3px 4px">YANG DISETUJUI</th>
         <th style="font-size:8px;width:85px;border-right:1px solid #555;padding:3px 4px">REALISASI</th>
         <th style="font-size:8px;width:34px;padding:3px 2px">PARAF</th>`
      : `<th style="font-size:8px;width:85px;border-right:1px solid #555;padding:3px 4px">YANG DISETUJUI</th>
         <th style="font-size:8px;width:85px;padding:3px 4px">REALISASI</th>`;

    // Total row — kanan tambah sel PARAF
    const totalExtra = isCopy ? '<td style="border-left:1px solid #555"></td>' : '';

    return `
    <div style="flex:1;border:2px solid #333;padding:7px;position:relative;overflow:hidden;background:white;font-family:Arial,Helvetica,sans-serif;font-size:9px;color:#000">
      ${isCopy?`
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:0">
        <svg viewBox="0 0 280 80" width="55%" style="opacity:0.26">
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
            transform="rotate(-15,140,40)"
            font-size="36" font-weight="900" font-family="Arial,sans-serif"
            fill="none" stroke="#1e40af" stroke-width="1.8" letter-spacing="5">COPY - COPY</text>
        </svg>
      </div>`:''}
      <div style="position:relative;z-index:1">

        <!-- HEADER -->
        <table style="width:100%;border-collapse:collapse;border:1.5px solid #333;margin-bottom:6px">
          <tr>
            <td style="width:64px;border-right:1.5px solid #333;padding:4px;vertical-align:middle">${logoHtml}</td>
            <td style="text-align:center;padding:4px 6px;border-right:1.5px solid #333;vertical-align:middle">
              <div style="font-size:11px;font-weight:900;text-decoration:underline;letter-spacing:.3px">FORM REALISASI ANGGARAN</div>
              <div style="font-size:7.5px;color:#444;font-style:italic;margin-top:2px">Pelaksana &rarr; Pimpinan Dept. &rarr; F&A</div>
            </td>
            <td style="width:160px;vertical-align:top;padding:0">
              <div style="border-bottom:1.5px solid #333;padding:3px 5px;font-size:7.5px;font-family:monospace;font-weight:700;text-align:center">QR-SDM-08.00-02-00-0214</div>
              <div style="padding:4px 6px;font-size:8px">No. Form :<br><span style="border-bottom:1px solid #999;display:block;min-height:12px;width:100%;margin-top:2px"></span></div>
            </td>
          </tr>
        </table>

        <!-- META INFO: 2 kolom -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:6px">
          <!-- kiri -->
          <div style="font-size:8.5px">
            ${[
              ['Dept./Divisi', divisi],
              ['Nama Pelaksana', namaPJ, true],
              ['Jabatan', jabatan],
              [tglLabel, ''],
              ['__TGL__',''],
              ['Keperluan', keperluan, true, true]
            ].map(([lb,val,bold,uc])=>{
              if(lb==='__TGL__') return `
                <div style="display:grid;grid-template-columns:100px 8px 1fr;align-items:center;margin-bottom:2px">
                  <span style="font-weight:600;font-size:8.5px">Tanggal Pelaksanaan</span><span>:</span>
                  <span style="border-bottom:1px solid #bbb;padding:1px 3px;font-weight:700">${l.tglMulai||''} s/d ${l.tglSelesai||''}</span>
                </div>`;
              return `<div style="display:grid;grid-template-columns:100px 8px 1fr;align-items:${uc?'start':'center'};margin-bottom:2px">
                <span style="font-weight:600">${lb}</span><span>:</span>
                <span style="border-bottom:1px solid #bbb;padding:1px 3px;font-weight:${bold?700:400};text-transform:${uc?'uppercase':'none'}">${val}</span>
              </div>`;
            }).join('')}
          </div>
          <!-- kanan -->
          <div style="border-left:1px solid #ddd;padding-left:8px;display:flex;flex-direction:column;gap:10px">
            <div>
              <div style="font-weight:700;font-size:8.5px;margin-bottom:3px">Mata Anggaran <span style="font-weight:400;font-size:7.5px;font-style:italic">(pilih salah satu)</span> :</div>
              <div style="display:flex;flex-direction:column;gap:3px;padding-left:2px">
                <label style="display:flex;align-items:center;gap:4px;cursor:default">
                  <input type="checkbox" disabled ${isBeban?'checked':''} style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">Budgeter</span>
                  <span style="border-bottom:1px solid #bbb;min-width:60px;font-size:7.5px;color:#000;padding-left:2px">(isi nomor Budget)</span>
                </label>
                <label style="display:flex;align-items:center;gap:4px;cursor:default">
                  <input type="checkbox" disabled ${!isBeban?'checked':''} style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">Non-Budgeter</span>
                </label>
              </div>
            </div>
            <div>
              <div style="font-weight:700;font-size:8.5px;margin-bottom:3px">Jenis Anggaran <span style="font-weight:400;font-size:7.5px;font-style:italic">(pilih salah satu)</span> :</div>
              <div style="display:flex;flex-direction:column;gap:3px;padding-left:2px">
                <label style="display:flex;align-items:center;gap:4px;cursor:default">
                  <input type="radio" disabled ${isBeban?'checked':''} style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">Beban Dept./Divisi *)</span>
                  <span style="border-bottom:1px solid #999;min-width:40px;font-size:8px;color:#000;font-weight:700;padding-left:2px">${bebanTxt}</span>
                </label>
                <label style="display:flex;align-items:center;gap:4px;cursor:default">
                  <input type="radio" disabled ${isDitag?'checked':''} style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">Ditagihkan</span>
                </label>
                <label style="display:flex;align-items:center;gap:4px;cursor:default">
                  <input type="radio" disabled ${isPotong?'checked':''} style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">Potong Deposit</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- TABEL UTAMA -->
        <div style="border:1.5px solid #333;margin-bottom:6px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="background:#2d8f1e;color:white;text-align:center;font-size:8.5px;font-weight:700">
                <th rowspan="2" style="width:24px;border-right:1px solid #555;padding:3px 2px">NO</th>
                <th rowspan="2" style="border-right:1px solid #555;padding:3px 5px;text-align:left">RINCIAN KEBUTUHAN</th>
                <th rowspan="2" style="width:28px;border-right:1px solid #555;padding:3px 2px">QTY</th>
                <th rowspan="2" style="width:76px;border-right:1px solid #555;padding:3px 4px">HARGA SATUAN</th>
                <th colspan="${isCopy?3:2}" style="padding:3px 4px;text-align:center">ANGGARAN</th>
              </tr>
              <tr style="background:#3aad25;color:white;text-align:center">
                ${theadRow2}
              </tr>
            </thead>
            <tbody>
              ${dataRows}
              ${emptyRows}
            </tbody>
            <tfoot>
              <tr style="background:#e8f5e5;font-weight:800;border-top:1.5px solid #333">
                <td colspan="4" style="text-align:right;padding:4px 8px;border-right:1px solid #555;font-size:8.5px">TOTAL :</td>
                <td style="text-align:right;padding:4px 6px;border-right:1px solid #555;white-space:nowrap;font-size:8.5px">${fRp(totalD)}</td>
                <td style="text-align:right;padding:4px 6px;white-space:nowrap;font-size:8.5px;${isCopy?'border-right:1px solid #555':''}">${fRp(totalR)}</td>
                ${totalExtra}
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- TANDA TANGAN — 4 kotak, garis putus sejajar -->
        <table style="width:100%;border-collapse:collapse;border:1.5px solid #333;margin-bottom:6px;font-size:8px">
          <tr>
            ${[
              ['Diajukan oleh,',  namaPJ,              'Pelaksana / Admin Dept.'],
              ['Diketahui oleh,', l.pimpinanDept||'',  'Atasan Langsung / Pimpinan Dept.'],
              ['Disetujui oleh,', '',                  'Pimpinan Dept. (yang dibebankan*)'],
              ['Disetujui oleh,', l.managerFA||'',     'Manager F&A']
            ].map(([lb,nm,role],i)=>`
              <td style="${i<3?'border-right:1.5px solid #333;':''}padding:5px 5px;vertical-align:top;width:25%;text-align:center">
                <div style="color:#555;font-size:7.5px;margin-bottom:36px">${lb}</div>
                <div style="border-bottom:1px dashed #777;padding-bottom:2px;margin-bottom:2px;font-weight:700;font-size:8.5px;min-height:14px;text-transform:uppercase">
                  ${i===2?nm:`( ${nm} )`}
                </div>
                <div style="font-size:7px;color:#444;font-weight:600">${role}</div>
              </td>`).join('')}
          </tr>
        </table>

        <!-- PEMBAYARAN -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:8.5px">
          <div style="display:flex;flex-direction:column;gap:3px">
            <div style="display:grid;grid-template-columns:110px 6px 1fr;align-items:center">
              <span style="font-weight:600">Tanggal Cair</span><span>:</span>
              <span style="border-bottom:1px solid #bbb;padding:1px 3px;font-weight:700">${l.tglPencairan||''}</span>
            </div>
            <div style="display:grid;grid-template-columns:110px 6px 1fr;align-items:center;margin-top:2px">
              <span style="font-weight:600;font-size:8px">Pembayaran via</span><span>:</span>
              <div style="display:flex;gap:8px;align-items:center">
                <label style="display:flex;gap:3px;align-items:center;cursor:default">
                  <input type="checkbox" disabled style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">TUNAI / CASH</span>
                </label>
                <label style="display:flex;gap:3px;align-items:center;cursor:default">
                  <input type="checkbox" checked disabled style="width:10px;height:10px">
                  <span style="font-size:8px;color:#000;font-weight:400">TRANSFER</span>
                </label>
              </div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:3px">
            ${[['Nama Bank',''],['Nomor rekening',''],['Cabang',''],['Atas nama','']].map(([lb,val])=>`
              <div style="display:grid;grid-template-columns:90px 6px 1fr;align-items:center">
                <span style="font-weight:600">${lb}</span><span>:</span>
                <span style="border-bottom:1px solid #bbb;padding:1px 3px">${val}</span>
              </div>`).join('')}
          </div>
        </div>

      </div><!-- /z-index -->
    </div>`;
  }

  const css=`<style>
    @page{size:A4 landscape;margin:5mm 4mm;}
    @media print{
      html,body{margin:0!important;padding:0!important;
        -webkit-print-color-adjust:exact!important;
        print-color-adjust:exact!important;}
      .no-print{display:none!important;}
    }
    *{box-sizing:border-box;}
    body{font-family:Arial,Helvetica,sans-serif;font-size:9px;margin:0;padding:0;background:white;}
    input[type=checkbox],input[type=radio]{cursor:default;flex-shrink:0;}
  </style>`;

  return css+`<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;width:100%">`
    +oneSide(false)+oneSide(true)+`</div>`;
}

function generateTanpaNotaHtml(l) {
  const notaRows = l.notaItems || [];
  const total    = notaRows.reduce((s,r) => s + (r.jumlah||0), 0);
  const namaPJ   = l.pelaksana?.[0] || '';
  const MAX_ROWS = 7;
  const emptyCount = Math.max(0, MAX_ROWS - notaRows.length);

  // Fungsi satu lembar (kiri=asli, kanan=COPY)
  function oneLembar(isCopy) {
    const dataRows = notaRows.map((r, i) => `
      <tr class="row-item">
        <td class="no-cell">${i+1}</td>
        <td>${r.rincian||''}</td>
        <td class="col-qty">${r.qty||''}</td>
        <td class="col-harga">${r.satuan ? formatRp(r.satuan) : ''}</td>
        <td class="col-jml">${r.jumlah ? formatRp(r.jumlah) : ''}</td>
      </tr>`).join('');

    const emptyRows = Array(emptyCount).fill(0).map((_, i) => `
      <tr class="row-item">
        <td class="no-cell">${notaRows.length + i + 1}</td>
        <td>&nbsp;</td>
        <td class="col-qty"></td>
        <td class="col-harga"></td>
        <td class="col-jml"></td>
      </tr>`).join('');

    return `
    <div class="lembar">
      ${isCopy ? '<div class="watermark">COPY</div>' : ''}
      <div class="header">
        <div class="logo-area">
          <img src="${LOGO_SRC}" alt="Apotek K24">
        </div>
        <div class="title-area">
          <div class="title-main">BUKTI PENGELUARAN UANG</div>
          <div class="title-sub">Pelaksana &rarr;&nbsp;&nbsp;Atasan Langsung &rarr; F&amp;A</div>
        </div>
        <div class="qr-area">
          <div class="qr-code-box">QR-PD-04.00-01-00-0216</div>
          <div class="no-nota-box">No.Nota :&nbsp;<span class="no-nota-line"></span></div>
        </div>
      </div>
      <table class="main-table">
        <thead>
          <tr class="spacer-row"><td colspan="5"></td></tr>
          <tr>
            <th colspan="2">RINCIAN PENGELUARAN</th>
            <th class="col-qty">QTY</th>
            <th class="col-harga">HARGA<br>SATUAN</th>
            <th class="col-jml">JUMLAH</th>
          </tr>
        </thead>
        <tbody>
          ${dataRows}
          ${emptyRows}
          <tr class="row-total">
            <td colspan="4" style="text-align:center;">TOTAL</td>
            <td class="col-jml" style="text-align:right;padding-right:3mm;">${total ? formatRp(total) : ''}</td>
          </tr>
        </tbody>
      </table>
      <table class="sign-table">
        <tr class="sign-header">
          <td style="width:50%;">Dibuat oleh,</td>
          <td style="width:50%;">Disetujui oleh,</td>
        </tr>
        <tr class="sign-space"><td></td><td></td></tr>
        <tr class="sign-space2">
          <td style="font-weight:700;font-size:8pt;text-align:center">${namaPJ}</td>
          <td style="font-weight:700;font-size:8pt;text-align:center">${l.atasanLangsung||''}</td>
        </tr>
        <tr class="sign-footer">
          <td>Admin Dept / Pelaksana</td>
          <td>Atasan Langsung / Pimpinan Dept.</td>
        </tr>
      </table>
    </div>`;
  }

  const css = `<style>
    * { margin:0; padding:0; box-sizing:border-box; }
    @page { size: A4 landscape; margin: 6mm; }
    @media print {
      body { background:white; padding:0; }
      .a4-page { box-shadow:none; width:100%; }
      .no-print { display:none!important; }
      html,body { -webkit-print-color-adjust:exact!important; print-color-adjust:exact!important; }
    }
    body { font-family:Arial,sans-serif; background:#f0f0f0; display:flex; justify-content:center; padding:8px; }
    .a4-page { width:277mm; background:white; display:flex; flex-direction:row; gap:4mm; padding:5mm; box-shadow:0 0 12px rgba(0,0,0,0.35); }
    .lembar { width:50%; border:2.5px solid #000; position:relative; font-size:7.5pt; display:flex; flex-direction:column; }
    .watermark {
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%) rotate(-35deg);
      font-size:80pt; font-weight:900; color:rgba(140,140,140,0.45);
      pointer-events:none; z-index:10; letter-spacing:10px;
      white-space:nowrap; font-family:Arial Black,Arial,sans-serif;
    }
    .header { display:flex; flex-direction:row; align-items:stretch; border-bottom:2.5px solid #000; }
    .logo-area { width:20mm; display:flex; align-items:center; justify-content:center; border-right:2.5px solid #000; padding:2px; flex-shrink:0; }
    .logo-area img { width:56px; height:auto; display:block; }
    .title-area { flex:1; display:flex; flex-direction:column; justify-content:center; padding:2mm 3mm; border-right:2.5px solid #000; }
    .title-main { font-size:11.5pt; font-weight:900; color:#000; line-height:1.25; white-space:nowrap; }
    .title-sub  { font-size:7pt; color:#333; margin-top:2px; white-space:nowrap; }
    .qr-area    { width:34mm; display:flex; flex-direction:column; flex-shrink:0; }
    .qr-code-box { border-bottom:2.5px solid #000; padding:2.5mm 2mm; text-align:center; font-size:6.5pt; font-weight:bold; flex:1; display:flex; align-items:center; justify-content:center; }
    .no-nota-box { padding:2mm; font-size:7pt; display:flex; align-items:center; gap:2px; white-space:nowrap; }
    .no-nota-line { flex:1; border-bottom:1.5px solid #000; height:12px; display:inline-block; }
    .spacer-row { height:6mm; border:none; }
    .spacer-row td { border:none!important; background:white; }
    .main-table { width:100%; border-collapse:collapse; }
    .main-table th, .main-table td { border:2px solid #000; padding:1.5mm 2mm; font-size:7.5pt; vertical-align:middle; }
    .main-table thead th { background-color:#f0f0f0; text-align:center; font-weight:bold; font-size:7pt; }
    .col-qty   { width:11mm; text-align:center; }
    .col-harga { width:22mm; text-align:center; }
    .col-jml   { width:22mm; text-align:center; }
    .row-item td { height:7.5mm; }
    td.no-cell { width:5mm; text-align:center; font-size:7pt; color:#444; vertical-align:middle; padding:1mm!important; border-right:1.5px dashed #aaa!important; }
    .row-total td { font-weight:bold; background-color:#f0f0f0; height:7.5mm; }
    .sign-table  { width:100%; border-collapse:collapse; }
    .sign-table td { border:2px solid #000; padding:1.5mm 2mm; font-size:7pt; vertical-align:top; }
    .sign-header td { font-size:7.5pt; height:6.5mm; vertical-align:middle; color:#000; }
    .sign-space td  { height:18mm; }
    .sign-space2 td { height:5mm; vertical-align:bottom; }
    .sign-footer td { font-size:6.5pt; text-align:center; height:6mm; vertical-align:middle; font-weight:bold; }
  </style>`;

  return css + `<div class="a4-page">` + oneLembar(false) + oneLembar(true) + `</div>`;
}

// ========== EXPORT TANPA NOTA CSV & ODS ==========
// ========== DOWNLOAD NOTA (ZIP dari Google Drive) ==========
function downloadNota() {
  const l = APP.currentLaporan;
  const rpdItems = l.rpdItems || [];
  const notaFiles = rpdItems.filter(r => r.nota && r.nota.trim());

  if (!notaFiles.length) {
    showToast('Tidak ada file nota yang telah diupload pada laporan ini.', 'warning');
    return;
  }

  // Mode Demo: tampilkan daftar nota yang tersimpan
  if (!isLiveMode()) {
    const namaList = notaFiles.map((r,i) => `${i+1}. ${r.nota}`).join('\n');
    alert(`Mode Demo — Nota yang terdaftar:\n\n${namaList}\n\nUntuk download ZIP, hubungkan ke Google Drive melalui menu Pengaturan.`);
    return;
  }

  // Mode Live: panggil Google Apps Script untuk generate ZIP download
  showToast('Menyiapkan file ZIP nota...', 'success');
  const url = `${APP.settings.scriptUrl}?action=downloadNotaZip&laporanId=${encodeURIComponent(l.id)}&folderId=${encodeURIComponent(APP.settings.driveId||'')}`;
  window.open(url, '_blank');
}

function exportTanpaNotaCsv(l) {
  const rows  = l.notaItems || [];
  const total = rows.reduce((s,r)=>s+(r.jumlah||0),0);
  const data  = [];
  data.push(['BUKTI PENGELUARAN UANG']);
  data.push(['ID Perjalanan', l.id]);
  data.push(['Pelaksana', l.pelaksana?.[0]||'']);
  data.push(['Tujuan', l.tujuan||'']);
  data.push(['']);
  data.push(['NO','RINCIAN PENGELUARAN','QTY','HARGA SATUAN','JUMLAH']);
  rows.forEach((r,i) => data.push([i+1, r.rincian||'', r.qty||0, r.satuan||0, r.jumlah||0]));
  data.push(['','','','TOTAL', total]);
  data.push(['']);
  data.push(['Dibuat oleh', l.pelaksana?.[0]||'', 'Disetujui oleh', l.atasanLangsung||'']);

  const BOM = '\uFEFF';
  const escCsv = v => { const s=String(v==null?'':v); return (s.includes(';')||s.includes('"')||s.includes('\n'))?'"'+s.replace(/"/g,'""')+'"':s; };
  const csv = BOM + data.map(r=>(Array.isArray(r)?r:[r]).map(escCsv).join(';')).join('\r\n');
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=`${l.id}_TanpaNotaBPU.csv`; a.click();
  URL.revokeObjectURL(url);
  showToast('File CSV Bukti Pengeluaran Uang berhasil diunduh.','success');
}

function exportTanpaNotaOds(l) {
  const rows  = l.notaItems || [];
  const total = rows.reduce((s,r)=>s+(r.jumlah||0),0);
  const data  = [];
  data.push(['BUKTI PENGELUARAN UANG']);
  data.push(['ID Perjalanan', l.id]);
  data.push(['Pelaksana', l.pelaksana?.[0]||'']);
  data.push(['Tujuan', l.tujuan||'']);
  data.push(['']);
  data.push(['NO','RINCIAN PENGELUARAN','QTY','HARGA SATUAN','JUMLAH']);
  rows.forEach((r,i) => data.push([i+1, r.rincian||'', r.qty||0, r.satuan||0, r.jumlah||0]));
  data.push(['','','','TOTAL', total]);

  const escX = v => String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let rowsXml = '';
  data.forEach(row => {
    rowsXml += '<table:table-row>';
    (Array.isArray(row)?row:[row]).forEach(cell => {
      const v=String(cell==null?'':cell);
      const isNum=v!==''&&!isNaN(v)&&!isNaN(parseFloat(v));
      rowsXml += isNum
        ? `<table:table-cell office:value-type="float" office:value="${v}"><text:p>${v}</text:p></table:table-cell>`
        : `<table:table-cell office:value-type="string"><text:p>${escX(v)}</text:p></table:table-cell>`;
    });
    rowsXml += '</table:table-row>';
  });
  const fods=`<?xml version="1.0" encoding="UTF-8"?>
<office:document xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  office:mimetype="application/vnd.oasis.opendocument.spreadsheet" office:version="1.2">
<office:body><office:spreadsheet>
<table:table table:name="BPU">${rowsXml}</table:table>
</office:spreadsheet></office:body></office:document>`;
  const blob=new Blob([fods],{type:'application/vnd.oasis.opendocument.spreadsheet;charset=utf-8;'});
  const url =URL.createObjectURL(blob);
  const a   =document.createElement('a');
  a.href=url; a.download=`${l.id}_TanpaNotaBPU.fods`; a.click();
  URL.revokeObjectURL(url);
  showToast('File ODS Bukti Pengeluaran Uang berhasil diunduh.','success');
}
function exportToExcel(l,type){
  let csv='';
  if(type==='rad'){
    csv=`ID Perjalanan,${l.id}
Pelaksana,"${l.pelaksana?.join(', ')}"
Tujuan,${l.tujuan}

No,Detail,Kategori,QTY,Satuan,Sub Total,Keterangan
`;
    (l.radItems||[]).forEach((r,i)=>{csv+=`${i+1},"${r.detail}","${r.kategori}",${r.qty},${r.satuan},${r.subTotal},"${r.keterangan}"
`;});
    csv+=`,,,,TOTAL,${l.totalRAD},
`;
  }else{
    csv=`ID Perjalanan,${l.id}
Pelaksana,"${l.pelaksana?.join(', ')}"
Tujuan,${l.tujuan}

RAD (Rencana)
No,Detail,Kategori,QTY,Satuan,Sub Total
`;
    (l.radItems||[]).forEach((r,i)=>{csv+=`${i+1},"${r.detail}","${r.kategori}",${r.qty},${r.satuan},${r.subTotal}
`;});
    csv+=`Total,,,,,${l.totalRAD}

RPD (Realisasi)
No,Detail,Kategori,QTY,Satuan,Sub Total
`;
    (l.rpdItems||[]).forEach((r,i)=>{csv+=`${i+1},"${r.detail}","${r.kategori}",${r.qty},${r.satuan},${r.subTotal}
`;});
    csv+=`Total,,,,,${l.totalRPD}

Sisa Dana,,,,,${(l.totalRAD||0)-(l.totalRPD||0)}
`;
  }
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download=`${l.id}_${type.toUpperCase()}.csv`; a.click();
  URL.revokeObjectURL(url);
  showToast('File CSV berhasil diunduh.','success');
}

// ==================== UTILS ====================
function formatRp(num){
  if(!num&&num!==0) return 'Rp 0';
  return 'Rp '+Math.round(num).toLocaleString('id-ID');
}
function generateId() {
  const year = new Date().getFullYear();

  // Ambil username bersih (hapus spasi, huruf besar, karakter non-alfanumerik)
  const rawUser = APP.currentUser?.username || APP.currentUser?.nama || 'USER';
  const uname   = rawUser.toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .substring(0, 12) || 'USER';

  // Random 4 digit
  const rand4 = String(Math.floor(1000 + Math.random() * 9000));

  // Nomor urut — ambil dari counter yang tersimpan, TIDAK pernah turun
  // Counter disimpan per-user di settings agar tidak bentrok antar user
  if (!APP.settings.idCounters) APP.settings.idCounters = {};
  const counterKey = `${uname}_${year}`;
  let seq = (APP.settings.idCounters[counterKey] || 0) + 1;

  // Pastikan ID ini belum pernah dipakai sebelumnya (cek laporanList + usedIds)
  if (!APP.settings.usedIds) APP.settings.usedIds = [];
  let candidate = `LPJ-K24-ITSUPPORT-${year}-${uname}-${rand4}-${String(seq).padStart(3,'0')}`;
  let tries = 0;
  while (
    APP.laporanList.some(l => l.id === candidate) ||
    APP.settings.usedIds.includes(candidate)
  ) {
    // Kalau bentrok (sangat jarang), regenerate random dan increment seq
    const newRand = String(Math.floor(1000 + Math.random() * 9000));
    seq++;
    candidate = `LPJ-K24-ITSUPPORT-${year}-${uname}-${newRand}-${String(seq).padStart(3,'0')}`;
    if (++tries > 50) break; // safety
  }

  // Simpan counter dan tandai ID ini sudah dipakai
  APP.settings.idCounters[counterKey] = seq;
  APP.settings.usedIds.push(candidate);
  // Batasi usedIds agar tidak tumbuh tak terbatas (simpan 1000 terakhir)
  if (APP.settings.usedIds.length > 1000) {
    APP.settings.usedIds = APP.settings.usedIds.slice(-1000);
  }
  saveToStorage();

  return candidate;
}

// Sinkronisasi usedIds dari database (dipanggil setelah loadFromServer)
function syncUsedIdsFromServer() {
  if (!APP.settings.usedIds) APP.settings.usedIds = [];
  // Ambil semua ID yang pernah ada di laporanList
  APP.laporanList.forEach(l => {
    if (l.id && !APP.settings.usedIds.includes(l.id)) {
      APP.settings.usedIds.push(l.id);
    }
  });
  saveToStorage();
}
function today(){ return new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'}); }
// ============================================================
// DATE UTILITIES — aman di semua browser termasuk Safari/iOS
// new Date("2026-06-01") gagal di Safari → timezone shift ke hari sebelumnya
// Solusi: parse manual atau ganti separator - ke /
// ============================================================

// Parse tanggal string YYYY-MM-DD menjadi Date lokal (bukan UTC)
function parseLocalDate(str) {
  if (!str) return null;
  // Ambil hanya bagian tanggal (buang waktu jika ada)
  const s = String(str).trim().substring(0, 10);
  // Cek format YYYY-MM-DD
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  // Cek format DD/MM/YYYY (fallback)
  const m2 = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (m2) return new Date(+m2[2], +m2[1] - 1, +m2[0]);
  return null;
}

// Normalisasi tanggal dari database ke format YYYY-MM-DD
// Menangani: Date object, ISO string, "YYYY-MM-DD", "DD/MM/YYYY"
function normalizeDate(val) {
  if (!val) return '';
  // Sudah format YYYY-MM-DD
  if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(val.trim())) {
    return val.trim();
  }
  // ISO string dari spreadsheet: "2026-06-01T00:00:00.000Z" atau "2026-06-01 00:00:00"
  if (typeof val === 'string' && val.includes('T')) {
    return val.substring(0, 10);
  }
  if (typeof val === 'string' && val.includes(' ') && val.length > 10) {
    return val.substring(0, 10);
  }
  // Date object dari Google Sheets API
  if (val instanceof Date || (typeof val === 'object' && val !== null)) {
    try {
      const d = new Date(val);
      if (!isNaN(d)) {
        const y = d.getFullYear();
        const m = String(d.getMonth()+1).padStart(2,'0');
        const dd= String(d.getDate()).padStart(2,'0');
        return `${y}-${m}-${dd}`;
      }
    } catch(e) {}
  }
  // Angka serial Excel/Sheets (days since 1899-12-30)
  if (typeof val === 'number' && val > 0) {
    const d = new Date((val - 25569) * 86400 * 1000);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth()+1).padStart(2,'0');
    const dd= String(d.getUTCDate()).padStart(2,'0');
    return `${y}-${m}-${dd}`;
  }
  return String(val).substring(0, 10);
}

function formatDateRange(from,to){
  if(!from) return '-';
  const days=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const months=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const f=parseLocalDate(normalizeDate(from));
  const t=parseLocalDate(normalizeDate(to));
  if(!f||isNaN(f)) return from+' s/d '+(to||'');
  if(!t||isNaN(t)) return `${days[f.getDay()]}, ${f.getDate()} ${months[f.getMonth()]} ${f.getFullYear()}`;
  return `${days[f.getDay()]}, ${f.getDate()} ${months[f.getMonth()]} ${f.getFullYear()} – ${days[t.getDay()]}, ${t.getDate()} ${months[t.getMonth()]} ${t.getFullYear()}`;
}
function showToast(msg,type='success'){
  const container=document.getElementById('toast-container');
  const icons={success:'fa-circle-check',error:'fa-circle-xmark',warning:'fa-triangle-exclamation'};
  const toast=document.createElement('div');
  toast.className=`toast ${type}`;
  toast.innerHTML=`<i class="fas ${icons[type]||icons.success}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(()=>toast.remove(),3000);
}
