// Data Faker untuk Admin Dashboard
const adminFakeData = {
    // Data untuk Admin Overview
    adminActivities: [
        { title: "User Baru Terdaftar", desc: "5 user baru mendaftar hari ini", time: "2 jam yang lalu", type: "user" },
        { title: "Proyek Baru Dibuat", desc: "Proyek 'Riset AI' dibuat oleh Ahmad", time: "4 jam yang lalu", type: "project" },
        { title: "Pembaruan Sistem", desc: "Sistem berhasil diupdate ke versi 2.1", time: "6 jam yang lalu", type: "system" },
        { title: "Backup Database", desc: "Backup database harian berhasil", time: "8 jam yang lalu", type: "backup" },
        { title: "Laporan Bulanan", desc: "Laporan aktivitas November 2023 selesai", time: "1 hari yang lalu", type: "report" },
        { title: "Maintenance Server", desc: "Maintenance server terjadwal selesai", time: "2 hari yang lalu", type: "system" },
        { title: "Verifikasi Kampus", desc: "Kampus XYZ berhasil diverifikasi", time: "3 hari yang lalu", type: "campus" },
        { title: "Update Keamanan", desc: "Patch keamanan berhasil diterapkan", time: "5 hari yang lalu", type: "security" }
    ],
    
    // Data untuk User Management
    users: [
        { name: "Ahmad Syahroni", email: "ahmad@email.com", role: "Mahasiswa", status: "active", joined: "2023-09-15", lastActive: "2023-12-01", avatar: "AS" },
        { name: "Budi Santoso", email: "budi@email.com", role: "Dosen", status: "active", joined: "2023-08-20", lastActive: "2023-12-01", avatar: "BS" },
        { name: "Citra Wijaya", email: "citra@email.com", role: "Admin Kampus", status: "pending", joined: "2023-11-10", lastActive: "2023-11-30", avatar: "CW" },
        { name: "Dewi Anggraeni", email: "dewi@email.com", role: "Mahasiswa", status: "active", joined: "2023-10-05", lastActive: "2023-12-01", avatar: "DA" },
        { name: "Eko Prasetyo", email: "eko@email.com", role: "Dosen", status: "inactive", joined: "2023-07-15", lastActive: "2023-10-20", avatar: "EP" },
        { name: "Fajar Nugroho", email: "fajar@email.com", role: "Mahasiswa", status: "active", joined: "2023-09-25", lastActive: "2023-12-01", avatar: "FN" },
        { name: "Gita Maharani", email: "gita@email.com", role: "Admin Kampus", status: "active", joined: "2023-08-10", lastActive: "2023-12-01", avatar: "GM" },
        { name: "Hendra Setiawan", email: "hendra@email.com", role: "Mahasiswa", status: "pending", joined: "2023-11-20", lastActive: "2023-11-25", avatar: "HS" },
        { name: "Indra Permana", email: "indra@email.com", role: "Dosen", status: "active", joined: "2023-07-30", lastActive: "2023-12-01", avatar: "IP" },
        { name: "Joko Widodo", email: "joko@email.com", role: "Super Admin", status: "active", joined: "2023-01-15", lastActive: "2023-12-01", avatar: "JW" },
        { name: "Kartika Sari", email: "kartika@email.com", role: "Mahasiswa", status: "active", joined: "2023-10-20", lastActive: "2023-12-01", avatar: "KS" },
        { name: "Luki Hartono", email: "luki@email.com", role: "Mahasiswa", status: "inactive", joined: "2023-09-05", lastActive: "2023-10-15", avatar: "LH" }
    ],
    
    // Data untuk Project Management
    projects: [
        { name: "Sistem Akademik AI", owner: "Ahmad Syahroni", status: "active", members: 6, progress: 65 },
        { name: "Platform E-Learning", owner: "Budi Santoso", status: "pending", members: 5, progress: 90 },
        { name: "Riset Blockchain", owner: "Citra Wijaya", status: "active", members: 8, progress: 40 },
        { name: "Mobile App UI/UX", owner: "Dewi Anggraeni", status: "completed", members: 4, progress: 100 },
        { name: "Analisis Data Kampus", owner: "Eko Prasetyo", status: "active", members: 7, progress: 55 },
        { name: "Game Edukasi Matematika", owner: "Fajar Nugroho", status: "active", members: 5, progress: 30 },
        { name: "Website Organisasi", owner: "Gita Maharani", status: "active", members: 3, progress: 80 },
        { name: "Sistem Presensi Digital", owner: "Hendra Setiawan", status: "active", members: 6, progress: 20 },
        { name: "AI Chatbot Pendidikan", owner: "Indra Permana", status: "pending", members: 4, progress: 45 },
        { name: "Platform Donasi Pendidikan", owner: "Joko Widodo", status: "active", members: 9, progress: 75 },
        { name: "Sistem Perpustakaan Digital", owner: "Kartika Sari", status: "active", members: 5, progress: 60 },
        { name: "Aplikasi Manajemen Tugas", owner: "Luki Hartono", status: "inactive", members: 3, progress: 25 }
    ],
    
    // Data untuk Content Management
    contents: [
        { title: "Panduan Kolaborasi", type: "guide", status: "published", views: "1.2k", author: "Admin", date: "2023-11-28" },
        { title: "Update Fitur Baru", type: "announcement", status: "published", views: "845", author: "Admin", date: "2023-11-25" },
        { title: "Tips Menulis Laporan", type: "tutorial", status: "draft", views: "0", author: "Admin", date: "2023-11-30" },
        { title: "Kompetisi Inovasi 2023", type: "news", status: "published", views: "2.1k", author: "Admin", date: "2023-11-20" },
        { title: "Workshop Kolaborasi Digital", type: "announcement", status: "published", views: "932", author: "Admin", date: "2023-11-22" },
        { title: "Panduan Keamanan Data", type: "guide", status: "published", views: "567", author: "Admin", date: "2023-11-15" },
        { title: "Cara Membuat Proyek", type: "tutorial", status: "published", views: "1.5k", author: "Admin", date: "2023-11-10" },
        { title: "Berita Kampus UI", type: "news", status: "archived", views: "324", author: "Admin", date: "2023-11-05" }
    ],
    
    // Data untuk System Stats
    systemStats: [
        { value: "99.8%", label: "Uptime Server", icon: "server", trend: "up" },
        { value: "2.4 TB", label: "Penyimpanan Terpakai", icon: "database", trend: "up" },
        { value: "1,245", label: "Pengguna Aktif", icon: "user-check", trend: "up" },
        { value: "356", label: "Proyek Aktif", icon: "project-diagram", trend: "up" },
        { value: "42", label: "Kampus Terdaftar", icon: "university", trend: "up" },
        { value: "156", label: "Log Hari Ini", icon: "clipboard-list", trend: "down" },
        { value: "24", label: "Dosen Aktif", icon: "chalkboard-teacher", trend: "up" },
        { value: "92%", label: "Kepuasan Pengguna", icon: "smile", trend: "up" }
    ],
    
    // Data untuk Reports
    reports: [
        { title: "Laporan Aktivitas Bulanan", desc: "Laporan aktivitas pengguna November 2023", type: "monthly", date: "2023-11-30", size: "2.4 MB" },
        { title: "Analisis Penggunaan Sistem", desc: "Analisis penggunaan fitur dan engagement", type: "analytics", date: "2023-11-28", size: "1.8 MB" },
        { title: "Laporan Keuangan Q4", desc: "Laporan keuangan kuartal 4 tahun 2023", type: "financial", date: "2023-11-25", size: "3.2 MB" },
        { title: "Audit Keamanan Sistem", desc: "Hasil audit keamanan sistem bulanan", type: "security", date: "2023-11-22", size: "1.5 MB" },
        { title: "Statistik Proyek", desc: "Statistik perkembangan proyek kolaborasi", type: "project", date: "2023-11-20", size: "2.1 MB" },
        { title: "Laporan Performa Server", desc: "Monitoring performa server dan uptime", type: "server", date: "2023-11-18", size: "1.2 MB" },
        { title: "Data Registrasi User", desc: "Data registrasi user baru bulan November", type: "user", date: "2023-11-15", size: "0.8 MB" },
        { title: "Laporan Backup", desc: "Status backup dan recovery sistem", type: "backup", date: "2023-11-10", size: "4.5 MB" }
    ],
    
    // Data untuk System Settings
    systemSettings: [
        { title: "Pengaturan Umum", desc: "Konfigurasi umum sistem dan aplikasi", icon: "cog", status: "active" },
        { title: "Keamanan Sistem", desc: "Pengaturan keamanan dan autentikasi", icon: "shield-alt", status: "active" },
        { title: "Email & Notifikasi", desc: "Konfigurasi email dan sistem notifikasi", icon: "envelope", status: "active" },
        { title: "Integrasi API", desc: "Pengaturan integrasi dengan API eksternal", icon: "code", status: "inactive" },
        { title: "Manajemen Cache", desc: "Pengaturan caching dan performa", icon: "bolt", status: "active" },
        { title: "Backup & Restore", desc: "Konfigurasi backup otomatis", icon: "database", status: "active" },
        { title: "Monitoring Sistem", desc: "Pengaturan monitoring dan alerting", icon: "tachometer-alt", status: "active" },
        { title: "Custom Branding", desc: "Kustomisasi logo dan tema", icon: "palette", status: "inactive" }
    ],
    
    // Data untuk System Logs
    systemLogs: [
        { time: "2023-12-01 10:30:15", type: "login", user: "Ahmad Syahroni", action: "User login successful", ip: "192.168.1.100", status: "success" },
        { time: "2023-12-01 10:25:42", type: "project", user: "Budi Santoso", action: "Created new project", ip: "192.168.1.101", status: "success" },
        { time: "2023-12-01 10:15:18", type: "security", user: "System", action: "Failed login attempt", ip: "203.0.113.5", status: "failed" },
        { time: "2023-12-01 09:45:33", type: "backup", user: "System", action: "Daily backup completed", ip: "localhost", status: "success" },
        { time: "2023-12-01 09:30:22", type: "user", user: "Admin", action: "User account created", ip: "192.168.1.1", status: "success" },
        { time: "2023-12-01 09:15:47", type: "system", user: "System", action: "System update applied", ip: "localhost", status: "success" },
        { time: "2023-12-01 08:45:19", type: "content", user: "Admin", action: "Content published", ip: "192.168.1.1", status: "success" },
        { time: "2023-12-01 08:30:55", type: "email", user: "System", action: "Newsletter sent", ip: "localhost", status: "success" },
        { time: "2023-12-01 08:15:28", type: "database", user: "System", action: "Database optimization", ip: "localhost", status: "success" },
        { time: "2023-12-01 07:45:12", type: "security", user: "System", action: "Security scan completed", ip: "localhost", status: "success" },
        { time: "2023-11-30 23:30:45", type: "backup", user: "System", action: "Incremental backup", ip: "localhost", status: "success" },
        { time: "2023-11-30 22:15:33", type: "maintenance", user: "System", action: "System maintenance", ip: "localhost", status: "success" }
    ],
    
    // Data untuk Backup
    backups: [
        { name: "Backup Harian - 1 Des 2023", type: "daily", size: "2.4 GB", status: "completed", date: "2023-12-01 00:00" },
        { name: "Backup Mingguan - 26 Nov 2023", type: "weekly", size: "3.1 GB", status: "completed", date: "2023-11-26 00:00" },
        { name: "Backup Bulanan - 1 Nov 2023", type: "monthly", size: "5.8 GB", status: "completed", date: "2023-11-01 00:00" },
        { name: "Backup Database Only", type: "partial", size: "1.2 GB", status: "completed", date: "2023-11-30 12:00" },
        { name: "Backup Full System", type: "full", size: "8.5 GB", status: "in-progress", date: "2023-12-01 10:00" },
        { name: "Backup User Files", type: "partial", size: "4.3 GB", status: "completed", date: "2023-11-29 18:00" },
        { name: "Backup Konfigurasi", type: "config", size: "0.5 GB", status: "completed", date: "2023-11-28 06:00" },
        { name: "Backup Log Files", type: "logs", size: "1.8 GB", status: "failed", date: "2023-11-27 03:00" }
    ]
};

