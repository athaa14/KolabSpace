

// Data Faker untuk semua fitur
const fakeData = {
    overviewProjects: [
        { title: "Sistem Akademik AI", desc: "Pengembangan sistem rekomendasi mata kuliah menggunakan machine learning.", progress: 65, status: "active", members: 6 },
        { title: "Platform E-Learning", desc: "Membangun platform pembelajaran online untuk sekolah menengah.", progress: 90, status: "pending", members: 5 },
        { title: "Riset Blockchain", desc: "Penelitian penerapan blockchain dalam sistem sertifikat digital.", progress: 40, status: "active", members: 8 },
        { title: "Mobile App UI/UX", desc: "Desain antarmuka untuk aplikasi kesehatan mental mahasiswa.", progress: 75, status: "active", members: 4 },
        { title: "Analisis Data Kampus", desc: "Analisis data akademik untuk meningkatkan kualitas pendidikan.", progress: 55, status: "active", members: 7 },
        { title: "Game Edukasi Matematika", desc: "Pengembangan game edukasi untuk pembelajaran matematika dasar.", progress: 30, status: "active", members: 5 }
    ],
    
    projectHub: [
        { title: "Sistem Akademik AI", desc: "Tim: 6 anggota | Deadline: 15 Des 2023", progress: 65, status: "active" },
        { title: "Platform E-Learning", desc: "Tim: 5 anggota | Deadline: 10 Des 2023", progress: 90, status: "pending" },
        { title: "Riset Blockchain", desc: "Tim: 8 anggota | Deadline: 20 Jan 2024", progress: 40, status: "active" },
        { title: "Mobile App UI/UX", desc: "Tim: 4 anggota | Selesai: 1 Nov 2023", progress: 100, status: "completed" },
        { title: "Analisis Data Kampus", desc: "Tim: 7 anggota | Deadline: 5 Jan 2024", progress: 55, status: "active" },
        { title: "Game Edukasi Matematika", desc: "Tim: 5 anggota | Deadline: 28 Feb 2024", progress: 30, status: "active" },
        { title: "Website Organisasi", desc: "Tim: 3 anggota | Deadline: 15 Des 2023", progress: 80, status: "active" },
        { title: "Sistem Presensi Digital", desc: "Tim: 6 anggota | Deadline: 10 Jan 2024", progress: 20, status: "active" }
    ],
    
    tasks: [
        { title: "Implementasi Algoritma ML", desc: "Deadline: 10 Des 2023 | Prioritas: Tinggi", progress: 40, priority: "high" },
        { title: "Laporan Progress Bulanan", desc: "Deadline: 5 Des 2023 | Prioritas: Sedang", progress: 70, priority: "medium" },
        { title: "Analisis Data Pengguna", desc: "Deadline: 8 Des 2023 | Prioritas: Sedang", progress: 60, priority: "medium" },
        { title: "Desain UI Dashboard", desc: "Deadline: 12 Des 2023 | Prioritas: Rendah", progress: 90, priority: "low" },
        { title: "Testing Sistem", desc: "Deadline: 20 Des 2023 | Prioritas: Tinggi", progress: 30, priority: "high" },
        { title: "Presentasi Final", desc: "Deadline: 25 Des 2023 | Prioritas: Sedang", progress: 10, priority: "medium" },
        { title: "Dokumentasi API", desc: "Deadline: 15 Des 2023 | Prioritas: Rendah", progress: 50, priority: "low" },
        { title: "Optimasi Database", desc: "Deadline: 18 Des 2023 | Prioritas: Sedang", progress: 65, priority: "medium" }
    ],
    
    discussions: [
        { title: "#ai-research", desc: "15 anggota | 24 pesan baru", icon: "brain", status: "active" },
        { title: "#frontend-dev", desc: "8 anggota | 12 pesan baru", icon: "laptop-code", status: "active" },
        { title: "#backend-architecture", desc: "10 anggota | 5 pesan baru", icon: "database", status: "active" },
        { title: "#ui-ux-design", desc: "12 anggota | 18 pesan baru", icon: "paint-brush", status: "active" },
        { title: "#data-science", desc: "9 anggota | 7 pesan baru", icon: "chart-line", status: "active" },
        { title: "#project-management", desc: "6 anggota | 3 pesan baru", icon: "clipboard-list", status: "active" },
        { title: "#cybersecurity", desc: "7 anggota | 9 pesan baru", icon: "shield-alt", status: "active" },
        { title: "#mobile-dev", desc: "11 anggota | 15 pesan baru", icon: "mobile-alt", status: "active" }
    ],
    
    announcements: [
        { title: "Deadline Pengumpulan Proposal", desc: "Diposting: 28 Nov 2023 | Prioritas: Penting", date: "28 Nov 2023", priority: "high" },
        { title: "Workshop Kolaborasi Digital", desc: "Diposting: 25 Nov 2023 | Prioritas: Informasi", date: "25 Nov 2023", priority: "medium" },
        { title: "Maintenance Server", desc: "Diposting: 30 Nov 2023 | Prioritas: Penting", date: "30 Nov 2023", priority: "high" },
        { title: "Pelatihan Git & GitHub", desc: "Diposting: 22 Nov 2023 | Prioritas: Informasi", date: "22 Nov 2023", priority: "medium" },
        { title: "Kompetisi Inovasi Digital", desc: "Diposting: 20 Nov 2023 | Prioritas: Rendah", date: "20 Nov 2023", priority: "low" },
        { title: "Update Fitur KolabSpace", desc: "Diposting: 18 Nov 2023 | Prioritas: Informasi", date: "18 Nov 2023", priority: "medium" },
        { title: "Jadwal Ujian Akhir", desc: "Diposting: 15 Nov 2023 | Prioritas: Penting", date: "15 Nov 2023", priority: "high" },
        { title: "Libur Semester", desc: "Diposting: 10 Nov 2023 | Prioritas: Informasi", date: "10 Nov 2023", priority: "medium" }
    ],
    
    collabLedger: [
        { title: "Pembagian Tugas Proyek AI", desc: "Catatan pembagian tugas dan kontribusi anggota tim proyek AI.", date: "1 Des 2023" },
        { title: "Meeting Mingguan Platform E-Learning", desc: "Rangkuman hasil meeting dan action items untuk platform e-learning.", date: "28 Nov 2023" },
        { title: "Kontribusi Riset Blockchain", desc: "Dokumentasi kontribusi setiap anggota dalam penelitian blockchain.", date: "25 Nov 2023" },
        { title: "Progress Mobile App UI/UX", desc: "Catatan perkembangan dan pembagian tugas desain aplikasi mobile.", date: "22 Nov 2023" },
        { title: "Analisis Data - Pembagian Kerja", desc: "Pembagian kerja untuk analisis data akademik kampus.", date: "20 Nov 2023" },
        { title: "Koordinasi Game Edukasi", desc: "Catatan koordinasi dan progress pengembangan game edukasi.", date: "18 Nov 2023" },
        { title: "Kolaborasi Website Organisasi", desc: "Dokumentasi kerja sama dalam pembuatan website organisasi.", date: "15 Nov 2023" },
        { title: "Sistem Presensi - Rencana Kerja", desc: "Rencana kerja dan pembagian tugas sistem presensi digital.", date: "12 Nov 2023" }
    ],
    
    analyticsStats: [
        { value: "142", label: "Jam Kolaborasi", icon: "clock" },
        { value: "87%", label: "Kehadiran Meeting", icon: "user-check" },
        { value: "24", label: "File Dibagikan", icon: "file-upload" },
        { value: "156", label: "Pesan Diskusi", icon: "comments" },
        { value: "8", label: "Proyek Aktif", icon: "project-diagram" },
        { value: "42", label: "Kolaborator", icon: "users" },
        { value: "92%", label: "Kepuasan Tim", icon: "smile" },
        { value: "15", label: "Meeting Diselesaikan", icon: "calendar-check" }
    ],
    
    portfolio: [
        { title: "Sistem Rekomendasi AI", desc: "Proyek penelitian sistem rekomendasi mata kuliah menggunakan algoritma machine learning.", icon: "robot", collaborators: 3, duration: "4 bulan", featured: true },
        { title: "Aplikasi Mobile Edukasi", desc: "Pengembangan aplikasi pembelajaran untuk siswa sekolah menengah.", icon: "mobile-alt", downloads: "500+", duration: "6 bulan" },
        { title: "Analisis Data Akademik", desc: "Analisis data kinerja akademik mahasiswa menggunakan Python dan pandas.", icon: "chart-bar", collaborators: 4, duration: "3 bulan" },
        { title: "Website E-Commerce", desc: "Pengembangan website e-commerce dengan fitur pembayaran digital.", icon: "shopping-cart", collaborators: 5, duration: "5 bulan" },
        { title: "Game Edukasi Interaktif", desc: "Pengembangan game edukasi untuk pembelajaran bahasa Inggris.", icon: "gamepad", downloads: "1000+", duration: "8 bulan" },
        { title: "Sistem Manajemen Perpustakaan", desc: "Aplikasi manajemen perpustakaan digital dengan fitur pencarian canggih.", icon: "book", collaborators: 6, duration: "6 bulan" },
        { title: "Dashboard Analytics", desc: "Dashboard visualisasi data untuk monitoring kinerja organisasi.", icon: "tachometer-alt", collaborators: 3, duration: "2 bulan" },
        { title: "Aplikasi Task Management", desc: "Aplikasi manajemen tugas dengan fitur kolaborasi tim.", icon: "tasks", downloads: "300+", duration: "4 bulan" }
    ],
    
    promoTools: [
        { title: "Template Presentasi", desc: "Template PowerPoint profesional untuk presentasi proyek akademik.", icon: "file-powerpoint", action: "Download Template" },
        { title: "Media Sosial Kit", desc: "Assets untuk promosi proyek di media sosial dan platform online.", icon: "share-alt", action: "Bagikan Proyek" },
        { title: "Generator Sertifikat", desc: "Buat sertifikat partisipasi untuk anggota tim kolaborasi.", icon: "certificate", action: "Buat Sertifikat" },
        { title: "Template Poster", desc: "Template poster profesional untuk event dan presentasi.", icon: "image", action: "Download Template" },
        { title: "Kit Logo KolabSpace", desc: "Assets logo dan branding untuk presentasi proyek.", icon: "palette", action: "Download Assets" },
        { title: "Template Laporan", desc: "Template laporan proyek dengan format standar akademik.", icon: "file-alt", action: "Download Template" },
        { title: "Video Tutorial", desc: "Kumpulan video tutorial untuk presentasi efektif.", icon: "video", action: "Tonton Tutorial" },
        { title: "Template Proposal", desc: "Template proposal penelitian dengan struktur lengkap.", icon: "file-contract", action: "Download Template" }
    ]
};

