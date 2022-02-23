import React from 'react';
import s from './Weather.module.css';

class Weather extends React.Component {
    render() {
        return(
            <div>
            {this.props.name &&
                <div className={s.parent}>
                    <p className={s.p}>Location: {this.props.name}</p>
                    <p className={s.p}>Temperature: {this.props.temp}</p>
                    <p className={s.p}>Sunrise: {this.props.sunrise}</p>
                    <p className={s.p}>Sunset: {this.props.sunset}</p>
                </div>
            } 
                
            </div>
            );
    }
}

export default Weather;