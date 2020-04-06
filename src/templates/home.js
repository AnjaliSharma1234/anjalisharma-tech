import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';
import Banner from '../components/Banner';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                    <Banner {...this.props} />
                    {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                        let GetSectionComponent = components[_.get(section, 'component')];
                        return (
                            <GetSectionComponent key={section_idx} {...this.props} section={section} page={this.props.pageContext} site={this.props.pageContext.site} />
                        )
                    })}
            </Layout>
        );
    }
}
