# SkillSwap Landing Page

A modern, clean, and professional landing page for SkillSwap - an AI-powered peer learning and skill exchange platform.

## 🎨 Design Features

- **Bright Futuristic Theme**: Gradient colors (indigo, purple, pink, blue)
- **Minimal & Clean**: Professional design with clear content structure
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Scroll-based animations and hover effects
- **Accessible**: WCAG 2.1 compliant with keyboard navigation support

## 📋 Sections

1. **Hero Section** - Main value proposition with CTA buttons
2. **How It Works** - 4-step process explanation
3. **Core Features** - 8 key platform features
4. **For Whom** - Target audience segments (Students, Professionals, Professors, Freelancers, Creators)
5. **Professors Benefits** - Dedicated section for educators
6. **Why SkillSwap** - Unique selling points
7. **Testimonials** - User success stories
8. **Call to Action** - Final conversion section
9. **Footer** - Navigation and social links

## 🚀 Getting Started

Simply open `index.html` in your web browser. No build process or dependencies required!

```bash
# Open in default browser (Windows)
start index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
skillswap-landing-page/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Design system variables
│   ├── styles.css          # Main styles
│   └── responsive.css      # Responsive breakpoints
├── js/
│   └── main.js            # JavaScript functionality
└── README.md              # This file
```

## 🎯 Key Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript** - Lightweight interactivity
- **Google Fonts** - Inter & Poppins typography

## ✨ Features Implemented

- ✅ Smooth scrolling navigation
- ✅ Scroll-based animations with Intersection Observer
- ✅ Responsive design (mobile-first approach)
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds and accents
- ✅ Hover effects and transitions
- ✅ Accessibility features (skip links, focus indicators, ARIA labels)
- ✅ SEO optimized meta tags

## 🎨 Color Palette

- **Indigo**: `#6366f1`
- **Purple**: `#8b5cf6`
- **Pink**: `#ec4899`
- **Blue**: `#3b82f6`
- **Success Green**: `#10b981`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: 768px - 1280px
- Large Desktop: > 1280px

## 🔧 Customization

### Changing Colors

Edit `css/variables.css` to modify the color scheme:

```css
:root {
  --color-indigo: #6366f1;
  --color-purple: #8b5cf6;
  /* ... other colors */
}
```

### Modifying Content

All content is in `index.html`. Simply edit the text within the HTML elements.

### Adjusting Animations

Animation settings are in `css/variables.css`:

```css
:root {
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 400ms;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the SkillSwap platform.

## 🤝 Contributing

This landing page was built following the SkillSwap design specifications. For modifications, please refer to the design document in `.kiro/specs/skillswap-landing-page/`.

---

**SkillSwap** - *A World Where Knowledge Flows Freely* 🎓
