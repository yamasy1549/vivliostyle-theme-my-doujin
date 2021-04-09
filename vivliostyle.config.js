module.exports = {
  language: 'ja',
  theme: 'theme_print.css',
  entry: [
    {
      // 目次
      rel: 'contents',
      theme: 'theme_toc.css',
    },
    {
      path: 'example/ch01.md',
      theme: 'theme_ch01.css',
    },
    {
      path: 'example/ch02.md',
      theme: 'theme_ch02.css',
    },
  ],
  toc: true,
  tocTitle: '目次',
}
