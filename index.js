const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/source", (req, res) => {
  const { source } = req.query;

  // Render a simple HTML page with the video player
  res.send(`
 <!DOCTYPE html>
<html>
<head>
  <title>Full-Screen Video Player</title>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body, html {
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
    #video-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;
    }
    video {
      width: 80%;
      height: 80%;
    }
  </style>

</head>
<body>
  <div id="video-container">
    <video autoplay controls loop>
      <source src="${source}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
