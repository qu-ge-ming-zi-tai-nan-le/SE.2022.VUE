import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Login = resolve => require(['@/views/Login.vue'], resolve)
const AHome = resolve => require(['@/views/assistant/AHome.vue'], resolve)
const AExperiment = resolve => require(['@/views/assistant/AExperiment.vue'], resolve)
const ACourse = resolve => require(['@/views/assistant/ACourse.vue'], resolve)
const AModification = resolve => require(['@/views/assistant/AModification.vue'], resolve)
const SHome = resolve => require(['@/views/student/SHome.vue'], resolve)
const SExperiment = resolve => require(['@/views/student/SExperiment.vue'], resolve)
const SCourse = resolve => require(['@/views/student/SCourse.vue'], resolve)
const SDocument = resolve => require(['@/views/student/SDocument.vue'], resolve)
const SGrades = resolve => require(['@/views/student/SGrades.vue'], resolve)
const SModification = resolve => require(['@/views/student/SModification.vue'], resolve)
const THome = resolve => require(['@/views/teacher/THome.vue'], resolve)
const TExperiment = resolve => require(['@/views/teacher/TExperiment.vue'], resolve)
const TCourse = resolve => require(['@/views/teacher/TCourse.vue'], resolve)
const TDocument = resolve => require(['@/views/teacher/TDocument.vue'], resolve)
const TGrades = resolve => require(['@/views/teacher/TGrades.vue'], resolve)
const Publish = resolve => require(['@/views/teacher/Publish.vue'], resolve)
const TModification = resolve => require(['@/views/teacher/TModification.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/shome',
      name: '学生首页',
      component: SHome
    },
    {
      path: '/sexperiment',
      name: '学生实验报告页',
      component: SExperiment
    },
    {
      path: '/scourse',
      name: '学生参与课程页',
      component: SCourse
    },
    {
      path: '/sdocument',
      name: '学生项目文档页',
      component: SDocument
    },
    {
      path: '/sgrades',
      name: '学生成绩页',
      component: SGrades
    },
    {
      path: '/smodification',
      name: '/学生信息修改页',
      component: SModification
    },
    {
      path: '/thome',
      name: '教师首页',
      component: THome
    },
    {
      path: '/texperiment',
      name: '教师实验报告页',
      component: TExperiment
    },
    {
      path: '/tcourse',
      name: '教师参与课程页',
      component: TCourse
    },
    {
      path: '/tdocument',
      name: '教师项目文档页',
      component: TDocument
    },
    {
      path: '/tgrades',
      name: '教师成绩页',
      component: TGrades
    },
    {
      path: '/publish',
      name: '发布实验项目页',
      component: Publish
    },
    {
      path: '/tmodification',
      name: '教师信息修改页',
      component: TModification
    },
    {
      path: '/ahome',
      name: '助教首页',
      component: AHome
    },
    {
      path: '/aexperiment',
      name: '助教实验报告页',
      component: AExperiment
    },
    {
      path: '/acourse',
      name: '助教参与课程页',
      component: ACourse
    },
    {
      path: '/amodification',
      name: '助教信息修改页',
      component: AModification
    }
  ]
})
