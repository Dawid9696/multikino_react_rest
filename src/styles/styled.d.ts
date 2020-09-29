/** @format */

import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		// borderRadius: string;
		backgroundColor: string;

		fontColors: {
			main: string;
			secondary: string;
			third: string;
			fourth: string;
		};
	}
}
