import React from 'react';
import forgetfulelephant from '../api/forgetfulelephant';
import EventList from './EventList';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { events: [] , filteredEvents: []};
    

  };

  componentDidMount() {
    this.loadTheList();
  }

  // componentDidUpdate(prevState) {
  //   if (prevState !== this.state) {
  //     this.loadTheList();
  //   }
  // }
  handleRefresh = () => this.loadTheList();


  loadTheList = async () => {
    const response = await forgetfulelephant.get('/events')
    this.setState({ events: response.data, filteredEvents: response.data });
  };


  filterNames(e){
    this.setState({ testVarible: false });
    this.setState({events: this.state.filteredEvents.filter(event => event.title.toLowerCase().includes(e.target.value.toLowerCase()))})
  }


  render() {
    return (
      <div className="container col-md-6 col-sm-6 col-12">
        <h1 className="heading-text">List of Events</h1>
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
