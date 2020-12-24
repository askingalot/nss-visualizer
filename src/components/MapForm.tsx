import { ChangeEvent, useState } from 'react';
import { Map, MapFormProps } from '../types';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import { toUrl } from '../utils';

export function MapForm({ saveMap, authors }: MapFormProps) {
  const [map, setMap] = useState({
    title: '',
    description: '',
    authorId: '',
    link: ''
  });

  const authorOptions = authors.map(a => ({
    key: a.id,
    value: a.id,
    text: `${a.firstName} ${a.lastName}`
  }));

  const submitForm = () => {
    const mapToSave = {
      id: '',
      title: map.title,
      description: map.description,
      authorId: map.authorId,
      authorName: authorOptions.find(ao => ao.key === map.authorId)?.text ?? "unknown",
      link: toUrl(map.link),
      createdBy: 'Andy',
      updatedBy: 'Andy',
      createdDateTime: new Date(),
      updatedDateTime: new Date()
    };
    saveMap(mapToSave);
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>, target: any) => {
    setMap({
      ...map,
      [target.id]: target.value
    });
  };

  return (
    <Form>
      <Form.Field
        id='title'
        control={Input}
        label='Title'
        placeholder='Title'
        onChange={onInputChange}
        autoFocus
      />
      <Form.Field
        id='description'
        control={TextArea}
        label='Description'
        placeholder='Description'
        onChange={onInputChange}
      />
      <Form.Field
        id="authorId"
        control={Select}
        options={authorOptions}
        label={{ children: 'Author', htmlFor: 'author' }}
        placeholder='Author'
        search
        searchInput={{ id: 'author' }}
        onChange={onInputChange}
      />
      <Form.Field
        id='link'
        control={Input}
        type='url'
        label='Link'
        placeholder='Link'
        onChange={onInputChange}
      />
      <Form.Field
        id='save'
        control={Button}
        content='Save'
        onClick={() => submitForm()}
      />
    </Form>
  );
}
