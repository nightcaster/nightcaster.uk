import { json, error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import fs from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
    // Safety check: Only allow reordering in development mode
    if (!dev) {
        throw error(403, 'Reordering is only available in development mode.');
    }

    try {
        const { category, photos } = await request.json();

        if (!category || !Array.isArray(photos)) {
            throw error(400, 'Invalid request data. Category and photos array are required.');
        }

        // Define valid categories to prevent directory traversal or invalid file writing
        const validCategories = ['landscapes', 'nightscapes', 'light-painting'];
        if (!validCategories.includes(category)) {
            throw error(400, `Invalid category: ${category}`);
        }

        const filePath = path.resolve('src/lib/data', `${category}.json`);
        
        // Write the updated photos array back to the JSON file
        await fs.writeFile(filePath, JSON.stringify(photos, null, 2), 'utf-8');

        return json({ success: true, message: `Successfully updated ${category}.json` });
    } catch (err) {
        console.error('Error saving photo order:', err);
        throw error(500, `Failed to save order: ${err.message}`);
    }
}
