module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
        },
        colors: {
          primary: {
            light: '#e0f2fe', // light blue
            DEFAULT: '#0ea5ff', // blue
            dark: '#0369a1', // dark blue
          },
          accent: {
            light: '#bbf7d0', // light green
            DEFAULT: '#22c55e', // green
            dark: '#15803d', // dark green
          },
          background: {
            DEFAULT: '#ffffff', // white
          },
        },
      },
    },
  plugins: [],
}
