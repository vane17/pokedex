import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import {StartButton} from './StartButton';
import { setFavorite } from '../actions';
import './PokemonList.css';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export {PokemonCard};