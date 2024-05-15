const bcrypt = require('bcryptjs');// Añade la importación de bcrypt
const connection = require('../conexion');



const getIndex = (req, res) => {
    res.render('index',{ mensaje: '' });
};

const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password; // Asegúrate de usar el mismo nombre que en el formulario
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
    
            if (password == results[0].passwd) {
                req.session.loggedIn = true; // Establece la sesión como iniciada
                req.session.email = email; // Guarda el email de usuario en la sesión
                res.redirect('/'); // Redirige al usuario al panel de control (dashboard)
            } else {
                res.render('index', { mensaje: 'Contraseña inválida' });
            }

        } else {
            res.render('index', { mensaje: 'Usuario no válido' }); // Redirige al usuario de vuelta al formulario de inicio de sesión con un mensaje de error
        }

    });
};


const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        
        res.redirect('/');
    });
};

const getDashboard = (req, res) => {
    if (req.session.loggedIn) {
     res.render('dashboard', { email: req.session.email });
 } else {
     res.render('error');
 }
};

const postRegister = async (req, res) => {
    const { name, surname, passwd, email } = req.body;
    // Encriptar la contraseña
    const hashedPasswd = await bcrypt.hash(passwd, 10);
    const insertQuery ='INSERT INTO users (name, surname, passwd, email) VALUES (?, ?, ?, ?)';
    const values = [name, surname, hashedPasswd, email]; // Usar la contraseña encriptada
    console.log(name, surname, passwd, email);
    // Ejecutar la consulta INSERT
    connection.query(insertQuery, values, function(error, results, fields) {
        if (error) {
            console.error('Error al insertar usuario:', error);
            return res.render('index', { mensaje: 'Error al registrar usuario' });
        }
        console.log('Usuario insertado correctamente');
        res.render('index', { mensaje: 'Usuario registrado' });
    });
};


 
const postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].passwd);
            if (validPassword) {
                req.session.loggedIn = true;
                req.session.email = email;
                // Imprimir el nombre de usuario en la consola
                console.log(`Inicio de sesión exitoso para el usuario: ${results[0].name}`);
                res.redirect('/'); // Redirige al usuario al index
            } else {
                res.render('index', { mensaje: 'Contraseña inválida' });
            }
        } else {
            res.render('index', { mensaje: 'Usuario no válido' });
        }
    });
};

const getRegister = (req, res) => {
    res.render('register');
};

const getComentarios = (req, res) => {
    res.render('comentarios',{ username: req.session.username });
};


const getError = (req, res) => {
    res.render('error');
};

const getPerfil = (req, res) => {
    const email = req.session.username;
    const mensaje = req.query.mensaje;
    // Consulta SQL para obtener los datos del perfil del usuario
    const sql = 'SELECT * FROM users WHERE email = ?';
    connection.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error al obtener datos del perfil:', err);
            res.status(500).send('Error al obtener datos del perfil');
            return;
        }

        // Comprobar si se encontraron resultados
        if (results.length > 0) {
            // Renderizar la plantilla 'perfil' con los datos del usuario
            //console.log(results[0].fecha_nacimiento); 
            res.render('perfil', { username, usuario: results[0], mensaje});
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    });
};

// Exporta las funciones y el enrutador
module.exports = {
    getIndex,
    login,
    logout,
    getDashboard,
    postLogin,
    getRegister,
    getComentarios,
    postRegister,
    getError,
    getPerfil

};