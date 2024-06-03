
import data from "../data";

export default function DisplayData() {

    return (

    <ul>
        {data.name}
        {data.location}
        {data.schedule}
    </ul>
    
);

}