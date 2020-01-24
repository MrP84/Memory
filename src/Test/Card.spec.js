import React from "react";
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Card from "../App/Card";

describe('<Card />', () => {
  it('should trigger its `onClick` prop when clicked', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Card card="😀" onClick={onClick} feedback="hidden" index={0}/>)
    wrapper.simulate('click');
    expect(onClick).to.have.been.calledWith(0);
  })

  it('should match its reference snapshot', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Card card="😀" onClick={onClick} feedback="hidden" index={0}/>)
    expect(wrapper).to.matchSnapshot();
  })
})
