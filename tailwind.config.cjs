/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#FFD369',
            secondary: '#393E46',
            whitesmoke: '#FAFAFA',
            text: '#B9BBBE',
            background: '#222831',
            error: '#FF6969',
         },
      },
   },
   plugins: [
      require('@tailwindcss/forms')({
         strategy: 'class',
      }),
   ],
};
