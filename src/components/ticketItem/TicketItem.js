import TicketNumberList from "../ticketNumberList/TicketNumberList";
import stores from '../../store/stores';
import { useState } from "react";

const TicketItem = ({ type, count }) => {

    const [lineWidth, setlineWidth] = useState(0)

    stores.subscribe(() => setlineWidth(100 / 8 * stores.getState()[0].length))
    const numbersSelect = stores.getState()[0].length;

    return (
        <div className="ticket-item">
            <div className="ticket-item__header">
                {type === 0 ?
                    <>
                        <div className='ticket-item__title'>ПЕРВАЯ ЧАСТЬ ПОЛЯ</div>
                        <p className='ticket-item__subtitle'>
                            {numbersSelect < 8 ? `Выбрано ${numbersSelect} из 8 необходимых` :
                                `Выбраны все числа`
                            }
                        </p>
                        <div className="ticket__line">
                            <div className="ticket__line-progress" style={{ width: `${lineWidth}%` }}></div>
                        </div>
                    </>
                    :
                    <div className='ticket-item__title'>Вторая ЧАСТЬ ПОЛЯ</div>}
            </div>
            <div className="ticket--numbers">
                <TicketNumberList count={count} type={type} />
            </div>
        </div >
    )
}

export default TicketItem;