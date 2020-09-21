import React from 'react'

const etablissements = (props) => {
    let datesEts = ""
    let horairesEts = ""
    let dates = props.infosEts.properties.horaires
    if(dates) {
        datesEts = dates.map((date, index) => {
            let horaires = date.heures
            horairesEts = horaires.map((horaire, index) => {
                return <li key={index} className="m-0">Du {date.du} au {date.au} - De {horaire.de} à {horaire.a}</li>
            })
        })
    }else {
        horairesEts = <li className="m-0">Pas d'horaires</li>
    }
    

    return (
        <>
            <div className="d-flex flex-column border m-1 rounded">
                <div className="row no-gutters bg-light">
                    <p className="m-2">{props.etsSingulier} de {props.infosEts.properties.adresses[0].commune}</p>
                </div>
                <div className="d-flex flex-column">
                    <h4 className="my-2 pl-2">Téléphone : {props.infosEts.properties.telephone}</h4>
                    <p className="font-weight-bold mb-0 pl-2">Adresse :</p>
                    <p className="mb-0 pl-2">{props.infosEts.properties.adresses[0].lignes[0]}</p>
                    <p className="m-0 mb-2 pl-2">{props.infosEts.properties.adresses[0].codePostal} {props.infosEts.properties.adresses[0].commune}</p>
                    <p className="font-weight-bold pl-2 m-0">Horaires : </p>
                    <ul className="m-0">
                        {horairesEts}
                    </ul>
                    <div className="pl-2 my-2">
                        <a href={props.infosEts.properties.url} target="_blank" className="btn btn-primary">Visiter le site web</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default etablissements