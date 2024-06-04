const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3030;

const FilmSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

const Film = mongoose.model('Film', FilmSchema);

app.get('/', async (_req, res) => {
  try {
    const films = await Film.find();
    return res.send(films);
  } catch (err) {
    return res.status(500).send({ error: 'Error fetching films' });
  }
});

app.delete('/:id', async (_req, res) => {
  try {
    const film = await Film.findByIdAndDelete(_req.params.id);
    if (!film) return res.status(404).send({ error: 'Film not found' });
    return res.send(film);
  } catch (err) {
    return res.status(500).send({ error: 'Error deleting film' });
  }
});

app.put('/:id', async (_req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(
      _req.params.id,
      {
        title: _req.body.title,
        description: _req.body.description,
        image_url: _req.body.image_url,
        trailer_url: _req.body.trailer_url,
      },
      { new: true }
    );
    if (!film) return res.status(404).send({ error: 'Film not found' });
    return res.send(film);
  } catch (err) {
    return res.status(500).send({ error: 'Error updating film' });
  }
});

app.post('/', async (_req, res) => {
  try {
    const film = new Film({
      title: _req.body.title,
      description: _req.body.description,
      image_url: _req.body.image_url,
      trailer_url: _req.body.trailer_url,
    });
    await film.save();
    return res.send(film);
  } catch (err) {
    return res.status(500).send({ error: 'Error creating film' });
  }
});

mongoose.connect("link do mongoDB com senha")
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
