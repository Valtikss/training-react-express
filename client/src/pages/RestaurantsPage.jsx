import RestaurantsList from '../components/RestaurantsList';

const RestaurantsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-primary">
            <RestaurantsList />
        </div>
    );
};

export default RestaurantsPage;