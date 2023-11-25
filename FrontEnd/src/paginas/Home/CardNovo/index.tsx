import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

interface IProps {}
interface IState {
  data: any[];
  value: string;
}

class CardNovo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [],
      value: '',
    };
  }

  public componentDidMount(): void {
    fetch('https://app-server-web3-6f311eb61834.herokuapp.com/portfolios')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      value: event.currentTarget.value,
    });
  }

  public render(): JSX.Element {
    const { data } = this.state;

    return (
      <Card.Group centered>
        {data.map((card: any, index: number) => (
          <Card
            key={card._id} 
            href={`http://localhost:3000/${card.nomeFiltro}`}
            header={card.nomePortfolio}
            description={card.descricao}
            meta={`Rentabilidade ${card.rentabilidade12Meses}%`}
          />
        ))}
      </Card.Group>
    );
  }
}

export default CardNovo;
