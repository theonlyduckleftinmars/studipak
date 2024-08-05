import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import '@testing-library/jest-dom';

test('renders StudiPak link and navigation links', () => {
    render(<Header />);

    const studiPakLink = screen.getByText(/StudiPak/i);
    expect(studiPakLink).toBeInTheDocument();

    const signUpLink = screen.getByText(/Sign Up/i);
    const logInLink = screen.getByText(/Log In/i);
    expect(signUpLink).toBeInTheDocument();
    expect(logInLink).toBeInTheDocument();
});
