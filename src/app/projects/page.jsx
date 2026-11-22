import Link from 'next/link'
export const metadata = { title: 'Professional Work', description: 'Selected areas of professional experience: financial applications, applied AI interfaces and automated regression testing.', alternates: { canonical: '/projects' } }
const work = [
  { number: '01', title: 'Financial applications & identity', stack: 'React · Next.js · TypeScript · REST APIs · Sumsub', text: 'Developed interfaces for customer accounts, wallets and investment operations, connecting balances, transaction activity and multi-currency asset data with dashboards and reporting.', detail: 'Integrated identity verification and backend APIs into onboarding and transaction workflows, including verification callbacks and application state.' },
  { number: '02', title: 'AI-enabled application interfaces', stack: 'Amazon Bedrock · RAG · Streaming · n8n', text: 'Implemented interfaces for retrieval-augmented generation with streamed responses, configurable prompts, conversation state and timeout and error notifications.', detail: 'Built interfaces for configuring and running medical training simulations connected to n8n agent workflows, including cases, study requests, conversations and feedback.' },
  { number: '03', title: 'Integration quality & regression testing', stack: 'Playwright · Python test automation · Java / Quarkus · PostgreSQL', text: 'Developed Playwright-based end-to-end tests for financial onboarding and automated regression checks for webhook reprocessing and ledger invariants against PostgreSQL.', detail: 'Covered API contracts, idempotency and tenant isolation to check behavior across service boundaries, with assertions against database state.' },
]
export default function Projects() {
  return <main id="main-content" className="page-shell"><p className="eyebrow">Selected professional experience</p><h1>From interfaces<br />to integrations<span className="accent">.</span></h1><p className="intro page-intro">Areas of work at Action Fintech. A closer look at the systems I have contributed to and the engineering behind them.</p>
    <div className="work-list">{work.map(item => <article key={item.number} className="work-card"><span className="work-number" aria-hidden="true">{item.number}</span><div><h2>{item.title}</h2><p>{item.text}</p><p>{item.detail}</p><p className="stack">{item.stack}</p></div></article>)}</div>
    <div className="actions"><a className="button" href="/Sebastian-Medina-Resume-EN.pdf" download>Download résumé ↗</a><Link className="text-link" href="/about">View background</Link></div>
  </main>
}
