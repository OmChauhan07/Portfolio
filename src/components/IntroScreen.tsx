import { useEffect, useRef, useState } from 'react'

const TITLES = [
    'Python Developer',
    'Data Engineer',
    'Data Analyst',
    'Data Scientist',
    'ML Engineer',
]

const TYPE_SPEED = 60   // ms per character typed
const ERASE_SPEED = 35   // ms per character erased
const PAUSE_AFTER = 1400 // ms pause when fully typed

interface Props {
    onDone: () => void
}

export default function IntroScreen({ onDone }: Props) {
    const [phase, setPhase] = useState<'in' | 'idle' | 'out'>('in')
    const doneRef = useRef(false)

    /* ── typewriter state ── */
    const [display, setDisplay] = useState('')
    const [titleIdx, setTitleIdx] = useState(0)
    const [erasing, setErasing] = useState(false)

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

    /* ── typewriter loop ── */
    useEffect(() => {
        const target = TITLES[titleIdx]
        let timer: ReturnType<typeof setTimeout>

        if (!erasing) {
            if (display.length < target.length) {
                // still typing
                timer = setTimeout(() => setDisplay(target.slice(0, display.length + 1)), TYPE_SPEED)
            } else {
                // fully typed — pause then start erasing
                timer = setTimeout(() => setErasing(true), PAUSE_AFTER)
            }
        } else {
            if (display.length > 0) {
                // still erasing
                timer = setTimeout(() => setDisplay(d => d.slice(0, -1)), ERASE_SPEED)
            } else {
                // fully erased — move to next title
                setErasing(false)
                setTitleIdx(i => (i + 1) % TITLES.length)
            }
        }

        return () => clearTimeout(timer)
    }, [display, erasing, titleIdx])

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
                        margin: '2rem auto 1.8rem',
                        animation: 'introFadeIn 0.8s ease 0.5s both',
                    }}
                />

                {/* ── Typewriter title ── */}
                <div
                    className="font-courier"
                    style={{
                        fontSize: 'clamp(0.75rem, 1.6vw, 1rem)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-light)',
                        minHeight: '1.6em',
                        animation: 'introFadeIn 0.6s ease 0.7s both',
                    }}
                >
                    {display}
                    {/* blinking caret */}
                    <span
                        style={{
                            display: 'inline-block',
                            width: '2px',
                            height: '0.9em',
                            background: 'var(--blue-accent)',
                            marginLeft: '2px',
                            verticalAlign: 'middle',
                            animation: 'hintPulse 0.9s step-start infinite',
                        }}
                    />
                </div>
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
