import React from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ArticleForm from '../components/ArticleForm'
import axios from 'axios';

const URL = 'https://pintereacher.herokuapp.com/api';

class AddArticleView extends React.Component {
    constructor(props) {
        super(props);
        //     this.state = {
        //     article: {
        //         title: '',
        //         content: props.url,
        //         abstract: '',
        //         category: '',
        //     }
        // };
        // alert(Object.entries(props).reduce((str, p)=> {
        //     return str + `${p[0]}: ${p[1]}\n`
        // }))
    }
    addArticles = (article) => {
            console.log(article)
            alert(article)
            // createArticle(article)
            axios.post(`${URL}/articles`, article)
            .then(status => {
                console.log(status)
                alert(status)
                return status
            });
        }

    render() {
        return(
            <div>
                <ArticleForm 
                    url={this.props.url} 
                    doOnSubmit={this.addArticles}
                    article={{
                        title: '',
                        content: this.props.url ? this.props.url: '',
                        abstract: '',
                        category: '',
                    }}
                ></ArticleForm>
            </div>
        )
        
    }
}

// AddArticleView = withRouter(AddArticleView)
export default AddArticleView;