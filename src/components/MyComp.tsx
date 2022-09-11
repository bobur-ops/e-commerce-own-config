import * as React from 'react';

type MyProps = {
	children: React.ReactNode;
	object: { a: string } | null;
};
export const MyComp: React.FC<MyProps> = ({ children, object }) => {
	return <div onClick={async () => {}}>{object?.a}</div>;
};
