import React from 'react';
import { Upload, FileText, Database, Search, User } from 'lucide-react';
import './GlobalSidebar.css';

const GlobalSidebar = () => {
    return (
        <div className="global-sidebar">
            <div className="sidebar-header">
                <h2 className="app-logo">Agentify <span className="logo-sub">Studio</span></h2>
            </div>

            <div className="sidebar-content">
                {/* Upload Area */}
                <div className="upload-container">
                    <div className="upload-box">
                        <Upload className="upload-icon-large" />
                        <p className="upload-hint">ファイルをドラッグ＆ドロップ</p>
                        <span className="upload-subhint">PDF, CSV, 音声, 動画</span>
                    </div>
                </div>

                {/* Knowledge Base */}
                <div className="sidebar-section">
                    <h3 className="sidebar-section-title">ナレッジベース</h3>
                    <div className="sidebar-list">
                        <div className="sidebar-item">
                            <Database className="sidebar-item-icon blue" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">展示会参加者リスト_2026.csv</span>
                                <span className="sidebar-item-meta">234 件</span>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <User className="sidebar-item-icon gray" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">名刺スキャン_A社佐藤様.jpg</span>
                                <span className="sidebar-item-meta">本日スキャン</span>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <FileText className="sidebar-item-icon gray" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">商談メモ_物流EXPO.txt</span>
                                <span className="sidebar-item-meta">テキストメモ</span>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <FileText className="sidebar-item-icon gray" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">A社_会社案内2025.pdf</span>
                                <span className="sidebar-item-meta">PDFドキュメント</span>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <Database className="sidebar-item-icon blue" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">B社_導入成功事例.pptx</span>
                                <span className="sidebar-item-meta">提案資料</span>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <FileText className="sidebar-item-icon gray" />
                            <div className="sidebar-item-content">
                                <span className="sidebar-item-title">ヒアリング議事録_2026.docx</span>
                                <span className="sidebar-item-meta">ドキュメント</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DeepSearch Trigger */}
                <div className="sidebar-section">
                    <div className="deepsearch-card">
                        <div className="deepsearch-header">
                            <Search className="deepsearch-icon" />
                            <span className="deepsearch-title">DeepSearch</span>
                        </div>
                        <p className="deepsearch-description">
                            リサーチ対象: <strong>株式会社A</strong>
                        </p>
                        <div className="deepsearch-tags">
                            <span className="tag">業界ニュース</span>
                            <span className="tag">人事異動</span>
                            <span className="tag">中期計画</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">D</div>
                    <div className="user-info">
                        <span className="user-name">Demo User</span>
                        <span className="user-role">Sales Manager</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalSidebar;
