const express = require('express');
const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;
const server = app.listen(port, function AppListenCallback() {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${port}/`);
});
