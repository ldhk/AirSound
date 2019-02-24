import React, { Component } from 'react';
import { Card, Icon, Avatar,Row, Col } from 'antd';

const { Meta } = Card;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
      }
     
    componentDidMount(){
    fetch(proxyurl+"https://vozradio.net/secure/albums/popular")
    .then(response => response.json())
     .then(data => this.setState({ data: data }));
}
    render(){
        
        const { data } = this.state;
        {console.log(data)}
        return(
            <div className="Home">
            <Row gutter={16}>
            {
                data && data.map((data, index) => <AlbumCover key={index} title={data.name} image={data.image} artistImage={data.artist.image_small} artistName={data.artist.name} /> )
            }
            </Row>
            <Row>
  </Row>
            {/* // if data not loaded null will render nothing
        // if data is not null, we iterate data.results with map
        {data && data.map(function (film, index) {
          // film is an object, just one or more properties to render
          return <li key={index}>{film.name}</li>;
        })} */}
            </div>
        );
    }
}

class AlbumCover extends Component{
    constructor(){
        super();
        this.state = {
            isPlaying: false,
        }
    }
    playAudio(url){
        let audio = new Audio(url);
        audio.play();
        // if(this.state.isPlaying===true){
        //     this.setState({isPlaying : false})
        //     audio.pause();
        // }
       
        // if(this.state.isPlaying===false){
        //     this.setState({isPlaying : true})
        //     audio.play();
        // }
        
    }
    render(){
        return(
        <Col className="Album-cover gutter-row mb-10" span={6}>
    <Card
    onClick={() => this.playAudio("https://109a15170.vws.vegacdn.vn/vHa8B-BcRv0RVR_XYjd7Lw/1551046045/media3/song/web1/194/1593741/1593741.mp3?v=3")}
    style={{ width: '80%', padding: 10 }}
    cover={<img width='200' alt={this.props.key} src={this.props.image} />}
    >
    <Meta
      avatar={<Avatar src={this.props.artistImage} />}
      title={this.props.name}
      description={this.props.artistName}
    />

  </Card>
  </Col>
        )
    }
}