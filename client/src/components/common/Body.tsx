import Sample from '../../containers/sample'
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

console.log('컴포넌트 body');




const Body = () => {
	
	return(	
				
		<div>
			<Sample/>
		</div>
	
		
		
		

	);
}



export default Body