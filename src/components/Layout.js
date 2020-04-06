import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <body className={((_.get(this.props, 'pageContext.frontmatter.template') === _.get(this.props, 'pageContext.site.siteMetadata.landing_template')) ? 'landing ' : '')} />
                </Helmet>
                    <Header {...this.props} />
                    {this.props.children}
                    <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
