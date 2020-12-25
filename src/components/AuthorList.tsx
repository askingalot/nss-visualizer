import { Card } from 'semantic-ui-react';
import { AuthorListProps } from '../types';
import { AuthorCard } from './AuthorCard';

export function AuthorList({ authors, deleteAuthor }: AuthorListProps) {
  return (
    <>
      <Card.Group itemsPerRow={2} centered>
        {authors.map((a) => (
          <AuthorCard key={a.id} author={a} deleteAuthor={deleteAuthor} />
        ))}
      </Card.Group>
    </>
  );
}