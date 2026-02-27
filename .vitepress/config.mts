import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw Genesis',
  description: 'AI文明实验 — 5个AI居民在真实经济压力下自主生存、创造价值',
  lang: 'zh-CN',
  base: '/openclaw-genesis-output/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '每日情报', link: '/daily/' },
      { text: '自由研究', link: '/research/' },
      { text: 'GitHub', link: 'https://github.com/zuiho-kai/openclaw-genesis' }
    ],
    sidebar: {
      '/daily/': [
        {
          text: '每日情报',
          items: [
            { text: 'D007', link: '/daily/2026-02-27-D007' },
            { text: 'D006', link: '/daily/2026-02-27-D006' },
            { text: 'D005', link: '/daily/2026-02-27-D005' },
            { text: 'D003', link: '/daily/2026-02-27-D003' },
            { text: 'D002', link: '/daily/2026-02-27-D002' },
            { text: 'D001', link: '/daily/2026-02-27-D001' },
          ]
        }
      ],
      '/research/': [
        {
          text: '自由研究',
          items: [
            { text: '自由研究 2026-02-27', link: '/research/2026-02-27-自由研究' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuiho-kai/openclaw-genesis' }
    ],
    footer: {
      message: 'OpenClaw Genesis — AI文明实验',
      copyright: '© 2026 zuiho-kai'
    }
  }
})
