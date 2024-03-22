const express = require('express');
const app = express();

app.use(express.static('public')); // 정적 파일 제공

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const path = require('path');
const swPath = path.join(__dirname, 'public', 'sw.js');
app.get('/sw.js', (req, res) => {
  res.sendFile(swPath);
});
