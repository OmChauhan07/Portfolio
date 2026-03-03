import { useEffect, useState } from 'react'

const MINOR = 28

export default function Hero() {
    const [coord, setCoord] = useState('x: 0.00 · y: 0.00')

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const cx = ((e.clientX - window.innerWidth / 2) / MINOR).toFixed(2)
            const cy = (-(e.clientY - window.innerHeight / 2) / MINOR).toFixed(2)
            setCoord(`x: ${cx} · y: ${cy}`)
        }
        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])

    return (
        <section
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '90px 40px 60px',
                gap: '20px',
            }}
        >
            {/* Chapter label */}
            <span
                className="font-courier animate-fade-in"
                style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-faint)',
                }}
            >
                ✦ Available for Freelance — 2026
            </span>

            {/* Main heading */}
            <h1
                className="font-baskerville animate-fade-up1"
                style={{
                    fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                }}
            >
                Designer,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--blue-accent)' }}>Thinker,</em><br />
                Builder.
            </h1>

            {/* Rule */}
            <div
                className="animate-fade-in"
                style={{ width: 72, height: 1.5, background: 'var(--blue-accent)', opacity: 0.4 }}
            />

            {/* Subtitle */}
            <p
                className="font-garamond animate-fade-up2"
                style={{
                    maxWidth: 500,
                    fontSize: '1.2rem',
                    lineHeight: 1.85,
                    color: 'var(--ink-light)',
                    fontStyle: 'italic',
                }}
            >
                I craft considered digital experiences — where careful thought
                meets precise execution, plotted on every grid square.
            </p>

            {/* Action buttons */}
            <div className="animate-fade-up3" style={{ display: 'flex', gap: 16, marginTop: 14 }}>
                <button
                    className="font-baskerville"
                    style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        background: 'var(--ink)',
                        color: 'var(--paper)',
                        border: 'none',
                        padding: '14px 34px',
                        cursor: 'pointer',
                        transition: 'background 0.2s, transform 0.15s',
                    }}
                    onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.background = 'var(--blue-accent)'
                        el.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.background = 'var(--ink)'
                        el.style.transform = 'translateY(0)'
                    }}
                >
                    View My Work
                </button>

                <button
                    className="font-garamond"
                    style={{
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        color: 'var(--ink-light)',
                        background: 'transparent',
                        border: '1.5px solid rgba(70,100,160,0.28)',
                        padding: '12px 28px',
                        cursor: 'pointer',
                        transition: 'color 0.2s, border-color 0.2s, transform 0.15s',
                    }}
                    onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.color = 'var(--blue-accent)'
                        el.style.borderColor = 'var(--blue-accent)'
                        el.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.color = 'var(--ink-light)'
                        el.style.borderColor = 'rgba(70,100,160,0.28)'
                        el.style.transform = 'translateY(0)'
                    }}
                >
                    Get in Touch →
                </button>
            </div>

            {/* Coordinate label */}
            <span
                className="font-courier animate-fade-in4"
                style={{ fontSize: '0.66rem', color: 'var(--ink-faint)', marginTop: 24, letterSpacing: '0.1em' }}
            >
                {coord}
            </span>
        </section>
    )
}
