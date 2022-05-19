let store = {
    _state: {
        usersData: {
            users: [
                { name: "sveta", surname: "sokolova" },
                { name: "vanya", surname: "ptashkin" },
                { name: "masha", surname: "koshkin" },
                { name: "uyra", surname: "ushkin" },
                { name: "ilya", surname: "soshkin" }
            ]
        },
        usersPage: {
            users: [
                { name: "black", surname: 'jack', age: '26' },
                { name: "li", surname: 'ma', age: '26' },
                { name: "tim", surname: 'hardy', age: '26' },
                { name: "tim", surname: 'li', age: '26' },
                { name: "van", surname: 'eng', age: '26' }
            ]
        },
        dialogPage: {
            dialogs: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you' },
                { id: 3, message: 'where are you from?' },
                { id: 4, message: 'opsum lorem signatura' },
                { id: 5, message: 'mrgacom it mobile networks' },
                { id: 6, message: 'beeline life is good' }
            ],
        },
        newMessageText: {
            MessageText: 'message'
        }
    },
    getState() {
        return this._state;
    },
    _callsubscriber() {
        console.log('state changed');
    },
    AddMessage(dialogPage) {
        let newMessage = {
            id: 7,
            message: dialogPage
        };
        this._state.dialogPage.dialogs.push(newMessage);
        this._state.newMessageText.MessageText = '';
        this._callsubscriber(this._state);
    },
    updateAddMessage(newtext) {
        this._state.newMessageText.MessageText = newtext;
        this._callsubscriber(this._state);
    },
    subscribe(observer) {
        this._callsubscriber = (observer);
    }
}

export default store;
window.store = store;