import * as tile from '../api/restaurantsApi';

export async function getTest() {
    try {
        const response = await tile.getTest();
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur lors de la récupération des données');
    }
}