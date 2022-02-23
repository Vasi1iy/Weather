import React from 'react';
import s from './Info.module.css';

class Info extends React.Component {
    render() {
        return(
            <div className={s.parent}>
                <h2 className={s.h}>weather</h2>
                <p className={s.p}>in your city</p>
            </div>
        );
    }
}

export default Info;