import React from 'react';
import Renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

configure({ adapter: new Adapter() });

describe('password input', () => {
  it('should render a password input without quality bar (using Enzyme)', () => {
    const result = shallow(
      <PasswordInput
        label="Password"
        htmlFor="password"
        value="gj32o5hasd"
        onChange={jest.fn()}
        quality={50}
        showQuality={false}
      />
    );
    expect(result.html()).toMatchSnapshot();
  });

  it('should render a password input without quality bar (using test-renderer)', () => {
    const result = Renderer.create(
      <PasswordInput
        label="Password"
        htmlFor="password"
        value="gj32o5hasd"
        onChange={jest.fn()}
        quality={50}
        showQuality={false}
      />
    ).toJSON();
    console.log(result);
    expect(result).toMatchSnapshot();
  });

  it('should toggle input type when eyeicon is clicked', () => {
    const component = mount(
      <PasswordInput
        label="Password"
        htmlFor="password"
        value="gj32o5hasd"
        onChange={jest.fn()}
        quality={50}
        showQuality={false}
      />
    );
    /** Default input type should be password */
    expect(component.find('input').getElement().props.type).toEqual('password');

    /** Input type should toggle after click on toggle icon */
    component.find('.password-visibility-toggle').simulate('click');
    expect(component.find('input').getElement().props.type).toEqual('text');

    /** Input type should toggle after click on toggle icon */
    component.find('.password-visibility-toggle').simulate('click');
    expect(component.find('input').getElement().props.type).toEqual('password');
  });
});
