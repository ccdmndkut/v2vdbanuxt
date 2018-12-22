// export default context => {
//   const { store } = context

//   return new Promise((resolve, reject) => {
//     this.$fireAuth.onIdTokenChanged(user => {
//       if (user) {
//         let t = this.$fireAuth.currentUser.getIdTokenResult()
//         return resolve(store.commit('setToke', t))
//       }
//       return resolve()
//     })
//   })
// }
