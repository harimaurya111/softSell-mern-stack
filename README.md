# SoftSell – Sell Your Unused Software Licenses

**SoftSell** is a modern, responsive single-page web application built with React.js + Vite. It allows users to resell unused or surplus software licenses securely and efficiently.

---

##  Features

### Clean Landing Page
- Hero section with clear call-to-action ("Sell My Licenses")
- Fully responsive for all screen sizes
- Montserrat font for elegant modern look

### How It Works Section
- Explains the simple 3-step selling process
- Responsive cards with icons and animations

###  Why Choose Us Section
- Highlights key benefits (Secure, Fast Payment, Free Pricing)
- Styled for clarity and visual appeal

###  Testimonials
- Customer reviews with names, roles, and feedback
- Clean design with cards layout

### Contact Form
- Fields: Name, Email, Company, License Type, Message
- Client-side validation with error messages
- Uses **Framer Motion** for animated transitions

###  Theme Toggle (Light/Dark)
- Light and dark theme support using **React Context API**
- Toggle available in both Navbar and Footer and also whole website

### 💬 LLM-Powered Chat Widget (Bonus)
- AI-powered chatbot using OpenAI API
- Toggleable chat interface: "Chat with Us" button

---

## 🛠️ Technologies Used

- **Frontend**
  - React.js + Vite
  - Google Fonts (font-family: "Montserrat", sans-serif)
  - Tailwind CSS
  - lucide-react
  - Framer Motion (animations)
  - React Context API (theme management)

---

## 📂 Project Structure (Simplified)
softsell/
├── public/
│   ├── favicon.icon, logo (credex_logo)
├── src/
│   ├── assets/                # Images, icons, illustrations
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── ChatWidget.jsx      # For OpenAI key if using LLM
│   │   ├── Footer.jsx
│   ├── data/                  # Dummy data (e.g., testimonials, steps)
│   │   └── content.js               
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css              # Tailwind or global styles
│   └── context.js 
       ├── ThemeCOntext.jsx              # Theme config (colors, fonts if needed)
├── package.json
├── README.md
├── vite.config.js
└── tailwind.config.js         # If using Tailwind