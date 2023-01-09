import React from 'react';

export function Filter() {
	return (
		<div className="filter">
			<label htmlFor="filter">Filter by:</label>
			<select  className="character-filter">
				<option disabled selected hidden>Character</option>
				<option value="">character</option>
			</select>
			<select className="creator-filter">
				<option disabled selected hidden>Creator</option>
				<option value="">creator</option>
			</select>
		</div>
	)
}