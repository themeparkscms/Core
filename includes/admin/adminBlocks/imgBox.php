<div style="margin-bottom:30px;" class="col l3 m6 s12">

    <div style="height:150px;background:url('<?php echo ROOT; ?>images/uploads/<?php echo $gallery; ?>/<?php echo $img; ?>') top center no-repeat;background-size:cover;">

    </div>

    <div class="clearfix">&nbsp;</div>

    <button  class="modal-trigger btn"
                    data-toggle="modal" 
                    href="#edited-<?php echo $gallery; ?>-<?php echo $id; ?>">
        <i class="material-icons">mode_edit</i>
    </button>

    <button  class="modal-trigger btn" 
                    data-toggle="modal" 
                    href="#deleteLabel-<?php echo $gallery; ?>-<?php echo $id; ?>">
        <i class="material-icons">delete</i>
    </button>

</div>

<!-- Edit box -->
<div class="modal fade" id="edited-<?php echo $gallery; ?>-<?php echo $id; ?>" tabindex="-1" role="dialog" aria-labelledby="edited">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
           
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                    Edit - <?php echo substr(ucwords($img), 0,-4); ?>
                </h4>
            </div>
            
            <div class="modal-body">
                <form method="post" style="text-align:left;">                     
                        <input type="hidden" name="id" value="<?php echo $id; ?>">   
                        <input type="hidden" name="gal" value="<?php echo $gallery; ?>"> 
                        <input type="hidden" name="updated" value="Updated">                                                       
                     <div>        
                         <label for="title">Image Title</label>
                        <input type="text" id="title" name="title" value="<?php echo $title; ?>">
                     </div>
                     
                    <input type="submit" name="editedMeta" class="btn btn-default" value="Confirm" />
                    <a href="#!" class="btn modal-close">Cancel</a>
                </form>
                
                <br>
                <br>
            </div>
            
        </div>
    </div>
</div>
<!-- Edit box -->

<!-- Delete Modal -->
<div class="modal fade" id="deleteLabel-<?php echo $gallery; ?>-<?php echo $id; ?>" tabindex="-1" role="dialog" aria-labelledby="deleteLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">

                <h4 class="modal-title" id="myModalLabel">
                    Are you sure you want to delete - Id# <?php echo $id; ?>
                </h4>
            </div>
            <div class="modal-body">

                <form method="post" style="text-align:center;">

                    <input type="hidden" name="id" value="<?php echo $id; ?>">
                    <input type="hidden" name="gal" value="<?php echo $gallery; ?>">
                    <input type="hidden" name="imgDelete" value="<?php echo $img; ?>" />
                    <a href="#!" class="btn modal-close">Cancel</a>
                    <input type="submit" name="delete" class="btn btn-default" value="Delete" />

                </form>
                <br>
                <br>

            </div>
        </div>
    </div>
</div>
<!--Close Delete Modal-->