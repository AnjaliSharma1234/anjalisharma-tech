import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class Menu extends React.Component {
    render() {
        return (
            <ul>
                {_.map(_.get(this.props, 'menu'), (item, item_idx) => {
                    let menu = _.get(item, 'items');
                    return (
                            <li key={item_idx}>
                                <Link to={(_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(_.get(item, 'url')))} className={classNames({'submenu': _.get(item, 'identifier') === 'layouts'})}>{_.get(item, 'title')}</Link>
                                {(_.size(_.get(item, 'items')) > 0) && 
                                    <Menu {...this.props} menu={menu} page={this.props.pageContext} />
                                }
                            </li>
                    )
                })}
            </ul>
        );
    }
}