// Extended Data untuk Project Hub
const projectHubData = {
projects: [
{
    id: 1,
    title: "Sistem Akademik AI",
    description: "Pengembangan sistem rekomendasi mata kuliah menggunakan machine learning untuk meningkatkan pengalaman akademik mahasiswa.",
    progress: 65,
    status: "active",
    startDate: "1 Sep 2023",
    deadline: "15 Des 2023",
    budget: "Rp 5.000.000",
    members: 6,
    completedTasks: 15,
    totalTasks: 23,
    openIssues: 3,
    meetings: 12,
    leader: {
        name: "Ahmad Syahroni",
        role: "Project Manager",
        avatar: "AS"
    },
    tasks: [
        { id: 1, title: "Research & Analysis", completed: true, dueDate: "10 Okt 2023", assignee: "Ahmad" },
        { id: 2, title: "Dataset Collection", completed: true, dueDate: "15 Okt 2023", assignee: "Budi" },
        { id: 3, title: "Model Development", completed: false, dueDate: "25 Nov 2023", assignee: "Siti" },
        { id: 4, title: "UI/UX Design", completed: false, dueDate: "5 Des 2023", assignee: "Rina" },
        { id: 5, title: "Testing & Validation", completed: false, dueDate: "10 Des 2023", assignee: "Ahmad" },
        { id: 6, title: "Documentation", completed: false, dueDate: "12 Des 2023", assignee: "Budi" }
    ],
    members: [
        { id: 1, name: "Ahmad Syahroni", role: "Project Manager", avatar: "AS", email: "ahmad@email.com" },
        { id: 2, name: "Budi Santoso", role: "Data Scientist", avatar: "BS", email: "budi@email.com" },
        { id: 3, name: "Siti Rahayu", role: "ML Engineer", avatar: "SR", email: "siti@email.com" },
        { id: 4, name: "Rina Wijaya", role: "UI/UX Designer", avatar: "RW", email: "rina@email.com" },
        { id: 5, name: "Dewi Putri", role: "Backend Developer", avatar: "DP", email: "dewi@email.com" },
        { id: 6, name: "Joko Prasetyo", role: "Frontend Developer", avatar: "JP", email: "joko@email.com" }
    ],
    files: [
        { id: 1, name: "project_proposal.pdf", type: "pdf", size: "2.4 MB", uploadedBy: "Ahmad", date: "5 Sep 2023" },
        { id: 2, name: "dataset.csv", type: "csv", size: "15.7 MB", uploadedBy: "Budi", date: "10 Sep 2023" },
        { id: 3, name: "ui_design.fig", type: "fig", size: "8.2 MB", uploadedBy: "Rina", date: "20 Sep 2023" },
        { id: 4, name: "meeting_notes_1.docx", type: "doc", size: "1.1 MB", uploadedBy: "Siti", date: "25 Sep 2023" },
        { id: 5, name: "architecture_diagram.png", type: "image", size: "3.5 MB", uploadedBy: "Dewi", date: "1 Okt 2023" }
    ],
    timeline: [
        { id: 1, title: "Project Kickoff", date: "5 Sep 2023", status: "completed" },
        { id: 2, title: "Research Phase", date: "15 Sep 2023", status: "completed" },
        { id: 3, title: "Design Approval", date: "30 Sep 2023", status: "completed" },
        { id: 4, title: "Development Phase", date: "15 Okt 2023", status: "completed" },
        { id: 5, title: "Testing Phase", date: "25 Nov 2023", status: "current" },
        { id: 6, title: "Final Review", date: "5 Des 2023", status: "upcoming" },
        { id: 7, title: "Project Delivery", date: "15 Des 2023", status: "upcoming" }
    ]
},
// ... tambahkan data proyek lainnya sesuai fakeData.projectHub
]
};

