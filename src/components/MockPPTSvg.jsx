import React from 'react';

/**
 * SVGベースのPPTスライドプレビューコンポーネント
 * HTMLの代わりにSVGを使用してPPTライクなプレゼンテーションを描画
 */
const MockPPTSvg = () => {
    // スライドのアスペクト比 (16:9)
    const width = 800;
    const height = 450;

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full rounded-lg shadow-lg border border-slate-200"
            style={{ background: '#ffffff' }}
        >
            <defs>
                {/* グラデーション定義 */}
                <linearGradient id="blueBarGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="headerUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                {/* ドロップシャドウ */}
                <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                </filter>
                <filter id="blueShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.3" />
                </filter>
            </defs>

            {/* ヘッダー背景 */}
            <rect x="0" y="0" width={width} height="60" fill="#ffffff" />
            <line x1="0" y1="60" x2={width} y2="60" stroke="#f1f5f9" strokeWidth="1" />

            {/* ヘッダーテキスト */}
            <text x="32" y="26" fontSize="11" fill="#94a3b8" fontWeight="600" letterSpacing="0.1em">
                PROPOSAL FOR A-CORP
            </text>
            <text x="32" y="50" fontSize="20" fill="#1e293b" fontWeight="700">
                物流DXによるコスト構造の変革
            </text>

            {/* ヘッダーアンダーライン */}
            <rect x="32" y="57" width="80" height="3" fill="url(#headerUnderline)" />

            {/* 企業ロゴ（右上） */}
            <circle cx={width - 40} cy="30" r="14" fill="#0f172a" />
            <text x={width - 40} y="35" fontSize="11" fill="#ffffff" fontWeight="700" textAnchor="middle">
                A
            </text>

            {/* メインコンテンツエリア背景 */}
            <rect x="0" y="60" width={width} height={height - 90} fill="#fafbfc" />

            {/* 左カラム: エグゼクティブサマリー */}
            <g transform="translate(32, 80)">
                {/* サマリーカード */}
                <rect
                    x="0" y="0"
                    width="420" height="95"
                    rx="8" ry="8"
                    fill="#eff6ff"
                    stroke="#dbeafe"
                    strokeWidth="1"
                />
                {/* 左ボーダーアクセント */}
                <rect x="0" y="0" width="4" height="95" rx="2" fill="#2563eb" />

                <text x="20" y="30" fontSize="14" fill="#1e3a8a" fontWeight="700">
                    エグゼクティブ・サマリー
                </text>
                <text x="20" y="54" fontSize="12" fill="#475569" lineHeight="1.5">
                    <tspan x="20" dy="0">Agentifyの自律型AIエージェント導入により、倉庫業務の</tspan>
                    <tspan x="20" dy="18">「調整工数」をゼロに。24時間の完全無人オペレーションを</tspan>
                    <tspan x="20" dy="18">実現し、営業利益率を5pt改善します。</tspan>
                </text>
            </g>

            {/* BEFORE / AFTER セクション */}
            <g transform="translate(32, 195)">
                <text fontSize="11" fill="#64748b" fontWeight="700" letterSpacing="0.05em">
                    BEFORE / AFTER
                </text>
                <line x1="0" y1="14" x2="420" y2="14" stroke="#e2e8f0" strokeWidth="1" />

                {/* CURRENTカード */}
                <g transform="translate(0, 30)">
                    <rect
                        width="160" height="90"
                        rx="6" ry="6"
                        fill="#ffffff"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        filter="url(#cardShadow)"
                    />
                    <text x="16" y="24" fontSize="10" fill="#94a3b8" fontWeight="700">CURRENT</text>
                    <text x="16" y="48" fontSize="15" fill="#334155" fontWeight="700">属人運用</text>
                    <text x="16" y="66" fontSize="11" fill="#64748b">
                        <tspan x="16" dy="0">配車・在庫確認に</tspan>
                        <tspan x="16" dy="14">1日3時間の管理コスト</tspan>
                    </text>
                </g>

                {/* 矢印 */}
                <g transform="translate(180, 60)">
                    <path d="M0,15 L30,15 M22,8 L30,15 L22,22" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* NEW MODELカード */}
                <g transform="translate(230, 30)">
                    <rect
                        width="160" height="90"
                        rx="6" ry="6"
                        fill="#ffffff"
                        stroke="#bfdbfe"
                        strokeWidth="1.5"
                        filter="url(#blueShadow)"
                    />
                    {/* コーナーアクセント */}
                    <path d="M154,0 L160,0 L160,6 Z" fill="#2563eb" />
                    <text x="16" y="24" fontSize="10" fill="#3b82f6" fontWeight="700">NEW MODEL</text>
                    <text x="16" y="48" fontSize="15" fill="#1e3a8a" fontWeight="700">自律AI</text>
                    <text x="16" y="66" fontSize="11" fill="#1e40af">
                        <tspan x="16" dy="0">API連携により</tspan>
                        <tspan x="16" dy="14">全自動でリアルタイム最適化</tspan>
                    </text>
                </g>
            </g>

            {/* 右カラム: チャートエリア */}
            <g transform="translate(480, 80)">
                <rect
                    width="288" height="240"
                    rx="8" ry="8"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    filter="url(#cardShadow)"
                />

                <text x="20" y="30" fontSize="13" fill="#64748b" fontWeight="700">
                    コスト削減シミュレーション
                </text>

                {/* バーチャート */}
                <g transform="translate(44, 60)">
                    {/* 現状バー */}
                    <g transform="translate(50, 0)">
                        <rect width="50" height="110" rx="4" fill="#e2e8f0" />
                        <text x="25" y="-8" fontSize="14" fill="#64748b" fontWeight="700" textAnchor="middle">100</text>
                        <text x="25" y="128" fontSize="12" fill="#94a3b8" fontWeight="700" textAnchor="middle">現状</text>
                    </g>

                    {/* 導入後バー */}
                    <g transform="translate(130, 44)">
                        <rect width="50" height="66" rx="4" fill="url(#blueBarGradient)" filter="url(#blueShadow)" />
                        <text x="25" y="-12" fontSize="15" fill="#2563eb" fontWeight="700" textAnchor="middle">-40%</text>
                        <text x="25" y="84" fontSize="12" fill="#1d4ed8" fontWeight="700" textAnchor="middle">導入後</text>
                    </g>
                </g>

                {/* ROIセクション */}
                <g transform="translate(20, 200)">
                    <line x1="0" y1="0" x2="248" y2="0" stroke="#f1f5f9" strokeWidth="1" />
                    <text y="22" fontSize="11" fill="#64748b">ROI (投資対効果)</text>
                    <text x="248" y="22" fontSize="12" fill="#1e293b" fontWeight="700" textAnchor="end">430%</text>
                    {/* プログレスバー */}
                    <rect x="0" y="30" width="248" height="4" rx="2" fill="#f1f5f9" />
                    <rect x="0" y="30" width="198" height="4" rx="2" fill="#22c55e" />
                </g>
            </g>

            {/* フッター */}
            <rect x="0" y={height - 30} width={width} height="30" fill="#ffffff" />
            <line x1="0" y1={height - 30} x2={width} y2={height - 30} stroke="#f1f5f9" strokeWidth="1" />
            <text x="32" y={height - 11} fontSize="10" fill="#94a3b8">
                Agentify Inc. Confidential
            </text>
            <text x={width - 32} y={height - 11} fontSize="10" fill="#94a3b8" textAnchor="end">
                2026 Strategy Presentation • p.12
            </text>
        </svg>
    );
};

export default MockPPTSvg;
