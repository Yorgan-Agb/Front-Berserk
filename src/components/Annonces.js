import './Annonces.css'
import Epee from '../Image/Epee.jpg'

const Annonces =(props) => {
    return (
        <div className="annonce">
            <div className='holderAnnonce'>
                <div id='gradientFilter'></div>
                <div className='holderImg'>
                    <img className='imgAnnonce' src={props.img}  alt='ImgAnnonces' />
                </div>
                <div className='textAnnonces'>
                    <h3 className='titreAnnonces'> {props.title}</h3>
                    <p className='or'>{props.prix} or </p>
                    <button className='btnLivraison'>Livraison possible</button>
                </div>
                <button className='btnSavoir'>En savoir plus</button>
                <div className='numAnnonces'>
                    <p className='num'>{props.date}</p>
                </div>
            </div>
        </div>
);
}

export default Annonces