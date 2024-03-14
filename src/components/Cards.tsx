import { useState } from 'react';
import { Typing } from '../type';
import Item from './Item';


const Cards = (props) => {

    const { data } = props

    const [value, setValue] = useState<string>('')



    return (
        <div className='container'>
            <form>
                <div className='search'>
                    <input type="text" name="" id="" placeholder='Search' onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className='select'>
                    <select name="filter" id="">
                        <option value="ucuzdan">Ucuzdan Bahaya</option>
                        <option value="bahadan">Bahadan Ucuza</option>
                    </select>
                </div>
            </form>
            <div className='cards'>
                {

                    data && data.filter((item) => item.name.includes(value))
                        .map((items: string, idx: number) => (
                            <div className="card" key={idx}>
                                <div className="card-img">
                                    <img src={items.image} alt="" />
                                </div>
                                <div className="card-text">
                                    <h4>{items.title}</h4>
                                    <p>{items.description}</p>
                                    <button>add</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Cards;