import { AnimatePresence } from "framer-motion"
import React from "react"
import Layout from './src/components/Layout/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
