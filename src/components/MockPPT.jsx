import React from 'react';
import './MockPPT.css';
import { ArrowRight } from 'lucide-react';

const MockPPT = () => {
    return (
        <div className="ppt-slide aspect-video bg-white overflow-hidden flex flex-col shadow-sm border border-slate-200">
            {/* Slide Header */}
            <div className="h-16 border-b border-slate-100 flex items-center px-8 justify-between bg-white relative">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">PROPOSAL FOR A-CORP</span>
                    <h2 className="text-lg font-bold text-slate-800 leading-none">物流DXによるコスト構造の変革</h2>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">A</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-8 w-24 h-[3px] bg-blue-600"></div>
            </div>

            {/* Slide Body */}
            <div className="flex-1 p-8 grid grid-cols-12 gap-8 bg-slate-50/30">
                {/* Left Column: Key Message & Text */}
                <div className="col-span-7 flex flex-col gap-6">
                    <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 border-l-4 border-l-blue-600">
                        <h3 className="text-sm font-bold text-blue-900 mb-2">エグゼクティブ・サマリー</h3>
                        <p className="text-xs text-slate-700 leading-relaxed">
                            Agentifyの自律型AIエージェント導入により、倉庫業務の「調整工数」をゼロに。
                            24時間の完全無人オペレーションを実現し、<span className="font-bold underline decoration-blue-300 decoration-2">営業利益率を5pt改善</span>します。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1">BEFORE / AFTER</h4>

                        <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
                            <div className="p-4 bg-white rounded border border-slate-200 shadow-sm">
                                <div className="text-[10px] text-slate-400 font-bold mb-1">CURRENT</div>
                                <div className="text-sm font-bold text-slate-700">属人運用</div>
                                <div className="text-[10px] text-slate-500 mt-1">配車・在庫確認に<br />1日3時間の管理コスト</div>
                            </div>

                            <ArrowRight className="text-slate-300 w-4 h-4" />

                            <div className="p-4 bg-white rounded border border-blue-200 shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-1 bg-blue-600"></div>
                                <div className="text-[10px] text-blue-500 font-bold mb-1">NEW MODEL</div>
                                <div className="text-sm font-bold text-blue-900">自律AI</div>
                                <div className="text-[10px] text-blue-800 mt-1">API連携により<br />全自動でリアルタイム最適化</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quantitative Impact (Chart) */}
                <div className="col-span-5 flex flex-col">
                    <div className="h-full bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col relative">
                        <h4 className="text-xs font-bold text-slate-500 mb-6 flex items-center gap-2">
                            コスト削減シミュレーション
                        </h4>

                        <div className="flex-1 flex items-end justify-center gap-6 px-4 pb-4">
                            {/* Bar 1 */}
                            <div className="w-16 flex flex-col items-center gap-2 group">
                                <div className="w-full bg-slate-200 rounded-t h-32 relative">
                                    <span className="absolute -top-4 w-full text-center text-xs font-bold text-slate-500">100</span>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400">現状</span>
                            </div>

                            {/* Bar 2 */}
                            <div className="w-16 flex flex-col items-center gap-2 group">
                                <div className="w-full bg-gradient-to-t from-blue-700 to-blue-500 rounded-t h-20 relative shadow-lg shadow-blue-200">
                                    <span className="absolute -top-6 w-full text-center text-sm font-bold text-blue-600">-40%</span>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white/30"></div>
                                </div>
                                <span className="text-[10px] font-bold text-blue-700">導入後</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <div className="flex justify-between items-center text-[10px] text-slate-500">
                                <span>ROI (投資対効果)</span>
                                <span className="font-bold text-slate-800">430%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-1 mt-2">
                                <div className="bg-green-500 w-[80%] h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Footer */}
            <div className="h-8 border-t border-slate-100 bg-white flex items-center justify-between px-8 text-[9px] text-slate-400">
                <span>Agentify Inc. Confidential</span>
                <span>2026 Strategy Presentation &bull; p.12</span>
            </div>
        </div>
    );
};

export default MockPPT;
