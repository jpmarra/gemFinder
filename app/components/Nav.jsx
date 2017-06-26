import React,{ Component } from 'react';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'search'
    }
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab){
    if(tab === 'favorites') {
      this.props.navigateTo('/favorites');
      this.setState({selectedTab: 'favorites'})
      console.log(this.state.selectedTab);
    } else {
      this.props.navigateTo('/');
      this.setState({selectedTab: 'search'})
      console.log(this.state.selectedTab);
    }
  }

  render() {
    return (
      <div className="nav-container col-sm-3">
        <div className="nav-links">
          <button className={this.state.selectedTab === 'search' ? 'active-link' : 'nav-link'} onClick={() => this.changeTab('/')}>
            Search
          </button>
          <button className={this.state.selectedTab === 'favorites' ? 'active-link' : 'nav-link'} onClick={() => this.changeTab('favorites')}>
            Favorites
          </button>
        </div>
      </div>
    )
  };

}
