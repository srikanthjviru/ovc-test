import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Container';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo users={[]} loadUsers={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should match with snapshot', () => {
  const component = renderer.create(
    <Demo users={[]} loadUsers={() => null} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
