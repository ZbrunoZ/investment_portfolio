import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../PaginaBase/Banner';
import Formulario from "../../componentes/Formulario"
import "./Portfolio.css"
import { useParams } from 'react-router-dom';



interface Data {
    _id: number;
    nomePortfolio: string;
    nomeFiltro: string;
    indice: string;
    rentabilidade12Meses: number;
    rentabilidade60Meses: number;
    valorInicial: number;
    descricao: string;
    peso: Array<number>;
    address: Array<string>;
}

  


const Portfolio = () => {

    const [data, setData] = useState<Data[]>([]);
    const { filtro } = useParams<{ filtro: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://app-server-web3-6f311eb61834.herokuapp.com/portfolios',
            );
            setData(result.data.filter((item: Data) => item.nomeFiltro === filtro));
        };
        fetchData();
    }, [filtro]);
    
    return (
        <>
            <div>
                <Banner Titulo="Portfólios para você ficar tranquilo enquanto seu dinheiro rende" Subtitulo="Veja os detalhes do portfólio" TituloCorpo='INFORMAÇÕES DO PORTFÓLIO' />
            </div>
            <div className='div-portfolio'>
            <ul className='dados-portfolio'>
                {data.map(item => (
                    <li key={item._id} className='lista'>
                        <li><p className='nome'>Nome do portfólio: <strong>{item.nomePortfolio}</strong> </p></li>
                        <li> <p><strong>Descrição: </strong> {item.descricao}</p></li>
                        <li> <p><strong>Índice ANBIMA: </strong> {item.indice}</p></li>
                        <div className='rent'>
                            <li> <p><strong> | Rentabilidade dos últimos 12 meses: </strong>{item.rentabilidade12Meses}%</p> </li>
                            <li> <p><strong> | Rentabilidade dos últimos 60 meses: </strong>{item.rentabilidade60Meses}%</p></li>
                            <li> <p><strong> * Valor mínimo de aplicação: </strong>{item.valorInicial}</p></li>
                            <li><p>{item.peso}</p></li>
                        </div>
                        <div className='form-frame'><Formulario></Formulario></div>
                    </li>
                ))}
            </ul></div>
        </>
    );
}

export default Portfolio