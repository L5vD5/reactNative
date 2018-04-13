import React from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Part from './Part';
import Symptom from './Symptom';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Language from './Language';
import Map from './Map';
import MapSelect from './MapSelect';
import Insurance from './Insurance';
import List from './List';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ContainerWithDrawer from './Container'
import { getData } from './getData';
import { Root } from 'native-base';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            fontLoaded: false,
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require("native-base/Fonts/Roboto.ttf"),
            'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
            'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
            'EvilIcons': require("@expo/vector-icons/fonts/EvilIcons.ttf")
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return this.state.fontLoaded ? (<Root>
            <ContainerWithDrawer ref={component => this._container = component}>
                <Router>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="screen1" component={Screen1} title="Home" initial={true}/>
                        <Scene key="screen2" component={Screen2} title="Select" />
                        <Scene key="part" component={Part} title="Part"/>
                        <Scene key="screen3" component={Screen3} title="Result"/>
                        <Scene key="screen4" component={Screen4} title="Time"/>
                        <Scene key="screen5" component={Screen5} title="Summary"/>
                        <Scene key="symptom" component={Symptom} title="List"/>
                        <Scene key="language" component={Language} title="Language" containerRefresh={() => {this._container.componentWillMount();}} />
                        <Scene key="map" component={Map} title="Map" />
                        <Scene key="mapSelect" component={MapSelect} title="MapSelect" />
                        <Scene key="insurance" component={Insurance} title="Insurance"/>
                        <Scene key="list" component={List} title="List" />
                    </Scene>
                </Router>
            </ContainerWithDrawer>
        </Root>
        ) : null
  }
}
