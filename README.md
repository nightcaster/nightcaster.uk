# Nightcaster Photography

A premium photography portfolio built with SvelteKit and TailwindCSS.

## ✨ Features

- **High-Performance Image Loading**: Optimized WebP images with lazy loading and placeholder pulses.
- **Dynamic Categories**: Organized galleries for Landscapes, Nightscapes, and Light Painting.
- **Dev-Mode Reordering**: (Coming soon) Drag and drop photos to change their order on the live site.

## 📸 Image Management

### Adding New Images

1. **Upload**: Place your high-resolution source images in `static/images/[category]/`.
   - Categories: `landscapes`, `nightscapes`, `light-painting`.
2. **Configure**: Add the image details to the corresponding JSON file in `src/lib/data/[category].json`.
   ```json
   {
     "id": "my-new-photo",
     "title": "My New Photo",
     "filename": "landscapes/my-photo.jpg",
     "location": "Peak District",
     "date": "2024"
   }
   ```
3. **Optimize**: Run the optimization script to generate thumbnails and optimized previews:
   ```sh
   npm run optimize-images
   ```
   This will automatically update the dimensions and orientation in your `.json` files.

### Data Structure

- **Source Images**: `static/images/`
- **Optimized Output**: `static/optimized/` (Auto-generated, git-ignored)
- **Metadata**: `src/lib/data/` (Where titles, locations, and order are stored)

## 🛠️ Development

Start the development server:

```sh
npm run dev
```

### Reordering Photos

When running in **development mode**, you can drag and drop photos on any category page to change their order. A "Save Order" button will appear at the top to persist your changes back to the JSON files.

## 🚀 Building for Production

To create a production version:

```sh
npm run build
```

Preview the build:

```sh
npm run preview
```
