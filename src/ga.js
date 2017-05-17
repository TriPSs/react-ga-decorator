import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'

export default function ga(gaTrackingID, options = null) {

  return function analyticsDecorator(Component) {
    class AnalyticsWrapper extends React.Component {

      static propTypes = {
        location: PropTypes.shape({
          pathname: PropTypes.string.isRequired
        }).isRequired
      }

      componentDidMount() {
        ReactGA.initialize(gaTrackingID, options)

        this.sendPageView()
      }

      componentWillReceiveProps(nextProps) {
        const { location: { pathname: newPathname } } = nextProps
        const { location: { pathname: oldPathname } } = this.props

        if (newPathname !== oldPathname) {
          this.sendPageView(nextProps)
        }
      }

      sendPageView = (props = this.props) => {
        const { location: { pathname } } = props

        ReactGA.pageview(pathname)
      }

      render() {
        return (
          <Component {...this.props} />
        )
      }
    }

    return withRouter(AnalyticsWrapper)
  }

}
