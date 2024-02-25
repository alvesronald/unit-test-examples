import React from "react";
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import Counter from "./Counter";

describe('Counter', () => {
   test('should render Counter', () => {
        render(<Counter />);
        
        const element = screen.getByText('add one')

        expect(element).toBeTruthy()
   })

   test('should add one when button is clicked', () => {
      render(<Counter />);
    
      const initialValue = screen.getByText('0');
      expect(initialValue).toBeTruthy();
    
      const addButton = screen.getByText('add one');
      fireEvent.press(addButton);
    
      const updatedValue = screen.getByText('1');
      expect(updatedValue).toBeTruthy();
    });

})