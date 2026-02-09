import React from 'react';
import Layout from '../components/Layout';
import StageNavigation from '../components/StageNavigation';
import RightPanel from '../components/RightPanel';
import BubbleGuide from '../components/BubbleGuide';
import { Mail, Database, ArrowRight, Calendar, Search } from 'lucide-react';
import './ScreenLeadGen.css';

const ScreenLeadGen = ({ currentStage, onStageChange }) => {
    // LeftColumn removed in favor of GlobalSidebar

    const CenterColumn = (
        <div className="screen-container">
            <StageNavigation currentStage={currentStage} onStageChange={onStageChange} />

            <div className="chat-scroll-area">
                <div className="chat-container">

                    {/* Seminar Context Header */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4 flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded text-blue-600">
                            <Calendar className="icon" style={{ width: '1.25rem', height: '1.25rem' }} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-800">コンテキスト: AI変革セミナー2026（東京）</h3>
                            <p className="text-xs text-slate-600 mt-1">
                                ゴール: 「物流自動化」に関心を持った参加者へのフォローアップ
                            </p>
                        </div>
                    </div>

                    {/* AI Message */}
                    <div className="ai-message">
                        <div className="ai-avatar">
                            <span className="ai-avatar-text">AI</span>
                        </div>
                        <div className="message-content">
                            <p className="message-text">
                                <strong>名刺（株式会社A 佐藤様）</strong>と<strong>セミナーメモ</strong>を解析しました。
                                <br />
                                <br />
                                DeepSearchによるリサーチ結果、以下の重要情報が見つかりました：
                                <br />
                                1. <strong>株式会社A</strong>は先月、「物流DX戦略」に関するプレスリリースを発表しています。
                                <br />
                                2. 佐藤社長は最近の業界イベントで「人とAIの共生」について講演しています。
                            </p>

                            {/* DeepSearch Insight Card */}
                            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Search className="icon text-slate-400" />
                                    <span className="text-xs font-bold text-slate-500 uppercase">DeepSearch インサイト</span>
                                </div>
                                <p className="text-sm text-slate-700 italic">
                                    「株式会社Aの決算資料には、2026年にAI統合（特に倉庫効率化）へ3,000万円の予算を投じる計画が記載されています。」
                                </p>
                            </div>

                            {/* Draft Card */}
                            <div className="draft-card group relative">
                                <BubbleGuide
                                    text="セミナーの文脈と、DeepSearchで発見した「社長のビジョン」を組み合わせて、刺さるメールをドラフトしました。"
                                    position="right"
                                />

                                <div className="card-top-accent"></div>
                                <h4 className="card-title">メール下書き：お礼メール</h4>
                                <p className="card-body">
                                    件名: 先日のAI変革セミナーのお礼 / 物流自動化ソリューションについて{"\n\n"}
                                    株式会社A{"\n"}
                                    代表取締役社長 佐藤 様{"\n\n"}
                                    昨日は展示会にて貴重なお時間をいただき、誠にありがとうございました。{"\n"}
                                    弊社のAgentifyについてご説明させていただきました、田中でございます。{"\n\n"}
                                    その際、佐藤様が講演で仰っていた「人とAIの共生」というビジョンに、大変感銘を受けました。{"\n"}
                                    御社が掲げる「物流DX」の実現（特に倉庫効率化）に向けて、弊社のソリューションが...
                                </p>

                                <div className="mt-4 flex gap-2">
                                    <button style={{ fontSize: '0.875rem', padding: '0.25rem 0.75rem', background: '#F1F5F9', borderRadius: '4px', color: '#334155' }}>
                                        修正する
                                    </button>
                                    <button style={{ fontSize: '0.875rem', padding: '0.25rem 0.75rem', background: '#EFF6FF', color: '#1D4ED8', borderRadius: '4px' }}>
                                        採用する
                                    </button>
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
                            placeholder="AIへの指示を入力..."
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
            icon: <Mail className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "佐藤様向け個別メール.html",
            meta: "作成済 • 2分前",
            color: "green"
        },
        {
            icon: <Database className="icon" style={{ width: '20px', height: '20px' }} />,
            title: "CRM連携ログ: 株式会社A",
            meta: "同期済 • 1分前",
            color: "blue"
        }
    ];

    return (
        <Layout
            center={CenterColumn}
            rightPanel={<RightPanel artifacts={artifacts} />}
        />
    );
};

export default ScreenLeadGen;
