/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {
        bottomShadow: "0px 2px 6px -3px rgba(0, 0, 0, 0.04)",
        bottomRightShadow: "2px 2px 6px -3px rgba(0, 0, 0, 0.06)",
      },
    },
    screens: {
      sm: { max: "639px" },
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops/desktops)
      xl: "1280px", // Extra large devices (large desktops)
      "2xl": "1536px", // 2X large devices
      // Custom breakpoints for specific gadgets
      "iphone-se": "375px", // iPhone SE
      ipad: "768px", // iPad
      "ipad-pro": "1024px", // iPad Pro
      "macbook-air": "1440px", // MacBook Air
      "4k": "3840px", // 4K displays
    },
  },
  plugins: [],
};
