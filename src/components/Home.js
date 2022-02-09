import Header from './Header'
import Annonces from "./Annonces";
import { useEffect, useState } from "react";
import Pattern from '../assets/pattern.png';
import './Home.css';

const Home = () => {

    const [data, setData] = useState([]);
    const [recups, setRecup] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [mapThis, setMapThis] = useState("default")
    const [filterData, setFilterData] = useState();

    console.log(mapThis)

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop/annonces")
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, [])

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop")
            .then((resp) => resp.json())
            .then((data) => setRecup(data))
    }, [])

    const handleSearch = (e) => {
        let value = e.target.value;
        setSearchTerm(value)
    }

    useEffect(() =>{
        let newArray = [];
        let newIndex;

        switch (filterData) {
            case 'categorie':
                newIndex = 0;
                setMapThis("default")
                break;
            case 'arme':
                newIndex = 1;
                break;
            case 'propriete':
                newIndex = 2;
                break;
            default:
                console.log("nothing to update")
        }

        if(newIndex > 0){
            newArray = data.filter(article => article.categories_id === newIndex)
            setMapThis(newArray)
        }
    }, [filterData])

    return(
        <div>
            <Header data={data} setFilterData={setFilterData} mapThis={mapThis}  handleSearch={handleSearch} />
            <h2 id='annonceRoyaume'>ANNONCE DU ROYAUME</h2>
            <img id='patternViking' src={Pattern} />
            <div className='containerAnnonce'>
                { data !== [] && mapThis === "default" && searchTerm === "" &&
                    data.slice(0, 5).map((article, i) => {
                        console.log(data[0].image)
                        if(article) {
                            return (
                                <Annonces
                                    img={article.image}
                                    title={article.name}
                                    prix={article.prix}
                                />
                            )
                        }
                        else {
                            return null
                        }
                    })
                }
                { data !== [] && mapThis !== "default" && searchTerm === "" &&
                    mapThis.map((article, i) => {
                        console.log(data[0].image)
                        if(article) {
                            return (
                                <Annonces
                                    img={article.image}
                                    title={article.name}
                                    prix={article.prix}
                                />
                            )
                        }
                        else {
                            return null
                        }
                    })
                }
                { mapThis === "default" && searchTerm !== "" &&
                    recups.filter((val, index) => {
                        return val.name.includes(searchTerm);
                    })
                    .map((val) => {
                        return (
                            <Annonces
                                key={val.id}
                                img={val.image}
                                title={val.name}
                                prix={val.prix}
                            />
                        )
                    })
                }
            </div>
        </div>
       
    )
}

export default Home