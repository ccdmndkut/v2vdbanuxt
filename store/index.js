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
      tokeO: null
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
      setLoading(state, payload) {
        state.loading = payload
      }
    },

    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.user) {
          commit('setUser', req.user)
        }
      },

      async signInWithEmail({ commit }, cred) {
        commit('setLoading', true)
        let authData = await this.$fireAuth.signInWithEmailAndPassword(
          cred.email,
          cred.pass
        )
        commit('setUser', buildUserObject(authData))
        commit('setToke', authData)
        commit('setLoading', false)
      },

      async signOut({ commit }) {
        await this.$fireAuth.signOut()
        commit('setUser', null)
      }
    }
  })
}

export default createStore
