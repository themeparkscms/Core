<?php global $sName; ?>
{# $sorted = false #}
{# $sessKey = md5($_SERVER['SERVER_ADDR'].' - '.$sName.'') #}

{-- if isset($_SESSION[$sessKey]) --}
    {# $sorted = "sortable" #}
{-- endif --}

<!--Open Cont area-->

<div class="container">

    <div class="row my-5">
        <div class="col-md-12 wow slideInLeft" data-wow-delay="0.02s">
                <h1>
                   {# $query = 'SELECT * FROM `gallery` WHERE `Gallery` LIKE \''.title(2).'\'' #}
                    {# $block = 'title' #}
                    {# $images2 = new model() #}
                    {# $images2->query($query,$block) #}
                </h1>
            <hr>
        </div>
    </div>            


    {-- if (isset($_SESSION[''.$sessKey.''])) --}
        <ul class="wow fadeIn" data-wow-delay="0.02s" id="{% echo $sorted %}">
    {-- else --}
        <ul class="wow fadeIn" data-wow-delay="0.02s">
    {-- endif --}
            {# $query = 'SELECT * FROM `images` WHERE `Album` LIKE \''.title(2).'\' ORDER BY `images`.`Order` ASC ' #}
            {# $block = 'galleryImage' #}
            {# $images = new model() #}
            {# $images->query($query,$block) #}
        </ul>
        
</div>
<div class="clearfix"></div>
<!--Close Cont area-->