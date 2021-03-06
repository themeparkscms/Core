
<div class="col s12">
    <?php tpAdmin('postBtn'); ?>
</div>

<!-- Attached Image -->
<div class="col l3 m6 s12">
   
    <div class="card-panel" style="padding:24px 0;">
        <ul>

            <li><a style="padding:15px;width:100%;" 
                   class="grey-text waves-effect waves-white" 
                   href="tp-Posts-1">Back to all Posts</a></li>

            <li><a style="padding:15px;width:100%;" 
                   class="grey-text waves-effect waves-white" 
                   href="tp-Dashboard">Back to Dashboard</a></li>
                   
            <li><a style="padding:15px;width:100%;" 
                   class="grey-text waves-effect waves-white" 
                   href="<?php echo ROOT.'blog/'.$id.'/'; ?>">View Post</a></li>

        </ul>
    </div>
   
    <div class="card-panel">
        <strong>Attached Image</strong>
        <hr>
        <br>
        <img style="width:100%;border:2px solid black;float:right;" src="<?php echo ROOT; ?>images/files/<?php if(!empty($img)){echo $img;}else{ echo 'image.png'; } ?>" />
        <div class="clearfix"></div>
    </div>
</div>
<!-- ./Attached Image -->

<!-- Form -->
<form class="form col l9 m6 s12" method="post" style="">
    <div class="card-panel">
        <input type="hidden" name="id" value="<?php echo $id; ?>">

        <div class="form-group">
            <label for="title">Title:</label>
            <br>
            <input class="form-control col-md-12" type="text" name="title" id="title" value="<?php echo $title; ?>">
            <br>
            <br>
        </div>

        <div style="margin-bottom:20px;" class="form-group">

            <label>Post:</label>
            <textarea class="materialize-textarea form-control col-md-12 ckeditor" id="post" rows="5" name="post" value=""><?php echo $script; ?></textarea>

        </div>

        <div class="form-group">
            <label>
                <br>Image:</label>
            <br>
            <select class="form-control col-md-12" name="img">
                <option value="">Select</option>
                <?php

                $directory = 'images/files/';
                $blocks = 'img_select';
                $other = ''.$img.'';
                tpDirect($directory,$blocks,$other);

                ?>
            </select>
            <br>
            <br>
        </div>

        <div class="form-group">

            <label for="cap">Image Caption</label>
            <input type="text" class="form-control" name="cap" id="cap" value="<?php if($imgCap == 'false'){ echo ''; }else{ echo $imgCap; }  ?>" />

        </div>

        <div class="form-group">
            <label>Date:</label>
            <br>
            <input type="hidden" name="update" value="<?php echo(date(" Y-m-d ")); ?>">
            <input class="form-control col-md-12 datepicker"  name="date" value="<?php echo $date; ?>">
            <br>
            <br>
        </div>

        <input type="submit" name="edited" class="btn btn-default" value="Edit" />
    </div>
</form>
<!-- ./Form -->