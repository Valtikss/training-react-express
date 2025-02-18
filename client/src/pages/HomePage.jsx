import myImage from '../assets/image.png';

const HomePage = () => {
    return (
        <div>
            <img src={myImage} alt="image" className="mx-auto d-block rounded-full h-40 w-40" />
            <h1 className="text-center">Bienvenue sur la page daccueil (jarriv pas à mettre dapostrophe sans lever dexception)</h1>
            <p className="text-center">On est le {new Date().toLocaleDateString()}</p>
            <div style={{ height: '200px' }}></div>
        </div>
    );
};

export default HomePage;