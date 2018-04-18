# XMLHttpRequest
- [XMLHttpRequest](#xmlhttprequest)
  - [构造函数](#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0)
  - [状态 readyState](#%E7%8A%B6%E6%80%81-readystate)
  - [主要方法与属性](#%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95%E4%B8%8E%E5%B1%9E%E6%80%A7)
  - [reference](#reference)

## 构造函数
``` javascript
let xhr = new XMLHttpRequest()
```

## 状态 readyState
值 |	状态|	描述 
-- |  -- | --
0	|UNSENT (未打开)	| `open()` 方法还未被调用。
1	|OPENED  (未发送)|	`open()` 方法已经被调用。
2	|HEADERS_RECEIVED (已获取响应头)|	`send()` 方法已经被调用，**响应头和响应状态已经返回**。
3	|LOADING (正在下载响应体)|	**响应体下载中**，responseText中已经获取了部分数据。
4	|DONE (请求完成)|	**整个请求过程已经完毕**。

## 主要方法与属性
- `open()` 初始化一个请求，方法接受主要接受三个参数：
  1. 请求类型
  2. 请求的 url
  3. 可选，是否异步，默认为 `true`
  4. 可选，用户名
  5. 可选，密码
  ``` javascript
  xhr.open("GET", "/api/test", false)
  ```

- `setRequestHeader()` 设置请求头，要在 `open()` 之后调用

- `onreadystatechange` 监听状态 readyState 变化的钩子
  ``` javascript
    xhr.onreadystatechange(ev) {
      switch(true) {
        case xhr.readyState === 0:
          // UNSENT
          break
        case xhr.readyState === 1:
          // OPENED
          break
        case xhr.readyState === 2:
          // HEADERS_RECEIVED
          break
        case xhr.readyState === 3:
          // LOADING
          break
        case xhr.readyState === 4:
          // DONE
          if((xhr.status >= 200 && xhr.status < 300) || xhr.status=304) {
            // 成功获得请求体
            console.log(xhr.responseText)
          }else{
            // 请求时发生异常，检查 http 状态码
            console.log("Response was unsuccessful:" + xhr.status)
          }
          break
      }
    }
  ```

- `send()` 发送请求，如果该请求是异步模式(默认)，该方法会立刻返回。相反，如果请求是同步模式，则直到请求的响应完全接受以后，该方法才会返回（阻塞 js 主线程）。
  > 传入的 data 可以是 `ArrayBuffer`、`Blob`、`Document`、`DOMString`、`FormData`
  ``` javascript
    xhr.send(data)
  ```

- `abort()` 如果请求已经被发送,则立刻中止请求。
  ``` javascript
    xhr.abort()
  ```

## reference
 - [XMLHttpRequest - mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)