import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'web-tracing',
  description: '行为埋点 & 性能采集 & 异常采集 & 请求采集 & 路由采集',
  lastUpdated: true,
  base: '/web-tracing-docs/',
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.svg',
    // 开启本地搜索
    search: {
      provider: 'local'
    },
    // 修改侧边栏导航的标题
    outline: {
      label: '页面导航',
      level: [1, 4]
    },
    // 修改文档页脚的文字
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/starting' },
      { text: '关于项目', link: '/guide/spotlight' },
      { text: '配置项', link: '/guide/use/options' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '起步', link: '/guide/starting' },
          { text: '最佳实践', link: '/guide/practice' },
          { text: '关于项目', link: '/guide/spotlight' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: '基础说明', link: '/guide/use/declare' },
          { text: '配置项', link: '/guide/use/options' },
          { text: '数据结构', link: '/guide/use/structure' }
        ]
      },
      {
        text: '功能',
        items: [
          { text: '事件采集', link: '/guide/functions/event' },
          { text: '错误采集', link: '/guide/functions/error' },
          { text: '路由采集', link: '/guide/functions/pv' },
          { text: '请求采集', link: '/guide/functions/http' },
          { text: '资源采集', link: '/guide/functions/performance' },
          { text: '曝光采集', link: '/guide/functions/intersection' },
          { text: '导出项', link: '/guide/functions/exports' }
          // { text: '其他', link: '/guide/functions/other' },
        ]
      }
    ]
  }
})
