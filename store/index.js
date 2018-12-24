import { getUserFromCookie, getUserFromSession } from '@/helpers'

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    console.log('store = nuxt server init')
    const user = getUserFromCookie(req)
    if (user) {
      await dispatch('modules/user/setUSER', {
        // name: user.name,
        email: user.email,
        // avatar: user.picture,
        uid: user.user_id
      })
    }
  }
}
