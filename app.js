const express = require('express');
const products_routes = require('./routes/products.js');
const slugify = require('slugify');

// Server instantiation
const app = express();

// Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Middleware
app.use(express.json());

// mensaje de bienvenida
const mensaje = "Welcome to Products API! Register to get API key! (to provide it, place it on header 'api-key' or as URL param 'apikey') Operation API endpoint Register POST /api/users/register List all products GET /api/products List products by ID GET /api/products/:productID Create product POST /api/products Update product PUT /api/products/:productID Delete product DELETE /api/products/:productID";
const mensajeSlugify = slugify(mensaje, { replacement: '*'});

// Routes
app.get('/api', (req, res) => {
  res.send(mensajeSlugify);
});

app.use('/', products_routes);

// Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

