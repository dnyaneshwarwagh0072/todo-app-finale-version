import Item from "./Item.jsx";
const Items = ({ data, onDeleteItem }) => {
    console.log(data);
    return (
        <div>
            {
                data.map((item, idx) =>
                    <Item
                        key={idx}
                        name={item.name}
                        date={item.dueDate}
                        onDeleteItem={onDeleteItem}
                    />)
            }
        </div>
    )
}
export default Items;
