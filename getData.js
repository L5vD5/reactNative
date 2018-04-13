export function getData(arg) {
    const language = {
        ko: require('./kor.json'),
        en: require('./eng.json')
    }
    let data = language[arg];
    return data;
}
