// style.js

// Inject Tailwind configuration
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
      },
    },
  },
};

// Inject custom CSS variables and utility classes
(function() {
  const css = `
    :root {
      --primary-color: #450a0a;
      --secondary-color: #7f1d1d;
      --accent-color: #b91c1c;
      --text-light: #fef2f2;
    }

    body {
      font-family: "Onest", sans-serif;
    }

    .bg-custom-primary { background-color: var(--primary-color); }
    .bg-custom-secondary { background-color: var(--secondary-color); }
    .bg-custom-accent { background-color: var(--accent-color); }
    .text-custom-light { color: var(--text-light); }
    .border-custom { border-color: var(--accent-color); }

    .hero-pattern {
      background-image: url("/api/placeholder/1600/900");
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .hero-pattern::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(69, 10, 10, 0.95) 0%,
        rgba(69, 10, 10, 0.8) 50%,
        rgba(69, 10, 10, 0.6) 100%
      );
    }

    .hover-scale { transition: transform 0.3s ease; }
    .hover-scale:hover { transform: scale(1.03); }
  `;
  const styleTag = document.createElement('style');
  styleTag.innerHTML = css;
  document.head.appendChild(styleTag);
})();
