# 🖼️ LightGallery

A modern, responsive Angular image gallery application with advanced preview capabilities, file management, and smooth animations.

![Angular](https://img.shields.io/badge/Angular-16.1.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-purple?style=flat-square&logo=bootstrap)

## ✨ Features

### 🎯 Core Functionality
- **📁 Multi-file Upload** - Upload multiple images (JPG, PNG, SVG, GIF, JPEG) simultaneously
- **💾 Local Storage** - Persistent image storage using browser localStorage
- **🔍 Real-time Search** - Filter images by name with instant results
- **🗑️ Image Management** - Delete individual images or clear entire gallery

### 🎨 View Modes
- **📋 List View** - Tabular format with detailed file information
- **🖼️ Grid View** - Card-based thumbnail layout for visual browsing

### 🖥️ Advanced Preview
- **🔍 Full-screen Lightbox** - Immersive image viewing experience
- **▶️ Slideshow Mode** - Automatic image rotation with progress bar
- **⌨️ Keyboard Navigation** - Arrow keys for navigation, Escape to close
- **🎬 Smooth Animations** - Custom CSS animations for transitions
- **🖱️ Click Navigation** - Previous/Next buttons and thumbnail navigation

### 🎛️ User Experience
- **📱 Responsive Design** - Works seamlessly on desktop and mobile
- **🎨 Modern UI** - Clean, intuitive interface with Bootstrap styling
- **⚡ Fast Performance** - Optimized for smooth user interactions
- **🔄 Real-time Updates** - Instant UI updates on file operations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Angular CLI (v16.1.4)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fenil-Shingala/light-gallery.git
   cd light-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production
```bash
ng build --prod
```

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 16.1.0
- **Language**: TypeScript 5.1.3
- **UI Library**: Bootstrap 5.2.3 + NgBootstrap 15.1.2
- **Styling**: SCSS with custom animations
- **Storage**: Browser localStorage
- **HTTP Client**: Angular HttpClient
- **Icons**: Font Awesome

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/           # Main gallery interface
│   ├── fancybox/           # Image preview lightbox
│   ├── upload-file-modal/  # File upload component
│   ├── interface/          # TypeScript interfaces
│   └── services/           # API and shared services
├── assets/                 # Static assets
└── styles.scss            # Global styles
```

## 🎮 Usage

### Uploading Images
1. Click the "Upload File" button
2. Select multiple image files from your device
3. Preview selected files in the modal
4. Click "Ok" to add them to your gallery

### Viewing Images
- **List View**: Click the list icon to see images in a table format
- **Grid View**: Click the grid icon to see images as cards
- **Preview**: Click any image or the eye icon to open the lightbox

### Managing Images
- **Search**: Use the search bar to filter images by name
- **Delete Single**: Click the trash icon on any image
- **Delete All**: Click the trash icon in the header to clear the gallery

### Lightbox Controls
- **Navigation**: Use arrow keys or click prev/next buttons
- **Slideshow**: Click the play/pause button for automatic slideshow
- **Close**: Press Escape or click the X button
- **Thumbnails**: Click any thumbnail to jump to that image

### Supported File Types
Currently supports: `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`

## 🙏 Acknowledgments

- [Angular](https://angular.io/) - The web framework
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [NgBootstrap](https://ng-bootstrap.github.io/) - Angular Bootstrap components
- [Font Awesome](https://fontawesome.com/) - Icons

---

⭐ **Star this repository if you found it helpful!**
