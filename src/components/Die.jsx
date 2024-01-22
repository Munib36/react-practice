export default function Die(props) {
    // let image = `./../public/dice${props.value}.png`
    // let image = `../../assets/dice${props.value}.png`.toString()
    return(
        <button
            className={props.on ? "active" : ""}
            onClick={() => props.handleClick(props.id)}
        >
            <img src={props.image} />
        </button>
    )
}