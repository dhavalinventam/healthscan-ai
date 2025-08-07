# Upload Report Page

## Overview
The Upload Report page is a responsive, modern interface for uploading medical reports to HealthScan AI. It provides a user-friendly drag-and-drop interface with comprehensive validation and feedback.

## Features

### 🎯 Core Functionality
- **Drag & Drop Upload**: Intuitive file upload with visual feedback
- **File Validation**: Validates file type (PDF, JPG, PNG) and size (max 5MB)
- **Progress Tracking**: Real-time upload progress with visual progress bar
- **Error Handling**: Clear error messages for invalid files or upload failures

### 🎨 Design Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: ARIA labels and keyboard navigation support
- **Visual Feedback**: Hover effects, drag-over states, and loading animations

### 🔒 Security & Trust
- **Security Badges**: Visual indicators for secure upload, HIPAA compliance, and AI-powered analysis
- **User Tips**: Helpful guidance for best results
- **Support Options**: Easy access to voice assistance and contact support

## File Structure

```
src/
├── components/
│   └── upload-report/
│       ├── UploadReport.jsx      # Main component
│       ├── UploadReport.scss     # Styles
│       └── index.js             # Export file
├── pages/
│   └── Upload.jsx               # Page wrapper
└── assets/
    ├── upload-icon.png
    ├── Secure-Upload-icon.png
    ├── HIPAA-Compliant-icon.png
    ├── AI-Powered-Analysis-icon.png
    ├── Clear-Images-icon.png
    ├── Original-PDFs-icon.png
    └── Complete-Reports-icon.png
```

## Usage

### Navigation
- **URL**: `/upload`
- **Header Link**: "Upload Report" button in navigation
- **Direct Access**: Navigate to `/upload` in the browser

### Upload Process
1. **Drag & Drop**: Drag a file directly onto the upload area
2. **Browse Files**: Click "Browse Files" to select from file system
3. **Validation**: File is automatically validated for type and size
4. **Upload**: Click "Upload Report" to start the upload process
5. **Progress**: Monitor upload progress with the progress bar
6. **Completion**: File is processed and results are displayed

### Supported File Types
- **PDF**: Original lab report PDFs (recommended)
- **JPG/JPEG**: Clear, well-lit images of reports
- **PNG**: High-quality scanned images

### File Size Limits
- **Maximum**: 5MB per file
- **Recommended**: Under 2MB for optimal processing speed

## Technical Implementation

### State Management
```javascript
const [isDragOver, setIsDragOver] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);
const [isUploading, setIsUploading] = useState(false);
const [uploadProgress, setUploadProgress] = useState(0);
const [error, setError] = useState(null);
```

### File Validation
- **Type Check**: Validates MIME types for PDF, JPG, PNG
- **Size Check**: Ensures file size is under 5MB
- **Error Display**: Shows clear error messages for invalid files

### Upload Simulation
The current implementation includes a simulated upload process. In production, replace with actual API calls:

```javascript
// Example API integration
const formData = new FormData();
formData.append('file', selectedFile);

fetch('/api/upload', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  // Handle successful upload
})
.catch(error => {
  // Handle upload error
});
```

## Responsive Breakpoints

### Desktop (1200px+)
- Full-width layout with centered content
- Three-column grid for benefits and tips
- Side-by-side help section

### Tablet (768px - 1199px)
- Adjusted padding and spacing
- Responsive grid layouts
- Maintained visual hierarchy

### Mobile (320px - 767px)
- Single-column layout
- Reduced padding and font sizes
- Stacked navigation elements
- Touch-friendly button sizes

## Accessibility Features

### ARIA Labels
- Proper labeling for screen readers
- Descriptive alt text for images
- Clear navigation structure

### Keyboard Navigation
- Tab-accessible form elements
- Enter key support for buttons
- Focus indicators for interactive elements

### Color Contrast
- High contrast text for readability
- Clear visual hierarchy
- Accessible color combinations

## Customization

### Styling
The component uses SCSS variables from `src/styles/_variables.scss`:
- Color scheme: Primary blue (#0056D2) with accent teal (#26A69A)
- Typography: Poppins font family
- Spacing: Consistent spacing system
- Shadows: Subtle elevation effects

### Icons
All icons are stored in `src/assets/` and can be easily replaced:
- Upload icon: `upload-icon.png`
- Security icons: `Secure-Upload-icon.png`, `HIPAA-Compliant-icon.png`
- Feature icons: `AI-Powered-Analysis-icon.png`
- Tip icons: `Clear-Images-icon.png`, `Original-PDFs-icon.png`, `Complete-Reports-icon.png`

## Future Enhancements

### Planned Features
- **Multiple File Upload**: Support for uploading multiple reports
- **File Preview**: Thumbnail preview of uploaded images
- **OCR Integration**: Automatic text extraction from images
- **Cloud Storage**: Integration with cloud storage providers
- **Advanced Validation**: AI-powered document quality assessment

### Performance Optimizations
- **Image Compression**: Automatic image optimization
- **Lazy Loading**: Progressive loading for large files
- **Caching**: Client-side caching for better performance
- **CDN Integration**: Fast file delivery via CDN

## Support

For technical support or questions about the upload functionality:
- **Voice Assistance**: Click the voice assistance link
- **Contact Support**: Use the contact support link
- **Documentation**: Refer to this README for implementation details

---

*Built with React, SCSS, and modern web standards for optimal user experience.*
