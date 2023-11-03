import '../upper/index.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function Upper(props) {
    return (
        <div className="welcome-upper-bg">
            <div className="upperFirst">
                <div className='upperFirstChild'>
                <p>Yodora</p>
                </div>
                <div className='upperFirstChild'>
                <button type="button">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
                </div>
            </div>
            <div className="upperSecond">
                <div>
                <h1>Learn from your favourate creaters about <span className="special">fantacy reports</span></h1>
                </div>
                <div className='upperSecondChild'>
                    <div className='rollBall' />
                </div>
            </div>
        </div>
    );
}

export default Upper