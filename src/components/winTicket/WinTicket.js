
import stores from "../../store/stores";
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions';

const isWin = () => {

    const arr = stores.getState();

    let winArr = [[], []];

    for (let i = 0; i < 8; i++) {
        const rndNumber = Math.floor(Math.random() * (20 - 1)) + 1;
        winArr[0].indexOf(rndNumber) === -1 ? winArr[0].push(rndNumber) : i--
    }

    winArr[1].push(Math.floor(Math.random() * (3 - 1)) + 1)

    const sub1 = winArr[0].filter(item => arr[0].indexOf(item) !== -1).length
    const sub2 = winArr[1].indexOf(arr[1][0]) !== -1;

    const isWiner = sub1 >= 4 || (sub1 >= 3 && sub2) ? true : false

    return { isWiner, winArr }
}

const RenderItems = ({ arr }) => {
    return (
        <>
            <p>В первом ряду</p>
            <div className="ticket--numbers">
                {arr[0].map(item => {
                    return (<div className='ticket__number' key={item}>
                        {item}
                    </div>)
                })
                }
            </div>
            <p>Во втором ряду</p>
            <div className="ticket--numbers">
                {arr[1].map(item => {
                    return (<div className='ticket__number' key={item}>
                        {item}
                    </div>)
                })
                }
            </div>
        </>
    )
}


function WinTicket() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log(stores.getState()[0])
    useEffect(() => {
        if (stores.getState()[0].length < 8) {
            navigate('/')
        }
    }, [])

    const { winArr, isWiner } = isWin();

    return (
        <div className='App'>
            <h1>{isWiner ? 'Вы выиграли' : 'Вы проиграли'}</h1>

            <h2>Вы выбрали числа:</h2>
            <RenderItems arr={stores.getState()} />


            <h2>Выигрышные числа</h2>
            <RenderItems arr={winArr} />

            <Link to='/' onClick={() => dispatch(actions.removeNumberList())} style=
                {{
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    margin: '0 auto',
                    background: '#fff',
                    justifyContent: 'center'
                }}
            >Играть снова</Link>

        </div>
    );
}

export default WinTicket;
