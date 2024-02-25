function NotDone(props) {
    const { number, active } = props;
    return (
        <div
            style={{
                width: "25px",
                height: "25px",
                backgroundColor: "#daeefa",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: active ? "black" : "white",
                color: active ? "white" : "black",
                border: "1px solid #bab7b7",
            }}
        >
            {number}
        </div>
    )
}

export default NotDone