import React from 'react';

export default function PdfViewer({fileUrl}: { fileUrl?: string }) {
    if (!fileUrl) {
        return
    }
    return (
        <iframe
            className="absolute w-full h-full top-0 left-0"
            src={fileUrl}
            style={{border: 'none'}}
            title="PDF Viewer"
        >
            <p>
                Your browser does not support PDFs.
                <a href={fileUrl}>Download the PDF</a>.
            </p>
        </iframe>
    );
}