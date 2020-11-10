const tailwindcss = require('tailwindcss')
module.export = {
 plugins: [
  tailwindcss('./tailwind.js'),
  require('autoprefixer'),
  ],
}