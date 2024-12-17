// import { render, screen } from '@testing-library/react';
// import ScoreCard from '../components/ScoreCard';
// import '@testing-library/jest-dom';
// import { it, expect, describe } from 'vitest'

// describe('ScoreCard Component', () => {
//   const mockProps = {
//     filteredQuestions: [
//       {
//         icon: 'test-icon.png',
//         title: 'Test Title',
//       },
//     ],
//     score: 8,
//   };

//   it('renders the ScoreCard with correct props', () => {
//     render(<ScoreCard {...mockProps} />);

//     const icon = screen.getByAltText('Test Title icon');
//     expect(icon).toBeInTheDocument();
//     expect(icon).toHaveAttribute('src', 'test-icon.png');

//     const title = screen.getByText('title');
//     expect(title).toBeInTheDocument();

//     const score = screen.getByText('8');
//     expect(score).toBeInTheDocument();

//     const outOfText = screen.getByText('Out of 10');
//     expect(outOfText).toBeInTheDocument();
//   });

//   it('handles empty filteredQuestions gracefully', () => {
//     render(<ScoreCard filteredQuestions={[]} score={5} />);

//     const score = screen.getByText('5');
//     expect(score).toBeInTheDocument();

//     const outOfText = screen.getByText('Out of 10');
//     expect(outOfText).toBeInTheDocument();
//   });
// });
