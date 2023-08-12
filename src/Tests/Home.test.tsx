import { render, screen } from '@testing-library/react';
import Home from 'src/Pages/Transactions';

test('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});
