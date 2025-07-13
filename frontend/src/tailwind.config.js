module.exports = {
content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
theme: {
    colors: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {},
      borderRadius: {}
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
  plugins: [],
}
