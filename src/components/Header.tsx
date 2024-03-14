import { Typing } from "../type";

const Header = (props: { dataHead: Typing }) => {

    const firstItem = props.dataHead[0]

    return (
        <>
            <header>
                <nav>
                    <span className="icon"><i className="fa-solid fa-bars-staggered"></i></span>
                    <h1>LACOSTE</h1>
                    <span>En</span>
                </nav>
                <div className="container">
                    <div className="header">
                        <div className="header-text">
                            <h2>{firstItem && firstItem.title}</h2>
                            <p>{firstItem && firstItem.description}</p>
                            <button>Buy {firstItem && firstItem.price}</button>
                        </div>
                        <div className="header-img">
                            <img src={firstItem && firstItem.image} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;