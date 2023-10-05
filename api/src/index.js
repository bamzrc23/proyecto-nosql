const express = require('express');
const { PORT } = require('./config/constants');
const routes = require('./routes');
const { initDatabase } = require('./config/databaseConfig');
const expressConfig = require('./config/expressConfig');

const app = express();

expressConfig(app);

app.use(routes);
app.use((err, req, res, next) => {
    res.status(err.statusCode || 400).json({ message: err.message });
});
initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));
    })
    .catch(err => {
        console.log('Cannot connect database:', err);
    })
