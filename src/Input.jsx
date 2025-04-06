function Input({ onChange, value, onClick }) {
    return (
        <div className="form">
            <input type="text" onChange={onChange} value={value} />
            <button type="button" onClick={onClick}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input
