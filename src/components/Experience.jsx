const roles = [
  { title: 'Frontend Developer', company: 'Action Fintech', dates: 'December 2021 – Present', description: 'Develop financial-product interfaces, integrate identity verification and backend APIs, connect AI-enabled workflows and develop automated regression tests.' },
  { title: 'Freelance Developer', company: 'Independent', dates: 'July 2020 – December 2021', description: 'Developed custom web features from client requirements and collaborated on integrations with backend services.' },
  { title: 'Information Technology Specialist', company: 'UFIS', dates: 'May 2017 – November 2019', description: 'Provided IT support in a public-health financing environment.' },
]
export default function Experience() {
  return <section className="content-section" aria-labelledby="career-title"><h2 id="career-title">Professional experience</h2><ol className="timeline">{roles.map(role => <li key={role.company}><p className="eyebrow">{role.dates}</p><h3>{role.title} <span className="muted">· {role.company}</span></h3><p>{role.description}</p></li>)}</ol></section>
}
