import './TicketSend.css'
import stores from '../../store/stores'
import { useState } from 'react'
import { Link } from "react-router-dom";

const TicketSend = () => {
    const [ticketSend, sendTicketSend] = useState(false)

   

    stores.subscribe(() => stores.getState()[0].length === 8 && stores.getState()[1].length === 1 ? sendTicketSend(true) : sendTicketSend(false))

    return ticketSend ? (
        <div className="ticketSend">
            <Link to="/win"
                className="ticket-send__btn">
                <span className="ticket-send__title">
                    Оплатить 1 билет
                </span>
                <span className="ticket-send__price">
                    Бесплатно
                </span>
            </Link>
        </div >
    ) : null;
}

export default TicketSend;