// Tambahkan 7 proyek lainnya ke projectHubData
for (let i = 1; i < 8; i++) {
const baseProject = fakeData.projectHub[i];
if (baseProject) {
projectHubData.projects.push({
    id: i + 1,
    title: baseProject.title,
    description: `${baseProject.desc}. Proyek kolaborasi untuk meningkatkan sistem akademik kampus.`,
    progress: baseProject.progress,
    status: baseProject.status,
    startDate: "1 Okt 2023",
    deadline: baseProject.desc.includes("Deadline") 
        ? baseProject.desc.split("Deadline: ")[1] 
        : "30 Des 2023",
    budget: "Rp " + (Math.floor(Math.random() * 10) + 2) + ".000.000",
    members: Math.floor(Math.random() * 5) + 3,
    completedTasks: Math.floor(Math.random() * 20) + 5,
    totalTasks: Math.floor(Math.random() * 30) + 15,
    openIssues: Math.floor(Math.random() * 5) + 1,
    meetings: Math.floor(Math.random() * 10) + 5,
    leader: {
        name: i % 2 === 0 ? "Budi Santoso" : "Siti Rahayu",
        role: i % 2 === 0 ? "Tech Lead" : "Product Manager",
        avatar: i % 2 === 0 ? "BS" : "SR"
    },
    tasks: [],
    members: [],
    files: [],
    timeline: []
});
}
}

// Ikon untuk discussion rooms
const discussionIcons = {
    "brain": "fas fa-brain",
    "laptop-code": "fas fa-laptop-code",
    "database": "fas fa-database",
    "paint-brush": "fas fa-paint-brush",
    "chart-line": "fas fa-chart-line",
    "clipboard-list": "fas fa-clipboard-list",
    "shield-alt": "fas fa-shield-alt",
    "mobile-alt": "fas fa-mobile-alt"
};

// ===== SIDEBAR MOBILE FIX =====
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
const editProfileBtn = document.getElementById('editProfileBtn');
const profileModal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');
const cancelEdit = document.getElementById('cancelEdit');
const profileForm = document.getElementById('profileForm');

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
    if (e.target === profileModal) {
        profileModal.classList.remove('active');
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

// Open profile edit modal
editProfileBtn.addEventListener('click', () => {
    profileModal.classList.add('active');
    profileDropdown.classList.remove('active');
});

// Close profile modal
closeModal.addEventListener('click', () => {
    profileModal.classList.remove('active');
});

cancelEdit.addEventListener('click', () => {
    profileModal.classList.remove('active');
});

// Handle profile form submission
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const programStudi = document.getElementById('programStudi').value;
    const universitas = document.getElementById('universitas').value;
    const fakultas = document.getElementById('fakultas').value;
    
    // Update profile in dropdown
    document.querySelector('.profile-name').textContent = fullName;
    document.querySelector('.dropdown-name').textContent = fullName;
    
    const roleText = `Mahasiswa - ${programStudi}`;
    document.querySelector('.profile-role').textContent = roleText;
    document.querySelector('.dropdown-role').textContent = roleText;
    
    // Update avatar initials
    const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase();
    document.querySelector('.profile-avatar').textContent = initials.substring(0, 2);
    document.querySelector('.dropdown-avatar').textContent = initials.substring(0, 2);
    
    // Show success message
    alert('Profil berhasil diperbarui!');
    
    // Close modal
    profileModal.classList.remove('active');
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
function populateFakeData() {
    // Overview Projects
    const overviewContainer = document.getElementById('overviewProjects');
    overviewContainer.innerHTML = fakeData.overviewProjects.map(project => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${project.title}</div>
                <div class="card-badge ${project.status === 'active' ? 'badge-active' : 'badge-pending'}">
                    ${project.status === 'active' ? 'Aktif' : 'Review'}
                </div>
            </div>
            <div class="card-content">${project.desc}</div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
                <div class="progress-text">
                    <span>Progress</span>
                    <span>${project.progress}%</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="card-meta">
                    <i class="fas fa-users"></i>
                    <span>${project.members} anggota</span>
                </div>
            </div>
        </div>
    `).join('');

    // Project Hub - SIMPLE FIXED VERSION
const projectHubContainer = document.getElementById('projectHubContent');
projectHubContainer.innerHTML = projectHubData.projects.map(project => `
<div class="card project-card" data-project-id="${project.id}" style="cursor: pointer;">
<div class="card-header">
    <div class="card-title">${project.title}</div>
    <div class="card-badge ${project.status === 'active' ? 'badge-active' : project.status === 'pending' ? 'badge-pending' : project.status === 'completed' ? 'badge-completed' : 'badge-low'}">
        ${project.status === 'active' ? 'Aktif' : project.status === 'pending' ? 'Review' : project.status === 'completed' ? 'Selesai' : 'Diarsipkan'}
    </div>
</div>
<div class="card-content">${project.description.substring(0, 100)}...</div>
<div class="progress-container">
    <div class="progress-bar">
        <div class="progress-fill" style="width: ${project.progress}%"></div>
    </div>
    <div class="progress-text">
        <span>Progress</span>
        <span>${project.progress}%</span>
    </div>
</div>
<div class="card-footer">
    <div class="card-meta" style="display: flex; gap: 15px; font-size: 12px; color: #94a3b8;">
        <div style="display: flex; align-items: center; gap: 5px;">
            <i class="fas fa-users" style="font-size: 14px;"></i>
            <span>${project.members} anggota</span>
        </div>
        <div style="display: flex; align-items: center; gap: 5px;">
            <i class="far fa-calendar" style="font-size: 14px;"></i>
            <span>${project.deadline}</span>
        </div>
    </div>
    <div style="color: #60a5fa;">
        <i class="fas fa-chevron-right"></i>
    </div>
</div>
</div>
`).join('');

    // Task & Timeline
    const taskContainer = document.getElementById('taskTimelineContent');
    taskContainer.innerHTML = fakeData.tasks.map(task => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${task.title}</div>
                <div class="card-badge ${task.priority === 'high' ? 'badge-high' : task.priority === 'medium' ? 'badge-medium' : 'badge-low'}">
                    ${task.priority === 'high' ? 'Tinggi' : task.priority === 'medium' ? 'Sedang' : 'Rendah'}
                </div>
            </div>
            <div class="card-content">${task.desc}</div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${task.progress}%"></div>
                </div>
                <div class="progress-text">
                    <span>Progress</span>
                    <span>${task.progress}%</span>
                </div>
            </div>
        </div>
    `).join('');

    // Discussion Rooms
    const discussionContainer = document.getElementById('discussionRoomsContent');
    discussionContainer.innerHTML = fakeData.discussions.map(discussion => `
        <div class="discussion-item">
            <div class="discussion-icon">
                <i class="${discussionIcons[discussion.icon]}"></i>
            </div>
            <div class="discussion-info">
                <div class="discussion-title">${discussion.title}</div>
                <div class="discussion-meta">
                    <span><i class="fas fa-users"></i> ${discussion.desc.split('|')[0].trim()}</span>
                    <span><i class="far fa-comment"></i> ${discussion.desc.split('|')[1].trim()}</span>
                    <span class="card-badge badge-active">Aktif</span>
                </div>
            </div>
        </div>
    `).join('');

    // Announcements
    const announcementsContainer = document.getElementById('announcementsContent');
    announcementsContainer.innerHTML = fakeData.announcements.map(announcement => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${announcement.title}</div>
                <div class="card-badge ${announcement.priority === 'high' ? 'badge-high' : announcement.priority === 'medium' ? 'badge-medium' : 'badge-low'}">
                    ${announcement.priority === 'high' ? 'Penting' : announcement.priority === 'medium' ? 'Informasi' : 'Rendah'}
                </div>
            </div>
            <div class="card-content">${announcement.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    <i class="far fa-calendar"></i>
                    <span>${announcement.date}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Collab Ledger
    const collabLedgerContainer = document.getElementById('collabLedgerContent');
    collabLedgerContainer.innerHTML = fakeData.collabLedger.map(item => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${item.title}</div>
            </div>
            <div class="card-content">${item.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    <i class="far fa-calendar"></i>
                    <span>${item.date}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Analytics Stats
    const analyticsContainer = document.getElementById('analyticsStats');
    analyticsContainer.innerHTML = fakeData.analyticsStats.map(stat => `
        <div class="stat-card">
            <div class="stat-icon">
                <i class="fas fa-${stat.icon}"></i>
            </div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    // Portfolio Builder
    const portfolioContainer = document.getElementById('portfolioContent');
    portfolioContainer.innerHTML = fakeData.portfolio.map(item => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${item.title}</div>
                ${item.featured ? '<div class="card-badge badge-active">Unggulan</div>' : ''}
            </div>
            <div class="card-content">${item.desc}</div>
            <div class="card-footer">
                <div class="card-meta">
                    ${item.collaborators ? `<i class="fas fa-users"></i><span>${item.collaborators} kolaborator</span>` : ''}
                    ${item.downloads ? `<i class="fas fa-download"></i><span>${item.downloads}</span>` : ''}
                    <i class="far fa-calendar"></i>
                    <span>${item.duration}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Promo Tools
    const promoToolsContainer = document.getElementById('promoToolsContent');
    promoToolsContainer.innerHTML = fakeData.promoTools.map(tool => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">${tool.title}</div>
                <div class="card-badge badge-active">
                    <i class="fas fa-${tool.icon}"></i>
                </div>
            </div>
            <div class="card-content">${tool.desc}</div>
            <button class="create-btn" style="width: 100%; margin-top: 15px;">
                <i class="fas fa-${tool.action.includes('Download') ? 'download' : tool.action.includes('Bagikan') ? 'share-alt' : tool.action.includes('Buat') ? 'certificate' : 'video'}"></i>
                <span>${tool.action}</span>
            </button>
        </div>
    `).join('');
}

// Initialize Charts
function initCharts() {
    // Activity Chart
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(activityCtx, {
        type: 'line',
        data: {
            labels: ['Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
            datasets: [{
                label: 'Jam Kolaborasi',
                data: [85, 98, 115, 130, 156, 180],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Jumlah Meeting',
                data: [8, 10, 12, 14, 15, 18],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
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
                        color: '#94a8fb8'
                    }
                }
            }
        }
    });
}

// ===== PROJECT HUB FUNCTIONS =====
function initProjectHub() {
// Filter and Sort Projects
const projectFilter = document.getElementById('projectFilter');
const projectSort = document.getElementById('projectSort');

if (projectFilter) {
projectFilter.addEventListener('change', filterProjects);
}

if (projectSort) {
projectSort.addEventListener('change', sortProjects);
}

// Project Card Click Event
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
card.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
        const projectId = card.dataset.projectId;
        openProjectDetail(parseInt(projectId));
    }
});
});

// Project Modal Events
const closeProjectModal = document.getElementById('closeProjectModal');
const archiveProjectBtn = document.getElementById('archiveProjectBtn');
const editProjectBtn = document.getElementById('editProjectBtn');
const goToProjectBtn = document.getElementById('goToProjectBtn');

if (closeProjectModal) {
closeProjectModal.addEventListener('click', () => {
    document.getElementById('projectDetailModal').classList.remove('active');
});
}

if (archiveProjectBtn) {
archiveProjectBtn.addEventListener('click', archiveProject);
}

if (editProjectBtn) {
editProjectBtn.addEventListener('click', editProject);
}

if (goToProjectBtn) {
goToProjectBtn.addEventListener('click', goToProject);
}

// Tab Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
    const tabName = e.target.dataset.tab;
    switchProjectTab(tabName);
});
});
}

