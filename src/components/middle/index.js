import './index.css'

function Middle(props) {
    return (
        <div className="welcome-middle-bg">
            {/* first div */}
            <div className="firstDiv">
                {/* <div className="firstChild"><h1>Get direct</h1></div>
                <div className="firstChild"><h1>Knowledge and insite</h1></div> */}
                <h3 className="firstChild special">Get direct</h3>
                <h3 className="firstChild">Knowledge and insite</h3>
            </div>
            {/* second div */}
            <div className="secondDiv">
                <div className="imgContainer">
                    <img alt="look" className="img" src="https://firebasestorage.googleapis.com/v0/b/justtesting-8141f.appspot.com/o/Screenshot%20from%202023-11-03%2015-10-10.png?alt=media&token=d8c03331-b7b1-479a-a53d-e54376faaabc&_gl=1*aidjz0*_ga*MjAwMjA2MjI3NS4xNjk5MDAzMTAz*_ga_CW55HF8NVT*MTY5OTAwMzEwNy4xLjEuMTY5OTAwNDgzNS42MC4wLjA." />
                </div>
                <div className="imgContainer">
                    <img alt="look" className="img" src="https://firebasestorage.googleapis.com/v0/b/justtesting-8141f.appspot.com/o/Screenshot%20from%202023-11-03%2015-11-45.png?alt=media&token=3adba3fb-9cba-472a-918e-3aea23335c8d&_gl=1*r0zi5*_ga*MjAwMjA2MjI3NS4xNjk5MDAzMTAz*_ga_CW55HF8NVT*MTY5OTAwMzEwNy4xLjEuMTY5OTAwNDg3Ny4xOC4wLjA." />
                </div>
                <div className="imgContainer">
                    <img alt="look" className="img" src="https://firebasestorage.googleapis.com/v0/b/justtesting-8141f.appspot.com/o/Screenshot%20from%202023-11-03%2015-12-58.png?alt=media&token=6604b069-b09f-4247-b09c-8a7bb85c5313&_gl=1*neqhfc*_ga*MjAwMjA2MjI3NS4xNjk5MDAzMTAz*_ga_CW55HF8NVT*MTY5OTAwMzEwNy4xLjEuMTY5OTAwNDg5OS42MC4wLjA." />
                </div>
            </div>
            {/* third div */}
            <div className="thirdDiv">
                <div className="thirdChild">
                    <div className="subThirdChild">
                        <h3>300</h3>
                        <p>creators</p>
                    </div>
                    <div className="subThirdChild">
                        <h3>300</h3>
                        <p>creators</p>
                    </div>
                    <div className="subThirdChild">
                        <h3>300</h3>
                        <p>creators</p>
                    </div>
                </div>
                <div className="thirdChild2">
                    <p>Explore the market place</p>
                    <div className='rollBall2' />
                </div>
            </div>
            {/* fourth div */}
        </div>
    );
}

export default Middle;