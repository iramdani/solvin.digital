// Solvin Digital - Global Theme & Glassmorphism Handler
(function() {
    const theme = localStorage.getItem('solvin_theme') || 'light';
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Design Tokens & Tailwind Configuration Extension
    window.tailwindConfig = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: {
                        DEFAULT: '#ff7375',
                        50: '#fff1f1',
                        100: '#ffe1e1',
                        200: '#ffc8c9',
                        300: '#ffa1a3',
                        400: '#ff7375',
                        500: '#f84b4e',
                        600: '#e62a2d',
                        700: '#c11e21',
                        800: '#a01c1e',
                        900: '#851d1f',
                        950: '#490a0b',
                    },
                    secondary: {
                        DEFAULT: '#64748b',
                        50: '#f8fafc',
                        100: '#f1f5f9',
                        200: '#e2e8f0',
                        300: '#cbd5e1',
                        400: '#94a3b8',
                        500: '#64748b',
                        600: '#475569',
                        700: '#334155',
                        800: '#1e293b',
                        900: '#0f172a',
                    },
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                    neutral: '#94a3b8',
                    darkBg: '#0f172a',
                    darkCard: 'rgba(30, 41, 59, 0.7)',
                    glassWhite: 'rgba(255, 255, 255, 0.7)',
                },
                borderRadius: {
                    'xl': '1rem',
                    '2xl': '1.5rem',
                    '3xl': '2rem',
                    '4xl': '2.5rem',
                    '5xl': '3rem',
                },
                boxShadow: {
                    'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                    'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                    'primary': '0 10px 15px -3px rgba(255, 115, 117, 0.3), 0 4px 6px -4px rgba(255, 115, 117, 0.3)',
                },
                backdropBlur: {
                    'xs': '2px',
                }
            }
        }
    };

    // Inject Glassmorphism Global Styles
    const style = document.createElement('style');
    style.textContent = `
        .glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .dark .glass {
            background: rgba(15, 23, 42, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        }
        .dark .glass-card {
            background: rgba(30, 41, 59, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .transition-theme {
            transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        * {
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
    `;
    document.head.appendChild(style);
})();

window.toggleDarkMode = function() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('solvin_theme', isDark ? 'dark' : 'light');
    window.updateThemeIcons();
};

window.updateThemeIcons = function() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isDark));
    document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.toggle('hidden', isDark));
};

// Initialize icons on load
document.addEventListener('DOMContentLoaded', () => {
    window.updateThemeIcons();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
