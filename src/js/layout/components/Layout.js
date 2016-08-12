import { Style, StyleRoot } from 'radium';
import { Grid, Cell } from 'radium-grid';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import userImage from '../../../img/user.jpg';
import baseStyle from '../../common/styles';
import style from '../styles';
import { name } from '../../../../package.json';

// combine `large` and `xlarge` breakpoints
const largeGrid = [Grid.defaultProps.breakpoints.large, Grid.defaultProps.breakpoints.xlarge]
  .map(breakpoint => breakpoint.replace(/@media\s+/, ''))
  .join();

const mql = window.matchMedia(largeGrid);

export default class extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  static propTypes = {
    children: React.PropTypes.element.isRequired
  };

  // to get router to work
  // https://github.com/davezuko/react-redux-starter-kit/issues/695
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { open: true, mql };
  }

  getChildContext = () => ({ muiTheme: getMuiTheme(baseStyle.muiTheme) });

  componentWillMount = () => {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  };

  componentWillUnmount = () => this.state.mql.removeListener(this.handleMediaQueryChanged);

  handleMediaQueryChanged = () => this.setState({ open: this.state.mql.matches });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <StyleRoot>
        <Style rules={baseStyle.global} />

        <AppBar
          title={name}
          style={style.appBar.base}
          titleStyle={style.appBar.title}
          onTitleTouchTap={() => this.context.router.push('/')}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconStyleRight={style.appBar.iconRight}
          iconElementRight={<Avatar src={userImage} />}
        />

        <Drawer open={this.state.open} containerStyle={style.leftNav}>

          <MenuItem
            onTouchTap={() => this.context.router.push('/')}
            leftIcon={<HomeIcon />}
          >Home</MenuItem>

          <MenuItem
            onTouchTap={() => this.context.router.push('todo-manager')}
            leftIcon={<AssignmentIcon />}
          >No Selector</MenuItem>

          <MenuItem
            onTouchTap={() => this.context.router.push('todo-manager-with-selector')}
            leftIcon={<AssignmentIcon />}
          >With Selector</MenuItem>

        </Drawer>

        <Grid>
          <Cell width="1" style={style.container}>{this.props.children}</Cell>
        </Grid>
      </StyleRoot>
    );
  }
}
