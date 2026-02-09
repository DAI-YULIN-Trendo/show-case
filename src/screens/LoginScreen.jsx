import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'TRENDO') {
            onLogin();
        } else {
            setError(true);
            setPassword('');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        }}>
            {/* 背景のグラデーションオーブ */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '20%',
                width: '30vw',
                height: '30vw',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                pointerEvents: 'none'
            }} />

            {/* メインコンテンツ */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '420px',
                textAlign: 'center'
            }}>
                {/* ロゴ */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Agentify
                    </h1>
                    <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        letterSpacing: '0.2em',
                        fontWeight: 300
                    }}>
                        SALES STUDIO
                    </p>
                </div>

                {/* 入力フォーム */}
                <form onSubmit={handleSubmit}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '2rem',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <input
                            type="password"
                            placeholder="アクセスキーを入力"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            style={{
                                width: '100%',
                                background: 'rgba(15, 23, 42, 0.8)',
                                border: error ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '1rem 1.25rem',
                                fontSize: '1rem',
                                color: '#ffffff',
                                outline: 'none',
                                transition: 'all 0.2s ease',
                                textAlign: 'center',
                                letterSpacing: '0.1em',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)';
                                e.target.style.boxShadow = 'none';
                            }}
                            autoFocus
                        />

                        {error && (
                            <p style={{
                                color: '#f87171',
                                fontSize: '0.875rem',
                                marginTop: '0.75rem',
                                fontWeight: 500
                            }}>
                                アクセスキーが正しくありません
                            </p>
                        )}

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                marginTop: '1.25rem',
                                padding: '0.875rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                border: 'none',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '0.9375rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.05em'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-1px)';
                                e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            ログイン
                        </button>
                    </div>
                </form>

                {/* フッター */}
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    color: '#475569'
                }}>
                    <span style={{
                        width: '6px',
                        height: '6px',
                        background: '#22c55e',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite'
                    }} />
                    <span>セキュア接続</span>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                input::placeholder {
                    color: #64748b;
                }
            `}</style>
        </div>
    );
};

export default LoginScreen;

