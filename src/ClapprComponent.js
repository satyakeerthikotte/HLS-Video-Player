import React, { Component } from 'react'
import Clappr from 'clappr'

class ClapprComponent extends Component {
    shouldComponentUpdate(nextProps) {
      console.log("ssg");
        let changed = (nextProps.source != this.props.source)
        if (changed) {
            this.change(nextProps.source)
        }
        return false
    }
    componentDidMount() {
        this.change(this.props.source)
    }
    componentWillUnmount() {
        this.destroyPlayer()
    }
    destroyPlayer = () => {
        if (this.player) {
            this.player.destroy()
        }
        this.player = null
    }
    change = source => {
        if (this.player) {
            this.player.load(source)
            return
        }
        const { id, width, height } = this.props
        this.player = new Clappr.Player({
            baseUrl: "/assets/clappr",
            parent: `#${id}`,
            source: source,
            autoPlay: true,
            width: width,
            height: height
        })
    }
    render() {
        const { id } = this.props
        return (
            <div id={id}></div>
        )
    }
}

export default ClapprComponent
