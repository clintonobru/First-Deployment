import gift from "../Media/cow.jpg"
function Rules() {
    const name = "OTS";

    return (
        // Must use a parent element for multiple element either use DIV tag or a react.fragment which is an empty tag
        <>
            <h1>Hello React</h1>
            <p>All about react</p>

            {/* images are self closing tag they require a closing slash */}
            <img className="img" src={gift} alt="gift" />

            {/* Use curly braces to input javaScript expression inside of JXS */}
            <h3>The name of this Academy is {name}</h3>
        </>
    );
}

export default Rules;