function filterProjects() {
const filterValue = document.getElementById('projectFilter').value;
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
const status = card.querySelector('.card-badge').textContent.toLowerCase();
let show = false;

switch(filterValue) {
    case 'all':
        show = true;
        break;
    case 'active':
        show = status.includes('aktif');
        break;
    case 'pending':
        show = status.includes('review');
        break;
    case 'completed':
        show = status.includes('selesai');
        break;
    case 'archived':
        show = status.includes('arsip');
        break;
}

card.style.display = show ? 'block' : 'none';
});
}

function sortProjects() {
const sortValue = document.getElementById('projectSort').value;
const container = document.getElementById('projectHubContent');
const cards = Array.from(container.querySelectorAll('.project-card'));

cards.sort((a, b) => {
const aProgress = parseInt(a.querySelector('.progress-text span:last-child').textContent);
const bProgress = parseInt(b.querySelector('.progress-text span:last-child').textContent);
const aDate = a.querySelector('.card-meta span:last-child').textContent;
const bDate = b.querySelector('.card-meta span:last-child').textContent;

switch(sortValue) {
    case 'newest':
        return new Date(bDate) - new Date(aDate);
    case 'oldest':
        return new Date(aDate) - new Date(bDate);
    case 'progress':
        return bProgress - aProgress;
    case 'deadline':
        return new Date(aDate) - new Date(bDate);
    default:
        return 0;
}
});

// Re-append sorted cards
cards.forEach(card => container.appendChild(card));
}

