export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  return sendRedirect(event, `/es/docs/${slug || ''}`, 302)
})
