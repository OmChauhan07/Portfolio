const SKILLS = [
    'Python',
    'Data Engineering',
    'Data Analytics',
    'Data Science',
    'ML Engineering',
]

const STACK_LINES = [
    { token: 'import', text: ' om_chauhan as oc' },
    { token: '', text: '' },
    { token: 'oc', text: '.speciality   →  Data & ML' },
    { token: 'oc', text: '.languages    →  Python, SQL' },
    { token: 'oc', text: '.frameworks   →  Pandas, Sklearn' },
    { token: 'oc', text: '.focus        →  End-to-end MLOps' },
    { token: '', text: '' },
    { token: '#', text: '  Currently: open to opportunities' },
]

export default function Hero() {
    return (
        <section
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(48px,8vw,96px) clamp(24px,6vw,80px)',
                gap: 'clamp(32px,5vw,80px)',
                flexWrap: 'wrap',
            }}
        >
            {/* ── LEFT: headline + tags + CTAs ── */}
            <div
                style={{
                    flex: '1 1 340px',
                    maxWidth: 560,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                }}
            >
                {/* availability badge */}
                <span
                    className="font-courier animate-fade-in"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.62rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-faint)',
                        marginBottom: '2rem',
                    }}
                >
                    {/* green dot */}
                    <span
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#4a9a6a',
                            boxShadow: '0 0 0 3px rgba(74,154,106,0.18)',
                            display: 'inline-block',
                        }}
                    />
                    Available for opportunities — 2026
                </span>

                {/* headline */}
                <h1
                    className="font-baskerville animate-fade-up1"
                    style={{
                        fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                        fontWeight: 700,
                        lineHeight: 1.06,
                        letterSpacing: '-0.025em',
                        color: 'var(--ink)',
                        marginBottom: '1.6rem',
                    }}
                >
                    Turning Data<br />
                    into{' '}
                    <em style={{ fontStyle: 'italic', color: 'var(--blue-accent)' }}>
                        Intelligence.
                    </em>
                </h1>

                {/* sub-descriptor */}
                <p
                    className="font-garamond animate-fade-up2"
                    style={{
                        fontSize: '1.15rem',
                        lineHeight: 1.85,
                        color: 'var(--ink-light)',
                        fontStyle: 'italic',
                        maxWidth: 440,
                        marginBottom: '2rem',
                    }}
                >
                    I engineer data pipelines, build predictive models, and extract
                    meaning from noise — one well-placed grid square at a time.
                </p>

                {/* skill chips */}
                <div
                    className="animate-fade-up2"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '2.4rem',
                    }}
                >
                    {SKILLS.map((s) => (
                        <span
                            key={s}
                            className="font-courier"
                            style={{
                                fontSize: '0.6rem',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--blue-accent)',
                                border: '1px solid rgba(59,90,154,0.28)',
                                padding: '5px 12px',
                                background: 'rgba(59,90,154,0.04)',
                            }}
                        >
                            {s}
                        </span>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="animate-fade-up3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
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
            </div>

            {/* ── RIGHT: terminal card ── */}
            <div
                className="animate-fade-up2"
                style={{
                    flex: '0 1 320px',
                    border: '1px solid rgba(70,100,160,0.18)',
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(2px)',
                    boxShadow: '6px 6px 0 rgba(70,100,160,0.08)',
                    overflow: 'hidden',
                }}
            >
                {/* terminal top bar */}
                <div
                    style={{
                        background: 'rgba(70,100,160,0.07)',
                        borderBottom: '1px solid rgba(70,100,160,0.14)',
                        padding: '8px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    {/* traffic lights */}
                    {['#e06c75', '#e5c07b', '#98c379'].map(c => (
                        <span
                            key={c}
                            style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.7 }}
                        />
                    ))}
                    <span
                        className="font-courier"
                        style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.12em',
                            color: 'var(--ink-faint)',
                            marginLeft: 6,
                            textTransform: 'uppercase',
                        }}
                    >
                        om_chauhan.py
                    </span>
                </div>

                {/* code body */}
                <div style={{ padding: '18px 20px 20px' }}>
                    {STACK_LINES.map((line, i) => (
                        <div
                            key={i}
                            className="font-courier"
                            style={{
                                fontSize: '0.72rem',
                                lineHeight: 2,
                                letterSpacing: '0.04em',
                                whiteSpace: 'pre',
                                color: line.token === '#'
                                    ? '#7a9a7a'
                                    : line.token === 'import'
                                        ? 'var(--blue-accent)'
                                        : line.token === 'oc'
                                            ? 'var(--ink)'
                                            : 'var(--ink-faint)',
                            }}
                        >
                            {line.token
                                ? <><span style={{
                                    color: line.token === 'import' ? 'var(--blue-accent)'
                                        : line.token === '#' ? '#7a9a7a'
                                            : '#a83232',
                                    fontWeight: line.token === 'import' ? 700 : 400,
                                }}>{line.token}</span>
                                    <span style={{ color: 'var(--ink-light)' }}>{line.text}</span></>
                                : '\u00a0'
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
