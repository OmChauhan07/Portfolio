import { useEffect, useRef, useState } from 'react'

interface Props {
    onDone: () => void
}

export default function IntroScreen({ onDone }: Props) {
    const [phase, setPhase] = useState<'in' | 'idle' | 'out'>('in')
    const doneRef = useRef(false)

    /* ── trigger exit on any scroll/wheel/touch/key ── */
    const exit = () => {
        if (doneRef.current) return
        doneRef.current = true
        setPhase('out')
    }

    useEffect(() => {
        // lock page scroll during intro
        document.body.style.overflow = 'hidden'

        // short entrance: switch to idle so hint pulses
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

    /* ── when exit animation ends, hand off to parent ── */
    const handleAnimEnd = () => {
        if (phase === 'out') {
            document.body.style.overflow = ''
            onDone()
        }
    }

    /* ── choose CSS animation class ── */
    const overlayAnim: React.CSSProperties =
        phase === 'in'
            ? { animation: 'introFadeIn 0.6s ease forwards' }
            : phase === 'out'
                ? { animation: 'introSlideUp 0.72s cubic-bezier(0.76,0,0.24,1) forwards' }
                : {}

    return (
        <div
            onAnimationEnd={handleAnimEnd}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'var(--paper)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0px',
                ...overlayAnim,
            }}
        >
            {/* graph-paper grid lines on the intro screen too */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            repeating-linear-gradient(rgba(160,185,215,0.18) 0 0.5px, transparent 0.5px 28px),
            repeating-linear-gradient(90deg, rgba(160,185,215,0.18) 0 0.5px, transparent 0.5px 28px)
          `,
                    pointerEvents: 'none',
                }}
            />

            {/* red margin stripe */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 78,
                    width: 1,
                    height: '100%',
                    background: 'rgba(200,70,70,0.14)',
                    pointerEvents: 'none',
                }}
            />

            {/* ── Name block ── */}
            <div
                style={{
                    position: 'relative',
                    textAlign: 'center',
                    lineHeight: 0.92,
                }}
            >
                {/* chapter label above */}
                <div
                    className="font-courier"
                    style={{
                        fontSize: '0.68rem',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-faint)',
                        marginBottom: '2.2rem',
                        animation: 'introFadeUp 0.7s ease 0.2s both',
                    }}
                >
                    ✦ &nbsp; portfolio &nbsp; ✦
                </div>

                {/* First name */}
                <div
                    className="font-baskerville"
                    style={{
                        fontSize: 'clamp(4.5rem, 13vw, 11rem)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        letterSpacing: '-0.03em',
                        animation: 'introFadeUp 0.75s ease 0.1s both',
                    }}
                >
                    Om
                </div>

                {/* Last name — italic blue */}
                <div
                    className="font-baskerville"
                    style={{
                        fontSize: 'clamp(4.5rem, 13vw, 11rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        color: 'var(--blue-accent)',
                        letterSpacing: '-0.03em',
                        animation: 'introFadeUp 0.75s ease 0.22s both',
                    }}
                >
                    Chauhan
                </div>

                {/* thin rule */}
                <div
                    style={{
                        width: 64,
                        height: '1.5px',
                        background: 'var(--blue-accent)',
                        opacity: 0.35,
                        margin: '2rem auto 0',
                        animation: 'introFadeIn 0.8s ease 0.5s both',
                    }}
                />
            </div>

            {/* ── Scroll hint ── */}
            <div
                className="font-courier"
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-faint)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    animation: phase === 'idle' ? 'hintPulse 2s ease-in-out infinite' : 'introFadeIn 1s ease 0.8s both',
                }}
            >
                scroll to enter
                {/* animated tick line */}
                <svg width="1" height="36" viewBox="0 0 1 36">
                    <line
                        x1="0.5" y1="0" x2="0.5" y2="36"
                        stroke="var(--ink-faint)"
                        strokeWidth="0.8"
                        strokeDasharray="36"
                        strokeDashoffset="0"
                        style={{ animation: 'tickDrop 1.6s ease-in-out 1s infinite' }}
                    />
                </svg>
            </div>
        </div>
    )
}
