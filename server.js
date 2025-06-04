const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname)));

// 根路徑回傳 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 處理所有其他路由（SPA 支援）
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`伺服器運行在 port ${PORT}`);
}); 