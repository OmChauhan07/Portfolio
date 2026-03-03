export default function Footer() {
    return (
        <footer
            style={{
                padding: '22px 64px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1.5px solid rgba(70,100,160,0.14)',
            }}
        >
            {['Om Chauhan — Est. 2019', 'Typeset in Garamond & Baskerville', 'Grid: 28px minor · 140px major'].map((txt) => (
                <p
                    key={txt}
                    className="font-courier"
                    style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-faint)',
                    }}
                >
                    {txt}
                </p>
            ))}
        </footer>
    )
}
