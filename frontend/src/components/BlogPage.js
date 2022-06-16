import React, {Component} from 'react';
import "/frontend/static/css/blog.css"


function BlogPage () {
  
    return (
      <div className='background'>
                <div class="row">
    
                    <div class="column">
                        <div class="card stacked">
                            <img src='https://github.com/TheSPIDERshadow/Haem/blob/master/frontend/static/images/blood-06.jpg?raw=true' className="card_img"/>
                            <div class= "card_content">
                                <h4 class= "card_title"> Medical Supplies</h4>
                                <p class= "card_description">Order supplies today </p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card stacked">
                            <img src='https://github.com/TheSPIDERshadow/Haem/blob/master/frontend/static/images/blood-06.jpg?raw=true'className="card_img"/>
                            <div class= "card_content">
                                <h4 class= "card_title"> Clinical Vignette </h4>
                                <p class= "description">Discuss cases today </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

          </div>
    );

}

export default BlogPage

