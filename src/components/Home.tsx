import { memo } from "react"
import cover from "../assets/poster2.jpg"

const Home = () =>{
    return(
        <div id="home">
            <img src={cover} alt="" />
        </div>
    )
}

export default memo(Home) 