module.exports = [
  { id: 10001, code: 10001, pId: 0, name: '系统管理', type: 1, show: 1, title: '系统管理', url: '/system', component: '@/views/layout/Layout.vue', redirect: '/system/user', icon: '', order: 1, description: '系统管理', remark: '', operator: 999 },
  { id: 10001101, code: 10001101, pId: 10001, name: '用户管理', type: 1, show: 1, title: '用户管理', url: 'user', component: '@/views/role/Role.vue', redirect: '', icon: '', order: 1, description: '用户管理', remark: '', operator: 999 },
  { id: 10001102, code: 10001102, pId: 10001, name: '角色管理', type: 1, show: 1, title: '角色管理', url: 'role', component: '@/views/user/User.vue', redirect: '', icon: '', order: 2, description: '角色管理', remark: '', operator: 999 },
  { id: 10001103, code: 10001103, pId: 10001, name: '菜单管理', type: 1, show: 1, title: '菜单管理', url: 'menu', component: '@/views/system/Menu.vue', redirect: '', icon: '', order: 3, description: '菜单管理', remark: '', operator: 999 },
  { id: 10001104, code: 10001104, pId: 10001, name: '字典管理', type: 1, show: 1, title: '字典管理', url: 'dict', component: '@/views/system/Dict.vue', redirect: '', icon: '', order: 4, description: '字典管理', remark: '', operator: 999 },
  { id: 10002, code: 10002, pId: 0, name: '组件展示', type: 1, show: 1, title: '组件展示', url: '/components', component: '@/views/layout', redirect: '/components/icon', icon: '', order: 1, description: '组件展示', remark: '', operator: 999 },
  { id: 10002101, code: 10002101, pId: 10002, name: 'Icon组件', type: 1, show: 1, title: 'Icon组件', url: 'icon', component: '', redirect: '', icon: '', order: 1, description: 'Icon组件', remark: '', operator: 999 },
  { id: 10002102, code: 10002102, pId: 10002, name: '普通表格组件', type: 1, show: 1, title: '普通表格组件', url: 'table', component: '', redirect: '', icon: '', order: 2, description: '普通表格组件', remark: '', operator: 999 },
  { id: 10003, code: 10003, pId: 0, name: '图表', type: 1, show: 1, title: '图表', url: '/charts', component: '@/views/layout', redirect: '/charts/line', icon: '', order: 1, description: '图表', remark: '', operator: 999 },
  { id: 10003101, code: 10003101, pId: 10003, name: '折线图', type: 1, show: 1, title: '折线图', url: 'line', component: '@/views/charts/Line.vue', redirect: '', icon: '', order: 1, description: '折线图', remark: '', operator: 999 },
]
