$(document).ready(function() {
  $('#uploader').submit(function(){
    $(this).ajaxSubmit({
      error: function(xhr) {
                  status('Error: ' + xhr.status);
          },

          success: function(response) {
                  console.log(response)
          }
    });
  });
});
