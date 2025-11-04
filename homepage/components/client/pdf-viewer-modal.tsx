'use client'
// Create a new component for the modal itself
import {usePdfViewModalContext} from "@/hooks/use-pdf-view-modal";
import PdfViewer from "@/components/server/pdf-viewer";
import {X} from "lucide-react";

export default function PdfViewerModal() {
    const {fileUrl, close, dialogRef} = usePdfViewModalContext();

    return (
        <dialog className="modal" ref={dialogRef} onClose={close}>
            <div className="modal-box w-2/3 h-2/3 max-w-3xl">
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={close} // Use the close function from context
                >
                    <X size={16}/>
                </button>
                <h3 className="font-bold text-lg">PDF-Preview</h3>
                <div className="relative w-full h-95/100">
                    <PdfViewer fileUrl={fileUrl}/>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button></button>
            </form>
        </dialog>
    );
}