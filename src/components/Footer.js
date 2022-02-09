import './Footer.css'

const Footer =() => {
    return (
        <div className="mainFooter">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h4>MENTIONS LEGAL</h4>
                        <ul className="listeUnstyled">
                            <li>numéro: 27272727</li>
                            <li>Siège social: Kattegat</li>
                            <li>Où nous trouvez: Dans le marché</li>
                        </ul>
                    </div>
                    <hr className='trait'/>
                    <div className="col2">
                        <h4>STAFF</h4>
                        <ul className="listeUnstyled">
                            <li>Jules le Noble</li>
                            <li>Yorgan Côte de fer</li>
                            <li>Matthias la Foudre</li>
                            <li>Déo le Fléau</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} BERSERK SHOP INC | All right reserved | Terms Of Service | Privacy
                    </p>

                </div>
            </div>
            
        </div>
);
}

export default Footer