<?php

//Runs Everything
require_once 'includes/config.php';
require_once 'includes/settings.php';

$vars = array('id','sUrl','dbName','sCaptcha','cmsPath','eePath','emailHost','emailAuth','emailUser','emailPass','emailEnc','emailPort','emailFrom','emailName','emailAdd','emailReply','eReplyTitle');

    foreach($vars as $var){

        global $$var;

    }

define("ROOT", "{$sUrl}");

function links(){
	
	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	
	return $actual_link;
	
	}

function title(){
	
	$url = new cms();
	$url->parseUrl();
	$tits = $url->parseUrl();
	
	if(isset($tits[1])){
			
			return $tits[1];
			
			}else{
			
			return $tits[0];
			
			}
	
	}
	
function active($name) {
	
	$tits = ''.ROOT.$name.'';
	
	if($tits == links()){
		echo 'purp';
		}else{
			return 'inactive';
			}
	
	  }			
	
function bloggy($num){
	
	global $mysqli;
		
		$query = 'SELECT * FROM post WHERE `Id` LIKE "'.$num.'"';
		
		if($result = $mysqli->query($query)){
			
			while($row = $result->fetch_assoc()){
	
				if(isset($row['Title'])){
					
					$title = $row['Title'];
					
					return $title;
					
					}else{
						
						}
						
				}
	
		}

  }

function breadcrumbs($trail){

    echo '<ul class="breadcrumb">';
    echo '<li><a href="'.ROOT.'">Home</a></li>';
    foreach($trail as $loc => $name){
        echo '<li><a href="'.ROOT.$loc.'">'.$name.'</a></li>';
    }
    echo '</ul>';
}
	
function theme(){
	
	global $mysqli;
		
		$query = 'SELECT * FROM Theme LIMIT 1';
		
		if($result = $mysqli->query($query)){
			
			while($row = $result->fetch_assoc()){
	
				if(isset($row['Theme'])){
					
					$theme = $row['Theme'];
					
					return $theme;
					
					}else{
						
						}
						
				}
				
		  }
		  
	if(!isset($theme)){
		
		return 'default';
		
		}	  
	
	}	

// Adds new easy edit page	
function newEE($title){
	
	$filename = 'apps/_ee/inc/_'.$title.'.php';
				  
				  if(!file_exists($filename)){
				  
				   touch($filename);
				   chmod($filename, 0777);
				  
				  $fileNew = fopen($filename,'w+');

				  return $fileNew;
				  fclose($fileNew);
				  
				  }else{
						include 'apps/_ee/inc/_'.$title.'.php';
					  }
	
	};

//Loops through files in directory	
function direct($directory, $blocks, $other){

						  if (! is_dir($directory)) {
							  exit('Invalid diretory path');
						  }
					  
						  $files = array();
						  
						  $i = 1;
					  
						  foreach (scandir($directory) as $file) {
							  if ('.' === $file) continue;
							  if ('..' === $file) continue;
					  
					  $id = $i++;
					  
							  $files[] = $file;
							   include 'libraries/themes/'.theme().'/html_blocks/'.$blocks.'.php';
						  }
	
	};	
	

//Makes New Image Album
$albums = isset($_POST['album'])? $_POST['album']: '';

$ds          = DIRECTORY_SEPARATOR;  //1
 
$storeFolder = 'images/uploads/'.$albums.'';   //2

if (!file_exists($storeFolder)) {
	
	$old = umask(0);
    mkdir($storeFolder, 0777, true);
	umask($old);
	
	echo '<script>alert("Album: '.$albums.' has been successfully added!")</script>';
		
}

//Adds images to folders 
if (!empty($_FILES)) {
     
    $tempFile = $_FILES['file']['tmp_name'];          //3   
      
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  //4
     
    $targetFile =  $targetPath. $_FILES['file']['name'];  //5
 
    move_uploaded_file($tempFile,$targetFile); //6
     
}	

//gallery sort

function uped($method,$location,$query,$site){
	
	$i = 0;		
					
			if(isset($_POST[''.$method.''])){
				
				if(isset($_POST[$i])){
					
					$id = mysqli_real_escape_string($i);
					$order = addslashes($_POST[$method]);
					  
					$query = 'UPDATE `gallery` SET `Order` = '.$newId.' WHERE `gallery`.`Id` = '.$i.';';
					echo '<script>console.log("Got eem!");</script>';
								  }
							  
				}
		
}

function tpCompile($e){
    
    if($e == 'styles'){
        
         if(file_exists('libraries/css/themeParks-styles.css')){
    
            echo '<link href="'.ROOT.'libraries/css/themeParks-styles.css" type="text/css" rel="stylesheet" />
            ';

            }else{

            echo '<link href="'.ROOT.'libraries/css/compile.php" type="text/css" rel="stylesheet" />
            ';

            };
        
    }else if($e == 'js'){
        
        if(file_exists('libraries/js/themeParks-Scripts.js')){
        
        echo '<script src="'.ROOT.'libraries/js/themeParks-Scripts.js" type="text/javascript"></script>
        ';

            }else{

            echo '<script src="'.ROOT.'libraries/js/compile.php" type="text/javascript"></script>
            ';

            };
        
    }else{
        
        echo 'Incorrect pram.';
        
    };
    
   
};

function tpBlock($blocks){
        
    require_once 'libraries/themes/'.theme().'/html_blocks/'.$blocks.'.php';
    
};

function tpInc($inc){
        
    require_once 'libraries/themes/'.theme().'/'.$inc.'.php';
    
};

function tpView($folder,$view){
        
    require_once 'libraries/themes/'.theme().'/views/'.$folder.'/'.$view.'_view.php';
    
};

function tpReq($req){
        
    require_once 'includes/tp-includes/tp-'.$req.'.php';
    
};


//For secure login
$sessKey = md5($_SERVER['SERVER_ADDR'].' - '.$sName.'');
session_start();
session_name(''.$sessKey.'');
//error_reporting(E_ERROR | E_WARNING | E_PARSE);
//ini_set('display_errors', 0);

?>