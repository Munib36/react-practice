export default function Die(props) {
    let image = `../assets/dice${props.value}.png`
    return(
        <button
            className={props.on ? "active" : ""}
            onClick={() => props.handleClick(props.id)}
        >
            {/* {props.value} */}
            <img src={image} />
        </button>
    )
}