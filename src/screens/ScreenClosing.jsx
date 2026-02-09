import React from 'react';
import Layout from '../components/Layout';
import StageNavigation from '../components/StageNavigation';
import RightPanel from '../components/RightPanel';
import BubbleGuide from '../components/BubbleGuide';
import MockPPTSvg from '../components/MockPPTSvg';
import { Presentation, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';
import './ScreenClosing.css';

const ScreenClosing = ({ currentStage, onStageChange }) => {
    // LeftColumn removed in favor of GlobalSidebar

    const CenterColumn = (
        <div className="screen-container">
            <StageNavigation currentStage={currentStage} onStageChange={onStageChange} />

            <div className="chat-scroll-area">
                <div className="max-w-5xl mx-auto space-y-8" style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="ai-message">
                        <div className="ai-avatar">
                            <span className="ai-avatar-text">AI</span>
                        </div>
                        <div className="message-content" style={{ flex: 1 }}>
                            <p className="message-text mb-4">
                                B社の導入成功事例「勝利パターン」に基づき、A社の「生成AI予算」規模に合わせた最終提案書のドラフトを作成しました。
                            </p>
                            {/* PPT Preview - Replaced with MockPPT */}
                            <div className="ppt-preview-container group relative" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                                <BubbleGuide
                                    text="提案書には「管理」ワークフロー（NDA・見積もり）の内容が自動的に反映されています。"
                                    position="top"
                                />

                                <MockPPTSvg />

                                <div className="ppt-overlay">
                                    <button className="preview-button">
                                        プレビューを開く
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Implementation Roadmap (Replaces Feedback Loop) */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                <CheckCircle className="icon" style={{ width: '1.25rem', height: '1.25rem' }} />
                            </div>
                            <h4 className="font-bold text-slate-800">導入ロードマップ (Next Action)</h4>
                        </div>

                        <div className="roadmap-grid grid grid-cols-3 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                            {/* Step 1 */}
                            <div className="roadmap-step relative p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="absolute -top-2 -left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Month 1</span>
                                <h5 className="font-bold text-slate-700 text-sm mb-1">キックオフ・要件定義</h5>
                                <p className="text-xs text-slate-500">現状業務フローの精査と、AI連携ポイントの確定</p>
                            </div>

                            {/* Step 2 */}
                            <div className="roadmap-step relative p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="absolute -top-2 -left-2 bg-slate-500 text-white text-xs font-bold px-2 py-1 rounded">Month 2</span>
                                <h5 className="font-bold text-slate-700 text-sm mb-1">パイロット運用</h5>
                                <p className="text-xs text-slate-500">一部拠点での試験導入と効果測定 (KPI検証)</p>
                            </div>

                            {/* Step 3 */}
                            <div className="roadmap-step relative p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="absolute -top-2 -left-2 bg-slate-500 text-white text-xs font-bold px-2 py-1 rounded">Month 3</span>
                                <h5 className="font-bold text-slate-700 text-sm mb-1">本番稼働・全社展開</h5>
                                <p className="text-xs text-slate-500">全拠点への展開と、自律運用の開始</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Chat Input */}
            <div className="chat-input-wrapper">
                <div className="chat-input-container">
                    <div className="chat-input-box">
                        <input
                            type="text"
                            placeholder="提案書の修正指示を入力..."
                            className="chat-input"
                        />
                        <button className="send-button">
                            <ArrowRight style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const artifacts = [
        {
            icon: <Presentation className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "A社_最終提案書.pptx",
            meta: "作成済 • 1分前",
            color: "orange"
        },
        {
            icon: <FileCheck className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "NDA_A社_v2.pdf",
            meta: "送信済 • 2分前",
            color: "purple"
        }
    ];

    return (
        <Layout
            center={CenterColumn}
            rightPanel={<RightPanel artifacts={artifacts} />}
        />
    );
};

export default ScreenClosing;
