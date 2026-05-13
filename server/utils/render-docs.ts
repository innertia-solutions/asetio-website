import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

type DocMeta = {
  title: string
  description: string
  body: string
}

const docsNav = [
  ['intro', 'Introduccion'],
  ['platform', 'Plataforma'],
  ['iot-ingestion', 'Captura de estado'],
  ['workflows', 'Workflows'],
  ['integrations', 'Integraciones'],
]

export function renderDocsPage(locale: 'es' | 'en', slug?: string) {
  const cleanSlug = slug?.replace(/\/$/, '') || 'index'
  const filePath = join(process.cwd(), 'content', locale, 'docs', `${cleanSlug}.md`)

  if (!existsSync(filePath)) {
    throw createError({ statusCode: 404, statusMessage: 'Documentation page not found' })
  }

  const meta = parseMarkdown(readFileSync(filePath, 'utf8'))
  const html = markdownToHtml(meta.body)
  const title = meta.title || (locale === 'es' ? 'Documentacion' : 'Documentation')
  const description = meta.description || ''
  const homePath = locale === 'en' ? '/en' : '/es'
  const docsPath = locale === 'en' ? '/en/docs' : '/es/docs'

  return `<!doctype html>
<html lang="${locale}" class="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Asetio</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">
  <link rel="icon" type="image/png" href="/favicon.png?v=2">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
  <style>
    :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { margin: 0; background: #ffffff; color: #0f172a; }
    a { color: #0284c7; text-decoration: none; }
    a:hover { color: #115e59; }
    .header { position: sticky; top: 0; z-index: 20; border-bottom: 1px solid #e2e8f0; background: rgba(255,255,255,.88); backdrop-filter: blur(12px); }
    .bar { max-width: 1180px; margin: 0 auto; height: 64px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .brand { display: inline-flex; align-items: center; color: #0f172a; }
    .brand-mark { width: 134px; height: 32px; object-fit: contain; object-position: left center; display: block; }
    .nav { display: flex; align-items: center; gap: 16px; font-size: 14px; }
    .shell { max-width: 1180px; margin: 0 auto; padding: 42px 24px 72px; display: grid; grid-template-columns: 240px minmax(0,1fr); gap: 48px; }
    .aside { position: sticky; top: 96px; align-self: start; }
    .aside-title { margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: .04em; }
    .aside a { display: block; padding: 9px 10px; border-radius: 8px; color: #475569; font-size: 14px; }
    .aside a[aria-current="page"] { background: #e0f2fe; color: #075985; font-weight: 700; }
    .doc { max-width: 780px; }
    .eyebrow { margin: 0 0 10px; color: #0284c7; font-size: 14px; font-weight: 700; }
    h1 { margin: 0; font-size: clamp(36px, 5vw, 56px); line-height: 1.02; letter-spacing: 0; }
    .description { margin: 18px 0 40px; color: #64748b; font-size: 18px; line-height: 1.7; }
    .content { font-size: 16px; line-height: 1.75; color: #334155; }
    .content h1 { display: none; }
    .content h2 { margin: 42px 0 14px; color: #0f172a; font-size: 28px; line-height: 1.2; letter-spacing: 0; }
    .content h3 { margin: 30px 0 10px; color: #0f172a; font-size: 21px; }
    .content p { margin: 0 0 18px; }
    .content ul, .content ol { margin: 0 0 24px; padding-left: 24px; }
    .content li { margin: 8px 0; }
    .content strong { color: #0f172a; }
    .content code { border: 1px solid #e2e8f0; border-radius: 6px; background: #f8fafc; padding: 2px 6px; color: #0f172a; }
    @media (max-width: 860px) {
      .bar { padding: 0 16px; }
      .nav { gap: 10px; font-size: 13px; }
      .shell { grid-template-columns: 1fr; gap: 28px; padding: 28px 16px 56px; }
      .aside { position: static; border-bottom: 1px solid #e2e8f0; padding-bottom: 18px; }
      .aside nav { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
      .aside a { white-space: nowrap; }
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="bar">
      <a class="brand" href="${homePath}"><img class="brand-mark" src="/isologo.png" alt="Asetio"></a>
      <nav class="nav">
        <a href="${homePath}#producto">Producto</a>
        <a href="${homePath}#monitoreo">Monitoreo</a>
        <a href="${docsPath}/intro">Docs</a>
        <a href="mailto:hola@asetio.com">Solicitar demo</a>
      </nav>
    </div>
  </header>
  <main class="shell">
    <aside class="aside">
      <p class="aside-title">${locale === 'es' ? 'Documentacion' : 'Documentation'}</p>
      <nav>${docsNav.map(([itemSlug, label]) => `<a href="${docsPath}/${itemSlug}"${itemSlug === cleanSlug ? ' aria-current="page"' : ''}>${escapeHtml(label)}</a>`).join('')}</nav>
    </aside>
    <article class="doc">
      <p class="eyebrow">Asetio Docs</p>
      <h1>${escapeHtml(title)}</h1>
      ${description ? `<p class="description">${escapeHtml(description)}</p>` : ''}
      <div class="content">${html}</div>
    </article>
  </main>
</body>
</html>`
}

function parseMarkdown(source: string): DocMeta {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  const frontmatter = match?.[1] || ''
  const body = match?.[2] || source
  const title = frontmatter.match(/^title:\s*["']?(.+?)["']?$/m)?.[1] || ''
  const description = frontmatter.match(/^description:\s*["']?(.+?)["']?$/m)?.[1] || ''

  return { title, description, body }
}

function markdownToHtml(markdown: string) {
  const lines = markdown.split('\n')
  const html: string[] = []
  let list: 'ul' | 'ol' | null = null

  const closeList = () => {
    if (list) {
      html.push(`</${list}>`)
      list = null
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      closeList()
      continue
    }

    if (line.startsWith('### ')) {
      closeList()
      html.push(`<h3>${inline(line.slice(4))}</h3>`)
      continue
    }

    if (line.startsWith('## ')) {
      closeList()
      html.push(`<h2>${inline(line.slice(3))}</h2>`)
      continue
    }

    if (line.startsWith('# ')) {
      closeList()
      html.push(`<h1>${inline(line.slice(2))}</h1>`)
      continue
    }

    if (line.startsWith('- ')) {
      if (list !== 'ul') {
        closeList()
        list = 'ul'
        html.push('<ul>')
      }
      html.push(`<li>${inline(line.slice(2))}</li>`)
      continue
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/)
    if (ordered) {
      if (list !== 'ol') {
        closeList()
        list = 'ol'
        html.push('<ol>')
      }
      html.push(`<li>${inline(ordered[1])}</li>`)
      continue
    }

    closeList()
    html.push(`<p>${inline(line)}</p>`)
  }

  closeList()
  return html.join('\n')
}

function inline(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
