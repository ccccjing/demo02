const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://avatars.githubusercontent.com/u/475440?s=52&v=4',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://avatars.githubusercontent.com/u/74501447?s=40&v=4',
    name: 'Normal Editor'
  }
}

module.exports = [
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 401,
          message: '用户不存在！'
        }
      } else {
        return {
          code: 200,
          data: token
        }
      }
    }
  },
  {
    url: '/api/user/info',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if (!info) {
        return {
          code: 508,
          message: '个人信息不存在！'
        }
      } else {
        return {
          code: 200,
          data: info
        }
      }
    }
  },
  {
    url: '/api/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
