import { useEffect, useState } from "react"
import { getData } from "../getData";
import { Typing } from './../type';
import Header from "./Header";
import Card from "./Cards";

const Main = () => {

    const [datas, setDatas] = useState<Typing[]>([])

    useEffect(() => {
        getData().then(data => { setDatas(data) })
    }, [])


    return (
        <div>
            <Header dataHead={datas} />
            <Card data={datas} />
        </div>
    );
};

export default Main;