import { Card } from 'semantic-ui-react';
import { MapListProps } from '../types/types';
import { MapCard } from './MapCard';

export function MapList({ maps, deleteMap }: MapListProps) {
  return (
    <>
      <Card.Group itemsPerRow={1} centered>
        {maps.map((m) => (
          <MapCard key={m.id} map={m} deleteMap={deleteMap} />
        ))}
      </Card.Group>
    </>
  );
}
