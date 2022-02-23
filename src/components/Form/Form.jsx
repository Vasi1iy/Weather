import  React from 'react';
import s from './Form.module.css';

class Form extends React.Component {
    render() {
        return(
            <form className={s.form} onSubmit={this.props.weatherMethod}>
                <input className={s.input} type='text' placeholder='Enter Your City' name='city' />
                <button className={s.button}>search</button>
            </form>
        );
    }
}

export default Form;