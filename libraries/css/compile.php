<?php
ob_start();

require_once '../../includes/db.php';
require_once '../../includes/settings.php';
global $cmsPath;
global $sUrl;
global $theme;

$root = $_SERVER['DOCUMENT_ROOT'];
$path = $cmsPath.'libraries/css/';
echo '@charset "UTF-8";
/* CSS Document */';

$files = scandir($root . $path);

function compress($buffer) {
    /* remove comments */
    $buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
    /* remove tabs, spaces, newlines, etc. */
    $buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
    return $buffer;
}

foreach($files as $v){
	
    if(substr($v,-3) != 'css'){
	
	echo '';
	
	}else{
	
    echo '
    
/*========================
      '.$v.'
========================*/

    ';
include ''.$v. 
	
	'';
	
	}
	
	};
	
echo '
    
/*========================
     Custom Styles
========================*/

    ';	
include '../themes/'.$theme.'/customStyles.css';

$comp = ob_get_clean();

ob_end_clean();

if(file_exists('themeParks-styles.css')){
    	
    echo '<h1>Complete! CSS has been Compiled<h1>';
    echo '<a style="font-family:arial;font-size:12pt;padding:5px 15;text-decoration:none;border:1px solid black;border-radius:10px;" href="http://'.$_SERVER['HTTP_HOST'].'/newSite/Home">Home</a>';
    
}else{
    
    if(isset($_GET['compile']) && !file_exists('themeParks-styles.css')){ 
        
    echo '<h1>File does not exist</h1>';
    echo '<p>Do you want to compile Css?</p>';
    echo '<a style="font-family:arial;font-size:12pt;padding:5px 15;text-decoration:none;border:1px solid black;border-radius:10px;" href="javascript:window.location.reload();" type="button">Yes Compile Css!</a>';

        file_put_contents('themeParks-styles.css',compress($comp));
    
    }else{
        
        header("Content-type: text/css; charset: UTF-8");
        echo compress($comp);
        
    }
    
}
    
    
?>