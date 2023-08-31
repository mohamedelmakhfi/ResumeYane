import React, { useState, useEffect, useRef } from 'react';

const WarningAlert = ({ children }) => {
    const [showWarning, setShowWarning] = useState(false);
    const containerRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) {
                setShowWarning(true);
                setTimeout(() => {
                    setShowWarning(false);
                }, 5000);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });
        observerRef.current.observe(containerRef.current);
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div ref={containerRef}>
            {showWarning && (
                <div className="alert alert-warning text-center mb-4">
                    Warning: The content exceeds the maximum height. Some information may not appear correctly.
                </div>
            )}
            {children}
        </div>
    );
};

export default WarningAlert;
