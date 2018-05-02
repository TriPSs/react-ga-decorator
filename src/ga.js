import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'

export default (gaTrackingID, options = null) => Component => {

  const componentName = Component.displayName || Component.constructor.name || 'Component'

  return withRouter(class extends React.Component {

    static displayName = `Analytics(${componentName})`

    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }).isRequired,
    }

    componentDidMount() {
      ReactGA.initialize(gaTrackingID, options)

      this.sendPageView()
    }

    componentDidUpdate(prevProps) {
      const { location: { pathname: newPathname } } = this.props
      const { location: { pathname: oldPathname } } = prevProps

      if (newPathname !== oldPathname) {
        this.sendPageView()
      }
    }

    sendPageView = () => {
      const { location: { pathname } } = this.props

      ReactGA.pageview(pathname)
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  })

}
