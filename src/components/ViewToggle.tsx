import { useStore } from '@nanostores/react';
import { viewMode } from '../stores/viewStore';
import { FileCode, Eye } from 'lucide-react';
import React from 'react';

export default function ViewToggle() {
    const mode = useStore(viewMode);

    const toggle = () => {
        viewMode.set(mode === 'preview' ? 'markdown' : 'preview');
    };

    return (
        <button
            onClick={toggle}
            className="p-1 rounded hover:bg-[var(--hover-bg)] text-[var(--fg-primary)] transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
            title={mode === 'preview' ? "View Source" : "Open Preview"}
        >
            {mode === 'preview' ? <FileCode size={16} /> : <Eye size={16} />}
        </button>
    );
}
