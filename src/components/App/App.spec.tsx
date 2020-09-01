import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App component renders', () => {

    let container = shallow(<App />);

    it('should render a Div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })

    it('should render a Timer Comp', () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true);
    })
})