import copy from 'rollup-plugin-copy';
import html from 'rollup-plugin-generate-html-template';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import { sass } from 'svelte-preprocess-sass';
import pkg from './package.json';

const name = pkg.name;

export default [
  // Library Bundle
  {
    input: 'src/office-ui-fabric-svelte.js',
    output: [
      { file: pkg.main, 'format': 'es' },
      { file: pkg.umd, 'format': 'umd', name },
      { file: pkg.common, format: 'cjs' }
    ],
    plugins: [
      terser(),
      svelte({
        cascade: false,
        preprocess: {
          style: sass({
            all: true
          })
        },
        css: (css) => {
          css.write('dist/office-ui-fabric-svelte.css')
        },
        store: true
      })
    ]
  },
  // Docs Bundle
  {
    input: 'src/docs/boot.js',
    output: [
      { file: pkg.docs, 'format': 'umd', name: 'docs' }
    ],
    plugins: [
      copy({
        'node_modules/office-ui-fabric-core/dist/css/fabric.min.css': 'docs/css/fabric.min.css',
        'dist/office-ui-fabric-svelte.css': 'docs/css/fabric-svelte.css',
        'assets': 'docs/assets'
      }),
      terser(),
      svelte({
        cascade: false,
        preprocess: {
          style: sass({
            all: true
          })
        },
        css: (css) => {
          css.write('docs/css/styles.css')
        },
        store: true
      }),
      html({
        template: 'src/docs/index.html',
        target: 'docs/index.html'
      }),
    ]
  }
];
