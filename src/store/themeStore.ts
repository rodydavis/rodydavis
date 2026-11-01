import { atom } from 'nanostores';

export type Theme = 'light' | 'dark' | 'monokai' | 'dracula' | 'cyberpunk' | 'great-wave' | 'great-wave-light' | 'solarized-light' | 'solarized-dark' | 'matrix' | 'system';

export const themeStore = atom<Theme>('system');

const THEME_COLORS: Record<string, string> = {
    light: '#f3f3f3',
    dark: '#1e1e1e',
    monokai: '#1e1f1c',
    dracula: '#21222c',
    cyberpunk: '#000b1e',
    'great-wave': '#16161e',
    'great-wave-light': '#f2f0e4',
    'solarized-light': '#eee8d5',
    'solarized-dark': '#002b36',
    matrix: '#000000',
};

export const setTheme = (theme: Theme) => {
    console.log('Setting theme:', theme);
    themeStore.set(theme);

    // Update cookie
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Strict`;

    // Update HTML attribute
    let resolvedTheme: string = theme;
    if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolvedTheme = isDark ? 'dark' : 'light';
        document.documentElement.dataset.theme = resolvedTheme;
    } else {
        document.documentElement.dataset.theme = theme;
    }

    const metaThemeColor = document.getElementById('theme-color-meta');
    if (metaThemeColor && THEME_COLORS[resolvedTheme]) {
        metaThemeColor.setAttribute('content', THEME_COLORS[resolvedTheme]);
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
