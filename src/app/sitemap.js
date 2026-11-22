export default function sitemap() { return ['', '/about', '/projects'].map(path => ({ url: `https://sebastianmedina.vercel.app${path}` })) }
