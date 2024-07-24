module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "sm": "14px",
      "base": "16px",
      "18": "18px",
      "36": "36px",
      "32": "32px",
      "40": "40px",
      "48": "48px",
      "42": "42px",
      "24": "24px",
      "22": "22px",
      "20": "20px",
      "27": "27px",
      "25": "25px",
      "60": "60px",
      "20":"20px",
      "46":"46px",
      "42":"42px",
      "30":"30px",
      "74":"74px",
      "82":"82px",
    },
    screens: {
      "xs":"280px",
      'sm': '541px',
      'md': '550px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
      '3xl': '2000px',
      '4xl': '3056px',
    },
    minHeight: {
      '1/5': '100vh',
      '1/4': '90vh',
      '1/3': '25vh',
      '1/2': '35vh',
    },
    extend: {
      width: {
        '85': '85%',
        '62': "62px",
        '250': "250px",
        '350': "350px",
        '120': "120px",
        '40': "40px",
        '70': "70%",
        '75': "75%",
        '95': "95%",
        '90': "90%",
        '18': "18px",
        '300': "300px",
        '100p': "100%", 
        '50': "50%", 
        '387': "387px",
      },
      translate: {
        '20': '20px',
      },
      gridAutoRows: {
        '406': 'minmax(406px, auto)',
      },
      height: {
        '62': "62px",
        '18': "18px",
        '300': "300px",
        '100': "100vh",
        '100p': "100%",  
        '250': "250px",
        '120': "120px",
        '920': "920px",
        '327': "327px",
        '626': "626px",
        '614': "614px",
        '387': "387px",
        '406': "406px",
        '230': "230px",
        '456.74': "456.74px",
        '40': "40px",
      },
      boxShadow: {
        'bfs': '0px 9px 32px rgba(112, 160, 42, 0.15)',
      },
      colors: {
        'groshure-green': '#A3D32A',
        'groshure-red': '#FD4C5C',
      },

    },
  },
  plugins: [],
}