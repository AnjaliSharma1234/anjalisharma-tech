import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames, markdownify} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="wrapper cta">
                <div className="inner">
                    <header>
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {_.get(this.props, 'section.actions') && 
                            <ul className="actions">
                                {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                    <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', 'big', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                                ))}
                            </ul>
                        }
                    </header>
                    {markdownify(_.get(this.props, 'section.text'))}
                </div>
            </section>
        );
    }
}
