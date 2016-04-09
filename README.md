Frontend開発環境
================

元ネタ: [10年のツケを支払ったフロント界隈におけるJavaScript開発環境（2016年4月現在）。](http://d.hatena.ne.jp/tomoya/20160403/1459665374)

- Ubuntu 14.04
- Vagrant
- vim
- React
- Redux
- react-router
- Material-UI
    - roboto font
    - react-tap-event-plugin
- axios
- Babel
    - babel-preset-es2015
    - babel-preset-react
- webpack
- ESLint
- Airbnb JavaScript Style Guide

# Usage

```
vagrant up
```

# Example

example/helloworld originaly from [Setting up React for ES6 with Webpack and Babel - Twilio BLOG](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)

```
npm run dev-server
```

1. ``cp -a example/helloworld/* frontend/src/.``
2. http://192.168.39.10:8080/webpack-dev-server/
3. ``frontend > src``
