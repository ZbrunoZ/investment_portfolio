import React, { Component } from 'react';
import { Card, Icon, SemanticICONS, Button } from 'semantic-ui-react';
import inflacao from './imagens/inflacao.jpg';
import prefixado from './imagens/prefixado.jpg';
import selic from './imagens/selic.jpg';

interface IProps {}
interface IState {
  data: any[];
  value: string;
  hoveredCardId: string | null;
}

interface Imagens {
  [key: string]: string;
}

class CardNovo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [],
      value: '',
      hoveredCardId: null,
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

  private getImagemByNomeFiltro(nomeFiltro: string): string {
    const imagens: Imagens = {
      inflacao,
      prefixado,
      selic,
    };

    return imagens[nomeFiltro] || '';
  }

  private handleMouseEnter = (cardId: string): void => {
    this.setState({
      hoveredCardId: cardId,
    });
  };

  private handleMouseLeave = (): void => {
    this.setState({
      hoveredCardId: null,
    });
  };

  public render(): JSX.Element {
    const { data, hoveredCardId } = this.state;

    return (
      <Card.Group centered>
        {data.map((card: any, index: number) => {
          let icon: SemanticICONS | undefined = undefined;

          if (card.nomeFiltro === 'inflacao') {
            icon = 'file alternate outline';
          } else if (card.nomeFiltro === 'prefixado') {
            icon = 'chart bar';
          } else if (card.nomeFiltro === 'selic') {
            icon = 'money bill alternate outline';
          }

          return (
            <Card className='ui.card'
              key={card._id}
              image={this.getImagemByNomeFiltro(card.nomeFiltro)}
              header={card.nomePortfolio}
              meta={
                <span style={{ color: 'black' }}>
                  {`Rentabilidade:    `}
                  {icon && <Icon name={icon} color="green" />}
                  <span style={{ color: 'green' }}>{`${card.rentabilidade12Meses} %`}</span>
                </span>
              }
              extra={
                    <Button primary>
                      <a href={`http://localhost:3000/${card.nomeFiltro}`}
                        style={{ color: 'white' }}>
                          Invista agora
                      </a>
                    </Button>
              }
              description={hoveredCardId === card._id ? card.descricao : ''}
              onMouseEnter={() => this.handleMouseEnter(card._id)}
              onMouseLeave={this.handleMouseLeave}
              style={{ cursor: 'pointer', 
                       border: hoveredCardId === card._id ? '2px solid #007bff' : 'none' }}
            />
          );
        })}
      </Card.Group>
    );
  }
}

export default CardNovo;