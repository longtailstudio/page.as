export default {
  fetch: req => {
    const url = new URL(req.url)
    if (!url.pathname.endsWith('/')) {
        url.pathname = url.pathname + '/'
        return Response.redirect(url.toString(), 301)
    }
    const [user] = url.hostname.split('.')
    url.hostname = user + '.github.io'
    return fetch(new Request(url.toString(), { redirect: 'follow' }))
  }
}
