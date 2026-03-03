import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isPointer, setIsPointer] = useState(false)
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
            }}
        >
            <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    display: 'block',
                    transition: 'transform 0.12s ease',
                    transform: isPointer ? 'scale(1.18)' : 'scale(1)',
                }}
            >
                {/* ── Arrow body ── */}
                <path
                    d="M2 2 L2 20 L7 14.5 L10.5 23 L13.5 21.8 L10 13 L17 13 Z"
                    fill="#1a1612"
                    stroke="#f7f5ef"
                    strokeWidth="1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />

                {/* ── Tiny axis ticks at tip — "graph origin" feel ── */}
                {/* horizontal tick */}
                <line x1="0" y1="2" x2="4.5" y2="2" stroke="#3b5a9a" strokeWidth="0.9" />
                {/* vertical tick */}
                <line x1="2" y1="0" x2="2" y2="4.5" stroke="#3b5a9a" strokeWidth="0.9" />

                {/* ── Origin dot at tip ── */}
                <circle
                    cx="2"
                    cy="2"
                    r={isPointer ? 1.6 : 1.1}
                    fill="#3b5a9a"
                    style={{ transition: 'r 0.12s ease' }}
                />
            </svg>
        </div>
    )
}
