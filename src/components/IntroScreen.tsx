import { useEffect, useRef, useState } from 'react'

const TITLES = [
    'Python Developer',
    'Data Engineer',
    'Data Analyst',
    'Data Scientist',
    'ML Engineer',
]

// duplicate for seamless infinite loop
const LOOPED = [...TITLES, ...TITLES]

interface Props {
    onDone: () => void
}

export default function IntroScreen({ onDone }: Props) {
    const [phase, setPhase] = useState<'in' | 'idle' | 'out'>('in')
    const doneRef = useRef(false)

    const exit = () => {
        if (doneRef.current) return
        doneRef.current = true
        setPhase('out')
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const t = setTimeout(() => setPhase('idle'), 900)
        window.addEventListener('wheel', exit, { passive: true })
        window.addEventListener('touchmove', exit, { passive: true })
        window.addEventListener('keydown', exit)
        return () => {
            clearTimeout(t)
            window.removeEventListener('wheel', exit)
            window.removeEventListener('touchmove', exit)
            window.removeEventListener('keydown', exit)
        }
    }, [])

    const handleAnimEnd = () => {
        if (phase === 'out') {
            document.body.style.overflow = ''
            onDone()
        }
    }

    const overlayAnim: React.CSSProperties =
        phase === 'in' ? { animation: 'introFadeIn 0.6s ease forwards' } :
            phase === 'out' ? { animation: 'introSlideUp 0.72s cubic-bezier(0.76,0,0.24,1) forwards' } :
                {}

    return (
        <div
            onAnimationEnd={handleAnimEnd}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'var(--paper)',
                display: 'flex',
                ...overlayAnim,
            }}
        >
            {/* ── graph-paper grid ── */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    repeating-linear-gradient(rgba(160,185,215,0.18) 0 0.5px, transparent 0.5px 28px),
                    repeating-linear-gradient(90deg, rgba(160,185,215,0.18) 0 0.5px, transparent 0.5px 28px)
                `,
            }} />
            {/* red margin line */}
            <div style={{
                position: 'absolute', top: 0, left: 78,
                width: 1, height: '100%',
                background: 'rgba(200,70,70,0.14)',
                pointerEvents: 'none',
            }} />

            {/* ════════════════════════════════════════
                LEFT — Hello I'm + Name
            ════════════════════════════════════════ */}
            <div style={{
                flex: '0 0 50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '0 clamp(32px, 6vw, 80px)',
                borderRight: '1.5px solid rgba(70,100,160,0.14)',
            }}>
                {/* greeting */}
                <div
                    className="font-courier animate-fade-in"
                    style={{
                        fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                        letterSpacing: '0.12em',
                        color: 'var(--ink-faint)',
                        marginBottom: '0.5rem',
                    }}
                >
                    Hello! I'm
                </div>

                {/* first name */}
                <div
                    className="font-baskerville animate-fade-up1"
                    style={{
                        fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                        fontWeight: 700,
                        lineHeight: 0.95,
                        letterSpacing: '-0.03em',
                        color: 'var(--ink)',
                    }}
                >
                    Om
                </div>

                {/* last name — italic blue */}
                <div
                    className="font-baskerville animate-fade-up1"
                    style={{
                        fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 0.95,
                        letterSpacing: '-0.03em',
                        color: 'var(--blue-accent)',
                        marginBottom: '2rem',
                    }}
                >
                    Chauhan
                </div>

                {/* thin rule */}
                <div style={{
                    width: 56, height: '1.5px',
                    background: 'var(--blue-accent)',
                    opacity: 0.35,
                    animation: 'introFadeIn 0.8s ease 0.6s both',
                }} />
            </div>

            {/* ════════════════════════════════════════
                RIGHT — Infinite scrolling titles
            ════════════════════════════════════════ */}
            <div style={{
                flex: '0 0 50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                position: 'relative',
                /* fade top & bottom edges */
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}>
                <div
                    style={{
                        /* slide upward: moves by exactly 50% (one set) so it loops invisibly */
                        animation: 'scrollTitles 8s linear infinite',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: 'clamp(24px, 4vw, 56px)',
                    }}
                >
                    {LOOPED.map((title, i) => (
                        <div
                            key={i}
                            className="font-baskerville"
                            style={{
                                fontSize: 'clamp(1.6rem, 3.8vw, 3rem)',
                                fontWeight: 700,
                                lineHeight: 1.55,
                                letterSpacing: '-0.02em',
                                whiteSpace: 'nowrap',
                                /* alternate: odd items in blue, even in ink */
                                color: i % 2 === 0 ? 'var(--ink)' : 'var(--blue-accent)',
                                fontStyle: i % 2 === 1 ? 'italic' : 'normal',
                            }}
                        >
                            {title}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── scroll hint ── */}
            <div
                className="font-courier"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-faint)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    animation: phase === 'idle' ? 'hintPulse 2s ease-in-out infinite' : 'introFadeIn 1s ease 0.8s both',
                }}
            >
                scroll to enter
                <svg width="1" height="28" viewBox="0 0 1 28">
                    <line
                        x1="0.5" y1="0" x2="0.5" y2="28"
                        stroke="var(--ink-faint)" strokeWidth="0.8"
                        strokeDasharray="28" strokeDashoffset="0"
                        style={{ animation: 'tickDrop 1.6s ease-in-out 1s infinite' }}
                    />
                </svg>
            </div>
        </div>
    )
}
