import React from 'react';
import { StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import {Button, Text, ListItem, Item, Picker, Form, Body, Toast, Content, View, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {getData} from './getData.js';
import {getLanguage, save} from './AsyncStorage';
import BottomToolbar from 'react-native-bottom-toolbar';

export default class Screen4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            selected: "key0"
        }

        getLanguage(AsyncStorage).then((key) => {
            this.setState({
                language: getData(key),
                loaded: true
            });
        });

        global.object = {
            symptom: this.props.symptom,
            howLong: this.state.selected
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    render() {
        const saveAndGoToScreen5 = () => {
            global.object.howLong = this.state.selected;
            save(AsyncStorage, JSON.stringify(global.object))
            Actions.screen5(global.object);
        }
        const toast = () => Toast.show({
            text: "Answer the questions",
            position: "bottom",
            buttonText: "quit",
            duration: 3000
        });
        return this.state.loaded ? (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                    <ListItem style={{marginLeft: 0, paddingLeft: 18}}>
                        <Text> How Long? </Text>
                    </ListItem>
                    <Form style={{paddingLeft: 18}}>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            {/* TODO *****************

                            *************************/}
                            <Item label="A day" value="key0"/>
                            <Item label="2~7 days" value="key1"/>
                            <Item label="1~2 weeks" value="key2"/>
                            <Item label="3~4 weeks" value="key3"/>
                            <Item label="more than a month" value="key4"/>
                        </Picker>
                    </Form>
                    </View>
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
                        title={this.state.language.save + "&" + this.state.language.next}
                        onPress={() => saveAndGoToScreen5()}
                    />
                </BottomToolbar>
            </View>
        ) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>)
  }
}

const styles = StyleSheet.create({
});
