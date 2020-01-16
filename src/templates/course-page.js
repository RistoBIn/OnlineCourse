import React from "react";
import { graphql } from 'gatsby'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";


import { FaPlay } from 'react-icons/fa';

import Layout from "components/Layout/Layout.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


import coursePageStyle from "assets/jss/material-kit-react/views/coursePage.jsx";

class CoursePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const courseData  = this.props.data.markdownRemark
    console.log(courseData)
    return (
     <Layout {...rest}>
        <div className={classNames(classes.main, classes.mainRaised)} style={{marginTop: 200}}>
          <div className={classes.container}>
            <h2 className={classes.title}>{courseData.frontmatter.title} </h2>
            <div dangerouslySetInnerHTML={{ __html: courseData.html }} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(coursePageStyle)(CoursePage);

export const pageQuery = graphql`
  query CourseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`