import { createContext , useState } from "react";
import Data from "../data/Data";
const EpisodeContext = createContext()

export const EpisodeProvider  = ({children})=>{
    const [data , setData] = useState(Data)
    


    return <EpisodeContext.Provider value={{
        data,
    }}>
    {children}
</EpisodeContext.Provider>
}

export default EpisodeContext