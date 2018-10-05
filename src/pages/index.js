import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Sup Peeps! 🐤</h1>
    <p>This is my first Gatsby Site.</p>
    <p>It's pretty cool.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
