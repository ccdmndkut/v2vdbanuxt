import firebase from 'firebase'

export default function({ app }) {
  if (process.client) {
    return app.$fireAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  }
}

// export default context => {
//   const { store } = context

//   return new Promise((resolve, reject) => {
//     this.$fireAuth.onAuthStateChanged(user => {
//       if (user) {
//         return resolve(store.commit('setUser', user))
//       }
//       return resolve()
//     })
//   })
// }
// export default  {
//   async ({app}) {
//     let t = await this.$fireAuth.currentUser.getIdTokenResult()
//     console.log(t)
//   }
// export default {
//   async lock({ app }) {
//     let t = await this.$fireAuth.currentUser.getIdTokenResult()
//     return console.log(t)
//   }
// }
// const f = app.$fireAuth
// const b = f.currentUser
// console.log(f)
// console.log(b)
// async function foo({ app }) {
//   const u = await app.$fireAuth.currentUser
//   if (u != null) {
//     return app.$fireAuth.currentUser
//       .getIdTokenResult()
//       .then(response => {
//         console.log(response)
//       })
//       .catch(e => {
//         console.log(e)
//       })
//   } else {
//     console.log('user')
//   }
// }
// export default foo
