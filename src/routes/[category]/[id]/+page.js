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

    // Dimensions and orientation are now included directly in the photo object
    const { orientation = 'landscape', width, height } = photo;
 
    return {
        photo,
        category,
        orientation,
        width,
        height
    };
}
