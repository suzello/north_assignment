import React from 'react';
import Modal from 'react-modal';
import forgetfulelephant from '../api/forgetfulelephant';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';


class EventCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            event: props.current,
            isPaneOpen: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }


      deleteTask(id) {
        forgetfulelephant.delete(`/events/${id}`, { 
            completed: true
        })
        //this.props.loadTheList()
        .then(response => {
            console.log(response);
        })
        // .catch(error => {
        //     this.setState({
        //         error: 'Error while deleting data.'
        //     });
        // });
    }

    
        
    render(){
    const {title, type, data, icon, timestamp, serviceId, id    } = this.props.event;
        return (
            <div className="display-list__main-content" ref={this.eventRef}>
                <h3 className="main-content__title">{title}</h3>
                <p className="main-content__type">{type}</p>
                <img className="main-content__image"
                alt={data}
                src={icon}
                />
                <div className="main-content__btn-container" ref={ref => this.el = ref}>
                    <button className="btn-container--btn-blue" onClick={() => this.setState({ isPaneOpen: true })}>More Info!</button>
                    <SlidingPane
                        className='slider'
                        overlayClassName='slider-overlay'
                        isOpen={ this.state.isPaneOpen }
                        title={title}
                        subtitle={serviceId}
                        onRequestClose={ () => {
                            // triggered on "<" on left top click or on outside click
                            this.setState({ isPaneOpen: false });
                        } }>
                        <div className="slide-pane__container"> 
                            <img className="container--image"
                            alt={data}
                            src={icon}
                            />
                            <p className="container--grey-text">{timestamp}</p>
                            <p className="container--grey-text">{data}</p>
                            <p className="container--grey-text">{id}</p>
                            
                        </div>
                        <br />
                    </SlidingPane>
                    <button className="btn-container--btn-red" onClick={ () => this.deleteTask(id)}>Delete</button> 
                </div>
                          
            </div>
        );
    }
}

export default EventCard;