import React from "react";
import { render, screen } from '@testing-library/react-native';
import Person from "./Person";


describe('Person component', () => {
    test('should render Person component', () => {
        render(<Person name="Ronald" />)
    
        const element = screen.getByText(/My name is Ronald/i);
    
        expect(element).toBeTruthy();
    })

    test('should render Person component (TestId)', () => {
        render(<Person name="Ronald" />)
    
        const element = screen.getByTestId('person-component');

        screen.debug()
    
        expect(element).toBeTruthy()
    })
})