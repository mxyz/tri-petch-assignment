/** @type {import('tailwindcss').Config} */


const rem = (px) => `${px / 16}rem`;

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    screens: {
      'sm': {'max': '768px'},
      // => @media (min-width: 320px) { ... }

      'md': {'min': '769px', 'max': '1530px'},

      'lg': {'min': '1531px'},
    },
    extend: {
      fontFamily: "Roboto",
      lineHeight: {
        'tighter': 1.1718, // Define your custom line height ratio
      },
      colors: {
        transparent: "transparent",
        systemBlack: "#000",
        systemWhite: "#fff",
        systemGray: "#E7E7E7",
        systemDarkGray: "#C2C2C2",
        systemLightPurple: "#F5F4F9",
        systemPurple: "#5E3DB3",
        systemDarkPurple: "#090C35",
      },
      space: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      padding: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      margin: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        36: rem(36),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      gap: {
        0: '0', // 0px
        1: rem(1),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        20: rem(20),
        24: rem(24),
        32: rem(32),
        40: rem(40),
        48: rem(48),
        64: rem(64),
      },
      fontSize: {
        // 10: rem(10),
        12: rem(12),
        14: rem(14),
        15: rem(15),
        16: rem(16), // base
        18: rem(18),
        20: rem(20),
        22: rem(22),
        24: rem(24),
        26: rem(26),
        28: rem(28),
        30: rem(30),
        32: rem(32),
        34: rem(34),
        36: rem(36),
      },},
  },
  corePlugins: {
    lineHeight: ['responsive', 'tighter'], // Use 'tighter' as the default line height
  },
  plugins: [],
}

