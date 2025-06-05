/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        helldev: {
          black: '#0A0A0A',
          darkGrey: '#1A1A1A',
          red: {
            500: '#FF4444',
            600: '#E53E3E',
            700: '#C53030',
            800: '#9B2C2C'
          },
          flame: {
            light: '#FF6B6B',
            DEFAULT: '#FF4444',
            dark: '#E53E3E'
          },
          beige: {
            100: '#F7F1E8',
            200: '#EDE4D3',
            300: '#E3D7BE',
            400: '#D9C6A7',
            500: '#C4A981'
          },
          grey: {
            100: '#F8F8F8',
            200: '#E8E8E8',
            300: '#D1D1D1',
            400: '#B0B0B0',
            500: '#8E8E8E',
            600: '#6B6B6B',
            700: '#4A4A4A',
            800: '#2D2D2D',
            900: '#1A1A1A'
          }
        }
      },
      fontFamily: {
        helldevTitle: ['"Bebas Neue"', 'cursive'],
        helldevBody: ['"Montserrat"', 'sans-serif'],
        helldevMono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'gradient-flame': 'linear-gradient(135deg, #FF6B6B 0%, #FF4444 50%, #E53E3E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'flame-flicker': 'flame 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.9' },
          '100%': { transform: 'scale(1.05) rotate(1deg)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 68, 68, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 68, 68, 0.8)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      boxShadow: {
        'flame': '0 0 30px rgba(255, 68, 68, 0.6)',
        'flame-lg': '0 0 60px rgba(255, 68, 68, 0.4)',
        'dark': '0 10px 30px rgba(0, 0, 0, 0.8)',
        'dark-xl': '0 20px 60px rgba(0, 0, 0, 0.9)'
      }
    },
  },
  plugins: [],
}