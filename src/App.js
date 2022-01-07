import React, { useEffect } from 'react';
import './App.css';

const App = () => {

	useEffect(() => {
		window.FlexSDK.Button({
			createOrder (data, actions) {
				return actions.transaction.create({
					transactionId: "ABC-129384",
					items: [
						{
							description: "Macbook Pro 13",
							sku: "ABC123",
							cost: 120.34,
							brand: "Apple",
							condition: "new",
							quantity: 1,
							images: [ // optional
								"https://images.dog.ceo/breeds/husky/n02110185_11635.jpg" 
							],
							shipping: {
								cost: 10.33,
								date: (new Date()).toString(),
								method: "ground"
							}
						}
					]
				})
				},
				onDecision (data) {
					const decisionData = atob(data);
					console.log({ decisionData });
				}
		}).render('#flex-shopper');
	},[]);

	return (
		<div className="App">
			<div style={{ minHeight: '100%', width: '300px' }} id='flex-shopper'></div>
		</div>
	);
}

export default App;
