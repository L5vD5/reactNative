import React from 'react';
import { AsyncStorage, StyleSheet, View, ScrollView, Image, Linking } from 'react-native';
import { Button, Text, Content, Body, Icon, Spinner, Card, CardItem } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {getData} from './getData.js';
import {setLanguage, isFirstLaunch, getLanguage} from './AsyncStorage.js';
import Swiper from 'react-native-swiper';

export default class Screen1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
        //Linking.openURL("comgooglemaps://");
    }

    componentWillMount() {
        isFirstLaunch(AsyncStorage).then((key) => {
            if(key == null) {
                Actions.firstLaunch();
            }
        });
        getLanguage(AsyncStorage).then((key) => {
            if(key == null) {
               Actions.language();
            } else {
                this.setState({
                    language: getData(key),
                    loaded: true
                });
            }
        });
    }

    render() {
        const cards = [
            {
                image: require('./img/resources.jpg')
            },
            {
                image: require('./img/resources2.jpeg')
            },
            {
                image: require('./img/resource3.png')
            }
        ]
        return this.state.loaded ? (<ScrollView>
            <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
                <View style={styles.card2}>
                    <Image source={require('./img/cotton.png')} />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button style={styles.card} onPress={() => Actions.screen2()}>
                        <Text style={styles.text}>
                            {this.state.language.screen1.useNow}
                        </Text>
                    </Button>
                    {/*<Button style={styles.card} onPress={() => Actions.screen2()}>
                        <Text style={styles.text}>
                            {this.state.language.screen1.howToUse}
                        </Text>
                    </Button>*/}
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button style={styles.card} onPress={() => Actions.list()}>
                        <Text style={styles.text}>
                            {this.state.language.screen1.list}
                        </Text>
                    </Button>
                    <Button style={styles.card} onPress={() => Actions.mapSelect()}>
                        <Text style={styles.text}>
                            {this.state.language.screen1.map}
                        </Text>
                    </Button>
                </View>
                <View style={styles.card3}>
                    <Swiper autoplay={true}>
                        <Image
                            source={cards[0].image}
                            style={{height: 100, width: '100%', resizeMode: 'stretch'}}
                         />
                        <Image
                            source={cards[1].image}
                            style={{height: 100, width: '100%', resizeMode: 'stretch'}}
                         />
                        <Image
                            source={cards[2].image}
                            style={{height: 100, width: '100%', resizeMode: 'stretch'}}
                         />
                    </Swiper>
                    {/*<DeckSwiper
                        dataSource={cards}
                        renderItem={item => 
                            <Card>
                                <Image
                                    source={item.image}
                                    style={{height: 150, width: '100%', resizeMode: 'stretch'}}
                                 />
                            </Card>
                        }
                    />*/}
                </View>
            </View>
            </ScrollView>
        ) : (<View style={{height: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </View>)
  }
}

const styles = StyleSheet.create({
    head: {
        justifyContent: 'center',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 2.5,
        marginBottom: 5,
        backgroundColor: '#3db7f0',
        height: 90,
        flex: 1
    },
    card2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300
    },
    card3: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        height: 100,
        flex: 1
    }
});
