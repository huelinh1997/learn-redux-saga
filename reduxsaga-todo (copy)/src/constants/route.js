import AdminHomePage from '../components/adminHomePage/AdminHomePage'
import TaskBoard from '../container/taskboard/TaskBoard'

export const ADMIN_ROUTER = [
  {
    path: '/',
    name: 'Admin page',
    exact: true,
    component: AdminHomePage
  },
  {
    path: '/task-board',
    name: 'Workflow management',
    exact: true,
    component: TaskBoard
  }
]

