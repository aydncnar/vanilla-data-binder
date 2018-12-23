# Welcome to Vanilla Data Binder

Sometimes you have to many variables. And if the variables will show on different places, this process can  so complex sometimes. You must select dom objects and change their property. And dom object's property change, you must listen dom events and change your variables by this events.

Two way data binding is a method to make eaiser this process. You can use  "2 way data binding" on basic level with this package.

![example vanilla data binder](https://media.giphy.com/media/khdjLv6hg2q8vEbgVB/giphy.gif)

### 1. Install:
```bash
npm install vanilla-data-binder
```
or
```bash
yarn add vanilla-data-binder
```

### 2. Require:
```js
import Binder from 'vanilla-data-binder';
```

### 3. Usage:
Javascript
```js
import Binder from 'vanilla-data-binder';

let stateList = {
	name: 'Aydin Cinar',
	age: 25
}

window.onload = () => {
	const states = new Binder.Binder(stateList);
}
```
HTML
```html
<input type="text" data-bind-value="name" />
<p data-bind-html="name"></p>
```

### 4. To Change states from javascript:

```js
states.setState('name', 'Cinar'); // Name will set by Cinar
states.setState('age', 26  +  5); // Age will set by 31
```

or 

```js
const newAge = (param)  => {
	return  param  +  15;
};

const newValues = {
	name: 'Aydin Cinar',
	age: newAge(25)
};

states.setState(newValues);
```