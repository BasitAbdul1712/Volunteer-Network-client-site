import React from 'react';
import '../Home.css'

const TitleSearch = () => {
    return (

<div  style={{textAlign: 'center', padding: '40px'}} >
    <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
    
<div style={{width: '350px'}} class="input-group mx-auto mb-3">
  <input type="text" class="form-control" placeholder="Search" />
  <div class="input-group-append">
  <button type="button" class="btn btn-primary">Search</button>

  </div>
</div>
    
</div>
        

    );
};

export default TitleSearch;