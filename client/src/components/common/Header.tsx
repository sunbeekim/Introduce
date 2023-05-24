import style from './Header.style.scss';
import '../../style/HeaderText.css';
console.log('컴포넌트 header');
const Header = () => {
    return (
		<div className = {style}>
        	<div className = "header">
				<div className = "HText">
					<h1>tryangle.</h1>
				</div>
				<div className = "HText">
					<h2>menu</h2>
				</div>
			
			
			</div>
		</div>
    );
}

export default Header;
