function Item({ text, isDone, onClick }) {
    return(
        <li 
            style={{ textDecoration: isDone ? "line-through" : "none", cursor: "pointer" }}
            onClick={onClick}
        >
            {text}
        </li>
    )
}

export default Item
