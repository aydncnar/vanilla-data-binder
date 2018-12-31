/*
* Two Way Data Binding
* Aydin Cinar <cinar.aydinn@gmail.com>
*/

const Binder = function Binder(states) {
    this.states = states;

    // Define Value & Html Attribute
    const config = {
        bindValue: 'data-bind-value',
        bindHtml: 'data-bind-html'
    };

    // Define Dom Objects
    const domObjects = {
        bindValue: `[${config.bindValue}]`,
        bindHtml: `[${config.bindHtml}]`
    };

    // Select Value & Html Elements by states
    let selectElements = document.querySelectorAll(domObjects.bindValue);
    const elementsByValue = Array.prototype.slice.call(selectElements);
    selectElements = document.querySelectorAll(domObjects.bindHtml);
    const elementsByHtml = Array.prototype.slice.call(selectElements);

    /*
    * Change & Update State
    * @params (String state) is required
    * @params (String value) is required
    */
    const setState = (state, value) => {
        this.states[state] = value;
    };

    /*
    * Update Dom Objects.
    * Objects are 2 types. Value Objects and Html Objects.
    * Value Object is like div, span. The method will change value object's value property
    * Html Object is like div, span. The method will change html object's innerHTML property
    * @params (String state) is required
    */
    const updateDomObject = (state) => {
        const filterByValue = elementsByValue.filter(item => item.getAttribute(config.bindValue) === state);
        const filterByHtml = elementsByHtml.filter(item => item.getAttribute(config.bindHtml) === state);

        filterByValue.forEach((el) => {
            const element = el;
            element.value = this.states[state];
        });

        filterByHtml.forEach((el) => {
            const element = el;
            element.innerHTML = this.states[state];
        });
    };

    // Update All Dom Objects
    this.update = () => {
        Object.keys(states).forEach((state) => {
            updateDomObject(state);
        });
    };

    const updateHandle = (el) => {
        const state = el.getAttribute(config.bindValue);
        const bindData = el.value;
        setState(state, bindData);
        this.update();
    };

    /*
    * Value elements (text, textarea) will add dom listener
    * This objects's value change, all of dom will be update
    */
    elementsByValue.forEach((el) => {
        const element = el;        
        element.onkeyup = () =>  updateHandle(element);
        element.onchange = () => updateHandle(element);
    });

    // Update all dom when create new Binder
    this.update();
};

/*
* setState is a method for update state.
* setState has 2 parameters
* @params (String state || Object state) is required. Use for : which will state change?
* @params (String state) is required. Use for : which will state change?
*/
Binder.prototype.setState = function setSate(state, value) {
    // If state parameter's type is object, all keys will be update
    if (typeof state === 'object') {
        const keyList = Object.keys(state);
        Object.keys(state).forEach((item, index) => {
            const keyName = keyList[index];
            this.states[keyName] = state[item];
        });
    } else {
        // If state parameter's type is string, only one key will be update
        this.states[state] = value;
    }
    this.update();
};

Binder.prototype.version = '1.0.7';

export default {
    Binder
};