function openProjectDetail(projectId) {
const project = projectHubData.projects.find(p => p.id === projectId);
if (!project) return;

// Update modal content
document.getElementById('projectModalTitle').textContent = project.title;
document.getElementById('projectTitle').textContent = project.title;
document.getElementById('projectDescription').textContent = project.description;
document.getElementById('projectProgress').textContent = `${project.progress}%`;
document.getElementById('projectProgressBar').style.width = `${project.progress}%`;
document.getElementById('projectStartDate').textContent = project.startDate;
document.getElementById('projectDeadline').textContent = project.deadline;
document.getElementById('projectBudget').textContent = project.budget;
document.getElementById('projectStatus').textContent = 
project.status === 'active' ? 'Active' : 
project.status === 'pending' ? 'Review' : 
project.status === 'completed' ? 'Completed' : 'Archived';

// Update leader info
const leaderSection = document.querySelector('#overviewTab .flex.items-center.mb-4');
if (leaderSection) {
leaderSection.querySelector('.rounded-full').textContent = project.leader.avatar;
leaderSection.querySelector('.text-white.font-medium').textContent = project.leader.name;
leaderSection.querySelector('.text-gray-400.text-sm').textContent = project.leader.role;
}

// Update quick stats
document.querySelector('#overviewTab .space-y-3 div:nth-child(1) p:nth-child(2)').textContent = 
`${project.completedTasks}/${project.totalTasks}`;
document.querySelector('#overviewTab .space-y-3 div:nth-child(2) p:nth-child(2)').textContent = 
project.openIssues;
document.querySelector('#overviewTab .space-y-3 div:nth-child(3) p:nth-child(2)').textContent = 
project.meetings;

// Update tab badges
updateTabBadges(project);

// Load tab contents
loadProjectTasks(project);
loadProjectMembers(project);
loadProjectFiles(project);
loadProjectTimeline(project);

// Show modal
document.getElementById('projectDetailModal').classList.add('active');
}

