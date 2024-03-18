/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.js', 
    './src/modules/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34d399',
        primaryDark: '#10b981',
        secondary: '#67e8f9',
        secondaryDark: '#22d3ee',
        positive: '#22c55e',
        positiveDark: '#16a34a',
        negative: '#ef4444',
        negativeDark: '#dc2626',
        neutral: '#d4d4d4',
        neutralDark: '#a3a3a3',
        warning: '#fb923c',
        warningDark: '#f97316'
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

