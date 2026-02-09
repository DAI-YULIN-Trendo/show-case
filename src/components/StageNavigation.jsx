import React from 'react';
import './StageNavigation.css';

const StageNavigation = ({ currentStage, onStageChange }) => {
    const stages = [
        { id: 'lead-gen', label: '1. リード獲得 & 初回アプローチ' },
        { id: 'strategic', label: '2. 戦略インサイト & 提案構築' },
        { id: 'closing', label: '3. クロージング & 契約・学習' },
    ];

    return (
        <div className="stage-nav-container">
            <div className="stage-nav-pill">
                {stages.map((stage) => (
                    <button
                        key={stage.id}
                        onClick={() => onStageChange(stage.id)}
                        className={`stage-nav-button ${currentStage === stage.id ? 'active' : ''}`}
                    >
                        {stage.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StageNavigation;
