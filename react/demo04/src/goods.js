import React from 'react';

class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {goods:[
      {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
      {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
      {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
      {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
      {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
      {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
    ]}
  }
  render() { 
    console.log(this.state.goods)
    let sportingGoods = this.state.goods.filter((item) => {
      return item.category === "Sporting Goods"
    })
    let electronics =  this.state.goods.filter((item) => {
      return item.category === "Electronics"
    })
    return ( 
        <div >
          <header>
            <span style={{marginRight:'50px'}}>Name</span>
            <span>Price</span>
          </header>
          <section>
            <h2>Sporting Goods</h2>
            {sportingGoods.map((item,index) =>{
              return (<p key={index}><span>{item.name}</span> <span>{item.price}</span></p>)
            })} 
          </section> 
          <section>
            <h3>
            Electronics
            </h3>
            {
              electronics.map((item,index) => {
                return (<p key={index}><span>{item.name}</span><span>{item.price}</span></p>)
              })
            }
          </section>
        </div>

     );
  }
}
 
export default Goods;