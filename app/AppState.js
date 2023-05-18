import { Gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = []
  socketData = []


  gifts = [
    new Gift({
      tag: 'Thud',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FiCKsWvWEtsyze%2Fgiphy.gif&f=1&nofb=1&ipt=f6068bc81ac7c6c353a0f7b1e28338da1e8f5ff813d460d8c309b30757649498&ipo=images',
    }),
    new Gift({
      tag: 'Thud',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FiCKsWvWEtsyze%2Fgiphy.gif&f=1&nofb=1&ipt=f6068bc81ac7c6c353a0f7b1e28338da1e8f5ff813d460d8c309b30757649498&ipo=images',
    }),


  ]



  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})