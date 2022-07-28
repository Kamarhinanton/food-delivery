import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderPanel from './HeaderPanel';

describe('<HeaderPanel />', () => {
  test('it should mount', () => {
    render(<HeaderPanel />);
    
    const headerPanel = screen.getByTestId('HeaderPanel');

    expect(headerPanel).toBeInTheDocument();
  });
});