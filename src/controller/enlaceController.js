
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



module.exports = {
    getIndex,
    getNews,
    getOffers,
    getRegister,
    getLogin,
    getCatalogue,
    getContact

}