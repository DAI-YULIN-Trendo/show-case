import React from 'react';
import { FileText, Calculator, Mail, FileCheck } from 'lucide-react';
import './RightPanel.css';

const RightPanel = ({ artifacts }) => {
    return (
        <div className="right-panel-container">
            {/* Core Apps Section */}
            <div className="panel-section">
                <h3 className="section-label">Core Apps</h3>
                <div className="core-apps-grid">
                    <button className="app-card indigo">
                        <div className="app-icon-wrapper">
                            <FileText className="app-icon" />
                        </div>
                        <span className="app-label">商談・戦略<br />シナリオ作成</span>
                    </button>

                    <button className="app-card green">
                        <div className="app-icon-wrapper">
                            <Calculator className="app-icon" />
                        </div>
                        <span className="app-label">見積書<br />作成</span>
                    </button>

                    <a href="https://mail-helper.agentify.jp/" target="_blank" rel="noopener noreferrer" className="app-card-link">
                        <div className="app-card orange">
                            <div className="app-icon-wrapper">
                                <Mail className="app-icon" />
                            </div>
                            <span className="app-label">メール<br />一括送信</span>
                        </div>
                    </a>

                    <button className="app-card purple">
                        <div className="app-icon-wrapper">
                            <FileCheck className="app-icon" />
                        </div>
                        <span className="app-label">契約管理<br />検索</span>
                    </button>
                </div>
            </div>

            {/* Dynamic Artifacts Section */}
            <div className="panel-section grow">
                <h3 className="section-label">成果物 (Deliverables)</h3>
                <div className="artifacts-list">
                    {artifacts && artifacts.length > 0 ? (
                        artifacts.map((artifact, index) => (
                            <div key={index} className="artifact-item">
                                <div className={`artifact-icon-box ${artifact.color || 'gray'}`}>
                                    {artifact.icon}
                                </div>
                                <div>
                                    <p className="artifact-title">{artifact.title}</p>
                                    <span className="artifact-meta">{artifact.meta}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <span className="text-xs text-slate-400">成果物はまだありません</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RightPanel;
