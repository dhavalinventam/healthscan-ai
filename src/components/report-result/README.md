# Report Result Component

A responsive React component for displaying health report results with an intuitive and modern UI design.

## Features

### 🎯 **Header Section**
- Back navigation button
- Page title
- Download and Print action buttons
- Responsive layout that stacks on mobile

### 📊 **Summary Cards**
- Four key health parameter cards (Hemoglobin, White Blood Cells, Platelets, Hematocrit)
- Color-coded status indicators (Red for Low, Green for Normal, Yellow for Slightly High)
- Hover effects and smooth animations
- Responsive grid layout

### 📋 **Detailed Results**
- Expandable sections for different blood cell types
- Comprehensive parameter information including:
  - Parameter name
  - Current value
  - Normal range
  - Status with color coding
  - Questions for doctors
  - AI-generated explanations
- Collapsible sections with smooth animations

### ⚠️ **Risk Assessment**
- Overall risk level display
- Risk categories with color-coded indicators
- Visual circular chart showing risk percentage
- Responsive layout that adapts to screen size

### 🔘 **Action Buttons**
- Read result aloud functionality
- Language change option
- Analyze another report (primary action)
- Download as PDF
- Responsive button layout

### 🔒 **Security Disclaimer**
- Clear privacy notice about data handling
- Lock icon for visual emphasis

## Responsive Design

The component is fully responsive and adapts to different screen sizes:

- **Desktop (>768px)**: Full layout with horizontal arrangements
- **Tablet (768px and below)**: Stacked layout with adjusted spacing
- **Mobile (480px and below)**: Optimized for small screens with simplified layouts

## Color Coding

- **Red**: Low values, alerts, high risk
- **Green**: Normal values, low risk
- **Yellow/Orange**: Slightly high values, warnings, moderate risk

## Usage

```jsx
import ReportResult from './components/report-result';

// In your component
<ReportResult />
```

## Route

The component is accessible at `/report-result` route.

## Styling

Uses SCSS with:
- Modern CSS Grid and Flexbox
- Smooth transitions and hover effects
- Consistent spacing and typography
- Mobile-first responsive design
- Accessible color contrasts
