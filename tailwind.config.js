module.exports = {
  corePlugins: {
    preflight: false,
    transform: true,
  },
  prefix: "tw-",
  content: [
    "./src/**/*.js",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./blocks/**/*.liquid",
    "./layout/**/*.liquid",
  ],
  theme: {
    extend: {
      colors: {
        red: "var(--brand-primary-background)",
        'gray': "var(--brand-secondary-background-2)",
        "gray-4": "#BDBDBD",
        "gray-5": "#E0E0E0",
        "gray-6": "#F2F2F2",
        "grayExtraLight": "#FAFAFA",
        "warning": "#fae0be"
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        alt: ["Figtree", "sans-serif"]
      },
      screens: {
        'phone': {'max': '740px'},
        'xs': {'max': '540px'},
        'tablet': '741px',
        'pocket': {'max': '999px'},
        'lap': '1000px',
        'maxdesk' :{ max: '1199px' },
        'desk': '1200px',
        'wide': '1400px',
        'wider': '1600px'
      },
    },
  },
  plugins: [],
};
