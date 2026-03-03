export default function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '28px 64px 24px',
                borderBottom: '1.5px solid rgba(70,100,160,0.18)',
            }}
        >
            {/* Logo */}
            <div
                className="font-baskerville"
                style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.03em', color: 'var(--ink)' }}
            >
                Om<em style={{ fontStyle: 'italic', color: 'var(--blue-accent)' }}>Chauhan</em>
            </div>

            {/* Nav links */}
            <ul style={{ listStyle: 'none', display: 'flex', gap: '36px' }}>
                {['Work', 'About', 'Process', 'Contact'].map((label) => (
                    <li key={label}>
                        <a
                            href="#"
                            className="font-garamond"
                            style={{
                                fontSize: '1.05rem',
                                fontStyle: 'italic',
                                color: 'var(--ink-light)',
                                textDecoration: 'none',
                                borderBottom: '1px solid transparent',
                                transition: 'color 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.color = 'var(--blue-accent)'
                                el.style.borderBottomColor = 'var(--blue-accent)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.color = 'var(--ink-light)'
                                el.style.borderBottomColor = 'transparent'
                            }}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                className="font-baskerville"
                style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    color: 'var(--paper)',
                    background: 'var(--ink)',
                    border: 'none',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--blue-accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--ink)' }}
            >
                Hire Me
            </button>
        </nav>
    )
}
