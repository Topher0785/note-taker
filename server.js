const express = require('express');
consthtmlRoutes=require('./routes/htmlRoutes');
const apiRoutes =require('./routes/apiRoutes');

const app = express();
const PORT =Process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.jsjon());



app.listen(PORT, () => {
    console.log(`Listening on PORT`);
  });