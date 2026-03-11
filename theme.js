// Solvin Digital - Global Theme & Dark Mode Handler
(function() {
    const theme = localStorage.getItem('solvin_theme') || 'light';
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Design Tokens & Tailwind Configuration Extension (via script tag in HTML)
    window.tailwindConfig = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: {
                        DEFAULT: '#fd9c99',
                        light: '#ffb3b0',
                        dark: '#e88a87',
                        50: '#fff5f5',
                        100: '#ffeaea',
                        200: '#ffd1cf',
                        300: '#ffb3b0',
                        400: '#fd9c99',
                        500: '#f87171',
                        600: '#dc2626',
                        700: '#b91c1c',
                        800: '#991b1b',
                        900: '#7f1d1d',
                    },
                    secondary: '#2d3436',
                    success: '#00b894',
                    warning: '#fdcb6e',
                    error: '#d63031',
                    neutral: '#636e72',
                    darkBg: '#0f172a',
                    darkCard: '#1e293b',
                },
                borderRadius: {
                    '2xl': '1rem',
                    '3xl': '1.5rem',
                    '4xl': '2rem',
                },
                boxShadow: {
                    'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                    'primary': '0 10px 15px -3px rgba(253, 156, 153, 0.3), 0 4px 6px -4px rgba(253, 156, 153, 0.3)',
                }
            }
        }
    };
})();

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('solvin_theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
}

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isDark));
    document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.toggle('hidden', isDark));
}

// Initialize icons on load
document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcons();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
