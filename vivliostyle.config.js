module.exports = {
  language: 'ja',
  theme: 'theme_print.css',
  entry: [
    { rel: 'contents', theme: 'theme_toc.css' },
    'example/ch01.md',
    'example/ch02.md'
  ],
  toc: true,
  tocTitle: "目次",
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