function updateTabBadges(project) {
const tasksBtn = document.querySelector('[data-tab="tasks"] .badge');
const membersBtn = document.querySelector('[data-tab="members"] .badge');
const filesBtn = document.querySelector('[data-tab="files"] .badge');

if (tasksBtn) tasksBtn.textContent = project.tasks.length;
if (membersBtn) membersBtn.textContent = project.members.length;
if (filesBtn) filesBtn.textContent = project.files.length;
}

function switchProjectTab(tabName) {
// Update active tab button
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
btn.classList.remove('active', 'text-blue-400', 'border-b-2', 'border-blue-400');
btn.classList.add('text-gray-400');
});

const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
activeBtn.classList.add('active', 'text-blue-400', 'border-b-2', 'border-blue-400');
activeBtn.classList.remove('text-gray-400');

// Show active tab content
const tabPanes = document.querySelectorAll('.tab-pane');
tabPanes.forEach(pane => pane.classList.remove('active'));

document.getElementById(`${tabName}Tab`).classList.add('active');
}

function loadProjectTasks(project) {
const tasksList = document.getElementById('projectTasksList');
if (!tasksList) return;

tasksList.innerHTML = project.tasks.map(task => `
<div class="task-item">
    <div class="task-checkbox ${task.completed ? 'checked' : ''}" data-task-id="${task.id}"></div>
    <div class="flex-1">
        <div class="flex justify-between">
            <p class="text-white ${task.completed ? 'line-through text-gray-500' : ''}">${task.title}</p>
            <span class="text-gray-400 text-sm">${task.dueDate}</span>
        </div>
        <div class="flex justify-between mt-1">
            <span class="text-blue-400 text-sm">${task.assignee}</span>
            <span class="text-gray-500 text-sm">${task.completed ? 'Completed' : 'Pending'}</span>
        </div>
    </div>
</div>
`).join('');

// Add checkbox functionality
const checkboxes = tasksList.querySelectorAll('.task-checkbox');
checkboxes.forEach(checkbox => {
checkbox.addEventListener('click', function() {
    const taskId = parseInt(this.dataset.taskId);
    const task = project.tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        this.classList.toggle('checked');
        this.parentElement.querySelector('.text-white').classList.toggle('line-through');
        this.parentElement.querySelector('.text-white').classList.toggle('text-gray-500');
    }
});
});
}

