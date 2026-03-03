const tools = [
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Framer', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
    { name: 'Sass', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Illustrator', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'Photoshop', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Notion', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
]

export default function ToolsStack() {
    return (
        <section
            style={{ padding: '64px 64px 72px', borderTop: '1.5px solid rgba(70,100,160,0.14)' }}
        >
            {/* Section heading */}
            <div
                className="font-courier"
                style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-faint)',
                    marginBottom: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                }}
            >
                Tools &amp; Stack
                <span style={{ flex: 1, height: '1px', background: 'rgba(70,100,160,0.14)' }} />
            </div>

            {/* Grid of chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '82px',
                            height: '82px',
                            border: '1px solid rgba(70,100,160,0.16)',
                            background: 'rgba(255,255,255,0.5)',
                            cursor: 'default',
                            transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.2s',
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLDivElement
                            el.style.borderColor = 'rgba(70,100,160,0.38)'
                            el.style.boxShadow = '3px 3px 0 rgba(70,100,160,0.1)'
                            el.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLDivElement
                            el.style.borderColor = 'rgba(70,100,160,0.16)'
                            el.style.boxShadow = 'none'
                            el.style.transform = 'translateY(0)'
                        }}
                    >
                        <img src={tool.src} alt={tool.name} loading="lazy" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                        <span
                            className="font-courier"
                            style={{
                                fontSize: '0.58rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--ink-faint)',
                                textAlign: 'center',
                                lineHeight: 1.2,
                            }}
                        >
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
