import React, { useRef, useEffect } from "react";
import SunEditor,{buttonList} from "suneditor-react";
// import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';// Import Sun Editor's CSS File
//import plugins from 'suneditor/src/plugins';

 
const about = props => {
    const editorRef = useRef();
    useEffect(() => {
        // Get underlining core object here
        // Notice that useEffect is been used because you have to make sure the editor is rendered.
      //  console.log(editorRef.current.editor.core);
    }, []);
   const  handleChange=(content)=>{
        console.log(content); //Get Content Inside Editor
    }
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor  setOptions={{
                    height: 400,
                    // plugins:[
                    //     /** command */
                    //     blockquote,
                    //     /** Submenu */
                    //     align,
                    //     font,
                    //     fontColor,
                    //     fontSize,
                    //     formatBlock,
                    //     hiliteColor,
                    //     horizontalRule,
                    //     lineHeight,
                    //     list,
                    //     paragraphStyle,
                    //     table,
                    //     template,
                    //     textStyle,
                    //     /** Dialog */
                    //     image,
                    //     link,
                    //     video,
                    //     audio,
                    //     math, // You must add the 'katex' library at options to use the 'math' plugin.
                    //     /** File browser */
                    //     // You must add the "imageGalleryUrl".
                    //     // A button is added to the image modal.
                    //     // You can also use image gallery by adding it directly to the button list. (You must add "image" plugin.)
                    //     imageGallery



                    // ],
                    // [
                    //     ['undo', 'redo'],
                    //     ['font', 'fontSize', 'formatBlock'],
                    //     ['paragraphStyle', 'blockquote'],
                    //     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    //     ['fontColor', 'hiliteColor', 'textStyle'],
                    //     ['removeFormat'],
                    //     '/', // Line break
                    //     ['outdent', 'indent'],
                    //     ['align', 'horizontalRule', 'list', 'lineHeight'],
                    //     ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                    //     /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                    //     ['fullScreen', 'showBlocks', 'codeView'],
                    //     ['preview', 'print'],
                    //     ['save', 'template']
                    // ] 

					buttonList: buttonList.complex// Or Array of button list, eg. [['font', 'align'], ['image']]
					// Other option
			}}  onChange={handleChange}/>
    </div>
  );
};
export default about;
