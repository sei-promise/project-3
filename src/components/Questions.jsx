import React from "react"
import { connect } from "react-redux";
import Answers from '../Answers'

class Questions extends React.Component {
    state = {
        score: 0
    }
        render() {
         
        return (
           <div>
                <h1>{this.props.questions.map(question =><h2> {question.question} </h2>)}</h1>
               
           </div>  
           
         );
        }
    }
     const mapStateToProps = state => {
         return{
             questions: state.questions
         }
     }

 
export default connect(mapStateToProps,null)(Questions);