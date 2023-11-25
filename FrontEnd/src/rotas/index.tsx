import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import Inflacao from "../paginas/Inflacao"
import Prefixado from "../paginas/Prefixado"
import Selic from "../paginas/Selic"



const Rotas = () => {
    return (<Routes>
    <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/inflacao' element={<Inflacao />}>
        </Route>
        <Route>
        <Route path="/prefixado" element={<Prefixado />} />
        <Route path="/selic" element={<Selic />} />
         </Route>
      </Route>
    </Routes>)
}

export default Rotas