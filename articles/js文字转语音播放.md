# js文字转语音播放

## SpeechSynthesisUtterance

* SpeechSynthesisUtterance是HTML5中新增的API,用于将指定文字合成为对应的语音.也包含一些配置项,指定如何去阅读(语言,音量,音调)等

```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <input type="text" id="textMsg" value="有新的订单，请及时处理">
  <button onclick="speak()">播放</button>
  <button onclick="pause()">暂停</button>
  <button onclick="resume()">继续播放</button>
  <button onclick="cancel()">取消播放</button>
  <script>
    var speech = new SpeechSynthesisUtterance();

    // 播放
    function speak() {
      // speech.pitch = 1 // 获取并设置话语的音调(值越大越尖锐,越低越低沉)
      // speech.rate  = 5 // 获取并设置说话的速度(值越大语速越快,越小语速越慢)
      // speech.voice = 10 // 获取并设置说话的声音
      // speech.volume = 1 // 获取并设置说话的音量
      // speech.lang = speechSynthesis.getVoices()[0] // 设置播放语言，测试没效果
      // speech.cancel() // 删除队列中所有的语音.如果正在播放,则直接停止
      speech.text = textMsg.value // 获取并设置说话时的文本
      speechSynthesis.speak(speech);
    }

    // 暂停
    function pause() {
      speechSynthesis.pause()
    }
    // 继续播放
    function resume() {
      speechSynthesis.resume()
    }

    // 取消播放
    function cancel() {
      speechSynthesis.cancel()
    }
  </script>
</body>

</html>

```

* tips: 如果播放没声音，可尝试重启浏览器播放
