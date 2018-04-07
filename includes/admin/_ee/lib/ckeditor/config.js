/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
    config.skin = 'moono-lisa';
    config.extraPlugins = 'filebrowser,sourcedialog,fontawesome,inlinesave,lineutils,widget,uploadwidget,autosave';
    config.allowedContent = true; 
    config.filebrowserBrowseUrl = '//' + window.location.hostname + cmsPath +'includes/admin/_ee/lib/kcfinder/browse.php';
    config.toolbarCanCollapse = true;
    
    config.removeButtons = 'Form,NewPage,Glyphicons,About,Smiley,Table,wenzgmap,Checkbox,Radio,Textarea, Flash,Language,Blockquote,Textfield,Button,SpecialChar,PageBreak,Flash,Iframe,BidiLtr,BidiRtl,Subscript,Superscript,TextField,Select,ImageButton,HiddenField,Find,Replace,ShowBlocks';

    config.inlinesave = {
        postUrl: '',
        postData: {},
        onSave: function(editor) { console.log('clicked save', editor); return true; },
        onSuccess: function(editor, data) { console.log('save successful', editor, data); closeEditing2(editor['name'],editor['_']['data']); alert('Saved!'); setTimeout(function() { location.reload(); }, 2000 ); },
        onFailure: function(editor, status, request) { console.log('save failed', editor, status, request); },
        useJSON: false,
        useColorIcon: false
    };
    
    config.autosave = { 
        NotOlderThen : 1440,  
        saveOnDestroy : false, 
        saveDetectionSelectors : "a[href^='javascript:__doPostBack'][id*='Save'],a[id*='Cancel']",  
        messageType : "notification",  
        delay : 3,  
        diffType : "inline",  
        autoLoad: true,
    };
    
    config.toolbar = 'newBar';

    config.toolbar_newBar = [
        { name: 'editing', items : [ 'Bold','Italic','Underline','Strike','RemoveFormat','-',] },
        { name: 'clipboard', items : [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo','-','SelectAll','Scayt', ] },
        { name: 'paragraph', items : [ 'Templates','NumberedList','BulletedList','-','Outdent','Indent','-','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock',] },
        '/',
        { name: 'styles', items : [ 'Styles','Format','Font','FontSize', ] },
        { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
        { name: 'colors', items : [ 'TextColor','BGColor' ] },
        { name: 'new', items: ['Image','FontAwesome','btgrid','HorizontalRule'] },
        { name: 'tools', items: ['Maximize'] },
        { name: 'save', items : ['Sourcedialog','Inlinesave'] },
    ];
    
    CKEDITOR.dtd.$removeEmpty["span"] = false;
    
};
