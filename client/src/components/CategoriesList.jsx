import React, { useMemo } from 'react';

const CATEGORY_EMOJIS = {
    'Asiatique': '🍜',
    'Française': '🥐',
    'Italienne': '🍕',
    'Mexicaine': '🌮',
    'Japonaise': '🍱',
    'Méditerranéenne': '🥙',
    'Américaine': '🍔',
    'Chinoise': '🥢',
    'Végétarienne': '🥗',
    'Indienne': '🍛',
    'Thaïlandaise': '🥘',
    'Fast Food': '🍟',
};

const CategoriesList = ({ restaurants }) => {
    const categories = useMemo(() => {
        const categoriesMap = restaurants.reduce((acc, restaurant) => {
            const cuisine = restaurant.cuisine;
            if (!acc[cuisine]) {
                acc[cuisine] = {
                    name: cuisine,
                    count: 0,
                    image: restaurant.image,
                    emoji: CATEGORY_EMOJIS[cuisine] || '🍽️'
                };
            }
            acc[cuisine].count += 1;
            return acc;
        }, {});

        return Object.values(categoriesMap);
    }, [restaurants]);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Catégories de cuisine</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                    {/* Category Emoji */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl sm:text-5xl lg:text-6xl transform transition-transform duration-200 group-hover:scale-110">
                                {category.emoji}
                            </span>
                        </div>
                        
                        {/* Category Info */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                            <h3 className="font-semibold text-lg sm:text-xl">
                                {category.name}
                            </h3>
                            <p className="text-sm opacity-90">
                                {category.count} {category.count > 1 ? 'restaurants' : 'restaurant'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesList; 