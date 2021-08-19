import React,{ Component } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import heart from '../images/heart_image.png';
import loveisintheair from '../images/loveisintheair.png'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    printhearts(n) {
        if(n===0) {
            return(
                <p>Unfortunately, you haven't received any hearts yet :(</p>
            );
        }
        else {
            var heart_array = [];
            for(var i=0;i<n;i++) {
                heart_array.push(<img src={heart} width="50px" height="50px" alt="heart icon" />)
            }
            return(
                heart_array.map((element,idx) => {
                    return(
                        <div key={idx} className="heart_received_icon">
                            <div>{element}</div>
                        </div>
                    );
                })
            );
        }
    }

    render() {
        const username = this.props.user_details.name;
        const hearts = this.props.user_details.hearts_received;

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-end">
                        <Link to="/login"><Button color="primary" size="lg" className="logoutButton">Logout</Button></Link>
                    </div>
                </div>
                <div className="container homeContainer">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6">
                            <div className="row justify-content-center">
                                <div className="col-12 greeting">
                                    <h1>Welcome {username} !</h1>
                                </div>
                            </div>
                            <div className="row justify-content-center howto">
                                <div className="col-12">
                                    <h2>How To</h2>
                                    <p>Fill the form with upto 4 of your crushes and lock and submit your choices <strong>by February 14 11:59 PM</strong>.
                                    If your crush selects you as well, then on the stroke of the midnight hour on 14th February, you both
                                    will find out that you match. If sadly, it is a one-sided affair, it'll be a secret and no one will know
                                    except you, <strong>not even us</strong>.</p>
                                    <p>The <strong>Crush-o-meter</strong> below indicates how many poeple on the campus have a crush on you.</p>
                                    <p id="wish">We hope that you find your puppy love :)</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 crushometer">
                                    <h2>Crush-o-meter</h2>
                                    <div>{this.printhearts(hearts)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 crushForm">
                            <Form>
                                <FormGroup>
                                    <Label for="choice1">Crush #1</Label>
                                    <Input type="search" name="crush1" id="choice1" placeholder="Name/Roll Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="choice2">Crush #2</Label>
                                    <Input type="search" name="crush2" id="choice2" placeholder="Name/Roll Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="choice3">Crush #3</Label>
                                    <Input type="search" name="crush3" id="choice3" placeholder="Name/Roll Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="choice4">Crush #4</Label>
                                    <Input type="search" name="crush4" id="choice4" placeholder="Name/Roll Number" />
                                </FormGroup>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <Button outline color="success" size="sm" className="saveButton">Save Your Choices</Button>
                                        <Button outline color="success" size="sm" className="lockButton">Lock and Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="row justify-content-center loveInAirrow">
                        <div className="col-12 col-sm-6" className="loveInAirDiv">
                            <img src={loveisintheair} alt="love is in the air" className="img-fluid loveInAir" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Home;