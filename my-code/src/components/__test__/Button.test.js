import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ButtonCard, ButtonLink, ButtonPrimary } from '../Button';

afterEach(cleanup);

const defaultProps = {
	icon: 'icon'
};

describe('button click', () => {
	it('calls "onClick" prop on ButtonPrimary click', () => {
		const onClick = jest.fn();
		const { getByTestId, rerender } = render(<ButtonPrimary icon='icon' isActive onClick={onClick} />);
		fireEvent.click(getByTestId('buttonPrimaryTrue'));
		expect(onClick).toHaveBeenCalled();

		// Change props isActive='false'
		rerender(<ButtonPrimary {...defaultProps} onClick={onClick} />);
		fireEvent.click(getByTestId('buttonPrimaryFalse'));
		expect(onClick).toHaveBeenCalled();
	});

	it('calls "onClick" prop on ButtonLink click', () => {
		const onClick = jest.fn();
		const { getByTestId } = render(<ButtonLink {...defaultProps} onClick={onClick} />);

		fireEvent.click(getByTestId('buttonLink'));
		expect(onClick).toHaveBeenCalled();
	});

	it('calls "onClick" prop on ButtonCard click', () => {
		const onClick = jest.fn();
		const { getByTestId } = render(<ButtonCard {...defaultProps} onClick={onClick} />);

		fireEvent.click(getByTestId('buttonCard'));
		expect(onClick).toHaveBeenCalled();
	});

	it('Without icon', () => {
		const { getByTestId } = render(<ButtonCard icon='fa-flag' />);
		const icon = getByTestId('buttonCardIcon');
		expect(icon.className).toEqual('fa-flag');
	});
});
