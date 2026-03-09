
// DOM Elements
const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeModal = document.getElementById('closeModal');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.login-button');
const loginText = document.getElementById('loginText');
const loginSpinner = document.getElementById('loginSpinner');
const resetButton = document.querySelector('.reset-button');
const resetText = document.getElementById('resetText');
const resetSpinner = document.getElementById('resetSpinner');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

// Show forgot password modal
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordModal.classList.add('active');
});

// Close modal
closeModal.addEventListener('click', () => {
    forgotPasswordModal.classList.remove('active');
});

// Close modal when clicking outside
forgotPasswordModal.addEventListener('click', (e) => {
    if (e.target === forgotPasswordModal) {
        forgotPasswordModal.classList.remove('active');
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nim = document.getElementById('nim').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Simple validation
    if (!nim.trim()) {
        alert('Harap masukkan NIM Anda!');
        document.getElementById('nim').focus();
        return;
    }
    
    if (!password.trim()) {
        alert('Harap masukkan password Anda!');
        document.getElementById('password').focus();
        return;
    }
    
    // Show loading state
    loginText.style.display = 'none';
    loginSpinner.style.display = 'inline-block';
    loginButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // In real application, this would be an API call
        console.log('Login attempt:', { nim, remember });
        
        // Show success message
        alert(`Login berhasil!\nSelamat datang kembali, ${nim}!`);
        
        // Reset loading state
        loginText.style.display = 'inline';
        loginSpinner.style.display = 'none';
        loginButton.disabled = false;
        
        // In real application, redirect to dashboard
        // window.location.href = 'dashboard.html';
    }, 2000);
});

// Handle reset password form submission
resetPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const resetNim = document.getElementById('resetNim').value;
    const resetEmail = document.getElementById('resetEmail').value;
    
    if (!resetNim.trim()) {
        alert('Harap masukkan NIM Anda!');
        document.getElementById('resetNim').focus();
        return;
    }
    
    if (!resetEmail.trim()) {
        alert('Harap masukkan email terdaftar!');
        document.getElementById('resetEmail').focus();
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail)) {
        alert('Harap masukkan email yang valid!');
        document.getElementById('resetEmail').focus();
        return;
    }
    
    // Show loading state
    resetText.style.display = 'none';
    resetSpinner.style.display = 'inline-block';
    resetButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        alert(`Tautan reset password telah dikirim ke:\n${resetEmail}\n\nSilakan cek email Anda.`);
        
        // Reset loading state
        resetText.style.display = 'inline';
        resetSpinner.style.display = 'none';
        resetButton.disabled = false;
        
        // Close modal and reset form
        forgotPasswordModal.classList.remove('active');
        resetPasswordForm.reset();
    }, 2000);
});

// Add animation on load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            if (el.classList.contains('delay-1')) el.style.animationDelay = '0.1s';
            if (el.classList.contains('delay-2')) el.style.animationDelay = '0.2s';
            if (el.classList.contains('delay-3')) el.style.animationDelay = '0.3s';
            if (el.classList.contains('delay-4')) el.style.animationDelay = '0.4s';
            if (el.classList.contains('delay-5')) el.style.animationDelay = '0.5s';
        });
    }, 100);
    
    // Focus on NIM field when page loads
    document.getElementById('nim').focus();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + Enter to submit login form
    if (e.ctrlKey && e.key === 'Enter') {
        if (!forgotPasswordModal.classList.contains('active')) {
            loginForm.requestSubmit();
        }
    }
    
    // Escape to close modal
    if (e.key === 'Escape' && forgotPasswordModal.classList.contains('active')) {
        forgotPasswordModal.classList.remove('active');
    }
});
