import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../less/comment.css';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: 'CommentBox',
            data:[],
        }
    }

    loadCommentsFormServer=()=>{
        // $.ajax({
        //     url: this.props.url,
        //     dataType:'json',
        //     cache:false,
        //     success:function (data) {
        //         this.setState({data:data});
        //     }.bind(this),
        //     error: function (xhr, status, err) {
        //         console.log(this.props.url, status, err.toString());
        //     }.bind(this)
        // });
    }

    handleCommentSubmit=(comment)=>{
        let comments = this.state.data;
        comments.id=Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});
            // $.ajax({
            //     url: this.props.url,
            //     dataType:'json',
            //     data:comment,
            //     success:function (data) {
            //         this.setState({data:data});
            //     }.bind(this),
            //     error: function (xhr, status, err) {
            //         this.setState({data: comments});
            //         console.log(this.props.url, status, err.toString());
            //     }.bind(this)
            // });
    }

    componentDidMount(){
       this.loadCommentsFormServer();
        setInterval(this.loadCommentsFormServer,this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                {/*<CommentList data={this.state.data}/>*/}
                <CommentList data={this.props.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit()}/>
            </div>
        );
    }
}