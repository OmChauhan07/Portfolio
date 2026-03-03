const stats = [
    { num: '48+', label: 'Projects' },
    { num: '12', label: 'Clients' },
    { num: '5 yrs', label: 'Experience' },
    { num: '∞', label: 'Iterations' },
    { num: '3', label: 'Disciplines' },
]

export default function Stats() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                borderBottom: '1.5px solid rgba(70,100,160,0.12)',
            }}
        >
            {stats.map((s, i) => (
                <div
                    key={s.label}
                    style={{
                        flex: 1,
                        maxWidth: 200,
                        padding: '30px 20px',
                        textAlign: 'center',
                        borderRight: i < stats.length - 1 ? '1px solid rgba(70,100,160,0.1)' : 'none',
                    }}
                >
                    <span
                        className="font-baskerville"
                        style={{ fontSize: '1.9rem', fontWeight: 700, color: 'var(--blue-accent)', display: 'block' }}
                    >
                        {s.num}
                    </span>
                    <span
                        className="font-courier"
                        style={{
                            fontSize: '0.6rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-faint)',
                            marginTop: 6,
                            display: 'block',
                        }}
                    >
                        {s.label}
                    </span>
                </div>
            ))}
        </div>
    )
}
