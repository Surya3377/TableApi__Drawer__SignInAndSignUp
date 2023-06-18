import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });


test("checkinh h1 content",() => {
     const wrapper = shallow(<App />);
     expect(wrapper.find("h1").text()).toContain("Hello World")
})
