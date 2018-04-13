import React from 'react';
import { Toast, Content, Text, ListItem, Spinner, View, Button } from 'native-base';
import { AsyncStorage, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {getData} from './getData.js';
import {getData2} from './getData2.js';
import {getLanguage} from './AsyncStorage';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class Part extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }

        getLanguage(AsyncStorage).then((key) => {
            global.language = key
            
            this.setState({
                language: getData(key),
                loaded: true
            });
        });
    }

    render() {
        var arrayKey;
        const toast = () => Toast.show({
            text: "Click Sick Area",
            position: "bottom",
            buttonText: "quit",
            duration: 3000
        });
        
        if(this.state.loaded) {
            arrayKey = getData2()[this.props.part];
        }
        return this.state.loaded? (
                <View style={{flex: 1}}>
                    <ScrollView>
                    {arrayKey.map( (s,i) => {
                        return <ListItem
                            key={i}
                            style={{marginLeft: 0, paddingLeft: 18}}
                            onPress={() => Actions.symptom({
                                where: arrayKey[i],
                                symptom: this.props.symptom
                            })}
                        >
                            <Text> {this.state.language.part[s]} </Text>
                        </ListItem>
                    })}
                    </ScrollView>
                    <BottomToolbar>
                        <BottomToolbar.Action
                            title={this.state.language.back}
                            onPress={() => Actions.pop()}
                        />
                        <BottomToolbar.Action
                            title={this.state.language.help}
                            onPress={toast}
                        />
                    </BottomToolbar>
                </View>
        ) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>)
    }
}
