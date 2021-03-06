<?php
/*=============================================
  
Block to call dynamic cms portion

<div id="_changeThis"{% echo $inline %}>
    {# newEE('changeThis') #}
</div>

=============================================*/
?>

<div class="cont">   

    <div class="fancyCont">
        <div class="container">
            <div class="row">

                <div id="_home1"{% echo $inline %}>

                    {# newEE('home1') #}

                </div>

            </div>
        </div>    
    </div>

    <div class="fancyCont">

        <div class="container">
            <div class="row">
                
                <div id="_home2"{% echo $inline %}>

                    {# newEE('home2') #}

                </div>
                
            </div>
        </div>

    </div>

    {# tpBlock('fancyish') #}

    <div class="fancyCont">

        <div class="container">
            <div class="row">
               
                <div id="_home3"{% echo $inline %}>

                    {# newEE('home3') #}

                </div>
               
            </div>
        </div>

    </div>

    <div class="fancyCont">

        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam repellendus voluptate eos dolorum sit quaerat esse, aperiam mollitia. Voluptas beatae sit dolore animi maiores quas neque a odit, reprehenderit, nam explicabo ipsum recusandae iste eius ut. Soluta, accusamus nobis.</p>

                </div>

                <div class="col-md-6">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ad ut at perferendis voluptatem. Provident magnam eum quaerat minima quis. Id voluptatibus quia esse cum obcaecati, tempore necessitatibus corporis architecto amet fugiat expedita doloribus, adipisci voluptates quas. Incidunt, ducimus, iure.</p>

                </div>

                <div class="clearfix">&nbsp;</div>

                <div class="col-md-2 col-sm-4">
                    <h3>Title01</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, tempora!</p>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h3>Title02</h3>
                    <p>At minima, maxime. Molestias voluptates, libero nisi, error reiciendis similique.</p>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h3>Title03</h3>
                    <p>Ipsam tempora, accusamus recusandae? Possimus eius fugiat et beatae delectus.</p>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h3>Title04</h3>
                    <p>Odio hic suscipit animi temporibus laudantium, officiis molestias, eius doloribus.</p>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h3>Title05</h3>
                    <p>Praesentium temporibus, sequi officiis aperiam commodi perferendis veritatis nemo iste?</p>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h3>Title06</h3>
                    <p>Ipsa reprehenderit eaque placeat magni saepe. Exercitationem neque tempore non.</p>
                </div>

                <div class="clearfix">&nbsp;</div>

                <div class="col-md-12">
                    <form class="form-group">
                       
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">Sign up today!</span>
                            <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>

    </div>

</div>
