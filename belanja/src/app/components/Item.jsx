export default function Item({ item, onClickDelete, onClickToggle }) {
    return (
        <li key={item.id}>
            <input type='checkbox' checked={item.checked} onChange={() => onClickToggle(item.id)} />
            <span style={item.checked ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.name}</span>
            <button onClick={() => onClickDelete(item.id)}>&times;</button>
        </li>
    )
}