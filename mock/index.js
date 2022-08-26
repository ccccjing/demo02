const Mock = require('mockjs')
const { param2Obj } = require('./utils')
const user = require('./user')

const mocks = [
  ...user
]

console.log(mocks)

function mockXHR() {
  Mock.XHR.prototype.ptoxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false
      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.ptoxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respones) {
    return function(option) {
      let result = null
      if (respones instanceof Function) {
        const { body, type, url } = option
        result = respones({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respones
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

module.exports = {
  mocks,
  mockXHR
}
