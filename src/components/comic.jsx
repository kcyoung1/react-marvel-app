import * as React from 'react';

class Comic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  // To show/hide the comic book description
  _showInfo() {
    this.setState({ show: !this.state.show });
  }
  render() {
    const { comic } = this.props;
    return (
    <div className="comic-card">
        <div className="comic-image" onClick={this._showInfo.bind(this)}>
          <h1 className="comic-title">{comic.title}</h1>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          {this.state.show ? <div className="comic-desc">{comic.description}
            <a href={comic.urls[0].url} className="rd-btn" target="_blank" rel="noopener noreferrer">Read More</a>
          </div> : null}
        </div>
    </div>
    );
  }
}

export default Comic
