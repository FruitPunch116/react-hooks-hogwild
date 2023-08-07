import { useState } from "react"
import HogCard from "./HogCard"

function HogList ({ hogs }) {

    const [search,setSearch] = useState("")
    const [ filterGreased, setFilterGreased ] = useState("")

    const filteredList = hogs.filter(hog => (hog.name.toLowerCase().includes(search.toLowerCase())
    || (hog["highest medal achieved"].toLowerCase().includes(search.toLowerCase())) )
    &&
    (filterGreased === ""
    || (filterGreased === "greased" ? hog.greased : false) 
    || (filterGreased === "ungreased" ? !hog.greased : false)))

    const mappedHogs = filteredList.map(hog => {
        return <HogCard name={hog.name} 
        specialty={hog.specialty} 
        greased={hog.greased} 
        weight={hog.weight}
        medal={hog["highest medal achieved"]} 
        image={hog.image} />
    })

    function handleSearch (e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <button onClick={()=> setFilterGreased("greased")} >Greased</button>
            <button onClick={()=> setFilterGreased("ungreased")} >UnGreased</button>
            <button onClick={()=> setFilterGreased("")} >Show All</button>
            <input type="text" placeholder="Introduce Hog Name" onChange={(e)=> handleSearch(e)} />
            <div /*style={ { display: "flex" } }*/ >{mappedHogs}</div>
        </div>
    )
}

export default HogList