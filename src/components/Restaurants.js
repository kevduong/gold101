import React, { Component } from 'react';
import firebase from './Firestore';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantRef: firebase.firestore().collection('restaurants'),
      restaurants: [],
      names: [],
      phones: [],
      reviews: [],
      websites: [],
    };
  }

  getDb(db) {
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let restaurant = doc.data();
        restaurant.key = doc.id;

        this.setState({
          restaurants: this.state.restaurants.concat(restaurant),
          names: this.state.names.concat(restaurant.name),
          phones: this.state.phones.concat(restaurant.phone),
          reviews: this.state.reviews.concat(restaurant.review),
          websites: this.state.websites.concat(restaurant.website),
        });
      });
    });
  }

  componentDidMount() {
    this.getDb(this.state.restaurantRef);
  }

  render() {
    const restaurants = this.state.restaurants.map((r, i) => (
      <li key={i}>{r}</li>
    ));

    return (
      <div className="Restaurants">
        <section className="room-list">
          {this.state.restaurants.length === 0 ? (
            <p>loading...</p>
          ) : (
            <ul>{restaurants}</ul>
          )}
        </section>
      </div>
    );
  }
}

export default Restaurants;
