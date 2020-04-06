import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="content">
                    <div className="inner">
                        <header>
                            <h2>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))}
                        </header>
                        {_.get(this.props, 'pageContext.frontmatter.banner.actions') && 
                            <ul className="actions">
                                {_.map(_.get(this.props, 'pageContext.frontmatter.banner.actions'), (action, action_idx) => (
                                    <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')}, {'huge': _.get(action, 'is_huge')})}>{_.get(action, 'label')}</Link></li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </section>
        );
    }
}
