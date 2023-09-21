
export const changeTime = ( time, running, setTime, setRunning ) => {
    let timer;

    const { seconds, minutes, hours } = time;

    if ( running ) {
        if ( seconds > 0 ) {
            timer = setInterval( () => setTime({ ...time, seconds: seconds - 1 }), 1000 );
        } else if ( minutes > 0 ) {
            setTime({ ...time, minutes: minutes - 1, seconds: 60 });
        } else if ( hours > 0 ) {
            setTime({ hours: hours - 1, minutes: 60, seconds: 60 });
        } else {
            setRunning( false );
        }
    }

    return { timer }
}   
