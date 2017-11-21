import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Loader from './Loader';
import VideoCard from './VideoCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinfo: null,
      loading: true
    };
    this.loadVideos = this.loadVideos.bind(this);
  }
  componentDidMount() {
    this.loadVideos(null);
  }
  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return { vinfo: nextProps.vinfo, loading: nextProps.loading };
    });
  }

  loadVideos(pageToken) {
    pageToken = pageToken || '';
    this.props.loadVideos(pageToken);
  }

  renderVideoList() {
    if (this.state.vinfo && this.state.vinfo.items.length > 0) {
      return this.state.vinfo.items.map((v, i) => {
        return <VideoCard key={i} info={v.snippet} vid={v.id.videoId} />;
      });
    }
  }

  render() {
    let disable = 'disabled';
    if (this.props.vinfo) {
      disable = this.props.vinfo.prevPageToken ? '' : 'disabled';
    }
    return (
      <div className="row">
        <div className="center">
          {this.renderVideoList()}
          <button
            className={`waves-effect waves-light btn left ${disable}`}
            style={{ marginLeft: '10px' }}
            onClick={() => {
              this.loadVideos(this.props.vinfo.prevPageToken);
            }}
          >
            <i className="material-icons">arrow_back</i>
          </button>
          <button
            className={`waves-effect waves-light btn right`}
            style={{ marginRight: '10px' }}
            onClick={() => {
              this.loadVideos(this.props.vinfo.nextPageToken);
            }}
          >
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vinfo: state.videos.vinfo
  };
};

export default connect(mapStateToProps, actions)(Home);
