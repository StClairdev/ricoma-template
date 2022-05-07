module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '1cust': '0px 4px 15px 6px rgba(12, 37, 86, 0.33)',
      },
      colors: {
        alice: '#F5F7FA',
        bright_grey: '#4F5665',
        dark_orange: '#FE8101',
        denim: '#0F64C8',
        doger_blue: '#0076FF',
        grey_chateau: '#A0A2A6',
        orange: '#FFAA00',
        prussian_blue: '#022B5B',
        pumpkin: '#F17D21',
        tangaroa: '#002045',
        whisper: '#E5E5E5',
        white_smoke: '#F5F5F5',
        cyan_blue: '#0F2E69'
      },
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        PoppinsMedium: ["Poppins-Medium", "sans-serif"],
        primary: '"Open Sans"',
        PoppinsBold: ["Poppins-Bold", "sans-serif"],
        PoppinsItalic: ["Poppins-Italic", "sans-serif"],
        PoppinsRegular: ["Poppins-Regular", "sans-serif"],
        RubikBold: ["Rubik-Bold", "sans-serif"],
        SourceSansPro: ["SourceSansPro", "sans-serif"],
      },
    },
    height: {
      13: "52px",
      17: '66px', // Navigation Container Height
    },
    width: {
      54: '218px',
      81: '335px', // Navigation Items Width
    },
  },
  plugins: [],
}
