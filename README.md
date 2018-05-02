# React-GA-Decorator 
![https://www.npmjs.com/package/react-ga-decorator](https://img.shields.io/npm/v/react-ga-decorator.svg?style=flat-square) [![npm downloads](https://img.shields.io/npm/dt/react-ga-decorator.svg?maxAge=2592000&style=flat-square)](https://npm-stat.com/charts.html?package=react-ga-decorator) [![](https://img.shields.io/github/issues-raw/tripss/react-ga-decorator.svg?style=flat-square)](https://github.com/tripss/react-ga-decorator/issues) [![](https://img.shields.io/david/tripss/react-ga-decorator.svg?style=flat-square)](https://david-dm.org/tripss/react-ga-decorator#info=dependencies)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tripss/react-ga-decorator.svg)](http://isitmaintained.com/project/tripss/react-ga-decorator "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/tripss/react-ga-decorator.svg)](http://isitmaintained.com/project/tripss/react-ga-decorator "Percentage of issues still open")

> Decorator for React-GA

###### This project is a decorator for [react-ga](https://github.com/react-ga/react-ga)
React-GA-Decorator takes care of initializing and sending pageviews. 

For example, the following will send page views with tracking id `UA-000000-01` 
```js
import ga from 'react-ga-decorator'

@ga('UA-000000-01', { debug: __DEV__ })
class AppContainer extends React.Component {
  render() {
    return (
      <div>
        ...
      </div>
    )
  }
}

export default AppContainer
```
The second parameter are the options of [React-GA](https://github.com/react-ga/react-ga#reactgainitializegatrackingid-options)

### Installation
```shell
$ npm install --save react-ga-decorator
$ yarn add react-ga-decorator
```

## Development

If you'd like to contribute to this project, all you need to do is clone
this project and run:

```shell
$ npm install
$ yarn
```
You can use `npm link` to use your development version in your own project:
- Go to `react-ga-decorator` directory and execute command `npm link` / `yarn link`
- Go to your project directory and execute command `npm link react-ga-decorator` / `yarn link react-ga-decorator`

## [License](./LICENSE)

React GA Decorator is [MIT licensed](./LICENSE).

## Collaboration

If you have questions or issues, please [open an issue](https://github.com/TriPSs/react-ga-decorator/issues)!
