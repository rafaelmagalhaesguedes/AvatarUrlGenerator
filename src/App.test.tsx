import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

const LOGO = 'logo';
const BUTTON = 'Generate';
const INPUT_URL = 'url';
const RANDOM_AVATAR = 'Random Avatar';

describe('Tests Fetch Api', () => {
  it('fetches a new avatar', async () => {
    const avatar = {
      results: [
        {
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        },
      ],
    };

    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => avatar,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse as Response);

    render(<App />);
    const button = screen.getByRole('button', { name: BUTTON });
    fireEvent.click(button);

    const renderedAvatar = await screen.findByAltText(RANDOM_AVATAR);
    expect(renderedAvatar).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  });
});

describe('Tests Copy to Clipboard', () => {
  it('should copy to clipboard', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: BUTTON });
    fireEvent.click(button);

    const avatar = screen.getByAltText(RANDOM_AVATAR);
    fireEvent.click(avatar);

    const copied = screen.getByTestId('copied');
    expect(copied).toBeInTheDocument();
  });
});

describe('Tests Render elements on App', () => {
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

  it('should click generate button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: BUTTON });
    button.click();

    const avatar = screen.getByAltText(RANDOM_AVATAR);
    expect(avatar).toBeInTheDocument();
  });

  it('should render random avatar', () => {
    render(<App />);
    const avatar = screen.getByAltText(RANDOM_AVATAR);
    expect(avatar).toBeInTheDocument();
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
