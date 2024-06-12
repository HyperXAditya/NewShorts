import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { Router } from 'react-router-dom';

export class News extends Component {
    static defaultProps={
        country: 'in',
        category: 'general',

    }
    static propTypes={
 country: PropTypes.string,
 category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        console.log("Checking! Fine...");
        this.state = {
            articles: [], // Initialize articles as an empty array
            loading: false,
            page:1
        };
        document.title=`${this.props.category} - NewShorts`
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bebe6ff595f544f6992e0d845a7548f8&page=1&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults  , 
            loading:false
         })
    }

    hPc=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bebe6ff595f544f6992e0d845a7548f8&page=${this.state.page - 1}&pageSize=12`;
       this.setState({loading:true});
       
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({page: this.state.page - 1,
            articles: parsedData.articles ,
            loading:false
        })}
    hNc=async()=>{if (this.state.page +1 >Math.ceil(this.state.totalResults/12) ){

    }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bebe6ff595f544f6992e0d845a7548f8&page=${this.state.page + 1}&pageSize=12`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({page: this.state.page + 1,
            articles: parsedData.articles ,
            loading:false
        })}}


    render() {
        return (
            <div className="container-my-3">
                <h2 align="center"><u>NewShorts-Headlines on {this.props.category}</u> </h2>
                
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage ? element.urlToImage : 'https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg'} newsUrl={element.url} author={element.author} />
                            </div>
                        );
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.hPc}>&larr; Previous</button>
                <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/12)} type="button" class="btn btn-secondary" onClick={this.hNc}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
