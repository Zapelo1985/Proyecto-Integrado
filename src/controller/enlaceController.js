
const getIndex = (req, res) => {
    res.render('index');
};

const getNews = (req, res) => {
    res.render('news');
};

const getOffers = (req, res) => {
    res.render('offers');
};

const getCatalogue = (req, res) => {
    res.render('catalogue');
};

const getContact = (req, res) => {
    res.render('contact');
};

const getRegister = (req, res) => {
    res.render('register');
};

const getLogin = (req, res) => {
    res.render('login');
};

const getShopping = (req, res) => {
    res.render('shopping');
};

const getSacamuelas = (req, res) => {
    res.render('products/sacamuelas');
};

const getTragaBolas = (req, res) => {
    res.render('products/tragabolas');
};

const getRisk = (req, res) => {
    res.render('products/risk');
};

const getPruebaOVerdad = (req, res) => {
    res.render('products/prueba_o_verdad');
};

const getNemesis = (req, res) => {
    res.render('products/nemesis');
};

const getMonosLocos = (req, res) => {
    res.render('products/monos_locos');
};

const getDragonkeeper = (req, res) => {
    res.render('products/news/dragonkeeper');
};

const getDungeon = (req, res) => {
    res.render('products/news/dungeon');
};

const getZygomatic = (req, res) => {
    res.render('products/news/zygomatic');
};

const getHumedal = (req, res) => {
    res.render('products/news/humedal');
};

const getSkyrim = (req, res) => {
    res.render('products/news/skyrim');
};

const getJenga = (req, res) => {
    res.render('products/news/jenga');
};

const getUno = (req, res) => {
    res.render('products/news/uno');
};







module.exports = {
    getIndex,
    getNews,
    getOffers,
    getRegister,
    getLogin,
    getShopping,
    getCatalogue,
    getContact,
    getSacamuelas,
    getTragaBolas,
    getRisk,
    getPruebaOVerdad,
    getNemesis,
    getMonosLocos,
    getDragonkeeper,
    getDungeon,
    getHumedal,
    getSkyrim,
    getZygomatic,
    getJenga,
    getUno

}