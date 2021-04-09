module.exports = {
  language: 'ja',
  theme: 'theme_print.css',
  entry: [
    {
      // 目次
      rel: 'contents',
      theme: 'theme_toc.css',
    },
    'example/ch01.md',
    'example/ch02.md',
  ],
  toc: true,
  tocTitle: '目次',
}
