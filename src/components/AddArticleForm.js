import React from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ArticleForm from '../components/ArticleForm'
import axios from 'axios';

const URL = 'https://pintereacher.herokuapp.com/api';

class AddArticleView extends React.Component {
        constructor(props) {
        super(props);

        this.state = {

        };
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
                <ArticleForm doOnSubmit={this.addArticles}></ArticleForm>
            </div>
        )
        
    }
}

// AddArticleView = withRouter(AddArticleView)
export default AddArticleView;