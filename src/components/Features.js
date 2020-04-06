import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="wrapper">
                <div className="inner">
                    <ul className="features">
                        {_.map(_.get(this.props, 'section.features'), (feature, feature_idx) => (
                            <li key={feature_idx}>
                                <h3{...(_.get(feature, 'icon.enabled') ? {className: 'icon ' + _.get(feature, 'icon.style') + ' ' + _.get(feature, 'icon.icon')} : null)}>{_.get(feature, 'title')}</h3>
                                {markdownify(_.get(feature, 'description'))}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}
