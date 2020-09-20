import React from 'react'
import Bouton from '../../../components/Boutons/Bouton/Bouton'

const pagination = (props) => {
    let paginations= []
    // On verifie qu'on a une liste de pays
    if(props.listePays) {
        let nbPages = props.listePays.length / 10
        if(props.listePays.length % 10 !== 0){
            nbPages++
        }
        for(let i = 1; i <= nbPages; i++) {
            paginations.push(
                <Bouton 
                    key={i} 
                    // onChange={} 
                    clic={() => props.numPage(i)}
                    isRegion={props.numPageActuelle === i} 
                    btnColor="btn-info"
                >{i}</Bouton>)
        }
    }
    return (
        <>
            {paginations}
        </>
    )
}

export default pagination