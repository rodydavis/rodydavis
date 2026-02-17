import { atom } from 'nanostores';

export type Theme = 'light' | 'dark' | 'monokai' | 'dracula' | 'cyberpunk' | 'great-wave' | 'great-wave-light' | 'solarized-light' | 'solarized-dark' | 'matrix' | 'system';

export const themeStore = atom<Theme>('system');

export const setTheme = (theme: Theme) => {
    console.log('Setting theme:', theme);
    themeStore.set(theme);

    // Update cookie
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Strict`;

    // Update HTML attribute
    if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    } else {
        document.documentElement.dataset.theme = theme;
    }
};

// Initialize from cookie or system preference
export const initTheme = () => {
    if (typeof window === 'undefined') return;

    const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'));
    const storedTheme = match ? match[2] as Theme : 'system';

    setTheme(storedTheme);

    // Listen for system changes if theme is system
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
        if (themeStore.get() === 'system') {
            document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
        }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
};
