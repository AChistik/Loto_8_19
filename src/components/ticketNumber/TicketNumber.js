import { useState } from 'react'
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions';
import stores from '../../store/stores';


const TicketNumber = ({ count, type }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const clazz = active ? 'active' : null;

    stores.subscribe(() => setActive(stores.getState()[type].indexOf(count) !== -1))

    const maxLength = type === 0 ? 8 : 1

    function onTicket() {
        if (stores.getState()[type].length < maxLength || active === true) {
            active ? dispatch(actions.removeNumber({ num: count, index: type })) : dispatch(actions.addNumber({ num: count, index: type }))
        }
    }

    return (
        <div className={`ticket__number ${clazz}`} onClick={() => onTicket()}>
            {count}
        </div>
    )
}
export default TicketNumber;