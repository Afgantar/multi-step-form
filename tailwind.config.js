/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'marine-blue' : 'hsl(213, 96%, 18%)',
        'purplish-blue' : 'hsl(243, 100%, 62%)',
        'pastel-blue' : 'hsl(228, 100%, 84%)',
        'light-blue' : 'hsl(206, 94%, 87%)',
        'strawberry-red' : 'hsl(354, 84%, 57%)',
        'cool-gray' : 'hsl(231, 11%, 63%)',
        'light-gray' : 'hsl(229, 24%, 87%)',
        'magnolia' : 'hsl(217, 100%, 97%)',
        'alabaster' : 'hsl(231, 100%, 99%)',
        'white' : 'hsl(0, 0%, 100%)',
      },
      screens : {
        'desktop' : '1440px',
        'tablet' : '920px',
        'laptop' : '1150px',
        'mobile' : '420px',
      },
      keyframes : {
        slideFromRight : {
          'from' : { transform: 'translateX(120px)', opacity: 0},
          'to' : { transform: 'translateX(0)', opacity: 1},
        },
        slideFromLeft : {
          'from' : { transform: 'translateX(-120px)', opacity: 0},
          'to' : { transform: 'translateX(0)', opacity: 1},
        },
        summon : {
          'from' : { transform: 'scale(0.5)', opacity: 0},
          'to' : { transform: 'scale(1)', opacity: 1},
        }
      },
      animation : {
        'slideFromRight' : 'slideFromRight ease-in-out 1s',
        'slideFromLeft' : 'slideFromLeft ease-in-out 1s',
        'summon' : 'summon ease-in-out 1s',
      }
    },
  },
  plugins: [],
}