// ===== SIDEBAR FUNCTIONALITY =====
// DOM Elements
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebarToggleBtn = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelectorAll('.nav-link');
const dashboardContents = document.querySelectorAll('.dashboard-content');
const profileDropdown = document.getElementById('profileDropdown');
const profileBtn = profileDropdown.querySelector('.profile-btn');
const logoutBtn = document.getElementById('logoutBtn');
const switchToUserBtn = document.getElementById('switchToUser');
const addContentBtn = document.getElementById('addContentBtn');
const addContentModal = document.getElementById('addContentModal');
const closeContentModal = document.getElementById('closeContentModal');
const cancelContentBtn = document.getElementById('cancelContentBtn');
const contentForm = document.getElementById('contentForm');

// State variables
let isMobile = window.innerWidth <= 1024;

// ===== SIDEBAR FUNCTIONS =====
function toggleSidebarFunction() {
    if (isMobile) {
        // MOBILE: Toggle active state
        sidebar.classList.toggle('active');
        
        // Geser main content
        updateMainContentPosition();
        
        // Handle overlay
        if (sidebar.classList.contains('active')) {
            createMobileOverlay();
        } else {
            removeMobileOverlay();
        }
    } else {
        // DESKTOP: Toggle collapsed state
        sidebar.classList.toggle('sidebar-collapsed');
        
        // Update main content margin
        updateDesktopContentMargin();
    }
    
    // Update icon
    updateSidebarIcon();
}

