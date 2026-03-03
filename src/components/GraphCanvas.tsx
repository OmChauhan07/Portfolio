import { useEffect, useRef } from 'react'

const MINOR = 28
const MAJOR = MINOR * 5

export default function GraphCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ripplesRef = useRef<{ x: number; y: number; r: number; alpha: number }[]>([])
    const runningRef = useRef(false)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        let W = 0, H = 0

        function resize() {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
            draw()
        }

        function draw() {
            ctx.clearRect(0, 0, W, H)

            // minor + major grid lines
            for (let x = (W / 2) % MINOR; x < W; x += MINOR) {
                const isMaj = Math.round((x - (W / 2) % MINOR) / MINOR) % 5 === 0
                ctx.strokeStyle = isMaj ? 'rgba(100,130,190,0.28)' : 'rgba(160,185,215,0.2)'
                ctx.lineWidth = isMaj ? 0.9 : 0.5
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
            }
            for (let y = (H / 2) % MINOR; y < H; y += MINOR) {
                const isMaj = Math.round((y - (H / 2) % MINOR) / MINOR) % 5 === 0
                ctx.strokeStyle = isMaj ? 'rgba(100,130,190,0.28)' : 'rgba(160,185,215,0.2)'
                ctx.lineWidth = isMaj ? 0.9 : 0.5
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
            }

            // red margin line
            ctx.strokeStyle = 'rgba(200,70,70,0.16)'
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(78, 0); ctx.lineTo(78, H); ctx.stroke()

            // tick labels
            ctx.font = '8.5px "Courier Prime", monospace'
            ctx.fillStyle = 'rgba(90,120,175,0.38)'
            ctx.textAlign = 'center'
            let t = 1
            for (let x = W / 2 + MAJOR; x < W - 20; x += MAJOR, t++) {
                ctx.fillText(String(t), x, H / 2 + 14)
                ctx.fillText(String(-t), W - x, H / 2 + 14)
            }
            t = 1
            ctx.textAlign = 'right'
            for (let y = H / 2 + MAJOR; y < H - 20; y += MAJOR, t++) {
                ctx.fillText(String(-t), W / 2 - 8, y + 3)
                ctx.fillText(String(t), W / 2 - 8, H - y + 3)
            }
        }

        function loop() {
            if (runningRef.current) return
            runningRef.current = true
            const frame = () => {
                draw()
                const ripples = ripplesRef.current
                for (let i = ripples.length - 1; i >= 0; i--) {
                    const rp = ripples[i]
                    rp.r += 2
                    rp.alpha -= 0.013
                    if (rp.alpha <= 0) { ripples.splice(i, 1); continue }
                    ctx.beginPath()
                    ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
                    ctx.strokeStyle = `rgba(59,90,154,${rp.alpha * 0.5})`
                    ctx.lineWidth = 1
                    ctx.stroke()
                    if (rp.r > 22) {
                        ctx.beginPath()
                        ctx.arc(rp.x, rp.y, rp.r - 18, 0, Math.PI * 2)
                        ctx.strokeStyle = `rgba(168,50,50,${rp.alpha * 0.18})`
                        ctx.lineWidth = 0.7
                        ctx.stroke()
                    }
                }
                if (ripples.length > 0) requestAnimationFrame(frame)
                else runningRef.current = false
            }
            frame()
        }

        function handleClick(e: MouseEvent) {
            ripplesRef.current.push({ x: e.clientX, y: e.clientY, r: 0, alpha: 0.55 })
            loop()
        }

        window.addEventListener('resize', resize)
        window.addEventListener('click', handleClick)
        resize()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
        />
    )
}
