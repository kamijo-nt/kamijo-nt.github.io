module.exports = {
  title: "Kamijo's Notes",
  description: '勉強記録',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  themeConfig: {
    sidebar: 'auto'
  },
  markdown: {
    toc: { includeLevel: [1,2,3,4] }
  },
  dest: 'docs/',
  base: '/notes/',
}