
import Header from '../components/common/Header'
import Body from '../components/common/Body'
import Footer from '../components/common/Footer'
import '../style/MainLayout.scss'


console.log('첫페이지');
const FirstPage = () => {
	
	return (
		<div className = 'MainLayout'>
			<div>
				<Header/>
			</div>
			<div>
				<Body/>				
			</div>
			<div>
				<Footer/>
			</div>
		</div>
    );
}
export default FirstPage;