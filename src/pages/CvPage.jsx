import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import { useRef, useEffect, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function CvPage() {
    const [numPages, setNumPages] = useState(null);
    const wrapperRef = useRef();
    const [width, setWidth] = useState(800);

    useEffect(() => {
        const updateWidth = () => {
            if (wrapperRef.current) {
                setWidth(wrapperRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div
            style={{
                margin: 'auto',
                width: '80%',
                padding: '20px',
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            <div className="text-center" style={{ marginTop: '3rem' }}>

                {/* Download Button (top-left, aligned with layout) */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '20px',
                        marginBottom: '1.5rem',
                    }}
                >
                    <a
                        href="/raj-gurung-cv.pdf"
                        download="raj-gurung-cv.pdf"
                        style={{
                            textDecoration: 'none',
                            color: '#000',
                            fontWeight: 500,
                            border: '1px solid #000',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        Download PDF
                    </a>
                </div>

                {/* PDF Viewer */}
                <div
                    ref={wrapperRef}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Document
                        file="/raj-gurung-cv.pdf"
                        onLoadSuccess={onLoadSuccess}
                        onLoadError={console.error}
                        loading="Loading CV..."
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <div key={`page_${index}`} style={{ marginBottom: '2rem' }}>
                                <Page
                                    pageNumber={index + 1}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                    width={width > 1200 ? 1200 : width}
                                />
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#888',
                                        marginTop: '0.5rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    Page {index + 1} of {numPages}
                                </p>
                            </div>
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
