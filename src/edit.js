/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
 import { useBlockProps } from '@wordpress/block-editor';
 import { TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( props ) {
	const {
		attributes: { number, suffix },
		setAttributes,
		className,
	} = props;

	const blockProps = useBlockProps();

	// Change content.
	const onChangeNumber = ( newNumber ) => {
		setAttributes( { number: newNumber === undefined ? '' : newNumber } )
	}
	const onChangeSuffix = ( newSuffix ) => {
		setAttributes( { suffix: newSuffix === undefined ? '' : newSuffix } )
	}


	return (
		<div { ...useBlockProps() }>

			<TextControl
				label='Number'
				value={ number }
				onChange={ onChangeNumber }
			/>

			<TextControl
				label='Text'
				value={ suffix }
				onChange={ onChangeSuffix }
			/>
			
		</div>
	);
}
