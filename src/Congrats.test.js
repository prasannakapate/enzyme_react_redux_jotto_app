import Enzyme, { shallow } from 'enzyme';

import Congrats from './Congrats';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);
test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe('');
});
