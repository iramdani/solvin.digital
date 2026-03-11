# Solvin Digital Design System (Glassmorphism)

## Brand Identity
- **Primary Color**: `#ff7375` (Rose/Coral)
- **Tagline**: Solusi Bisnis Produk Digital
- **Philosophy**: Modern, Premium, Translucent, and High-Contrast.

## Design Tokens

### Colors (Tailwind Config)
```javascript
colors: {
    primary: {
        DEFAULT: '#ff7375',
        light: '#ff9ea0',
        dark: '#e66769',
    },
    darkBg: '#0f172a',
    darkCard: 'rgba(30, 41, 59, 0.7)',
}
```

### Components

#### 1. Glass Card (.glass-card)
The core component of the UI.
```css
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}
.dark .glass-card {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
```

#### 2. Primary Buttons
```html
<button class="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-primary hover:scale-[1.02] transition-transform text-xs uppercase tracking-widest">
    Action Button
</button>
```

#### 3. Typography
- **Font Family**: 'Plus Jakarta Sans', sans-serif
- **Weights**: 
  - Regular (400)
  - Medium (500)
  - Semibold (600)
  - Bold (700)
  - Black (800) -> Used for headings and primary UI labels.

#### 4. Border Radius
- `rounded-4xl`: 2.5rem (Used for large containers)
- `rounded-3xl`: 1.5rem (Used for modals/large cards)
- `rounded-2xl`: 1rem (Used for small cards/buttons)

## Interactive Elements
- **Micro-interactions**: Hover effects using `hover:scale-[1.02]` and `transition-all`.
- **Transitions**: Smooth theme switching using `transition-theme` class on `html`.
- **Loading**: Lazy loading for images and skeleton loaders for data fetching.

## Layout System
- **Mobile-First**: 
  - Sidebar hidden on mobile (accessible via hamburger menu).
  - Floating action buttons for primary mobile tasks.
  - Stacked grids for stats and product lists.

## Iconography
- **Library**: Lucide Icons
- **Style**: Thin strokes (2px) with consistent coloring.
