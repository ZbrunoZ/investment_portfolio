import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../PaginaBase/Banner';
import Formulario from "../../componentes/Formulario"
import "./Selic.css"


interface Data {
    _id: number;
    nomePortfolio: string;
    nomeFiltro: string;
    indice: string;
    rentabilidade12Meses: number;
    rentabilidade60Meses: number;
    valorInicial: number;
    descricao: string;
  

  }

const Selic = () => {

    const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://app-server-web3-6f311eb61834.herokuapp.com/portfolios',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item => item._id === 3);

  return (
    <><><div>
      <Banner Titulo="Portfólio Selic para você ficar tranquilo enquanto seu dinheiro rende" Subtitulo="Veja os detalhes do portfólio" TituloCorpo='PORTFÓLIO SELIC' />
    </div>
    <div></div>
      <h1>Carteira IMA-S</h1><ul className='dados-portfolio'>
        {filteredData.map(item => (
          <li key={item._id} className='lista'>
            <li><p>Nome do portfólio: {item.nomePortfolio}</p></li>
            <li> <p>Descrição: {item.descricao}</p></li>
            <li> <p>Índice ANBIMA: {item.indice}</p></li>
            <li> <p>Rentabilidade dos últimos 12 meses:{item.rentabilidade12Meses}</p> </li>
            <li> <p>Rentabilidade dos últimos 60 meses:{item.rentabilidade60Meses}</p></li>
            <li> <p>Valor mínimo de aplicação:{item.valorInicial}</p></li>
            <div className='form-frame'><Formulario></Formulario></div>
          </li>
        ))}
      </ul></><div></div></>
  );
}

export default Selic

  

