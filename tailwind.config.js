/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#A8A4FF",
          200: "#635FC7",
        },
        dark: {
          400: "#3E3F4E",
          300: "#2B2C37",
          200: "#20212C",
          100: "#000112",
        },
        gray: {
          200: "#E4EBFA",
          100: "#828FA3",
        },
        white: {
          200: "#FFFFFF",
          100: "#F4F7FD",
        },
        red: {
          200: "#FF9898",
          100: "#EA5555",
        },
      },
      boxShadow: {
        "task-card-shadow": " 0px 4px 6px 0px rgba(54, 78, 126, 0.10)",
      },
    },
  },
  plugins: [],
};
