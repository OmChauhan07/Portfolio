const cards = [
    {
        num: '01 — UI/UX',
        title: 'Interface Design',
        text: 'Every pixel is a decision. I design interfaces that feel inevitable — as if no other arrangement of elements was ever possible.',
    },
    {
        num: '02 — Brand',
        title: 'Identity & Visual Systems',
        text: 'A brand is a living system, not a logo. I build the rules, the language, and the logic that holds a visual identity together.',
    },
    {
        num: '03 — Dev',
        title: 'Frontend Development',
        text: 'I write the code that brings the design to life — clean, considered, and precise, down to the last grid line and typeface choice.',
    },
    {
        num: '04 — Motion',
        title: 'Animation & Interaction',
        text: 'Motion is not decoration — it is communication. Every transition I design carries intention, timing, and a reason to exist.',
    },
]

export default function Cards() {
    return (
        <section
            style={{
                padding: '72px 64px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 28,
            }}
        >
            {cards.map((card) => (
                <div
                    key={card.num}
                    style={{
                        padding: '34px 28px',
                        border: '1px solid rgba(70,100,160,0.16)',
                        background: 'rgba(255,255,255,0.5)',
                        position: 'relative',
                        transition: 'box-shadow 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={e => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.boxShadow = '4px 4px 0 rgba(70,100,160,0.12)'
                        el.style.borderColor = 'rgba(70,100,160,0.32)'
                    }}
                    onMouseLeave={e => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.boxShadow = 'none'
                        el.style.borderColor = 'rgba(70,100,160,0.16)'
                    }}
                >
                    <span
                        className="font-courier"
                        style={{
                            fontSize: '0.62rem',
                            letterSpacing: '0.18em',
                            color: 'var(--ink-faint)',
                            textTransform: 'uppercase',
                            marginBottom: 14,
                            display: 'block',
                        }}
                    >
                        {card.num}
                    </span>
                    <div
                        className="font-baskerville"
                        style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}
                    >
                        {card.title}
                    </div>
                    <p
                        className="font-garamond"
                        style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-light)' }}
                    >
                        {card.text}
                    </p>
                    <a
                        href="#"
                        className="font-garamond"
                        style={{
                            marginTop: 16,
                            display: 'inline-block',
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            color: 'var(--blue-accent)',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(59,90,154,0.28)',
                            transition: 'border-color 0.2s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--blue-accent)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(59,90,154,0.28)' }}
                    >
                        See projects →
                    </a>
                </div>
            ))}
        </section>
    )
}
