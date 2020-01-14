import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Answers extends Component {
    render(){
        return(
            this.props.answers.map( answer => {
                    return(
                        <div>
                            <h3 onClick={() => this.props.clickAnswer(answer)}> {answer} </h3>
                            <hr />
                        </div>
                    );
                } )
          
         );
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        clickAnswer: (answer) => dispatch({type: "ANSWER", answer: answer})
    };
}
export default connect( null , mapDispatchToProps )(Answers);