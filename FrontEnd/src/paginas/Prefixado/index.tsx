

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../PaginaBase/Banner';

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

const Prefixado = () => {

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

  const filteredData = data.filter(item => item._id === 2);

    return (
      <><div>
        <Banner Titulo="Com portfólio prefixado, você sabe exatamente quanto está ganhando" Subtitulo="Veja os detalhes do portfólio" TituloCorpo='PORTFÓLIO PREFIXADO' />
      </div>
      <h1>Dados do portfólio Selic</h1><ul>
          {filteredData.map(item => (
            <li key={item._id}>
              <li> {item.nomePortfolio}</li>
              <li> {item.descricao}</li>
              <li> {item.indice}</li>
              <li> {item.rentabilidade12Meses} </li>
              <li> {item.rentabilidade60Meses}</li>
              <li> {item.valorInicial}</li>
            </li>
          ))}
        </ul></>
    );
  }


export default Prefixado