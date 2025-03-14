const path = require("path")

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        grey: {
          5: "#3E3E3E",
          10: "#f2f2f2", // Very light grey (close to white)
          15: "#F8F8F8",
          20: "#E5E5E5", // Light grey
          30: "#AEAEAE", // Mid grey
          40: "#5C5C5C", // Dark grey
          45: "#AFAFAF",
          50: "#F2F2F2",
        },
        black: {
          10: "#565656",
          20: "#787777",
          30: "#323232",
        },
        primary: "#B38439",
        "primary-bg": "#F5F7FD",
        // primary: "#4CAF50",
        orang: {
          5: "#FFB558",
          10: "#D96800",
          15: "#FFC274",
          20: "#F79214",
          25: "#EA9934",
          30: "#EF751C",
          35: "#F39031",
        },
        beige: {
          10: "#FFFCF5",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "375px",
        xsmall: "425px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        xxs: "10px",
        28: ["1.75rem", { lineHeight: "2rem" }],
        "3xl": "2rem",
        normal: "1rem",
        "44px": "44px", // Custom font size
        "60px": "60px",
        "80px": "80px",
        "110px": "110px",
        "128px": "128px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        times: ["Times New Roman", "sans-serif"],
        manrope: ["Manrope-Regular", "sans-serif"],
        "manrope-bold": ["Manrope-Bold", "sans-serif"],
        "manrope-extrabold": ["Manrope-ExtraBold", "sans-serif"],
        "manrope-light": ["Manrope-Light", "sans-serif"],
        "manrope-medium": ["Manrope-Medium", "sans-serif"],
        "manrope-semibold": ["Manrope-SemiBold", "sans-serif"],
        "manrope-extralight": ["Manrope-ExtraLight", "sans-serif"],
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
      textShadow: {
        custom: "2px 2px 4px #FEB954", // y=2, blur=4, color=#FEB954
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          "text-shadow": "0 2px 4px #FEB954",
        },
      })
    },
  ],
}
