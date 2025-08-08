# AboutMission Component

A mission statement section component designed for the About Us page, featuring a main quote, mission description, and three feature blocks with icons.

## Features

- **Responsive Design**: Adapts to different screen sizes with mobile-first approach
- **Mission Statement**: Prominent quote and descriptive paragraphs
- **Feature Cards**: Three-column layout with icons and descriptions
- **Smooth Animations**: Intersection Observer-based entrance animations
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Modern Styling**: Uses the project's design system variables

## Usage

```jsx
import AboutMission from '../components/about-mission';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      {/* Other content */}
    </main>
  );
};
```

## Component Structure

### Main Quote
- Large, bold, italicized text
- Centered layout
- Responsive typography

### Mission Description
- Two paragraphs explaining the company's mission
- Clean, readable typography
- Centered layout with max-width for readability

### Feature Blocks
- Three feature cards in a grid layout
- Each card contains:
  - Blue circular icon with SVG
  - Bold title
  - Descriptive text
- Hover effects with lift animation

## Features Included

1. **Easy to Understand**
   - Lightbulb icon
   - "Complex medical terms explained in simple language"

2. **Secure & Private**
   - Shield icon
   - "Your health data is protected with end-to-end encryption"

3. **AI-Powered Analysis**
   - Computer/chip icon
   - "Advanced technology for accurate interpretations"

## Styling

The component uses SCSS with the following features:
- CSS Grid for responsive feature layout
- Flexbox for icon alignment
- CSS Custom Properties for theming
- Responsive breakpoints
- Smooth transitions and hover effects
- Box shadows and border radius for modern look

## Responsive Breakpoints

- **Desktop**: Three-column feature grid
- **Tablet (≤991px)**: Two-column feature grid
- **Mobile (≤576px)**: Single-column feature grid
- **Typography**: Scales appropriately for all screen sizes

## Animation

The component includes:
- Fade-in animation on scroll
- Staggered entrance animations for content elements
- Hover effects on feature cards
- Smooth transitions for all interactive states
