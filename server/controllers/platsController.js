const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/plats.json');

function loadPlats() {
    try {
      const data = fs.readFileSync(dataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Erreur de lecture du fichier JSON :', error);
      return [];
    }
}

exports.getPlats = (req, res) => {
    const plats = loadPlats();
    res.send(plats);
};

exports.getPlatById = (req, res) => {
    const plats = loadPlats();
    const platId = parseInt(req.params.id, 10);
  
    const plat = plats.find((p) => p.id === platId);
    if (!plat) {
        return res.status(404).send('Plat not found');
    }
    res.send(plat);
};