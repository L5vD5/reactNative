import React from 'react';
import { Content, Text, ListItem, Spinner, View, Button } from 'native-base';
import { AsyncStorage, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {getData} from './getData.js';
import {getData2} from './getData2.js';
import {getLanguage} from './AsyncStorage';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class MapSelect extends React.Component {
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
//{search: getData('ko').department[0]}
    }

    render() {
        var array;
        if(this.state.loaded)
            array = this.state.language.department;

        return this.state.loaded? (
                <View style={{flex: 1}}>
                    <ScrollView>
                    {array.map( (s,i) => {
                        return <ListItem
                            key={i}
                            style={{marginLeft: 0, paddingLeft: 18}}
                            onPress={() => Actions.map({
                                search: getData('ko').department[i]
                            })}
                        >
                            <Text> {array[i]} </Text>
                        </ListItem>
                    })}
                    </ScrollView>
                    <BottomToolbar>
                        <BottomToolbar.Action
                            title={this.state.language.back}
                            onPress={() => Actions.pop()}
                        />
                    </BottomToolbar>
                </View>
        ) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>)
    }
}
