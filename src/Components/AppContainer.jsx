/* eslint-disable react/prop-types */

export const AppContainer = ({ children }) => {
	return (
		<div className="m-auto max-w-7xl flex flex-col justify-between">
			{children}
		</div>
	);
};
