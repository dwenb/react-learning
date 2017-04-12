import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../less/comment.css';
import footer3 from '../image/footer3.jpg';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: 'CommentBox',
            data: [],
        }
    }

    loadCommentsFormServer = ()=> {
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

    handleCommentSubmit = (comment)=> {
        let comments = this.state.data;
        comments.id = Date.now();
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

    componentDidMount() {
        this.loadCommentsFormServer();
        setInterval(this.loadCommentsFormServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                {/*<CommentList data={this.state.data}/>*/}
                <CommentList data={this.props.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit()}/>
                <div id="boxContainer">
                    <img src={require('../image/footer3.jpg')} alt="图片未能正常显示" title="图片"/>
                       人民网北京2月24日电人民网北京2月24日电 (记者
                    刘阳)国家发展改革委近日发出通知，决定自2月25日零时起将汽、柴油价格每吨分别提高300元和290元，折算到90号汽油和0号柴油（全国平均）每升零售价格分别提高0.22元和0.25元。

                    此次国内成品油价格调整幅度，是按照现行国内成品油价格形成机制，根据国际市场油价变化情况确定的。去年11月16日国内成品油价格调整以来，受市场预期欧美经济复苏前景向好以及中东局势持续动荡等因素影响，国际市场原油价格先抑后扬，2月上旬WTI和布伦特原油期货价格再次回升至每桶95美元和115美元以上。虽然近两日价格有所回落，但国内油价挂钩的国际市场三种原油连续22个工作日移动平均价格上涨幅度已超过4%，达到国内成品油价格调整的边界条件。

                    通知指出，这次成品油调价后，国家将按照已建立的补贴机制，继续对种粮农民、渔业（含远洋渔业）、林业、城市公交、农村道路客运（含岛际和农村水路客运）等给予补贴。同时，为保证市场物价基本稳定，防止连锁涨价，对与居民生活密切相关的铁路客运、城市公交、农村道路客运（含岛际和农村水路客运）价格不作调整。

                    通知要求，中石油、中石化、中海油三大公司要组织好成品油生产和调运，保持合理库存，加强综合协调和应急调度，保障成品油供应。各级价格主管部门要加大市场监督检查力度，依法查处不执行国家价格政策，以及囤积居奇、造谣惑众、合谋涨价、搭车涨价等违法行为，维护正常市场秩序。
                </div>
                <div id="boxTest">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
        );
    }
}