// create a modal component using material UI which shows an item when clicked
function Modal(props) {
    return (
    <div className="modal">
      <h3 className="modal__title">{props.title}</h3>
      <p className="modal__body">{props.body}</p>
      <button className="modal__button" onClick={props.onClick}>
        Close
      </button>
    </div>
  );
}


// create a react component that opens a modal showing the item data when isVisible is true
function Item(props) {
    return (
        <div className="item">
            <h3 className="item__title">{props.title}</h3>
            <p className="item__body">{props.body}</p>
            <button className="item__button" onClick={props.onClick}>
                Show
            </button>
        </div>
    );
}
export default Item;
export { Modal };