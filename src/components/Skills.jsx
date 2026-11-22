const groups = [
  ['Application development', 'React · Next.js · TypeScript · JavaScript'],
  ['AI & integrations', 'Amazon Bedrock · RAG interfaces · n8n · REST APIs · Streaming responses'],
  ['Quality & data', 'Playwright · Python test automation · API contracts · PostgreSQL · SQL · Java / Quarkus'],
]
export default function Skills() {
  return <section className="content-section" aria-labelledby="skills-title"><h2 id="skills-title">Technical focus</h2><dl className="skill-grid">{groups.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>
}
