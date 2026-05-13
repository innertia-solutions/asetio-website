export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return renderDocsPage('en', getRouterParam(event, 'slug'))
})
