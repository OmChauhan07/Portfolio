import { useEffect, useRef, useState } from 'react'

const MINOR = 28

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isPointer, setIsPointer] = useState(false)
    const [coord, setCoord] = useState({ x: '0.00', y: '0.00' })
    const pos = useRef({ x: -100, y: -100 })
    const raf = useRef(0)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY }
            cancelAnimationFrame(raf.current)
            raf.current = requestAnimationFrame(() => {
                if (cursorRef.current) {
                    cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
                }
                // calculate graph-paper coordinates from centre
                const cx = ((e.clientX - window.innerWidth / 2) / MINOR).toFixed(2)
                const cy = (-(e.clientY - window.innerHeight / 2) / MINOR).toFixed(2)
                setCoord({ x: cx, y: cy })
            })
        }

        const onOver = (e: MouseEvent) => {
            const el = e.target as Element
            setIsPointer(!!el.closest('a, button, [role="button"]'))
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseover', onOver)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
            cancelAnimationFrame(raf.current)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                willChange: 'transform',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
            }}
        >
            {/* ── Graph-arrow SVG ── */}
            <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    display: 'block',
                    flexShrink: 0,
                    transition: 'transform 0.12s ease',
                    transform: isPointer ? 'scale(1.18)' : 'scale(1)',
                }}
            >
                {/* Arrow body */}
                <path
                    d="M2 2 L2 20 L7 14.5 L10.5 23 L13.5 21.8 L10 13 L17 13 Z"
                    fill="#1a1612"
                    stroke="#f7f5ef"
                    strokeWidth="1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                {/* Horizontal axis tick */}
                <line x1="0" y1="2" x2="4.5" y2="2" stroke="#3b5a9a" strokeWidth="0.9" />
                {/* Vertical axis tick */}
                <line x1="2" y1="0" x2="2" y2="4.5" stroke="#3b5a9a" strokeWidth="0.9" />
                {/* Origin dot */}
                <circle cx="2" cy="2" r={isPointer ? 1.6 : 1.1} fill="#3b5a9a" />
            </svg>

            {/* ── Coordinate label beside arrow ── */}
            <span
                style={{
                    fontFamily: "'Courier Prime', 'Courier New', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.06em',
                    color: 'var(--ink-faint)',
                    background: 'rgba(247,245,239,0.82)',
                    padding: '2px 5px',
                    marginTop: '18px',   /* align to bottom half of the arrow */
                    borderRadius: '1px',
                    border: '0.5px solid rgba(70,100,160,0.18)',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.4,
                }}
            >
                ({coord.x}, {coord.y})
            </span>
        </div>
    )
}
