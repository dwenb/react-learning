
import React, { Component } from 'react';
import Remarkable from 'remarkable';
import '../less/comment.css';

export default class Comment extends Component{
    constructor(props){
        super(props);
        this.rawMarkup=this.rawMarkup.bind(this); //这种绑定方式对应下面 11-15行
    }

    rawMarkup = ()=>{
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup};
    }

    // //下面的箭头函数等同于第( 8 + 11-15 )行的效果
    // rawMarkup = ()=>{
    //     let md = new Remarkable();
    //     let rawMarkup = md.render(this.props.children.toString());
    //     return { __html: rawMarkup};
    // }

    render(){
        // var md = new Remarkable();
        return <div className="comment">
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
    }
}