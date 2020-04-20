import React from 'react';

//css
import {
	ButtonPrimaryStyle,
	ButtonPrimaryActiveStyle,
	ButtonLinkStyle,
	ButtonCardStyle
} from '../Styles/styles';


////
export const ButtonPrimary = (props) => {
	if (props.isActive) {
		return (
			<ButtonPrimaryActiveStyle type='button' onClick={props.onClick} data-testid='buttonPrimaryTrue'>
				{props.icon && <i className={props.icon} aria-hidden='true' />}
				{props.children}
			</ButtonPrimaryActiveStyle>
		);
	} else {
		return (
			<ButtonPrimaryStyle type='button' onClick={props.onClick} data-testid='buttonPrimaryFalse'>
				{props.icon && <i className={props.icon} aria-hidden='true' />}
				{props.children}
			</ButtonPrimaryStyle>
		);
	}
};

export const ButtonLink = (props) => (
	<ButtonLinkStyle type='button' onClick={props.onClick} data-testid='buttonLink'>
		{props.icon && <i className={props.icon} aria-hidden='true' />}
		{props.children}
	</ButtonLinkStyle>
);

export const ButtonCard = (props) => (
	<ButtonCardStyle type='button' onClick={props.onClick} data-testid='buttonCard'>
		{props.icon && <i className={props.icon} aria-hidden='true' data-testid='buttonCardIcon' />}
		{props.children}
	</ButtonCardStyle>
);
