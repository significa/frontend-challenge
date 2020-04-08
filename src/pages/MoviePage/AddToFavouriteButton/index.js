import React, { useState, useCallback } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

import { Container } from './styles';

export default function AddToFavouriteButton() {
	const [favourite, setFavourite] = useState(false);

	const handleAddToFavourites = useCallback(() => {
		setFavourite(!favourite);
	}, [favourite]);

	return (
		<Container onClick={handleAddToFavourites} favourite={favourite}>
			{favourite ? <IoIosHeart size={16} /> : <IoIosHeartEmpty size={16} />}
			<span>Add to favourites</span>
		</Container>
	);
}
