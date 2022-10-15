import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { getWidth } from './ProgressBar';

configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
  it('getWidth should return 250 for width of 500 and percent of 50', () => {
    const width = getWidth({ width: 500, percent: 50 });
    expect(width).toBe(250);
  });
});
