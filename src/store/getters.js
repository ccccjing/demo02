const getters = {
  permission_routes: state => state.permission.routes, // 路由
  sidebar: state => state.app.sidebar, // 左侧菜单栏
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar
}

export default getters