function updateSidebarIcon() {
    if (toggleSidebar) {
        toggleSidebar.innerHTML = sidebar.classList.contains('sidebar-collapsed')
            ? '<i class="fas fa-chevron-right"></i>'
            : '<i class="fas fa-chevron-left"></i>';
    }
}

function updateMainContentPosition() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent || !isMobile) return;
    
    if (sidebar.classList.contains('active')) {
        if (sidebar.classList.contains('sidebar-collapsed')) {
            mainContent.style.transform = 'translateX(80px)';
        } else {
            mainContent.style.transform = 'translateX(280px)';
        }
    } else {
        mainContent.style.transform = 'translateX(0)';
    }
}

function updateDesktopContentMargin() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent || isMobile) return;
    
    if (sidebar.classList.contains('sidebar-collapsed')) {
        mainContent.style.marginLeft = '80px';
    } else {
        mainContent.style.marginLeft = '280px';
    }
}

function createMobileOverlay() {
    // Hapus overlay yang ada
    removeMobileOverlay();
    
    // Buat overlay baru
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: block;
    `;
    
    // Tambahkan ke body
    document.body.appendChild(overlay);
    
    // Event untuk tutup sidebar saat klik overlay
    overlay.addEventListener('click', closeMobileSidebar);
    
    // Prevent body scroll saat sidebar terbuka
    document.body.style.overflow = 'hidden';
}

function removeMobileOverlay() {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.remove();
    }
    // Restore body scroll
    document.body.style.overflow = '';
}

function closeMobileSidebar() {
    sidebar.classList.remove('active');
    updateMainContentPosition();
    removeMobileOverlay();
}

// ===== EVENT LISTENERS =====
toggleSidebar.addEventListener('click', toggleSidebarFunction);
sidebarToggleBtn.addEventListener('click', toggleSidebarFunction);
mobileMenuBtn.addEventListener('click', toggleSidebarFunction);

// Close sidebar ketika klik di luar (mobile)
document.addEventListener('click', (e) => {
    if (isMobile) {
        const isSidebarClick = sidebar.contains(e.target);
        const isMobileBtn = e.target === mobileMenuBtn || 
                            mobileMenuBtn.contains(e.target);
        const isDesktopBtn = e.target === sidebarToggleBtn || 
                            sidebarToggleBtn.contains(e.target);
        
        if (!isSidebarClick && !isMobileBtn && !isDesktopBtn) {
            closeMobileSidebar();
        }
    }
    
    // Close profile dropdown when clicking outside
    if (!profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove('active');
    }
    
    // Close modal when clicking outside
    if (e.target === addContentModal) {
        addContentModal.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 1024;
    
    if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        
        if (isMobile) {
            // Pindah ke mobile mode
            sidebar.classList.remove('active');
            removeMobileOverlay();
            
            // Reset main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = '0';
            }
        } else {
            // Pindah ke desktop mode
            sidebar.classList.remove('active');
            removeMobileOverlay();
            
            // Reset main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.transform = '';
                updateDesktopContentMargin();
            }
        }
    }
});

// Icon mapping untuk activity types
const activityIcons = {
    "user": "fas fa-user-plus",
    "project": "fas fa-project-diagram",
    "system": "fas fa-cog",
    "backup": "fas fa-database",
    "report": "fas fa-file-alt",
    "campus": "fas fa-university",
    "security": "fas fa-shield-alt"
};

// Status badge mapping
const statusBadge = {
    "active": { text: "Aktif", class: "badge-success" },
    "pending": { text: "Pending", class: "badge-warning" },
    "inactive": { text: "Nonaktif", class: "badge-danger" },
    "completed": { text: "Selesai", class: "badge-info" },
    "draft": { text: "Draft", class: "badge-warning" },
    "published": { text: "Published", class: "badge-success" },
    "archived": { text: "Archived", class: "badge-danger" },
    "success": { text: "Success", class: "badge-success" },
    "failed": { text: "Failed", class: "badge-danger" },
    "in-progress": { text: "In Progress", class: "badge-warning" }
};

// ===== NAVIGATION =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Hide all dashboard contents
        dashboardContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected content
        const target = link.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
        
        // Close sidebar on mobile
        if (isMobile) {
            closeMobileSidebar();
        }
    });
});

// ===== PROFILE DROPDOWN =====
profileBtn.addEventListener('click', () => {
    profileDropdown.classList.toggle('active');
});

// Switch to User Mode
switchToUserBtn.addEventListener('click', () => {
    if (confirm('Switch ke User Mode? Anda akan meninggalkan panel admin.')) {
        alert('Mengarahkan ke dashboard user...');
        // In real application, redirect to user dashboard
        // window.location.href = 'user-dashboard.html';
    }
});

// Open add content modal
addContentBtn.addEventListener('click', () => {
    addContentModal.classList.add('active');
});

// Close add content modal
closeContentModal.addEventListener('click', () => {
    addContentModal.classList.remove('active');
});

cancelContentBtn.addEventListener('click', () => {
    addContentModal.classList.remove('active');
});

// Handle content form submission
contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('contentTitle').value;
    const type = document.getElementById('contentType').value;
    const status = document.getElementById('contentStatus').value;
    
    alert(`Konten "${title}" (${type}) berhasil ${status === 'draft' ? 'disimpan sebagai draft' : 'dipublikasikan'}!`);
    
    // Reset form
    contentForm.reset();
    
    // Close modal
    addContentModal.classList.remove('active');
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil! Mengarahkan ke halaman login...');
        // In real application, redirect to login page
        // window.location.href = 'login.html';
    }
});

// ===== FAKE DATA FUNCTIONS =====
function populateAdminFakeData() {
    // Admin Activities
    const activitiesContainer = document.getElementById('adminActivities');
    activitiesContainer.innerHTML = adminFakeData.adminActivities.map(activity => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${activity.title}</div>
                <div class="card-badge ${activity.type === 'user' ? 'badge-primary' : activity.type === 'project' ? 'badge-info' : 'badge-warning'}">
                    <i class="${activityIcons[activity.type]}"></i>
                </div>
            </div>
            <div class="card-content">${activity.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    <i class="far fa-clock"></i>
                    <span>${activity.time}</span>
                </div>
            </div>
        </div>
    `).join('');

    // User Management Table
    const usersTableBody = document.getElementById('usersTableBody');
    usersTableBody.innerHTML = adminFakeData.users.map(user => `
        <tr>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="user-avatar-small">${user.avatar}</div>
                    <div>
                        <div style="font-weight: 600; color: white;">${user.name}</div>
                        <div style="font-size: 12px; color: #94a3b8;">${user.email}</div>
                    </div>
                </div>
            </td>
            <td>${user.role}</td>
            <td>
                <span class="status-dot ${user.status === 'active' ? 'status-active' : user.status === 'pending' ? 'status-pending' : 'status-inactive'}"></span>
                ${statusBadge[user.status].text}
            </td>
            <td>${formatDate(user.joined)}</td>
            <td>${formatDate(user.lastActive)}</td>
            <td>
                <div class="card-actions">
                    <button class="action-btn" onclick="editUser('${user.name}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn action-btn-danger" onclick="deleteUser('${user.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    // Project Management Table
    const projectsTableBody = document.getElementById('projectsTableBody');
    projectsTableBody.innerHTML = adminFakeData.projects.map(project => `
        <tr>
            <td style="font-weight: 600; color: white;">${project.name}</td>
            <td>${project.owner}</td>
            <td>
                <span class="status-dot ${project.status === 'active' ? 'status-active' : project.status === 'pending' ? 'status-pending' : project.status === 'completed' ? 'status-active' : 'status-inactive'}"></span>
                ${statusBadge[project.status].text}
            </td>
            <td>${project.members} anggota</td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="flex: 1; height: 6px; background: rgba(59, 130, 246, 0.1); border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; width: ${project.progress}%; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 3px;"></div>
                    </div>
                    <span style="font-size: 12px; color: #94a3b8;">${project.progress}%</span>
                </div>
            </td>
            <td>
                <div class="card-actions">
                    <button class="action-btn" onclick="viewProject('${project.name}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" onclick="editProject('${project.name}')">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    // Content Management
    const contentContainer = document.getElementById('contentManagementContent');
    contentContainer.innerHTML = adminFakeData.contents.map(content => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${content.title}</div>
                <div class="card-badge ${content.status === 'published' ? 'badge-success' : content.status === 'draft' ? 'badge-warning' : 'badge-danger'}">
                    ${statusBadge[content.status].text}
                </div>
            </div>
            <div class="card-content">
                <div style="margin-bottom: 10px;">
                    <span class="card-badge ${content.type === 'announcement' ? 'badge-primary' : content.type === 'guide' ? 'badge-info' : 'badge-warning'}">
                        ${content.type}
                    </span>
                </div>
                <div style="font-size: 13px; color: #94a3b8;">
                    <div><i class="far fa-user"></i> ${content.author}</div>
                    <div><i class="far fa-calendar"></i> ${formatDate(content.date)}</div>
                    <div><i class="far fa-eye"></i> ${content.views} views</div>
                </div>
            </div>
            <div class="card-footer">
                <div class="card-actions">
                    <button class="action-btn" onclick="editContent('${content.title}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" onclick="viewContent('${content.title}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn action-btn-danger" onclick="deleteContent('${content.title}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // System Stats
    const systemStatsContainer = document.getElementById('systemStats');
    systemStatsContainer.innerHTML = adminFakeData.systemStats.map(stat => `
        <div class="stat-card">
            <div class="stat-header">
                <div class="stat-icon">
                    <i class="fas fa-${stat.icon}"></i>
                </div>
                <div class="stat-trend ${stat.trend === 'up' ? 'trend-up' : 'trend-down'}">
                    ${stat.trend === 'up' ? '+5%' : '-2%'}
                </div>
            </div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    // Reports
    const reportsContainer = document.getElementById('reportsContent');
    reportsContainer.innerHTML = adminFakeData.reports.map(report => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${report.title}</div>
                <div class="card-badge ${report.type === 'monthly' ? 'badge-primary' : report.type === 'analytics' ? 'badge-info' : 'badge-warning'}">
                    ${report.type}
                </div>
            </div>
            <div class="card-content">${report.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    <div><i class="far fa-calendar"></i> ${formatDate(report.date)}</div>
                    <div><i class="fas fa-hdd"></i> ${report.size}</div>
                </div>
                <div class="card-actions">
                    <button class="action-btn" onclick="downloadReport('${report.title}')">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="action-btn" onclick="viewReport('${report.title}')">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // System Settings
    const settingsContainer = document.getElementById('systemSettingsContent');
    settingsContainer.innerHTML = adminFakeData.systemSettings.map(setting => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${setting.title}</div>
                <div class="card-badge ${setting.status === 'active' ? 'badge-success' : 'badge-danger'}">
                    <i class="fas fa-${setting.icon}"></i>
                </div>
            </div>
            <div class="card-content">${setting.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    <span class="status-dot ${setting.status === 'active' ? 'status-active' : 'status-inactive'}"></span>
                    ${setting.status === 'active' ? 'Aktif' : 'Nonaktif'}
                </div>
                <div class="card-actions">
                    <button class="action-btn" onclick="editSetting('${setting.title}')">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // System Logs Table
    const logsTableBody = document.getElementById('logsTableBody');
    logsTableBody.innerHTML = adminFakeData.systemLogs.map(log => `
        <tr>
            <td>${log.time}</td>
            <td>
                <span class="card-badge ${log.type === 'login' ? 'badge-primary' : log.type === 'security' ? 'badge-danger' : 'badge-info'}">
                    ${log.type}
                </span>
            </td>
            <td>${log.user}</td>
            <td>${log.action}</td>
            <td>${log.ip}</td>
            <td>
                <span class="card-badge ${log.status === 'success' ? 'badge-success' : 'badge-danger'}">
                    ${statusBadge[log.status].text}
                </span>
            </td>
        </tr>
    `).join('');

    // Backup
    const backupContainer = document.getElementById('backupContent');
    backupContainer.innerHTML = adminFakeData.backups.map(backup => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${backup.name}</div>
                <div class="card-badge ${backup.status === 'completed' ? 'badge-success' : backup.status === 'failed' ? 'badge-danger' : 'badge-warning'}">
                    ${statusBadge[backup.status].text}
                </div>
            </div>
            <div class="card-content">
                <div style="margin-bottom: 10px;">
                    <span class="card-badge ${backup.type === 'daily' ? 'badge-primary' : backup.type === 'weekly' ? 'badge-info' : 'badge-warning'}">
                        ${backup.type}
                    </span>
                </div>
                <div style="font-size: 13px; color: #94a3b8;">
                    <div><i class="far fa-calendar"></i> ${backup.date}</div>
                    <div><i class="fas fa-hdd"></i> ${backup.size}</div>
                </div>
            </div>
            <div class="card-footer">
                <div class="card-actions">
                    ${backup.status === 'completed' ? `
                        <button class="action-btn" onclick="restoreBackup('${backup.name}')">
                            <i class="fas fa-redo"></i>
                        </button>
                        <button class="action-btn" onclick="downloadBackup('${backup.name}')">
                            <i class="fas fa-download"></i>
                        </button>
                    ` : ''}
                    <button class="action-btn action-btn-danger" onclick="deleteBackup('${backup.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Format tanggal
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Initialize Charts
function initAdminCharts() {
    // System Usage Chart
    const usageCtx = document.getElementById('systemUsageChart').getContext('2d');
    const usageChart = new Chart(usageCtx, {
        type: 'bar',
        data: {
            labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
            datasets: [{
                label: 'Pengguna Aktif',
                data: [1245, 1320, 1280, 1450, 1560, 980, 1100],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: '#3b82f6',
                borderWidth: 1
            }, {
                label: 'Proyek Baru',
                data: [15, 22, 18, 25, 30, 12, 8],
                backgroundColor: 'rgba(139, 92, 246, 0.8)',
                borderColor: '#8b5cf6',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            family: 'Poppins'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 25, 58, 0.9)',
                    titleColor: '#cbd5e1',
                    bodyColor: '#cbd5e1',
                    borderColor: '#3b82f6',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(59, 130, 246, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(59, 130, 246, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

// Admin action functions
window.editUser = function(userName) {
    alert(`Mengedit user: ${userName}`);
};

window.deleteUser = function(userName) {
    if (confirm(`Hapus user ${userName}?`)) {
        alert(`User ${userName} berhasil dihapus!`);
    }
};

window.viewProject = function(projectName) {
    alert(`Melihat detail proyek: ${projectName}`);
};

window.editProject = function(projectName) {
    alert(`Mengedit proyek: ${projectName}`);
};

window.editContent = function(contentName) {
    alert(`Mengedit konten: ${contentName}`);
};

window.viewContent = function(contentName) {
    alert(`Melihat konten: ${contentName}`);
};

window.deleteContent = function(contentName) {
    if (confirm(`Hapus konten "${contentName}"?`)) {
        alert(`Konten "${contentName}" berhasil dihapus!`);
    }
};

window.downloadReport = function(reportName) {
    alert(`Mendownload laporan: ${reportName}`);
};

window.viewReport = function(reportName) {
    alert(`Melihat laporan: ${reportName}`);
};

window.editSetting = function(settingName) {
    alert(`Mengedit pengaturan: ${settingName}`);
};

window.restoreBackup = function(backupName) {
    if (confirm(`Restore backup: ${backupName}?`)) {
        alert(`Backup ${backupName} berhasil di-restore!`);
    }
};

window.downloadBackup = function(backupName) {
    alert(`Mendownload backup: ${backupName}`);
};

window.deleteBackup = function(backupName) {
    if (confirm(`Hapus backup: ${backupName}?`)) {
        alert(`Backup ${backupName} berhasil dihapus!`);
    }
};

// Search functionality for tables
document.querySelectorAll('.table-search').forEach(searchInput => {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const tableId = this.closest('.table-container').querySelector('tbody').id;
        const rows = document.querySelectorAll(`#${tableId} tr`);
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state
    isMobile = window.innerWidth <= 1024;
    
    if (isMobile) {
        // Mobile: mulai dengan sidebar tertutup
        sidebar.classList.remove('active');
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.transform = 'translateX(0)';
        }
    } else {
        // Desktop: atur initial margin
        updateDesktopContentMargin();
    }
    
    // Update icon awal
    updateSidebarIcon();
    
    // Populate all admin fake data
    populateAdminFakeData();
    
    // Initialize charts
    initAdminCharts();
    
    // Set today's date for content form
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('contentPublishDate').value = today;
    
    // Initialize modal close with ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            addContentModal.classList.remove('active');
            profileDropdown.classList.remove('active');
            
            // Close sidebar on mobile with ESC
            if (isMobile && sidebar.classList.contains('active')) {
                closeMobileSidebar();
            }
        }
        
        // Ctrl + Shift + L untuk logout
        if (e.ctrlKey && e.shiftKey && e.key === 'L') {
            e.preventDefault();
            logoutBtn.click();
        }
        
        // Ctrl + Shift + U untuk switch user mode
        if (e.ctrlKey && e.shiftKey && e.key === 'U') {
            e.preventDefault();
            switchToUserBtn.click();
        }
        
        // Ctrl + Shift + A untuk add content
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            addContentBtn.click();
        }
    });

    // Simulate notification click
    document.querySelector('.notification-btn').addEventListener('click', () => {
        const notifications = [
            "User baru membutuhkan verifikasi",
            "Backup sistem selesai",
            "Laporan bulanan siap diunduh",
            "3 proyek baru dibuat",
            "Peringatan: Penggunaan storage 85%",
            "Maintenance server dijadwalkan",
            "Update keamanan tersedia",
            "5 user belum aktif 30 hari"
        ];
        
        let notificationList = "Notifikasi Admin:\n\n";
        notifications.forEach((notif, index) => {
            notificationList += `${index + 1}. ${notif}\n`;
        });
        
        alert(notificationList);
    });
});