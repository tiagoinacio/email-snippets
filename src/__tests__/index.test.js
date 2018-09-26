import ReactDOM from 'react-dom';
import '..';

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));

it('should render the Application', () => {
    expect(ReactDOM.render).toHaveBeenCalled();
});