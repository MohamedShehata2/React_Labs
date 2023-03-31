import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'


export default class Products extends Component {
     productsLis = [
        {
          id: 1,
          productName: 'Iphone',
          price: 300,
          quantity: 4,
          imgUrl:
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 6,
          productName: 'Sumsung',
          price: 100,
          quantity: 0,
          imgUrl:
            'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 7,
          productName: 'Lenovo',
          price: 300,
          quantity: 1,
          imgUrl:
            'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 2,
          productName: 'Jooki',
          price: 300,
          quantity: 7,
          imgUrl:
            'https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 3,
          productName: 'Matrix',
          price: 300,
          quantity: 5,
          imgUrl:
            'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 4,
          productName: 'Sml',
          price: 300,
          quantity: 4,
          imgUrl:
            'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 5,
          productName: 'Huawi',
          price: 300,
          quantity: 77,
          imgUrl:
            'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 17,
          productName: 'Nokia',
          price: 100,
          quantity: 76,
          imgUrl:
            'https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 25,
            productName: 'Pooki',
            price: 500,
            quantity: 57,
            imgUrl:
              'https://th.bing.com/th/id/OIP.pm1A2l7bjyPZr2RRXTejpwAAAA?pid=ImgDet&rs=1',
          },
      ];
    render() {
        return (
            <div className="bg-light p-5 text-center">
                <div className="container bg-dark text-light">
                    <h1>Products</h1>
                    <div className="row">
                        {
                            this.productsLis.map((item, index)=>{
                                return <ProductItem key={item.id} myProducts={item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
