//fonction test renvoie un JSON
const test = (req, res) => {
    res.json({ status: "ok" });
};

//export pour utilisation
module.exports = { test };