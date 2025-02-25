import RestaurantsList from '../components/RestaurantsList';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Bienvenue sur notre application de restaurants</h1>
            <RestaurantsList />
        </div>
    );
};

export default HomePage;