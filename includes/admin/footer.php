</div>
<!--Close Content Area-->


</div>
</div>
<!--Close Main Area-->
    <script> var cmsPath = <?php global $cmsPath; echo $cmsPath; ?>; </script>
    <?php tpCompile('js'); ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
    <script type="text/javascript" src="<?php echo ROOT;?>includes/admin/_ee/lib/ckeditor/ckeditor.js"></script>
    <script src="<?php echo ROOT; ?>includes/admin/_ee/editease.jquery.js" type="text/javascript"></script>
    <script>
        $(document).ready(function(){$("#loginform").editease(),$("#loginform").submit(function(){return doLogin(loginform)}),$(".gone").click(function(){$("ul li b").toggle(),$("div.wrap").delay(1e3).toggleClass("col-md-1 col-md-2"),$("div.container").toggleClass("col-md-11 col-md-10")}),$(".parallax").parallax(),$(".button-collapse").sideNav(),Materialize.updateTextFields(),$("select").material_select(),$(".modal-trigger").leanModal(),$(".datepicker").pickadate({selectMonths:!0,selectYears:15})});
        $(document).ready(function() {
            $('#imgChoice').change(function () {

                var imp = $(this).val();

                $('.hid').hide();
                $('#' + imp).show();

            });
        });
    </script>

    </body>

    </html>