export default function QuoteBand() {
    return (
        <div
            style={{
                borderTop: '1.5px solid rgba(70,100,160,0.14)',
                borderBottom: '1.5px solid rgba(70,100,160,0.14)',
                padding: '36px 64px',
                textAlign: 'center',
                background: 'rgba(70,100,160,0.025)',
            }}
        >
            <blockquote
                className="font-garamond"
                style={{
                    fontSize: '1.3rem',
                    fontStyle: 'italic',
                    color: 'var(--ink-light)',
                    maxWidth: 660,
                    margin: '0 auto',
                    lineHeight: 1.85,
                }}
            >
                "Good design is not decoration — it is the clearest possible
                expression of an idea, drawn with the steadiest possible hand."
                <cite
                    className="font-courier"
                    style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontStyle: 'normal',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-faint)',
                        marginTop: 14,
                    }}
                >
                    — Personal Manifesto, <em style={{ fontStyle: 'italic' }}>Studio Notes</em>, 2024
                </cite>
            </blockquote>
        </div>
    )
}
