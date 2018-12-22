import Vuex from 'vuex'

function buildUserObject(authData) {
  let { email, displayName, uid } = authData.user
  let user = {}
  user['email'] = email
  user['name'] = displayName
  user['uid'] = uid
  return user
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      loading: false,
      tokeO: null,
      all: null
    },

    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
      isLoading: (state, getters) => {
        return state.loading
      }
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      setToke(state, payload) {
        state.tokeO = payload
      },
      setAll(state, payload) {
        state.all = payload
      },
      setLoading(state, payload) {
        state.loading = payload
      }
    },

    actions: {
      nuxtServerInit({ dispatch }, { req }) {
        if (req.user) {
          dispatch('setUser', req.user)
        }
      },
      async actionB({ app, commit }) {
        let all = await this.$fireAuth.currentUser
        let t = this.$fireAuth.currentUser.getIdTokenResult()
        commit('setToke', t.token)
        commit('setAll', all)
      },
      async signInWithEmail({ dispatch, commit }, cred) {
        commit('setLoading', true)
        let authData = await this.$fireAuth.signInWithEmailAndPassword(
          cred.email,
          cred.pass
        )
        dispatch('actionB')
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
      },
      setUserCookie({ commit }, user) {
        commit('setUser', user)
      },
      async signOut({ commit }) {
        await this.$fireAuth.signOut()
        commit('setUser', null)
        commit('setToke', null)
      }
    }
  })
}

export default createStore
