export const TimerApp = () => {


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
                    />
                    <label htmlFor="hours">Hours</label>
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder="00"
                        id="minutes" 
                    />
                    <label htmlFor="minutes">Minutes</label>
                </div>
                <div>
                    <input 
                        type="number"
                        placeholder="00"
                        id="seconds"  
                    />
                    <label htmlFor="seconds">Seconds</label>
                </div>
            </div>

            <div className="container-buttons">
                <button className="container-buttons-start">Start</button>
                <button className="container-buttons-pause">Pause</button>
                <button className="container-buttons-reset">Reset</button>
            </div>
        </div>
    </>
  )
}
