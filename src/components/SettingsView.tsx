import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { themeStore, setTheme, type Theme, initTheme } from '../store/themeStore';
import { Search, Code2 } from 'lucide-react';

interface SettingsViewProps {
    onClose?: () => void;
}

const THEMES: { id: Theme; name: string; type: 'dark' | 'light' }[] = [
    { id: 'system', name: 'System Default', type: 'dark' },
    { id: 'light', name: 'Light Modern', type: 'light' },
    { id: 'dark', name: 'Dark Modern', type: 'dark' },
    { id: 'monokai', name: 'Monokai', type: 'dark' },
    { id: 'dracula', name: 'Dracula', type: 'dark' },
    { id: 'cyberpunk', name: 'Cyberpunk', type: 'dark' },
    { id: 'great-wave', name: 'The Great Wave', type: 'dark' },
    { id: 'great-wave-light', name: 'The Great Wave', type: 'light' },
    { id: 'solarized-light', name: 'Solarized Light', type: 'light' },
    { id: 'solarized-dark', name: 'Solarized Dark', type: 'dark' },
    { id: 'matrix', name: 'Matrix', type: 'dark' },
];

const ThemePreview: React.FC<{ themeId: Theme }> = ({ themeId }) => {
    return (
        <div className="w-full h-24 rounded border border-[var(--border-secondary)] overflow-hidden relative" data-theme={themeId}>
            <div className="absolute inset-0 bg-[var(--bg-main)]">
                <div className="flex h-full">
                    <div className="w-1/4 h-full bg-[var(--bg-sidebar)] border-r border-[var(--border-main)]"></div>
                    <div className="flex-1 p-2">
                        <div className="w-1/2 h-2 bg-[var(--bg-activity)] mb-2 rounded-sm opacity-50"></div>
                        <div className="w-3/4 h-2 bg-[var(--bg-activity)] mb-2 rounded-sm opacity-50"></div>
                        <div className="mt-4 w-1/3 h-2 bg-[var(--bg-status)] rounded-sm opacity-80"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingsView: React.FC<SettingsViewProps> = ({ onClose }) => {
    const currentTheme = useStore(themeStore);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Initialize theme on mount to ensure store matches DOM/Cookies
        initTheme();
    }, []);

    const handleThemeChange = (newTheme: Theme) => {
        console.log('Theme card clicked:', newTheme);
        setTheme(newTheme);
    };

    // Filter settings based on search - for now just themes
    const showThemes = 'color theme'.includes(search.toLowerCase()) || 'appearance'.includes(search.toLowerCase()) || search === '';

    const autoThemes = THEMES.filter(t => t.id === 'system');
    const lightThemes = THEMES.filter(t => t.type === 'light' && t.id !== 'system');
    const darkThemes = THEMES.filter(t => t.type === 'dark' && t.id !== 'system');

    const ThemeCard = ({ theme }: { theme: typeof THEMES[0] }) => (
        <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className={`text-left p-3 rounded border transition-all hover:bg-[var(--hover-bg)] ${currentTheme === theme.id ? 'border-[var(--bg-status)] ring-1 ring-[var(--bg-status)]' : 'border-[var(--border-secondary)]'}`}
        >
            <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-sm">{theme.name}</span>
                {currentTheme === theme.id && <div className="w-2 h-2 rounded-full bg-[var(--bg-status)]"></div>}
            </div>
            {/* Preview Box */}
            <div className="pointer-events-none" data-theme={theme.id}>
                {theme.id === 'system' ? (
                    <div className="w-full h-20 rounded border border-[var(--border-main)] flex overflow-hidden relative">
                        {/* Light Theme Half (Top Left) */}
                        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
                            <div className="w-8 bg-[#f3f3f3] h-full border-r border-[#e5e5e5] absolute top-0 left-0"></div>
                            <div className="absolute top-2 left-10 w-20 h-2 bg-[#e8e8e8] rounded-sm"></div>
                        </div>
                        {/* Dark Theme Half (Bottom Right) */}
                        <div className="absolute inset-0 bg-[#1e1e1e]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
                            <div className="absolute bottom-2 right-2 w-20 h-2 bg-[#333333] rounded-sm"></div>
                            <div className="absolute bottom-6 right-2 w-10 h-2 bg-[#007acc] rounded-sm"></div>
                        </div>
                        {/* Diagonal Divider */}
                        <div className="absolute inset-0 border-b border-[var(--border-main)]" style={{ transform: 'rotate(45deg) scale(1.5)', transformOrigin: 'center' }}></div>
                    </div>
                ) : (
                    <div className="w-full h-20 rounded border border-[var(--border-main)] bg-[var(--bg-main)] flex overflow-hidden">
                        <div className="w-8 bg-[var(--bg-sidebar)] h-full border-r border-[var(--border-main)]"></div>
                        <div className="flex-1 p-2 space-y-2">
                            <div className="w-3/4 h-2 bg-[var(--fg-secondary)] opacity-20 rounded"></div>
                            <div className="w-1/2 h-2 bg-[var(--bg-status)] opacity-40 rounded"></div>
                        </div>
                    </div>
                )}
            </div>
        </button>
    );

    return (
        <div className="w-full h-full flex flex-col bg-[var(--bg-main)] text-[var(--fg-primary)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-main)] bg-[var(--bg-main)]">
                <div className="flex items-center space-x-2 text-sm font-medium">
                    <span>Settings</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-1.5 text-[var(--fg-secondary)]" size={14} />
                        <input
                            type="text"
                            placeholder="Search settings..."
                            className="pl-8 pr-4 py-1 bg-[var(--input-bg)] border border-[var(--border-secondary)] rounded text-sm text-[var(--input-fg)] focus:outline-none focus:border-[var(--bg-status)] w-64"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-0 flex">
                {/* Sidebar (Categories) - Hidden on small screens or simplified */}
                <div className="w-48 border-r border-[var(--border-main)] bg-[var(--bg-sidebar)] hidden md:block pt-2">
                    <div className="px-2 py-1 text-xs font-bold text-[var(--fg-secondary)] uppercase mb-1">Commonly Used</div>
                    <div className={`px-3 py-1.5 cursor-pointer text-sm ${showThemes ? 'bg-[var(--selection-bg)] text-[var(--fg-primary)]' : 'text-[var(--fg-secondary)] hover:text-[var(--fg-primary)]'}`}>
                        Appearance
                    </div>
                </div>

                {/* Main Settings Area */}
                <div className="flex-1 p-6 overflow-y-auto">
                    {showThemes && (
                        <div className="mb-8">
                            <h2 className="text-xl font-medium mb-1">Workbench: Color Theme</h2>
                            <div className="text-[var(--fg-secondary)] text-sm mb-4">
                                Specifies the color theme used in the workbench.
                            </div>

                            <div className="relative w-full max-w-md mb-6">
                                <select
                                    value={currentTheme}
                                    onChange={(e) => handleThemeChange(e.target.value as Theme)}
                                    className="w-full bg-[var(--input-bg)] text-[var(--input-fg)] border border-[var(--border-secondary)] rounded px-3 py-2 appearance-none focus:outline-none focus:border-[var(--bg-status)] cursor-pointer"
                                >
                                    {THEMES.map(t => (
                                        <option key={t.id} value={t.id}>{t.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-6 max-w-2xl">
                                {/* Auto Section */}
                                {autoThemes.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-bold text-[var(--fg-secondary)] uppercase mb-3">Auto</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {autoThemes.map(theme => <ThemeCard key={theme.id} theme={theme} />)}
                                        </div>
                                    </div>
                                )}

                                {/* Light Section */}
                                {lightThemes.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-bold text-[var(--fg-secondary)] uppercase mb-3">Light Themes</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {lightThemes.map(theme => <ThemeCard key={theme.id} theme={theme} />)}
                                        </div>
                                    </div>
                                )}

                                {/* Dark Section */}
                                {darkThemes.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-bold text-[var(--fg-secondary)] uppercase mb-3">Dark Themes</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {darkThemes.map(theme => <ThemeCard key={theme.id} theme={theme} />)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
