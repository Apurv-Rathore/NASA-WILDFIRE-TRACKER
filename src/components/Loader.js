import loader from "./loader.gif"

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader}></img>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader;