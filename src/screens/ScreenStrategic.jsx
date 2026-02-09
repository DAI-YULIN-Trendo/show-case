import React from 'react';
import Layout from '../components/Layout';
import StageNavigation from '../components/StageNavigation';
import RightPanel from '../components/RightPanel';
import BubbleGuide from '../components/BubbleGuide';
import { FileText, Users, ArrowRight, Lightbulb, FileBarChart } from 'lucide-react';
import './ScreenStrategic.css';

const ScreenStrategic = ({ currentStage, onStageChange }) => {
    // LeftColumn removed in favor of GlobalSidebar

    const CenterColumn = (
        <div className="screen-container">
            <StageNavigation currentStage={currentStage} onStageChange={onStageChange} />

            <div className="chat-scroll-area">
                <div className="max-w-4xl mx-auto space-y-8" style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Deep Research Summary */}
                    <div className="ai-message">
                        <div className="ai-avatar">
                            <span className="ai-avatar-text">AI</span>
                        </div>
                        <div className="message-content">
                            <p className="message-text">
                                <strong>2024年度決算資料</strong>と<strong>社長のYouTubeインタビュー</strong>を解析しました。
                                <br />
                                <br />
                                インタビューで語られた「人とAIの共生」という概念は、中期経営計画の「30億円のDX投資枠」と直接リンクしています。ここが提案の突破口になります。
                            </p>
                        </div>
                    </div>


                    {/* Insight Map Mockup */}
                    <div className="insight-map-container relative">
                        <BubbleGuide
                            text="社長が公言するビジョンと、会社の財務資本（予算）の繋がりを可視化しました。"
                            position="top"
                        />

                        <h3 className="insight-title">
                            <Lightbulb className="icon" style={{ color: '#EAB308' }} />
                            戦略インサイトマップ
                        </h3>
                        <div className="insight-visualization">
                            <div className="insight-node">
                                <div className="node-meta">YouTube: 04分12秒</div>
                                <p className="node-content">「人とAIの共生」</p>
                                <Users className="icon text-slate-400 mt-2" />
                            </div>
                            <div className="insight-link">
                                <div className="link-line"></div>
                                <div className="link-label">強い相関</div>
                            </div>
                            <div className="insight-node">
                                <div className="node-meta">決算資料: P.24</div>
                                <p className="node-content">「生成AI予算: 30億円」</p>
                                <FileBarChart className="icon text-slate-400 mt-2" />
                            </div>
                        </div>

                        {/* Script Box */}
                        <div className="script-box relative">
                            <div className="absolute right-4 top-4 text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                                生成目的: <strong>初回商談用</strong>
                            </div>

                            <h4 className="script-title">
                                <span className="title-accent"></span>
                                商談スクリプト
                            </h4>

                            <div className="script-content">
                                <div>
                                    <label className="script-label">アイスブレイク（共感）</label>
                                    <p className="script-text bg-gray">
                                        「YouTubeで社長のインタビューを拝見しました。特に『AIは人の代替ではなく、拡張である』というお言葉は、私たちAgentifyの理念とも深く共鳴し、大変感銘を受けました。」
                                    </p>
                                </div>
                                <div>
                                    <label className="script-label">キラーフレーズ（価値提案）</label>
                                    <p className="script-text bg-blue active">
                                        「中期経営計画にある30億円の生成AI投資枠についてですが、弊社のAgentifyであれば、ルーチン業務の自動化を通じて、まさに社長の仰る『人とAIの共生』を最短で実現可能です。」
                                    </p>
                                </div>
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
                            placeholder="ROI重視でスクリプトを調整..."
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
            icon: <FileText className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "A社社長攻略シナリオ.pdf",
            meta: "作成済 • 5分前",
            color: "red"
        },
        {
            icon: <FileBarChart className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "競合比較・ROI予測.xlsx",
            meta: "分析済 • 10分前",
            color: "green"
        }
    ];

    return (
        <Layout
            center={CenterColumn}
            rightPanel={<RightPanel artifacts={artifacts} />}
        />
    );
};

export default ScreenStrategic;
