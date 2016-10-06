# Better navigator

Wraps the react-native navigator and provides an easy to use navigation interface

*Handle the navigationbar inside the current route itself*

[![npm](https://img.shields.io/npm/dm/react-native-better-navigator.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-better-navigator)
[![npm](https://img.shields.io/npm/v/react-native-better-navigator.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-better-navigator)
[![Beerpay](https://beerpay.io/Devnetik/react-native-better-navigator/badge.svg?style=flat)](https://beerpay.io/Devnetik/react-native-better-navigator)

## Getting started
```sh
npm install --save react-native-better-navigator
```

## Example

```javascript
import BetterNavigator from 'react-native-better-navigator';
class Application extends Component {
  constructor( props ) {
    super( props );

    this.router = this.router.bind( this );

    const routes = [
      [ 'DASHBOARD', Routes.Dashboard ],
      [ 'ANOTHER_ROUTE', Routes.AnotherRoute ],
    ];

    this.routeMap = new Map( routes );
  }

  render() {
    const initialRoute = { name: 'DASHBOARD', title: 'Dashboard' };

    const defaultComponents = {
      left: ()=> { return <Text>Back</Text> }
    };

    return (
      <BetterNavigator initialRoute={initialRoute}
                       routes={this.router}
                       defaultComponents={defaultComponents}
                       sceneStyle={{backgroundColor: 'white'}}
                       ref={'betterNavigator'}/>
    );
  }

  router( route ) {
    if ( !route ) return null;
    if ( !this.routeMap ) return null;
    if ( !this.routeMap.has( route.name ) ) return null;

    return this.routeMap.get( route.name );
  }
}

// Dashboard
class Dashboard extends Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <View>
        <Text>Dashboard</Text>
        <TouchableHighlight onPress={()=>{this.props.navigator.push({name: 'ANOTHER_ROUTE', title: 'Another route'})}}>
          <Text>Route</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
```

## Constribute

Comments, Issues and Pull Requests are welcomed!

## License (MIT)

Copyright (c) 2016 Devnetik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.