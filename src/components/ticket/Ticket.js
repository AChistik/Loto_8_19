import TicketItem from '../ticketItem/TicketItem'
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions';
import './Ticket.css'
import magicIcon from './img/magic.svg'
import closeIcon from './img/close.svg'





const Ticket = () => {
    const dispatch = useDispatch();

    const autoNumbers = () => {
        let winArr = [[], []];

        for (let i = 0; i < 8; i++) {
            const rndNumber = Math.floor(Math.random() * (20 - 1)) + 1;
            winArr[0].indexOf(rndNumber) === -1 ? winArr[0].push(rndNumber) : i--
        }

        winArr[1].push(Math.floor(Math.random() * (3 - 1)) + 1)

        dispatch(actions.removeNumberList())
        dispatch(actions.addNumberList({ numList: winArr }))
    }

    return (
        <div className="ticket">
            <div className="ticket__header">
                <span className="ticket__title">Билет 1</span>
                <span className='ticket__btns'>
                    <button onClick={autoNumbers}>
                        <img src={magicIcon} alt="Волшебная палочка" title='Случайный выбор чисел' />
                    </button>
                    <button onClick={() => dispatch(actions.removeNumberList())}>
                        <img src={closeIcon} alt="Крест" title='Очистить выбор' />
                    </button>
                </span>
            </div>
            <TicketItem type={0} count={19} />
            <TicketItem type={1} count={2} />

        </div>
    )
}




export default Ticket;