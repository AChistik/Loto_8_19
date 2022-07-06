import TicketNumber from "../ticketNumber/TicketNumber";
const TicketNumberList = ({ count, type }) => {

    let result = [];

    for (let i = 0; i < count; i++) {
        result.push(
            <TicketNumber count={i + 1} type={type} key={i} />
        )
    }

    return result
}

export default TicketNumberList;