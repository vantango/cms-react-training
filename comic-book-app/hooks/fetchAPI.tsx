import { useState, useEffect} from 'react';
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/comics";
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_API_PRIVATE_KEY;
const ts = new Date().getTime();
const auth = ts + API_PRIVATE_KEY + API_PUBLIC_KEY;
const crypto = require('crypto');
const hash = crypto.createHash("md5").update(auth).digest("hex");
const apiUrl = BASE_URL + "?ts=" + ts + "&apikey=" + API_PUBLIC_KEY + "&hash=" + hash;

export function fetchAPI() {
	const [comicsData, setComicsData] = useState();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getComicsData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(apiUrl)
				console.log("response", res.data.data.results);
				setComicsData(res.data.data.results);
				console.log("Success!")
			} catch (err) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		getComicsData()
	}, [])

	return (
		[comicsData, error, loading]
	)
}