import del from 'rollup-plugin-delete'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: './index.js',
    output: {
      file: './dist/mock-suit.js',
      format: 'umd',
      sourcemap: true,
      name: 'MockSuit'
    },
    plugins: [del({ targets: 'dist/*' })]
  },
  {
    input: './index.js',
    output: {
      file: './dist/mock-suit.min.js',
      format: 'umd',
      sourcemap: true,
      name: 'MockSuit'
    },
    plugins: [uglify()]
  }
]
