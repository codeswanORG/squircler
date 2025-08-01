import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build configuration
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: path.resolve(process.cwd(), 'src/index.ts'),
          name: 'Squircler',
          formats: ['es', 'umd'],
          fileName: (format) => `squircler.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }
  }

  // Development/demo build configuration
  return {
    plugins: [react()],
    build: {
      outDir: 'demo-dist',
    },
  }
})
