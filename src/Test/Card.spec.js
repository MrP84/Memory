import React from "react";
import { shallow } from 'enzyme';
import Card from "../App/Card";

describe('<Card />', () => {
  it('should trigger its `onClick` prop when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Card card="😀" onClick={onClick} feedback="hidden" index={0}/>)
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledWith(0);
  })
})
