# AboutHero Component

A responsive hero section component designed specifically for the About Us page.

## Features

- **Responsive Design**: Adapts to different screen sizes with mobile-first approach
- **Two-Column Layout**: Text content on the left, image on the right
- **Smooth Animations**: Intersection Observer-based entrance animations
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Modern Styling**: Uses the project's design system variables

## Usage

```jsx
import AboutHero from '../components/about-hero';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      {/* Other content */}
    </main>
  );
};
```

## Props

This component doesn't accept any props as it's designed specifically for the About page.

## Styling

The component uses SCSS with the following features:
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- Responsive breakpoints
- Smooth transitions and hover effects
- Background decorative elements

## Responsive Breakpoints

- **Desktop**: Full two-column layout
- **Tablet (≤991px)**: Stacked layout with image on top
- **Mobile (≤768px)**: Centered content with smaller text
- **Small Mobile (≤576px)**: Optimized for small screens

## Animation

The component includes:
- Fade-in animation on scroll
- Staggered entrance animations for content elements
- Hover effects on interactive elements
- Smooth transitions for all interactive states
