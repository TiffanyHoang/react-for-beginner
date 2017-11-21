import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // first grab the text fromt the box
        console.log(this.storeInput.value)
        const storeID = this.storeInput.value;
        console.log(`Going to ${storeID}`)
        // (this) above is not working. there are 2 way to get this work; 1 is constructor
        // second got to transition from/ to /store/:storeid
        this.context.router.transitionTo(`/store/${storeID}`)
    }

    render() {
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter A Store</h2>
                <input type='text' required placeholder='Store name' defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type='submit'>Visit Store →</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}
export default StorePicker;