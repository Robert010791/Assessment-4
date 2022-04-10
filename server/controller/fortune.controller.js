const fortunes = require('../db.json');
const videos = require('../video.json');
const resources = require('../resource.json');

// get a fortune
const getFortune = (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
};

// choose random compliment
const getCompliment = (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    'Cool shirt!',
    'Your Javascript skills are stellar.',
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
};

// get a random song
const getVideo = (req, res) => {
  let randomIndex = Math.floor(Math.random() * videos.length);
  let randomVideo = videos[randomIndex];
  res.status(200).send(randomVideo);
};

// get resource links
const getResource = (req, res) => {
  res.status(200).send(resources);
};

// add resource link
const addResource = (req, res) => {
  const { linkName, linkURL } = req.body;

  const newResource = {
    id,
    linkName,
    linkURL,
  };

  resources.push(newResource);

  id++;

  req.status(200).send(resources);
};

const exportsObj = {
  getFortune: getFortune,
  getCompliment,
  getVideo,
  getResource: getResource,
  addResource,
};

module.exports = exportsObj;
