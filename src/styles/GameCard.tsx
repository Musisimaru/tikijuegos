import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  gameId: number;
  title: string;
  subtitle?: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className='game-card'>
      <Link to={`/juegos/arrastrar/${props.gameId}`} className={`game-number-${props.gameId}`} />
      <span>{props.title}</span>
      {props.subtitle && <span><br/>{props.subtitle}</span>}
    </div>
  )
}

