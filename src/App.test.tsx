import { render, screen } from '@testing-library/react';

import App from './App';

const LOGO = 'logo';
const BUTTON = 'Generate';
const INPUT_URL = 'url';

describe('Tests App', () => {
  it('should render logo', () => {
    render(<App />);
    const logo = screen.getByTestId(LOGO);
    expect(logo).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<App />);
    const title = screen.getByText('Avatar URL Generator');
    expect(title).toBeInTheDocument();
  });

  it('should render generate button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: BUTTON });
    expect(button).toBeInTheDocument();
  });

  it('should render size radio buttons', () => {
    render(<App />);
    const size = screen.getAllByRole('radio');
    expect(size).toHaveLength(3);
  });

  it('should render input URL', () => {
    render(<App />);
    const input = screen.getByTestId(INPUT_URL);
    expect(input).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);
    const footer = screen.getByText('Created by Rafael Guedes');
    expect(footer).toBeInTheDocument();
  });
});
