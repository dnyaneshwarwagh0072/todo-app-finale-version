function Item({ name, date, onDeleteItem }) {

    return (
        <div className="row items-container">
            <div className="col-5">
                <h5>{name}</h5>
            </div>
            <div className="col-5">
                <h5>{date}</h5>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger kg-btn" onClick={() => onDeleteItem(name)}>Delete</button>
            </div>
        </div>
    )
}
export default Item;