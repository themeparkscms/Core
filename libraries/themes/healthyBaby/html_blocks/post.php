<?php
$back = --$id;
?>

<div style="margin-bottom:20px;" class="bloggy">

    <div>
    
            <div class="col-md-8" style="padding-left:0;">  
                                 
                    <p style="text-align:left;">Posted - <i><?php echo $date; ?></i></p>
                
                <p style="height:auto;overflow:hidden;text-align:left;"><?php echo strip_tags($script); ?>...</p>
            
            </div>
        
                <div class="col-md-4 imgBox" style="overflow:hidden;height:auto;padding-right:0;">
                
                     <a href="<?php echo ROOT ?>apps/dropzone/upload/Posts/<?php echo $img;?>" rel="prettyPhoto"><img style="width:100%;" src="<?php echo ROOT; ?>apps/dropzone/upload/Posts/<?php if(!empty($img)){echo $img;}else{ echo 'image.png';} ?>" alt="<?php echo $img; ?>" style="width: 140px; height: 140px;" /></a><br>
                
                </div>
        
            <p>&nbsp;</p>
        
        <p style="text-align:right;">
        
            <p style="text-align:right;">
                <a class="btn btn-warning" href="<?php if($back == '0'){ echo 'News-All'; }else{ echo 'News-Post-'.$back.''; } ?>" role="button">&laquo; Previous Posts</a>
            </p>
        
        </p>
    
    </div>

</div>

        