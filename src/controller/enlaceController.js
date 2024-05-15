const bcrypt = require('bcryptjs');// Añade la importación de bcrypt
const connection = require('../conexion');
const { postRegister } = require('./loginController');


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
    res.render('register',{mensaje: ''});
};

const getLogin = (req, res) => {
    res.render('login',{mensaje: ''});
};

const getShopping = (req, res) => {
    res.render('shopping');
};

const postLogin = (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.passwd;
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) throw err;

        console.log
        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].passwd);
            if (validPassword) {
                req.session.loggedIn = true;
                req.session.email = email;
                // Imprimir el nombre de usuario en la consola
                console.log(`Inicio de sesión exitoso para el usuario: ${results[0].name}`);
                res.redirect('/'); // Redirige al usuario al index
            } else {
                res.render('login', { mensaje: 'Contraseña inválida' }); // Renderiza la página de inicio de sesión con un mensaje de error
            }
        } else {
            res.render('login', { mensaje: 'Usuario no válido' }); // Renderiza la página de inicio de sesión con un mensaje de error
        }
    });
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
    getUno,


    postLogin,
    postRegister

}