import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    render() {
        let commentNodes = this.props.data.map((comment)=>{
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return <div className="CommentList">
            {commentNodes}
        </div>;
    }
}

// class CommentForm extends Component{
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         return <div className="commentForm">
//             Hello, world! I am a CommentForm.
//         </div>;
//     }
// }
//
// class CommentBox extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             displayName: 'CommentBox',
//         }
//     }
//
//     render(){
//         return (
//             React.createElement('div', {className: 'commentBox'},
//                 "Hello, world! I am a CommentBox."
//             )
//         );
//     }
// }
// export {CommentList, CommentForm, CommentBox};
