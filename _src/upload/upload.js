$(document).ready( function() {  
  $('#upload').click(function(){
    doUpload();
  });  
  $('#uploadprogress').hide();
});

function doUpload()
{
  //STEP 2. create the iframe object
  var iframe;
  try {
    iframe = document.createElement('<iframe name="uploadiframe">');
  } catch (ex) {
    iframe = document.createElement('iframe');
    iframe.name='uploadiframe';
  }    
  iframe.src = 'javascript:false';  
  iframe.id = 'uploadiframe';
  iframe.className ='iframe';
  document.body.appendChild(iframe);
  // STEP 3. Redirect the form to iframe 
  $('#form').attr('target','uploadiframe');
  // STEP 4. Display the progress layer
  $('#uploadform').hide();
  $('#uploadprogress').show();
  //.STEP 5. Intercept the upload result
  $('#uploadiframe').load(function () {    
    $('#uploadprogress').hide();
    $('#uploadform').show();
    // STEP 6. Inform the user about the result
    var result = $('body', this.contentWindow.document).html();    
    if(result == 1)
      $('#result').html('The file upload was successful!');    
    else    
      $('#result').html('There was an error while uploading the file!');
    // STEP 7. Destroy the iframe
    setTimeout(function () {
      $('#uploadiframe').remove();
      }, 50);      
  });
}
