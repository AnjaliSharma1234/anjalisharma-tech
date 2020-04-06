import React from 'react';
import _ from 'lodash';

import {classNames, Link} from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header id="header" className={classNames({'alt': _.get(this.props, 'pageContext.frontmatter.template') === _.get(this.props, 'pageContext.site.siteMetadata.landing_template')})}>
                <h1 id="logo"><Link to={_.get(this.props, 'pageContext.site.pathPrefix') || '/'}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link></h1>
                <nav id="nav">
                    <Menu {...this.props} menu={menu} page={this.props.pageContext} />
                </nav>
                <Link to="#navPanel" className="navPanelToggle" />
            </header>
        );
    }
}
