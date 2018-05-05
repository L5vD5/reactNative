import React from 'react';
import { ListItem, Text, Content, Spinner, View, Item} from 'native-base';
import { ScrollView, AsyncStorage } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import {getData} from './getData';
import {getData2} from './getData2.js';
import {getLanguage} from './AsyncStorage.js';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class ChiefSymptom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }
    componentDidMount() {
    }

    componentWillMount() {
        getLanguage(AsyncStorage).then((key) => {
            this.setState({
                language: getData(key),
                loaded: true,
                selected: null
            });
        });
    }

    render() {
        const goToScreen4 = () => Actions.screen4(global.object);
        const toast = () => Toast.show({
            text: "Select Chief Symptom",
            position: "bottom",
            buttonText: "quit",
            duration: 3000
        });
        let array = Object.values(global.object.symptom);
        return this.state.loaded? (<View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <ListItem 
                    style={{marginLeft: 0, paddingLeft: 18}}
                >
                    <Text> {this.state.language.chiefSymptom} </Text>
                </ListItem>
                {array.map((s1, i1)=> {
                    array2 = s1.array;
                    return <View key={i1}>
                        <Item style={{marginLeft: 0, paddingLeft: 18, paddingTop: 5, paddingBottom: 5}}>
                            <Text> {this.state.language.part[s1.where]} </Text>
                        </Item>
                        {array2.map((s2, i2) => {
                            return <ListItem key={i2}
                                style={{marginLeft: 0, paddingLeft: 18}}
                                onPress={() => {
                                    this.setState({selected: getData2().symptom[s1.where][s2][0]});
                                    global.object.chiefSymptom = {where: s1.where, symptom: getData2().symptom[s1.where][s2][0]};
                                }}
                            >
                                <CheckBox
                                    checked = {getData2().symptom[s1.where][s2][0]==this.state.selected}
                                    label = {this.state.language.symptom[getData2().symptom[s1.where][s2][0]]}
                                    onChange={() => {
                                        this.setState({selected: getData2().symptom[s1.where][s2][0]});
                                        global.object.chiefSymptom = {where: s1.where, symptom: this.state.selected};
                                    }}
                                />
                            </ListItem>
                        })}
                    </View>
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
                <BottomToolbar.Action
                    disabled={this.state.selected == null}
                    title={this.state.language.next}
                    onPress={() => goToScreen4()}
                />
            </BottomToolbar>
        </View>) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>)

    }
}
