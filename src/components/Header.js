import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios'
import { ImCross } from 'react-icons/im'
import { Link } from "react-router-dom"
import './Header.css'
import { useEffect, useState } from "react";

const Header = ({ data, setFilterData, mapThis, handleSearch }) => {
    const {sends, setSends} = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [date, setDate] =  useState("")
    const [etat, setEtat] = useState("")
    const [poulet, setPoulet] = useState(false)
    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop/annonces")
            .then((resp) => resp.json())
            .then((res) => setSends(res) || console.log(res));
    }, [])
    useEffect(() => {
        console.log(poulet)
    },[poulet])


    const handleClick = () => {
        console.log(title,cat,price,picture, date, etat)
        axios.post("http://localhost:4242/BerserkShop/annonces/post",{title,cat,price,picture, date, etat})
        .then(res => setPoulet(!poulet) )
                    
    }
    return (
        
            
        <div className="headerContainer">
            <Link to='/'>
                <div className="holderLogo">
                    <img className="logo" src={vikingsLogo} alt="Logo" />
                </div>
            </Link>
            <div className="holderTitle">
                <h1>BERSERK SHOP .</h1>
                <div className="holderSearch">
                    <div className="searchBox" id='searchFirstBox'>
                        <GiHamburgerMenu className="holderBurger" />
                        <select id="selectCategorie" name="categories" onChange={(e) => setFilterData(e.target.value)}>
                            <option value="categorie">Categories</option>
                            <option value="arme">Armes</option>
                            <option value="propriete">Proprietes</option>
                            <option value="tresor">Tresors</option>
                        </select>
                    </div>
                    <div className="searchBox">
                        <AiOutlineSearch />
                        <input 
                        id="inputSearch" 
                        type="text" 
                        name="text" 
                        class="search" 
                        placeholder="Recherchez ici!" 
                        onChange={handleSearch}/>
                    </div>
                    <div id='searchButton'>
                        Rechercher ({mapThis === "default" ? data.length : mapThis.length})
                    </div>
                </div>
            </div>
            <div className="firstButton">
                <button className="firstButtonStyle" onClick={() => setIsOpen(!isOpen)}>
                    Poster son annonce
                </button>
                <div className={`containerModal ${isOpen ? "active" : ""}`}>
                    <div className="headerPoster">
                        <h1 className="berk">
                            BERKSERK SHOP.
                            <button className="croix" onClick={() => setIsOpen(!isOpen)}>
                            <ImCross className='cross'/>
                            </button>
                            
                        </h1>
                    </div>
                    <div className="holderContainer">
                        {/* {sends.map((send) => {
                            <>
                            <p>{send.name}</p>
                            <p>{send.categories_id}</p>
                            <p>{send.prix}</p>
                            <img src={send.image} alt={send.name} />
                            </>
                        })} */}
                        <h2>Commençons par l'essentiel!</h2>
                        <div className="titre">
                            <p2>Quel est le titre de l'annonce?</p2>
                            <div className="reponse">
                                <input className="searchs" type="text" name="title"onChange={(e)=>setTitle(e.target.value)}></input>
                                <div className="catégorie">
                                    <p3>Choisissez la catégorie du produit</p3>
                                    <div className="reponse">
                                        <input className="searchs" type="text" name="cat"onChange={(e)=>setCat(e.target.value)}></input>
                                    </div>
                                    <div className="prix">
                                        <p4>Entrez le prix</p4>
                                        <div className="reponse">
                                            <input className="searchs" type="text" name="price"onChange={(e)=>setPrice(e.target.value)}></input>
                                        </div>
                                        <div className='photo'>
                                        <p5>Collez l'url de la photo</p5>
                                        <div className="reponse">
                                        <input className="searchs" type="text" name="picture"onChange={(e)=>setPicture(e.target.value)}></input>
                                        </div>
                                        </div>
                                        <div className='photo'>
                                            <p5>Date</p5>
                                            <div className="reponse">
                                                <input className="searchs" type="text" name="date"onChange={(e)=>setDate(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className='photo'>
                                            <p5>Etats</p5>
                                            <div className="reponse">
                                                <input className="searchs" type="text" name="etat"onChange={(e)=>setEtat(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <button className="onglet" onClick={handleClick}>
                                        Déposer une annonce
                                        
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header