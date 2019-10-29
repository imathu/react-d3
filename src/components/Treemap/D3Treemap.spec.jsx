import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import D3Treemap from './D3Treemap';

import { data1 } from './data';

describe('D3Treemap', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<D3Treemap data={data1} height={300} width={200} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('count nodes', () => {
    const wrapper = mount(<D3Treemap data={data1} height={300} width={200} />);
    expect(wrapper.find('.node').length).toBe(30);
  });
});
