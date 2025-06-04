# LIFF 語音血糖記錄應用程式

這是一個基於 LINE Front-end Framework (LIFF) 的語音輸入血糖記錄工具，支援國語、台語、客語語音辨識。

## 功能特色

- 🎤 支援語音輸入（國語、台語、客語）
- 📱 LIFF 整合，可直接在 LINE 中使用
- 🩺 專為血糖記錄設計的醫療風格介面
- 🔄 自動將語音轉文字後傳回 LINE 聊天室

## 技術堆棧

- HTML5 + CSS3 + JavaScript
- Web Speech API（語音辨識）
- LINE Front-end Framework (LIFF)
- Node.js + Express（伺服器）

## 部署說明

### 在 Render 上部署

1. 將專案推送到 GitHub
2. 在 Render 建立新的 Web Service
3. 連接你的 GitHub 儲存庫
4. 設定以下參數：
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: `18` 或更高版本

### 本地開發

```bash
# 安裝依賴項
npm install

# 啟動開發伺服器
npm start
```

伺服器將運行在 `http://localhost:3000`

## 設定說明

1. 在 `main.js` 中更新你的 LIFF ID：
   ```javascript
   await liff.init({ liffId: "YOUR_LIFF_ID" });
   ```

2. 確保在 LINE Developers Console 中正確設定 LIFF 端點 URL

## 瀏覽器支援

- Chrome (建議)  
- Safari
- Firefox
- Edge

⚠️ **注意**: 語音辨識功能需要 HTTPS 環境才能正常運作

## 授權

MIT License 