import { useEffect, useState} from 'react';
import { fetchAPI } from "../hooks/fetchAPI";

// type FilterProps = {
// 	filter?: string | number;
// 	setFilter: string;
// }

const characterOptions = [
	{
		id: 1009368,
		name: "Iron Man"
	},
	{
		id: 1009220,
		name: "Captain America"
	},
	{
		id: 1009664,
		name: "Thor"
	},
	{
		id: 1009268,
		name: "Deadpool"
	},
	{
		id: 1009562,
		name: "Scarlet Witch"
	},
	{
		id: 1009189,
		name: "Black Widow"
	},
	{
		id: 1009707,
		name: "Wasp"
	},
	{
		id: 1010763,
		name: "Gamora"
	}
]

const creatorOptions = [
	{
		id: 12787,
		name: "Kate Leth"
	},
	{
		id: 24,
		name: "Brian Michael Bendis"
	},
	{
		id: 30,
		name: "Stan Lee"
	},
	{
		id: 32,
		name: "Steve Ditko"
	},
	{
		id: 196,
		name: "Jack Kirby"
	}
]

export function Filter() {
	// const [characterOptions, setCharacterOptions] = useState();
	// const [creatorOptions, setCreatorOptions] = useState();

	// const [comicsFetch] = fetchAPI();

	// function characterOptions() {
	// 	document.get
	// }

	// if()

	// useEffect(() => {
	// 	fetchAPI()
	// }, [])

	return (
		<div className="filter">
			<label htmlFor="filter">Filter by: </label>
			<select  className="character-filter" aria-label="Filter By Character">
				<option disabled selected hidden>Character</option>
				{characterOptions.map((character) => {
					return <option value={character.id}>{character.name}</option>
				})}
			</select>
			<select className="creator-filter" aria-label="Filter By Creator">
				<option disabled selected hidden>Creator</option>
				{creatorOptions.map((creator) => {
					return <option value={creator.id}>{creator.name}</option>
				})}
			</select>
		</div>
	)
}