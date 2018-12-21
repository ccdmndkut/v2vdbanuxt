export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit('setUser', user))
      }
      return resolve()
    })
  })
}
