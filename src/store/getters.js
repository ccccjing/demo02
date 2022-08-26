const getters = {
  permission_routes: state => state.permission.routes, // 路由
  sidebar: state => state.app.sidebar, // 左侧菜单栏
  token: state => state.user.token,
  roles: state => state.user.roles
}

export default getters
