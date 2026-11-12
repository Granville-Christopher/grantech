// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//     },
//     extend: {
//       colors: {
//         grantechBlue: "#1E40AF",
//         grantechLightBlue: "#3B82F6",
//         grantechDarkBlue: "#1E3A8A",
//       },
//     },
//   },
//   darkMode: "class", 
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#06142f",
        primary: "#153b70",
        electric: "#006bff",
        cyan: "#00c8ff",
        mist: "#f4f7fb",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(0, 107, 255, 0.35)",
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};
