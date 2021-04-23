const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
      content: ['./**/*.html'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }), // Libreria que omite todas las clases y/o instrucciones css que no se utilizan
    require('cssnano')({
      preset: 'default',
    }), // Libreria que minifica el archivo css para tener menor peso en un ambiente de produccion
  ],
};
