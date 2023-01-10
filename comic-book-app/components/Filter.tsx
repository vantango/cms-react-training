import { useState} from 'react';
import { fetchAPI } from "../hooks/fetchAPI";

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

type FilterProps = {
	filter?: string | number;
	setFilter: string;
}

export function Filter() {
	// const [characterOptions, setCharacterOptions] = useState();
	// const [creatorOptions, setCreatorOptions] = useState();

	// const [comicsFetch] = fetchAPI();

	// function characterOptions() {
	// 	document.get
	// }

	// return (
	// 	<div className="filter">
	// 		<label htmlFor="filter">Filter by: </label>
	// 		<select  className="character-filter" >
	// 			<option disabled selected hidden>Character</option>
	// 			{characterOptions.map((item) => {
	// 				return <option value={item.id}>{item}</option>
	// 			})}
	// 		</select>
	// 		<select className="creator-filter">
	// 			<option disabled selected hidden>Creator</option>
	// 			<option value="12787">Kate Leth</option>
	// 		</select>
	// 	</div>
	// )
}