import React from 'react';
import './BubbleGuide.css';

const BubbleGuide = ({ text, target, position = 'right' }) => {
    return (
        <div className={`bubble-guide-container ${position}`}>
            <div className="bubble-anchor">
                <div className="bubble-pulse"></div>
                <div className="bubble-dot"></div>
            </div>
            <div className="bubble-content">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default BubbleGuide;
