import { atom } from 'nanostores';

export type ViewMode = 'preview' | 'markdown';

// Initialize with defaults, will be updated by client-side logic
export const viewMode = atom<ViewMode>('preview');

// Function to initialize logic on client
export function initViewStore() {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    const initialMode = url.searchParams.get('render') === 'markdown' ? 'markdown' : 'preview';
    viewMode.set(initialMode);

    viewMode.subscribe((mode) => {
        const url = new URL(window.location.href);
        if (mode === 'preview') {
            url.searchParams.delete('render');
        } else {
            url.searchParams.set('render', 'markdown');
        }
        window.history.replaceState({}, '', url.toString());
    });
}
