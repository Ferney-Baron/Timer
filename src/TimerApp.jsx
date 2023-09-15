import { useState } from 'react';

export const TimerApp = () => {

    const [ time, setTime ] = useState({
        hours: '',
        minutes: '',
        seconds: '',
    });

    const { hours, minutes, seconds } = time;

    const onHandleTimeChange = ( event ) => {
        const { value, name } = event.target;

        if( isNaN(Number(value)) ) return;

        setTime({
            ...time,
            [ name ]: event.target.value, 
        });
    }

    

  return (
    <>
        <div className="container">
            <h1>Timer</h1>

            <div className="container-timer">
                <div>
                    <input 
                        type="number"
                        placeholder="00"
                        id="hours" 
                        name="hours"
                        onChange={ onHandleTimeChange }
                        value={hours}
                    />
                    <label htmlFor="hours">Hours</label>
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder="00"
                        id="minutes"
                        name="minutes"
                        value={ minutes }
                        onChange={ onHandleTimeChange }
                    />
                    <label htmlFor="minutes">Minutes</label>
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder="00"
                        id="seconds"
                        name="seconds"
                        value={ seconds }
                        onChange={ onHandleTimeChange }
                    />
                    <label htmlFor="seconds">Seconds</label>
                </div>
            </div>

            <div className="container-buttons">
                <button className="container-button-start">Start</button>
                <button className="container-button-pause">Pause</button>
                <button className="container-button-reset">Reset</button>
            </div>
        </div>
    </>
  )
}
