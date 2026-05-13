export default defineEventHandler((event) => {
  return sendRedirect(event, '/es/docs', 302)
})
