export default function Die(props) {
    let image = `./../public/dice${props.value}.png`
    return(
        <button
            className={props.on ? "active" : ""}
            onClick={() => props.handleClick(props.id)}
        >
            <img src={image} />
        </button>
    )
}