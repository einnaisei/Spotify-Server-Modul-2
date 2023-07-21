const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 5500
// playlist
const songList = [
    {
        title: 'what2do',
        artist: 'Deantrbl',
        duration: "3:15",
        url: "https://open.spotify.com/track/6GS3lnAVy5w6AHWEKYzYeS",
        playCount: 1000
    },
{
    title: 'D (Half Moon)',
    artist: 'Deantrbl',
    duration: "3:15",
    url: "https://open.spotify.com/track/3uA8SjMyDtwtt0jLPMQbVD",
    playCount: 998
},
{
    title: 'jenga',
  artist: 'Heize',
  duration: "3:15",
  url: "https://open.spotify.com/track/1dA1tlzwcJ3YDYsSul1m06",
  playCount: 97
},
{
    title: "Didn't Know Me",
    artist: 'Heize',
    duration: "3:15",
    url: "https://open.spotify.com/track/1Zv6zo71iDXH07Lin7hxMg",
    playCount: 955
},
{
    title: 'Nan-Nan',
  artist: 'Fujii Kaze',
  duration: "3:15",
  url: "https://open.spotify.com/track/2CbGuO0LtVvbh3umN3mDwM",
  playCount: 94
},
{
    title: 'damn',
  artist: 'Fujii Kaze',
  duration: "3:15",
  url: "https://open.spotify.com/track/7pTwW5yCKRx6OkByY53jbz",
  playCount: 994
},
{
    title: 'Missing U',
    artist: 'Lee Hi',
    duration: "3:15",
    url: "https://open.spotify.com/track/4uk677I1lb0ZPSXGhL2FcA",
    playCount: 1010
},
{
    title: 'Rose',
  artist: 'Lee Hi',
  duration: "3:15",
  url: "https://open.spotify.com/track/6MksZu2sx5jzoPszxbRZMw",
  playCount: 1015
},
{
    title: 'Blues',
  artist: 'Lee Hi',
  duration: "3:15",
  url: "https://open.spotify.com/track/4xqloJsOaYurTocR1T3Lb6",
  playCount: 93
},
];

app.get('/', (req, res) => {
  res.send(songList);
});

app.get('/about', (req, res) => {
    res.send("Seupotipai");
  });

  app.use((req, res) => {
    res.status(404).send("Page not found");
  });

  app.post("/songs", (req,res) => {
    let body = req.body;
    songList.push(body)
    res.send(songList);
  });

  app.put("/", (req,res) => {
    res.send("PUT response");
  });

  app.delete("/", (req,res) => {
    res.send("DELETE response");
  });

  // most played

  app.get("/fav", (req,res) => {
    res.send((songList) => songList.sort())
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});