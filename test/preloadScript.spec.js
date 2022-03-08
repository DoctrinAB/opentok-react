import React from "react";
import { mount } from "./enzyme";
import preloadScript from "../src/preloadScript";

describe("preloadScript", () => {
	let oldOT;
	beforeEach(() => {
		oldOT = global.OT;
	});

	afterEach(() => {
		global.OT = oldOT;
	});
	it("Should render loadingDelegate when OT is not available", () => {
		global.OT = undefined;

		const OTModule = preloadScript(() => (
			<div className="opentok-module" />
		));
		const loadingDelegate = <div className="loading-delegate" />;
		const wrapper = mount(<OTModule loadingDelegate={loadingDelegate} />);
		console.log("WRAP", wrapper.debug());

		const divContainer = wrapper.find("div.loading-delegate");
		expect(divContainer.length).toBe(1);
	});

	it("Should render its inner component when OT is available", () => {
		global.OT = {};

		const OTModule = preloadScript(() => (
			<div className="opentok-module" />
		));
		const loadingDelegate = <div className="loading-delegate" />;
		const wrapper = mount(<OTModule loadingDelegate={loadingDelegate} />);

		const divContainer = wrapper.find("div.opentok-module");
		expect(divContainer.length).toBe(1);
	});
});
