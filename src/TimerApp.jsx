import { useEffect, useState } from 'react';

export const TimerApp = () => {

    const [ time, setTime ] = useState({
        hours  : 0,
        minutes: 0,
        seconds: 0,
    });

    const { hours, minutes, seconds } = time;

    const onHandleTimeChange = ( event ) => {
        const { value, name } = event.target;
        const inputTime = Number( value );

        if ( isNaN(inputTime) || inputTime < 0) return;
        if ( name === 'hours' && inputTime > 24 ) return;
        if ( inputTime > 60 ) return;

        setTime({
            ...time,
            [name]: value,
        });
    }

    const [ running, setRunning ] = useState( false );

    useEffect(() => {
        let timer;

        if ( running ) {
            if ( seconds > 0 ) {
                timer = setInterval(() => {
                    setTime({ ...time, seconds: seconds - 1 });
                }, 1000)
            } else if ( minutes > 0 ) {
                setTime({ ...time, minutes: minutes - 1, seconds: 60 });
            } else if ( hours > 0 ) {
                setTime({ hours: hours - 1, minutes: 60, seconds: 60 });
            } else {
                setRunning( false );
            }
        }

        return () => {
            clearInterval( timer );
        }
    }, [ running, seconds, minutes, hours ]);

    const onReset = () => {
        setTime({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        setRunning( false );
    }

    return (
        <div className='center'>
        <main className="container" id='container'>
            <h1>Timer</h1>

            <div className="container-timer">
                <div>
                    <input
                        type="number"
                        placeholder="00"
                        id="hours"
                        name="hours"
                        onChange={onHandleTimeChange}
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
                        value={minutes}
                        onChange={onHandleTimeChange}
                    />
                    <label htmlFor="minutes">Minutes</label>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="00"
                        id="seconds"
                        name="seconds"
                        value={seconds}
                        onChange={onHandleTimeChange}
                    />
                    <label htmlFor="seconds">Seconds</label>
                </div>
            </div>

            <div className="container-buttons">
                <button className="container-button-start" onClick={() => setRunning(true)}>Start</button>
                <button className="container-button-pause" onClick={() => setRunning(() => setRunning(!running))}>Pause</button>
                <button className="container-button-reset" onClick={onReset}>Reset</button>
            </div>
        </main>
        </div>
    )
}
