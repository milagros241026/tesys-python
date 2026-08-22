import SlamCard, { GrandSlam } from './components/SlamCard/SlamCard';

const grandSlams: GrandSlam[] = [ /* ...tus 4 objetos... */ ];

// dentro del return:
<div className="slams-grid">
  {grandSlams.map((slam) => (
    <SlamCard key={slam.id} slam={slam} />
  ))}
</div>