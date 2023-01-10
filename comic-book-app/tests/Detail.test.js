import "@testing-library/jest-dom";
import { cleanup, render, waitFor } from "@testing-library/react";
import { Comic } from "../components/Comic";

global.fetch = require('jest-fetch-mock')

afterEach(cleanup)

console.error = jest.fn();

test('<Comic />', async () => {
	fetch.mockResponseOnce(JSON.stringify({
		title: "Test Title",
		issueNumber: 43
	}))

	const dates = [
		{
			date: "2022-10-19T00:00:00-0400",
			type: "focDate"
		}
	]

	const thumbnail = {
		path: "https://place-hold.it/200x200/green/yello",
		extension: "jpg"
	}

	const creators = {
		items: [{
			name : "Fake Creator"
		}]
	}

	const { getByTestId } = render(<Comic title="Test Title" issueNumber="43" dates={dates} thumbnail={thumbnail} creators={creators} />);

	await waitFor(() => {
		getByTestId("title")
		getByTestId("issueNumber")
		getByTestId("dates")
		getByTestId("creators")
	})

	expect(getByTestId("title").textContent).toBe("Test Title");
	expect(getByTestId("issueNumber").textContent).toBe("43");
	expect(getByTestId("dates").textContent).toBe("October 18, 2022");
	expect(getByTestId("creators").textContent).toBe("Fake Creator");
})
