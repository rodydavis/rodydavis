import { useStore } from '@nanostores/react';
import { viewMode } from '../stores/viewStore';
import React from 'react';

export default function ViewStatus() {
    const mode = useStore(viewMode);
    return <span>{mode === 'preview' ? 'Preview' : 'Markdown'}</span>;
}
