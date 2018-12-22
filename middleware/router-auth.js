// export default function({ store, redirect, route }) {
//   store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
//   store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
// }

// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path == '/admin')) {
//     return true
//   }
// }
export default function({ store, redirect, route }) {
  console.log('a')
  // user(app, store, redirect, route)
  redirctFunc(store, redirect, route)
}
function redirctFunc(store, redirect, route) {
  console.log('c')

  store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
  store.state.user == null && route.name != 'login' ? redirect('/login') : ''

  // store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
}
// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path == '/admin')) {
//     console.log('route was to admin')
//     return true
//   } else {
//     console.log('route was not to admin')
//   }
// }

// async function user(app, store, redirect, route) {
//   let token = app.$cookies.get('token')
//   let user = app.$cookies.get('user')
//   let all = app.$cookies.get('all')
//   if (token == null) {
//     console.log('no token')
//     app.$cookies.set('user', store.state.user, {
//       path: '/',
//       maxAge: 60 * 60
//     })
//     app.$cookies.set('token', store.state.tokeO, {
//       path: '/',
//       maxAge: 60 * 60
//     })
//     app.$cookies.set('all', store.state.all, {
//       path: '/',
//       maxAge: 60 * 60
//     })
//   } else {
//     console.log('we have a token')
//     store.state.tokeO = token
//     store.state.all = all

//     store.dispatch('setUserCookie', user)
//     // store.state.user = user
//   }
//   app.$cookies.set('user', store.state.user, {
//     path: '/',
//     maxAge: 60
//   })
//   app.$cookies.set('token', store.state.tokeO, {
//     path: '/',
//     maxAge: 60
//   })
//   console.log('b')
//   const u = await app.$fireAuth.Persistence
//   console.log(u)
//   redirctFunc(store, redirect, route)
// }

// export default foo
