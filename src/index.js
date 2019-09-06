const {compose, ifCondition} = wp.compose;
const {registerFormatType} = wp.richText;
const {RichTextToolbarButton} = wp.blockEditor;
const {registerBlockStyle} = wp.blocks
const {withSelect} = wp.data;
const updateBlockAttributes = wp.data.dispatch('core/block-editor').updateBlockAttributes


const TextIndentButton = props => {
    const {selectedBlock} = props
    let isActive = selectedBlock.attributes.className === 'is-style-iw-2em'

    return <RichTextToolbarButton
        icon='align-right'
        title={isActive ? '取消首行缩进' : '首行缩进'}
        onClick={() => {
            updateBlockAttributes(selectedBlock.clientId, {
                className: isActive ? undefined : 'is-style-iw-2em'
            })
        }}
        isActive={isActive}
    />
};

const ConditionalButton = compose(
    withSelect(function (select) {
        return {
            selectedBlock: select('core/editor').getSelectedBlock()
        }
    }),
    ifCondition(function (props) {
        return (
            props.selectedBlock &&
            props.selectedBlock.name === 'core/paragraph'
        );
    })
)(TextIndentButton);

registerFormatType('iw-2em-format/text-indent', {
        title: '首行缩进',
        tagName: 'p',
        className: null,
        edit: ConditionalButton
    }
);

registerBlockStyle('core/paragraph', {
    name: 'iw-2em',
    label: '首行缩进'
});