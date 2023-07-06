
/// <reference types="vite/client" />
import { loadEnv } from 'vitepress'
import { defineConfig } from 'vitepress'
import createVitePlugins from '../vite/plugins'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import navbar from './utils/navbar'
import generateSideBar from './utils/sidebar'

const sidebar = generateSideBar({
  path: 'src'
})

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'iconify-icon'
]

export default ({ mode, command }: { mode: string; command: string }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    title: 'trry',
    base: '/trry-github/',
    description: 'trry-blog',
    lastUpdated: true,

    themeConfig: {
      nav: navbar,
      sidebar,
      logo: '/logo.png',
      outline: 'deep',
      outlineTitle: '目录',
      lastUpdatedText: '上次更新',
      search: {
        provider: 'algolia',
        options: {
          appId: 'EHJNVVOFQ4',
          apiKey: '0470ac4243154040568b40cee359706a',
          indexName: 'trry',
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        }
      },
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/trry-github' },
        { icon: 'twitter', link: 'https://twitter.com/vuejs' },
        { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
      ],

      editLink: {
        pattern: 'https://github.com/trry-github/trry-github/edit/main/:path',
        text: '在GitHub上编辑此页面',
      },

      footer: {
        copyright: `Copyright © 2014-${new Date().getFullYear()} trry`
      }
    },

    markdown: {
      lineNumbers: true,
      // anchor: {
      //   permalink: anchor.permalink.headerLink()
      // },
      // toc: { includeLevel: [1, 2] },
      config: (md) => {
        md.use(markdownItMathjax3);
      },
    },

    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    },

    vite: {
      define: {
        __VUE_OPTIONS_API__: false
      },
      optimizeDeps: {
        // include: ['gsap', 'dynamics.js'],
        exclude: ['@vue/repl']
      },
      // @ts-ignore
      ssr: {
        external: ['@vue/repl']
      },
      // server: {
      //   host: true,
      //   fs: {
      //     // for when developing with locally linked theme
      //     allow: ['../..']
      //   }
      // },
      build: {
        minify: 'terser',
        chunkSizeWarningLimit: Infinity
      },
      json: {
        stringify: true
      },
      plugins: createVitePlugins(env, command === 'build')
    }
  })
}
