import React from 'react';
import Plat from './Plat';

const PlatList = ({ plats }) => {
    if (!plats || plats.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                Aucun plat disponible
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.map((plat) => (
                <Plat key={plat.id} plat={plat} />
            ))}
        </div>
    );
};

export default PlatList; 