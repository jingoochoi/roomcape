const http = require('http');
const fs = require('fs');
const path = require('path');

// 서버 생성
const server = http.createServer((req, res) => {
  // 루트 경로로 요청이 들어오면 index.html을 제공
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

// 서비스 워커 등록
server.on('request', (req, res) => {
  if (req.url === '/service-worker.js') {
    fs.readFile(path.join(__dirname, 'public', 'service-worker.js'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading service-worker.js');
      }

      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    });
  }
});

// 정적 파일 제공을 위한 미들웨어
server.on('request', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('File not found');
    }

    res.writeHead(200);
    res.end(data);
  });
});

// 서버 시작
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
