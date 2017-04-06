import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: 'CommentBox',
            data:[],
        }
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>
        );
    }
}