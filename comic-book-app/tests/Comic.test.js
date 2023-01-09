import Home from "../pages/index";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { Detail } from "../components/Detail";

afterEach(cleanup);

describe('<Detail />', () => {
	it("verifies that title, issue, date, and creator data is properly rendering", () => {
		const comicsData = [
			{
				"title": "Test Title",
				"issueNumber": 43,
				"dates": [
					{
						"dates": "2022-10-19T00:00:00-0400",
						"type": "focDate"
					}
				],
				"creators": {
					"items": [
						{
							"name": "Test Creators"
						}
					]
				}
			}
		]

		const { getByTestId } = render(<Detail comicsData={comicsData} />);

		const title = comicsData.getByTestId('comic-title');
		const issue = comicsData.getByTestId('comic-issue');
		const date = comicsData.getByTestId('comic-date');
		const creators = comicsData.getByTestId('comic-creators');

		expect(title.textContent).toBeInTheDocument();
		expect(issue.textContent).toBeInTheDocument();
		expect(date.textContent).toBeInTheDocument();
		expect(creators.textContent).toBeInTheDocument();
	})
})
