import jwtDecode from 'jwt-decode'
var cookieparser = require('cookieparser')

export function getUserFromCookie(req) {
  if (!req.headers.cookie) {
    console.log('helpers = "no headers cookie"')
    return
  }

  if (req.headers.cookie) {
    // console.log('helpers = "has headers cookie"')

    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return

    const decodedToken = jwtDecode(accessTokenCookie)
    if (!decodedToken) return

    return decodedToken
  }
}

export function getUserFromSession(req) {
  console.log('[CHECK-AUTH] - checking if user is stored in session')
  return req.session ? req.session.userId : null
}
