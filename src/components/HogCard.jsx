import { useState } from "react"

function HogCard ({ name, specialty, greased, weight, medal, image }) {

    const [info, setInfo] = useState(false)

    function handleDetails () {
        setInfo (!info)
    }

    function Details () {
        return <div className="pigTile" style={{height: 425, width: 400, backgroundColor: "lightGray", fontSize: "2em"}} >
        <li style={{color: "#036"}} > specialty: {specialty} </li>
        <br />
        <li style={{color: "#f99"}} > {greased? "greased" : "not greased"} </li>
        <br />
        <li style={{color: "#f99"}} > weight {weight} </li>
        <br />
        <li className="achievementText" > {medal} </li>
        </div>
    }

    function ImageName () {
        return <div className="pigTile" style={{backgroundColor: "gray", borderColor: "black", borderRadius: 20}}>
        <h3 >{name}</h3>
        <img src={image} alt={name} style={{height: 425, maxWidth: 400 }} />
        <br />
        </div>
    }

    return (
            <div onClick={handleDetails} >
            { !info ?
                <ImageName />
            :
                <Details />
            }
        </div>

        /*<div >
            <div className="TwirlyPig">
            </div>
            <div className="navWrapper" >
            </div>
            <div className="filterWrapper" >
            </div>
            <div className="largeHeader">{name}
            </div>
            <div className="smallHeader">{name}
            </div>
            <div className="normalText" >{<ul>{name}</ul>}
            </div>
            <div className="hoggyText" > {name}
            </div>
            <div className="headerText" > {name}
            </div>
            <div className="achievementText" > {name}
            </div>
            <ul>{name}</ul>
            <div className="subtleText" >{name}
            </div>
            <div className="indexWapper" >
            </div>
            <div className="pigTile" >
            </div>
            <div className="minBackgroundSneak" >
                <img src={image} alt={name} />
            </div>
            <div className="maxBackgroundSneak" >
                <img src={image} />
            </div>
            <h3 className="pigTile" ></h3>
            <div>
            </div>
            <div className="clasic-Hog" style={{width:"300px", height:"300px", backgroundColor:"blue"}} >
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>*/
    )
}

export default HogCard