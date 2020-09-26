/* Essential Packages */
const { React } = require('powercord/webpack');

/* Plugin Specific Packages */
// There are many more componenets available in "powercord/components/settings".
const { SwitchItem } = require('powercord/components/settings');

module.exports = class Settings extends React.PureComponent {
    /**
     * Renderer, this is what's being executed on line 22 of index.js
     * The example here displays a toggle between displaying a cat or a dog.
     * */

    render() {
        return (
            <div>
                <SwitchItem
                    value={this.props.getSetting('displayCat', true)} // The second parameter is the default setting
                    onChange={() => {
                        this.props.toggleSetting('displayCat', true); // The second parameter is the default setting
                    }}
                    note='If disabled, the image will change to a dog instead.'
                >
                    Display Cat
                </SwitchItem>
            </div>
        );
    }
};
