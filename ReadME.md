## 虛擬貨幣平台

**先實現比特幣報價相關服務為主**

## 需求規劃
1. 比特幣Realtime報價
2. 比特幣歷史報價
3. 比特幣走勢線圖
4. 會員管理
5. 比特幣新聞
6. 聊天室
 
## 資料表規劃
**MSSQL**
1. Features Table
2. Login Table
3. LoginHistory Table
4. Roles Table
5. Users Table
## 系統功能分析

* 比特幣Realtime報價:
    1. 正式資源:https://www.coindesk.com/api/
    2. 備用資源:https://www.bitstamp.net/api/
    3. 實作方式:Nestjs後端固定頻率請求資源，存入MongoDB，並透過Socket.IO與Angular前端建立Realtime連線提供資料。 
    
* 比特幣歷史報價
    1. 正式資源:https://api.coindesk.com/v1/bpi/historical/close.json
    2. 備用資源:https://github.com/f1lt3r/bitcoin-scraper
    3. 實作方式:Nestjs後端先寫入所有歷史資料到MongoDB，然後每天將新的歷史報價寫入MongoDB，並透過Socket.IO與Angular前端建立Realtime連線提供資料。

*  會員管理
    1. 功能:註冊帳號、第三方登錄、修改個人基本資料、權限區分
    2. 實作方式:Nestjs後端產Restful API給Angular前端串接，前後端皆要做好Route與權限保護，使用JWT Token做網站驗證保護。
* 比特幣新聞
    1. 正式資源:
               https://chroniclingamerica.loc.gov/about/api/
               https://github.com/feedbin/feedbin-api
               https://developer.nytimes.com/
               https://newsapi.org/
               https://dev.npr.org/api/
               http://open-platform.theguardian.com/
    2. 備用資源:正式資源即備用資源。
* 聊天室
    1. 功能:登入後提供聊天室功能，聊天紀錄寫入Redis。
    2. 實作方式:使用Socket.IO。

## 使用到的框架、資料庫、模組
1. 框架:
    * 後端框架:Nest.js(含Express)
    * 前端框架:Angular
    * UI框架:NG-ZORRO
2. 資料庫:
    * MSSQL
    * MongoDB
    * Redis(不是資料庫，但作用類似故分類在此)
3. 模組:
    * Socket.IO(Realtime)
    * TypeORM(串MSSQL)
    * Swagger(產生Restful API文檔)
    * Mongoose(串MongoDB)
    * Redis(串Redis)
    * Cors(處理跨站問題)
    * Helmet(基本資安模組)
    * AntG2/D3.js(資料視覺化)
    * Moment(時間格式處理)
    * passport、passport-jwt、jsonwebtoken(三個都要用於JWT token驗證)。
4. 測試工具:
    * Postman或Nestjs內建(E2E測試)
    * Test404漏洞掃描器
