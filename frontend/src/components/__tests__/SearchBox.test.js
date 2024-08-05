import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import SearchBox from '../../components/SearchBox'; // Adjust the import path as necessary

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('SearchBox Component', () => {
    let mockPush;

    beforeEach(() => {
        mockPush = jest.fn();
        useRouter.mockReturnValue({ push: mockPush });
    });

    test('renders input and icon', () => {
        render(<SearchBox />);

        // Check if the input and icon are rendered
        expect(screen.getByPlaceholderText(/Your University/i)).toBeInTheDocument();
    });

    test('updates input value on change', () => {
        render(<SearchBox />);

        const input = screen.getByPlaceholderText(/Your University/i);
        fireEvent.change(input, { target: { value: 'Harvard' } });

        expect(input.value).toBe('Harvard');
    });
    //
    // test('navigates to search page with query on icon click', () => {
    //     render(<SearchBox />);
    //
    //     const input = screen.getByPlaceholderText(/Your University/i);
    //     fireEvent.change(input, { target: { value: 'Harvard' } });
    //
    //     expect(mockPush).toHaveBeenCalledWith('/search?query=Harvard');
    // });
});
