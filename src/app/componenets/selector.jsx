const Selector = ({percentage}) => {
    const mainstyle = {
        width: "auto",
        height: "100%",
        position: 'relative',
    }
    const backstyle = {
        width: percentage+"%",
        height: "100px",
        backgroundColor: "aqua",
        position: "absolute",
        top: '0',
        left: '0',
        zIndex: '0'
    }
    const imgStyle = {
        position: 'relative',
        zIndex: '1', 
    };
    return (
        <main style={mainstyle}>
            <img src="/frame5.svg" style={imgStyle} alt="" />
            <div style={backstyle}></div>
        </main>
    )
}

export default Selector;