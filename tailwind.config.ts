import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
       fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },keyframes: {
        fadeInTransform: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            'transform-style': 'preserve-3d',
            'will-change': 'opacity, transform',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
        },
      },
      animation: {
        fadeInTransform: 'fadeInTransform 1s linear', 
      },
    },
  },
  plugins: [],
} satisfies Config;
