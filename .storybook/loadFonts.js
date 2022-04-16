const fonts = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
  },
];

function isLinkExist(option) {
  return !!document.querySelector(`link[href='${option.href}']`);
}

function insertLink(options) {
  const link = document.createElement('link');
  Object.assign(link, options);

  document.head.insertBefore(link, document.head.firstElementChild);
}

export default function loadFonts() {
  fonts.forEach(link => (isLinkExist(link) ? null : insertLink(link)));
}
