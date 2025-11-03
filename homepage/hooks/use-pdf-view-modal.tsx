'use client'
import {useContext} from 'react';
import {PdfViewerModalContext} from "@/context/pdf-viewer-modal-context";

export function usePdfViewModal() {
    const context = useContext(PdfViewerModalContext);

    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    // Return the state and the functions to control it
    return {open: context.open, close: context.close};
}

export function usePdfViewModalContext() {
    const context = useContext(PdfViewerModalContext);

    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    // Return the state and the functions to control it
    return context
}