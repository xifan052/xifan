# 自定义 echarts 图表

## 1.通用配置修改

### 1.1 修改图表位置

```js
    // https://echarts.apache.org/zh/option.html#grid
    grid: {
      top: 10,
      bottom: 40,
      left: 10,
      right: 10
    }
```

### 1.2 增加鼠标悬浮提示框

```js
    // https://echarts.apache.org/zh/option.html#tooltip
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // 标轴指示器，坐标轴触发有效 默认为直线，可选为：'line' | 'shadow'
      }
    }
```

## 2.柱状图

### 2.1 柱图颜色

```js
series: [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    itemStyle: {
      color: '#87DCDD', // 柱图背景
    },
  },
]
```

### 2.2 自定义 y 轴

```js
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed', // 分割线类型 'solid' 'dashed' 'dotted'
          color: '#EBECF2' // 分割线颜色
        }
      },
      axisLabel: { color: '#28373B' }, // Y轴字体颜色
      axisLine: {
        show: false  // 隐藏Y轴坐标轴
      },
      axisTick: {
        show: false  // 隐藏刻度
      }
    }
```

## 3.折线图

### 3.1 自定义 x 轴

```js
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        interval: 0, // 坐标轴刻度标签的显示间隔,0强制显示所有标签，如果设置为1，表示隔一个标签显示一个标签，如果为3，表示隔3个标签显示一个标签
        rotate: -35, // 标签倾斜的角度,旋转的角度是-90到90度
        color: '#28373B' // x轴字体颜色
      },
      axisLine: {
        lineStyle: { color: '#979797' } // x轴坐标轴颜色
      },
      axisTick: {
        show: false // 隐藏刻度
      }
    }
```

### 3.2 自定义 y 轴

```js
    yAxis: {
      type: 'value',
      splitLine: {
        show: false // 隐藏分割线
      },
      axisLabel: { color: '#FFFFFF' }, // x轴字体颜色
      axisLine: {
        show: true,
        lineStyle: { color: 'rgb(23, 47, 78)' } // x轴坐标轴颜色
      }
    }
```

### 3.3 自定义折线样式

```js
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,//折点是圆弧状的
      symbol: 'circle', // 设置连接点样式 circle实心圆
      symbolSize: 8, //设定实心点的大小
      itemStyle: {
        normal: {
          color: '#01BBB8', //折线点的颜色
          lineStyle: {
            color: '#01BBB8' //折线的颜色
          }
        }
      }
    }
```
