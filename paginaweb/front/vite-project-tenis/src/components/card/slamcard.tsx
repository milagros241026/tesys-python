import './SlamCard.css';
import { GrandSlam } from '../../types';

interface SlamCardProps {
  slam: GrandSlam;
}

const getSlug = (nombre: string): string => {
  if (nombre === 'Roland Garros') return 'roland-garros';
  if (nombre === 'Wimbledon') return 'wimbledon';
  if (nombre === 'US Open') return 'us-open';
  return 'australian';
};

function SlamCard({ slam }: SlamCardProps) {
  return (
    <div className={`slam-card slam-card--${getSlug(slam.nombre)}`}>
      <div className="slam-card__header">
        <h3 className="slam-card__name">{slam.nombre}</h3>
        <span className="slam-card__country">{slam.pais}</span>
      </div>

      <div className="slam-card__meta">
        <span>{slam.ciudad}</span>
        <span>{slam.superficie}</span>
        <span>{slam.fecha}</span>
      </div>

      <p className="slam-card__description">{slam.descripcion}</p>
    </div>
  );
}

export default SlamCard;