'use client'
// 1. Define the shape of the context's value
import {createContext, ReactNode, RefObject, useEffect, useRef, useState} from "react";

interface ModalContextType {
    fileUrl: string;
    open: (url: string) => void;
    close: () => void;
    dialogRef: React.RefObject<HTMLDialogElement | null> | null;
}

// 2. Create the context with a default value
export const PdfViewerModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Create the Provider component
export function PdfViewerModalProvider({children}: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [fileUrl, setFileUrl] = useState('');

    // Create a ref for the dialog here, in the provider
    const dialogRef: RefObject<HTMLDialogElement | null> | null = useRef<HTMLDialogElement>(null);

    const open = (url: string) => {
        setFileUrl(url);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setFileUrl('');
    };

    // This effect handles the *imperative* part of showing/hiding the dialog
    useEffect(() => {
        const modal = dialogRef.current;
        if (modal) {
            if (isOpen) {
                modal.showModal();
            } else {
                modal.close();
            }
        }
    }, [isOpen]); // Only run when isOpen changes

    const value = {
        fileUrl,
        open,
        close,
        dialogRef
    };

    return (
        <PdfViewerModalContext.Provider value={value}>
            {children}
        </PdfViewerModalContext.Provider>
    );
}