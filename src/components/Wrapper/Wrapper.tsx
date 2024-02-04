import React from 'react';

const Wrapper = ({children}) => {
	return (
		 <div className="min-h-screen flex mx-auto flex-col flex-wrap items-center content-center max-w-[1440px]">
			  {children}
		 </div>
	);
};

export default Wrapper;