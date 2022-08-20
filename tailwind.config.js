module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      pink: "#f3b0ea",
      "black-40": "rgba(0, 0, 0, .4)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      pink: "#f3b0ea",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
