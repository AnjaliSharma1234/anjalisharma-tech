import React from 'react';
import _ from 'lodash';

import {markdownify, getPages, Link, safePrefix} from '../utils';

export default class Posts extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="wrapper">
                <div className="inner">
                    <header className="major">
                        <h2>{_.get(this.props, 'section.title')}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </header>
                    <div className="posts">
                        {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/posts'), ['frontmatter.show_in_home_posts', true]), 'frontmatter.date', 'desc'), (post, post_idx) => (
                            <section key={post_idx} className="post">
                                {_.get(post, 'frontmatter.alt_img') && 
                                    <Link to={safePrefix(_.get(post, 'url'))} className="image"><img src={safePrefix(_.get(post, 'frontmatter.alt_img'))} alt="" /></Link>
                                }
                                <div className="content">
                                    <h3>{_.get(post, 'frontmatter.title')}</h3>
                                    {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                    <Link to={safePrefix(_.get(post, 'url'))} className="button">More</Link>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
