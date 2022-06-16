import React, {Component} from 'react';
import "/frontend/static/css/blog.css"


function BlogPage () {
  
    return (
      <div className='background'>
                <div class="row">
    
                    <div class="column">
                        <div class="card stacked">
                            <img src='https://github.com/TheSPIDERshadow/Haem/blob/master/frontend/static/images/haem-09.jpg?raw=true' className="card_img"/>
                            <div class= "card_content">
                                <h4 class= "card_title"> Medical Supplies</h4>
                                <p class= "card_description">Health Technologies, Blood Safety, Organs, Tissues & Transplants (BST).</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card stacked">
                            <img src='https://github.com/TheSPIDERshadow/Haem/blob/master/frontend/static/images/haem-08.jpg?raw=true'className="card_img"/>
                            <div class= "card_content">
                                <h4 class= "card_title"> Clinical Vignette </h4>
                                <p class= "card_description">Gain access to clinical vignette-based interactive discussion sessions now.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

          </div>
    );

}

export default BlogPage

