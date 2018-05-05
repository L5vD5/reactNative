import React from 'react';
import {AsyncStorage, ScrollView} from 'react-native';
import { Toast, View, Body, Text, Content, Spinner, Footer, Button, List, ListItem, Form, Picker, Item, Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {getData} from './getData.js';
import {getData2} from './getData2.js';
import CheckBox from 'react-native-checkbox';
import {getLanguage} from './AsyncStorage';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class Symptom extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            selected2: []
        }

        getLanguage(AsyncStorage).then((key) => {
            global.language = key;
            
            this.setState({
                language: getData(key),
            });

            let where = this.props.where;
            let symptom = getData2().symptom;

            global.lists = symptom[where].map( (s,i) => {
                return this.state.language.symptom[s[0]];
            });

            index = new Array(global.lists.length);
            index.fill(false);

            
            this.setState({
                selected2: global.index,
                loaded: true
            });
        });
     }

    render() {
        const goToNext = () => Actions.screen2({
            where: this.props.where,
            checked: this.state.selected2,
            symptom: this.props.symptom
        });
        /*let A = lists.map( (s,i) => {
            return <Item key={s[0]} label={s[1]} value={s[1]} />
        });*/
        var B;
        const toast = () => Toast.show({
            text: "Check Symptom",
            position: "bottom",
            buttonText: "quit",
            duration: 3000
        });
        if(this.state.loaded) {
            B = global.lists.map( (s,i) => {
                return <ListItem key={s[0]}
                    key={i}
                    onPress={() => {
                        let newSelected2 = Object.values(this.state.selected2);
                        newSelected2[i] = !newSelected2[i];
                        this.setState({selected2: newSelected2});
                    }}
                    style={{marginLeft: 0, paddingLeft: 18}}
                    >
                    <CheckBox
                        checked = {this.state.selected2[i]}
                        label = {s}
                        onChange={() => {
                            let newSelected2 = Object.values(this.state.selected2);
                            newSelected2[i] = !newSelected2[i];
                            this.setState({selected2: newSelected2});
                        }}
                    />
                </ListItem>
            });
        }

        return this.state.loaded? (<View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                {B}
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
                    disabled={this.state.selected2.indexOf(true)==-1}
                    title={this.state.language.next}
                    onPress={() => goToNext()}
                />
            </BottomToolbar>
        </View>
        ) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>);
    }
}
