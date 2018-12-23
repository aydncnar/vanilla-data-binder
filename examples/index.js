import Binder from '../lib/index';

window.onload = () => {
    let stateList = {
        name: 'Aydin',
        age: 25
    };
    let states = new Binder.Binder(stateList);


    const changeName = document.getElementById('js-change-name');
    const changeAge = document.getElementById('js-change-age');
    const changeNameAge = document.getElementById('js-change-name-age');

    changeName.onclick = () => {
        states.setState('name', 'Bill');
    }

    changeAge.onclick = () => {
        states.setState('age', 10 + 17);
    }

    changeNameAge.onclick = () => {
        const newAge = (param)  => {
            return  param  +  15;
        };
        
        const newValues = {
            name: 'Aydin Cinar',
            age: newAge(25)
        };
        
        states.setState(newValues);
    }
}