function loadProjectMembers(project) {
const membersList = document.getElementById('projectMembersList');
if (!membersList) return;

membersList.innerHTML = project.members.map(member => `
<div class="member-card">
    <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
        ${member.avatar}
    </div>
    <div class="flex-1">
        <p class="text-white font-medium">${member.name}</p>
        <p class="text-gray-400 text-sm">${member.role}</p>
    </div>
    <a href="mailto:${member.email}" class="text-blue-400 hover:text-blue-300">
        <i class="far fa-envelope"></i>
    </a>
</div>
`).join('');
}

function loadProjectFiles(project) {
const filesList = document.getElementById('projectFilesList');
if (!filesList) return;

filesList.innerHTML = project.files.map(file => `
<div class="file-item">
    <div class="flex items-center">
        <div class="w-10 h-10 ${getFileIconColor(file.type)} rounded-lg flex items-center justify-center text-white mr-3">
            <i class="${getFileIcon(file.type)}"></i>
        </div>
        <div>
            <p class="text-white font-medium">${file.name}</p>
            <p class="text-gray-400 text-sm">${file.size} • Uploaded by ${file.uploadedBy} on ${file.date}</p>
        </div>
    </div>
    <button class="text-blue-400 hover:text-blue-300">
        <i class="fas fa-download"></i>
    </button>
</div>
`).join('');
}

function loadProjectTimeline(project) {
const timeline = document.getElementById('projectTimeline');
if (!timeline) return;

timeline.innerHTML = project.timeline.map(item => `
<div class="timeline-item ${item.status === 'completed' ? 'completed' : item.status === 'current' ? '' : 'upcoming'}">
    <h4 class="text-white font-medium">${item.title}</h4>
    <p class="text-gray-400 text-sm">${item.date}</p>
    <p class="text-gray-500 text-xs mt-1">${getTimelineStatusText(item.status)}</p>
</div>
`).join('');
}

function getFileIcon(fileType) {
const icons = {
'pdf': 'fas fa-file-pdf',
'csv': 'fas fa-file-csv',
'doc': 'fas fa-file-word',
'fig': 'fas fa-palette',
'image': 'fas fa-file-image'
};
return icons[fileType] || 'fas fa-file';
}

function getFileIconColor(fileType) {
const colors = {
'pdf': 'bg-red-500',
'csv': 'bg-green-500',
'doc': 'bg-blue-500',
'fig': 'bg-purple-500',
'image': 'bg-pink-500'
};
return colors[fileType] || 'bg-gray-500';
}

function getTimelineStatusText(status) {
const texts = {
'completed': 'Completed',
'current': 'In Progress',
'upcoming': 'Upcoming'
};
return texts[status] || '';
}

function archiveProject() {
if (confirm('Are you sure you want to archive this project?')) {
alert('Project archived successfully!');
document.getElementById('projectDetailModal').classList.remove('active');
}
}

function editProject() {
alert('Edit project feature will open edit form.');
// Implement edit functionality here
}

function goToProject() {
alert('Opening project workspace...');
// Implement navigation to project workspace
}

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
    
    // Populate all fake data
    populateFakeData();
    
    // Initialize charts
    initCharts();

        // Populate all fake data
populateFakeData();

// Initialize Project Hub
initProjectHub();

// Initialize charts
initCharts();
    
    // Initialize modal close with ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            profileModal.classList.remove('active');
            profileDropdown.classList.remove('active');
            
            // Close sidebar on mobile with ESC
            if (isMobile && sidebar.classList.contains('active')) {
                closeMobileSidebar();
            }
        }
    });

    // Simulate notification click
    document.querySelector('.notification-btn').addEventListener('click', () => {
        const notifications = [
            "Meeting proyek AI besok jam 10:00",
            "Tugas baru ditambahkan: Implementasi Algoritma",
            "Komentar baru di diskusi #ai-research",
            "Budi menambahkan Anda ke proyek 'Analisis Data'",
            "Deadline 'Laporan Progress' dalam 2 hari"
        ];
        
        let notificationList = "Anda memiliki 5 notifikasi baru:\n\n";
        notifications.forEach((notif, index) => {
            notificationList += `${index + 1}. ${notif}\n`;
        });
        
        alert(notificationList);
    });

    // Simulate create project button
    document.querySelector('.create-btn').addEventListener('click', () => {
        alert('Fitur "Buat Proyek Baru" akan membuka form pembuatan proyek.\n\nAnda akan diarahkan ke halaman pembuatan proyek baru.');
    });
});
