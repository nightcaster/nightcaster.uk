import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { category, id } = params;
    
    let photos;
    try {
        switch (category) {
            case 'light-painting':
                photos = (await import('$lib/data/light-painting.json')).default;
                break;
            case 'nightscapes':
                photos = (await import('$lib/data/nightscapes.json')).default;
                break;
            case 'landscapes':
                photos = (await import('$lib/data/landscapes.json')).default;
                break;
            default:
                throw error(404, 'Category not found');
        }
    } catch (e) {
        throw error(404, 'Category not found');
    }

    const photo = photos.find(p => p.id === id);

    if (!photo) {
        throw error(404, 'Photo not found');
    }

    // Load manifest to get orientation
    const manifest = (await import('$lib/data/manifest.json')).default;
    const details = manifest[photo.filename];
    const orientation = details?.orientation || 'landscape';

    return {
        photo,
        category,
        orientation
    };
}
