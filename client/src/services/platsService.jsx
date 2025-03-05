import * as plats from '../api/platsApi';

// Pause pour permettre de voir l'animation et surtout laisser un temps pour chare
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPlats() {
    try {
        await delay(2000);

        // Simulation d'une erreur de fecth de data
        //throw new Error('Failed to fecth restaurants. Server is unavailable.');

        const response = await plats.getPlats();
        return response;
    } catch (e) {
        // Pour le dev
        console.error('Failed to get plats', e);
        throw new Error('Failed to get plats');
    }
}

export async function getPlatById(id) {
    try {
        const response = await plats.getPlatById(id);
        return response;
    } catch(e) {
        throw e;
    }
};

export async function createPlat(plat) {
    try {
        const response = await plats.createPlat(plat);
        return response;
    } catch(e) {
        throw e;
    }
}