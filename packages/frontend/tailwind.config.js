/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT:'#3b0764',
        contrast:'#f1f5f9',
        light:'#581c87',
        lighter:'#8b5cf6',
        dark:'#2e1065',
        
      },
      secondary: {
        DEFAULT:'#FE5F00',
        contrast: {DEFAULT:'#f1f5f9',dark:"#e2e8f0"},
        light:'FF711F',
        lighter:'#FF7E33',
        dark:'#E05200',
        
      },
      neutral:{
        DEFAULT:"#0f172a",
        contrast: {DEFAULT:'#f1f5f9',dark:"#e2e8f0"},
        light:'#1e293b',
        dark:'#020617',
      },
      black:'#000',
      white:'#fff',
      error:{
        DEFAULT:"#991b1b",
        light:"#dc2626",
        contrast: {DEFAULT:'#f1f5f9',dark:"#e2e8f0"},
        dark:"#7f1d1d"
      },
      warning:{
        DEFAULT:"#f59e0b",
        light:"#fbbf24",
        contrast: {DEFAULT:'#f1f5f9',dark:"#e2e8f0"},
        dark:"#d97706"
      },
      success:{
        DEFAULT:"#16a34a",
        light:"#22c55e",
        contrast: {DEFAULT:'#f1f5f9',dark:"#e2e8f0"},
        dark:"#15803d"
      }
      
    },
    extend: {
    },
  },
  plugins: [],
}

