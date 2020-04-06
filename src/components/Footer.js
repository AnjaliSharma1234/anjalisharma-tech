import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames, htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        let item_list = _.get(this.props, 'pageContext.menus.footer');
        let item_len = _.size(item_list);
        return (
            <footer id="footer">
                <div className="content">
                    <div className="inner">
                        {_.get(this.props, 'pageContext.site.data.footer.about.enabled') && 
                            <section className="about">
                                <h3>{_.get(this.props, 'pageContext.site.data.footer.about.title')}</h3>
                                {markdownify(_.get(this.props, 'pageContext.site.data.footer.about.text'))}
                                {_.get(this.props, 'pageContext.site.data.footer.about.actions') && 
                                    <ul className="actions">
                                        {_.map(_.get(this.props, 'pageContext.site.data.footer.about.actions'), (action, action_idx) => (
                                            <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')})}>{_.get(action, 'label')}</Link></li>
                                        ))}
                                    </ul>
                                }
                            </section>
                        }
                        {_.get(this.props, 'pageContext.site.data.footer.contact_methods.enabled') && <React.Fragment>
                            {_.get(this.props, 'pageContext.site.data.footer.contact_methods.methods_col1') && 
                                <ul className="icons bulleted">
                                    {_.map(_.get(this.props, 'pageContext.site.data.footer.contact_methods.methods_col1'), (method, method_idx) => (
                                        (_.get(method, 'type') === 'contact_with_text') ? 
                                            <li key={method_idx} className={'icon ' + _.get(method, 'icon')}>
                                                <h3>{_.get(method, 'title')}</h3>
                                                <p>{htmlToReact(_.get(method, 'text').replace(/\n/g, '<br />'))}</p>
                                            </li>
                                         : ((_.get(method, 'type') === 'contact_with_link') && 
                                            <li key={method_idx} className={'icon ' + _.get(method, 'icon')}>
                                                <h3>{_.get(method, 'title')}</h3>
                                                <p><Link to={_.get(method, 'url')}>{htmlToReact(_.get(method, 'text').replace(/\n/g, '<br />'))}</Link></p>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            }
                            {_.get(this.props, 'pageContext.site.data.footer.contact_methods.methods_col2') && 
                                <ul className="icons bulleted">
                                    {_.map(_.get(this.props, 'pageContext.site.data.footer.contact_methods.methods_col2'), (method, method_idx) => (
                                        (_.get(method, 'type') === 'contact_with_text') ? 
                                            <li key={method_idx} className={'icon ' + _.get(method, 'icon')}>
                                                <h3>{_.get(method, 'title')}</h3>
                                                <p>{htmlToReact(_.get(method, 'text').replace(/\n/g, '<br />'))}</p>
                                            </li>
                                         : ((_.get(method, 'type') === 'contact_with_link') && 
                                            <li key={method_idx} className={'icon ' + _.get(method, 'icon')}>
                                                <h3>{_.get(method, 'title')}</h3>
                                                <p><Link to={_.get(method, 'url')}>{htmlToReact(_.get(method, 'text').replace(/\n/g, '<br />'))}</Link></p>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            }
                        </React.Fragment>}
                    </div>
                </div>
                <p className="copyright">{_.get(this.props, 'pageContext.site.data.footer.copyright.enabled') && <React.Fragment>{htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright.text'))}<br /></React.Fragment>}
                    {
                    _.map(_.get(this.props, 'pageContext.menus.footer'), (item, item_idx) => (<React.Fragment key={item_idx}>
                        <Link key={item_idx} to={(_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(_.get(item, 'url')))}>{_.get(item, 'title')}</Link>{(!(item_idx === item_len - 1)) && ' | '}
                    </React.Fragment>))}
                </p>
            </footer>
        );
    }
}
