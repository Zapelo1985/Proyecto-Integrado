
const getIndex = (req, res) => {
    res.render('index');
};

const getNews = (req, res) => {
    res.render('news');
};

const getOffers = (req, res) => {
    res.render('offers');
};

const getCatalogo = (req, res) => {
    res.render('catalogo');
};

const getContact = (req, res) => {
    res.render('contact');
};

const getPreorders = (req, res) => {
    res.render('preorders');
};

const getRegister = (req, res) => {
    res.render('register');
};

const getLogin = (req, res) => {
    res.render('login');
};



module.exports = {
    getIndex,
    getNews,
    getOffers,
    getRegister,
    getLogin,
    getCatalogo,
    getPreorders,
    getContact

}